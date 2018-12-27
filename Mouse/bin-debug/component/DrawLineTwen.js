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
    var DrawLineTwen = (function (_super) {
        __extends(DrawLineTwen, _super);
        /**开始缓动绘制直线
         * points(string[])直线两端的点，点由"x,y"格式传递
         * isSerial(boolean)是否为相连的直线
         * duration(any)缓动时间，当为number时，为总时间，若为数组时，为每段的缓动时间，时间单位为秒
         */
        function DrawLineTwen(points, isSerial, duration) {
            if (isSerial === void 0) { isSerial = true; }
            if (duration === void 0) { duration = 3; }
            var _this = _super.call(this) || this;
            _this._drawLines = [];
            var parsePoints = _this.parse2Points(points);
            var psize = parsePoints.length;
            var totalDistance = 0;
            for (var i = 0; i < psize - 1; i++) {
                var p0 = parsePoints[i];
                var p1 = parsePoints[i + 1];
                var dl = new demo.DrawLine(p0, p1, 0);
                dl.addEventListener(demo.DrawLine.TWEEN_COMPLETE, _this.onTweenComplete, _this);
                _this.addChild(dl);
                _this._drawLines.push(dl);
                totalDistance += dl.distance;
                if (!isSerial)
                    i++;
            }
            var dlsize = _this._drawLines.length;
            var durations = [];
            var durationType = typeof duration;
            if (durationType == "number") {
                //为总时
                var totalDuration = duration * 1000;
                var perDistanceDuration = totalDuration / totalDistance;
                for (var i = 0; i < dlsize; i++) {
                    durations[i] = Math.floor(perDistanceDuration * _this._drawLines[i].distance);
                }
            }
            else if (durationType == "array") {
                //为各段时间
                durations = duration;
                if (durations.length != dlsize)
                    throw new Error("给定的缓动时间列表长度与直线列表长度不一致！");
            }
            for (var i = 0; i < dlsize; i++) {
                _this._drawLines[i].duration = durations[i];
            }
            return _this;
        }
        DrawLineTwen.prototype.parse2Points = function (points) {
            var list = [];
            var psize = points.length;
            for (var i = 0; i < psize; i++) {
                var pSpit = points[i].split(",");
                var p = new demo.Point(parseInt(pSpit[0]), parseInt(pSpit[1]));
                list.push(p);
            }
            return list;
        };
        DrawLineTwen.prototype.onTweenComplete = function (event) {
            //动效完成
            this._currentIndex++;
            if (this._currentIndex < this._drawLines.length) {
                this.startCurrentDrawLine();
            }
        };
        DrawLineTwen.prototype.startCurrentDrawLine = function () {
            this._drawLines[this._currentIndex].start();
        };
        DrawLineTwen.prototype.start = function () {
            this._currentIndex = 0;
            this.startCurrentDrawLine();
        };
        /**完成画线缓动 */
        DrawLineTwen.DRAW_LINE_COMPLETE = "drawLineComplete";
        return DrawLineTwen;
    }(egret.Sprite));
    demo.DrawLineTwen = DrawLineTwen;
    __reflect(DrawLineTwen.prototype, "demo.DrawLineTwen");
})(demo || (demo = {}));
