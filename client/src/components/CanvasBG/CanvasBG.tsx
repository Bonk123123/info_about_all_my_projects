import React from 'react';
import BG from './BG';

const CanvasBG = React.memo(() => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const bg = new BG({
            canvas: canvas,
            dotsCount: 100,
            sideSize: 2,
        });

        bg.start();
    }, []);
    return <canvas className="absolute w-full h-full" ref={canvasRef}></canvas>;
});

export default CanvasBG;
