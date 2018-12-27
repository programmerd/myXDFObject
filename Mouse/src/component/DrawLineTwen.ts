module demo {
	export class DrawLineTwen extends egret.Sprite {
		/**完成画线缓动 */
		public static DRAW_LINE_COMPLETE: string = "drawLineComplete";
		private _drawLines: DrawLine[];
		private _currentIndex: number;
		/**开始缓动绘制直线
		 * points(string[])直线两端的点，点由"x,y"格式传递
		 * isSerial(boolean)是否为相连的直线
		 * duration(any)缓动时间，当为number时，为总时间，若为数组时，为每段的缓动时间，时间单位为秒
		 */
		public constructor(points: string[], isSerial: boolean = true, duration: any = 3) {
			super();
			this._drawLines = [];

			let parsePoints: Point[] = this.parse2Points(points);
			let psize: number = parsePoints.length;
			let totalDistance: number = 0;
			for (let i: number = 0; i < psize - 1; i++) {
				let p0: Point = parsePoints[i];
				let p1: Point = parsePoints[i + 1];
				let dl: DrawLine = new DrawLine(p0, p1, 0);
				dl.addEventListener(DrawLine.TWEEN_COMPLETE, this.onTweenComplete, this);
				this.addChild(dl);
				this._drawLines.push(dl);
				totalDistance += dl.distance;
				if (!isSerial) i++;
			}

			let dlsize: number = this._drawLines.length;
			let durations: number[] = [];
			let durationType: string = typeof duration;
			if (durationType == "number") {
				//为总时
				let totalDuration: number = duration * 1000;
				let perDistanceDuration: number = totalDuration / totalDistance;
				for (let i: number = 0; i < dlsize; i++) {
					durations[i] = Math.floor(perDistanceDuration * this._drawLines[i].distance);
				}
			} else if (durationType == "array") {
				//为各段时间
				durations = duration;
				if (durations.length != dlsize) throw new Error("给定的缓动时间列表长度与直线列表长度不一致！");
			}
			for (let i: number = 0; i < dlsize; i++) {
				this._drawLines[i].duration = durations[i];
			}
		}

		private parse2Points(points: string[]): Point[] {
			let list: Point[] = [];
			let psize: number = points.length;
			for (let i: number = 0; i < psize; i++) {
				let pSpit: string[] = points[i].split(",");
				let p: Point = new Point(parseInt(pSpit[0]), parseInt(pSpit[1]));
				list.push(p);
			}
			return list;
		}

		private onTweenComplete(event: egret.Event): void {
			//动效完成
			this._currentIndex++;
			if (this._currentIndex < this._drawLines.length) {
				this.startCurrentDrawLine();
			}
		}

		private startCurrentDrawLine(): void {
			this._drawLines[this._currentIndex].start();
		}

		public start(): void {
			this._currentIndex = 0;
			this.startCurrentDrawLine();
		}
	}
}