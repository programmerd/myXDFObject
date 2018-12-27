var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var demo;
(function (demo) {
    var DrawLine = (function (_super) {
        __extends(DrawLine, _super);
        function DrawLine(startPoint, endPoint, duration) {
            var _this = _super.call(this) || this;
            _this._delay = 100;
            /**初始开始时间 */
            _this._initStartTime = -1;
            /**间隔开始时间 */
            _this._delayStartTime = -1;
            _this._startPoint = startPoint;
            _this._endPoint = endPoint;
            _this._duration = duration;
            return _this;
        }
        Object.defineProperty(DrawLine.prototype, "distance", {
            get: function () {
                if (isNaN(this._distance)) {
                    this._distance = Math.floor(egret.Point.distance(this._startPoint, this._endPoint));
                }
                return this._distance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DrawLine.prototype, "duration", {
            set: function (value) {
                this._duration = value;
            },
            enumerable: true,
            configurable: true
        });
        DrawLine.prototype.start = function () {
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        };
        DrawLine.prototype.onEnterFrame = function (event) {
            var currentTime = egret.getTimer();
            if (this._delayStartTime < 0) {
                this._delayStartTime = currentTime;
                this._initStartTime = currentTime;
            }
            else {
                var interval = currentTime - this._delayStartTime;
                if (interval > this._delay) {
                    this._delayStartTime = currentTime - (interval - this._delay);
                    var costTime = currentTime - this._initStartTime;
                    if (costTime > this._duration) {
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                        this._lineToPoint = this._endPoint;
                        this.dispatchEvent(new egret.Event(DrawLine.TWEEN_COMPLETE));
                    }
                    else {
                        var percent = costTime / this._duration;
                        this._lineToPoint = egret.Point.interpolate(this._endPoint, this._startPoint, percent);
                    }
                    this.draw();
                }
            }
        };
        DrawLine.prototype.draw = function () {
            this.graphics.clear();
            this.graphics.lineStyle(4, 0xffffff, 1, true);
            this.graphics.moveTo(this._startPoint.x, this._startPoint.y);
            this.graphics.lineTo(this._lineToPoint.x, this._lineToPoint.y);
        };
        /**缓动完成 */
        DrawLine.TWEEN_COMPLETE = "tweenComplete";
        return DrawLine;
    }(egret.Shape));
    demo.DrawLine = DrawLine;
    __reflect(DrawLine.prototype, "demo.DrawLine");
})(demo || (demo = {}));
