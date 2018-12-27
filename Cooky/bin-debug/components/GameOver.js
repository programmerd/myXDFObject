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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this.systemArr = [];
        _this.systemArr = [];
        return _this;
    }
    GameOver.prototype.start = function (texture, config) {
        this.texture = texture;
        this.config = config;
        var system = new particle.GravityParticleSystem(this.texture, this.config);
        this.addChild(system);
        this.systemArr.push(system);
    };
    GameOver.prototype.stop = function () {
        this.systemArr.map(function (item) {
            item.stop();
        });
    };
    GameOver.prototype.play = function () {
        this.systemArr.map(function (item) {
            item.start();
        });
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver");
