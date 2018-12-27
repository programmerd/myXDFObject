module demo {
	export class DrawLine extends egret.Shape {
		/**缓动完成 */
		public static TWEEN_COMPLETE: string = "tweenComplete";

		private _delay: number = 100;

		private _startPoint: Point;
		private _endPoint: Point;
		private _duration: number;
		public constructor(startPoint: Point, endPoint: Point, duration: number) {
			super();
			this._startPoint = startPoint;
			this._endPoint = endPoint;
			this._duration = duration;
		}

		private _distance: number;
		public get distance(): number {
			if (isNaN(this._distance)) {
				this._distance = Math.floor(egret.Point.distance(this._startPoint, this._endPoint));
			}
			return this._distance;
		}

		public set duration(value: number) {
			this._duration = value;
		}

		public start(): void {
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}

		/**初始开始时间 */
		private _initStartTime: number = -1;
		/**间隔开始时间 */
		private _delayStartTime: number = -1;
		/**line to 点 */
		private _lineToPoint: Point;
		private onEnterFrame(event: egret.Event): void {
			let currentTime: number = egret.getTimer();
			if (this._delayStartTime < 0) {
				this._delayStartTime = currentTime;
				this._initStartTime = currentTime;
			} else {
				let interval: number = currentTime - this._delayStartTime;
				if (interval > this._delay) {
					this._delayStartTime = currentTime - (interval - this._delay);

					let costTime: number = currentTime - this._initStartTime;
					if (costTime > this._duration) {
						this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
						this._lineToPoint = this._endPoint;
						this.dispatchEvent(new egret.Event(DrawLine.TWEEN_COMPLETE));
					} else {
						let percent: number = costTime / this._duration;
						this._lineToPoint = egret.Point.interpolate(this._endPoint, this._startPoint, percent);
					}
					this.draw();
				}
			}
		}

		private draw(): void {
			this.graphics.clear();
			this.graphics.lineStyle(4, 0xffffff, 1, true);
			this.graphics.moveTo(this._startPoint.x, this._startPoint.y);
			this.graphics.lineTo(this._lineToPoint.x, this._lineToPoint.y);
		}
	}
}