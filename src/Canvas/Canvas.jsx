import { useRef, useEffect } from 'react';

function Canvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    ctx.fillStyle = '#ff0000';
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}

export default Canvas;
