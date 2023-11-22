interface vector {
    x: number;
    y: number;
    vx: number;
}

export default class BG {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private dots: vector[];
    private sideSize: number;

    constructor(parameters: {
        canvas: HTMLCanvasElement;
        dotsCount: number;
        sideSize: number;
    }) {
        this.sideSize = parameters.sideSize;
        this.canvas = parameters.canvas;
        this.dots = [];

        this.ctx = this.canvas.getContext(
            '2d'
        ) as unknown as CanvasRenderingContext2D;

        this.canvas.width = 2560;
        this.canvas.height = 1440;

        this.ctx.fillStyle = 'white';

        for (let i = 0; i < parameters.dotsCount; i++) {
            this.dots.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: Math.random() * 1.5 + 0.1,
            });
        }
    }

    private draw() {
        const ratio_x = this.canvas.width / this.canvas.clientWidth;
        const ratio_y = this.canvas.height / this.canvas.clientHeight;
        this.dots.forEach((dot) => {
            this.ctx.fillRect(
                dot.x,
                dot.y,
                this.sideSize * (dot.vx + 0.3) * ratio_x,
                this.sideSize * (dot.vx + 0.3) * ratio_y
            );
        });
    }

    private move() {
        for (let i = 0; i < this.dots.length; i++) {
            if (this.dots[i].x >= this.canvas.width) {
                this.dots[i].x = 0;
            } else {
                this.dots[i].x += this.dots[i].vx;
            }
        }
    }

    start() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw();
        this.move();

        requestAnimationFrame(() => this.start());
    }
}
