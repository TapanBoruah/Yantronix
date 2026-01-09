import { useEffect, useRef } from "react";

export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes = [];
    const lines = [];
    const NODE_COUNT = 60;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      });
    }

    nodes.forEach((n1) => {
      const n2 = nodes[Math.floor(Math.random() * nodes.length)];
      lines.push({
        from: n1,
        to: n2,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
      });
    });

    function animate() {
      ctx.fillStyle = "#05070a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(0,255,200,0.15)";
      ctx.lineWidth = 1;

      lines.forEach((l) => {
        ctx.beginPath();
        ctx.moveTo(l.from.x, l.from.y);
        ctx.lineTo(l.to.x, l.to.y);
        ctx.stroke();

        const px =
          l.from.x + (l.to.x - l.from.x) * l.progress;
        const py =
          l.from.y + (l.to.y - l.from.y) * l.progress;

        ctx.fillStyle = "rgba(0,255,200,0.9)";
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();

        l.progress += l.speed;
        if (l.progress > 1) l.progress = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-screen"
    />
  );
}
