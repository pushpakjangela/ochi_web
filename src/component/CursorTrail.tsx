import { Component, createRef } from "react";

class Point {
  x: number;
  y: number;
  lifetime: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.lifetime = 0;
  }
}

interface CursortrailState {
  cHeight: number;
  cWidth: number;
}

class Cursortrail extends Component<{}, CursortrailState> {
  state: CursortrailState = {
    cHeight: 0,
    cWidth: 0,
  };

  Cursortrail = createRef<HTMLCanvasElement>();

  componentDidMount() {
    this.setState({
      cHeight: document.body.clientHeight,
      cWidth: document.body.clientWidth,
    });

    window.addEventListener("resize", this.handleResize);

    if (matchMedia("(pointer:fine)").matches) {
      this.startAnimation();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      cHeight: document.body.clientHeight,
      cWidth: document.body.clientWidth,
    });
  };

  startAnimation = () => {
    const canvas = this.Cursortrail.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points: Point[] = [];

    const addPoint = (x: number, y: number) => {
      points.push(new Point(x, y));
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      addPoint(e.clientX - rect.left, e.clientY - rect.top);
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    const animatePoints = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const duration = (0.7 * 1000) / 60;

      for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        const lastPoint = points[i - 1] || point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          points.shift();
          i--;
        } else {
          const lifePercent = point.lifetime / duration;
          const spreadRate = 7 * (1 - lifePercent);

          ctx.lineJoin = "round";
          ctx.lineWidth = spreadRate;

          const red = Math.floor(190 - 190 * lifePercent);
          const green = 0;
          const blue = Math.floor(210 + 210 * lifePercent);
          ctx.strokeStyle = `rgb(${red},${green},${blue})`;

          ctx.beginPath();
          ctx.moveTo(lastPoint.x, lastPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
          ctx.closePath();
        }
      }

      requestAnimationFrame(animatePoints);
    };

    animatePoints();
  };

  render() {
    const { cHeight, cWidth } = this.state;
    return (
      <canvas
        ref={this.Cursortrail}
        className="cursor-trail"
        width={cWidth}
        height={cHeight}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
    );
  }
}

export default Cursortrail;
