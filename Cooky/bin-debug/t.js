var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对外提供调用龙骨动画方法
 */
var t = (function () {
    function t() {
        this.boole = true;
        this.egretFactory = dragonBones.EgretFactory.factory;
    }
    //对外提供
    t.prototype.gugedonghua = function (ske_json, tex_json, tex_png, component, donghua_name, dongzuo_name, x, y) {
        this.ske_json_dragonbonesData = RES.getRes(ske_json);
        this.tex_json_textureData = RES.getRes(tex_json);
        this.tex_png_texture = RES.getRes(tex_png);
        this.egretFactory.parseDragonBonesData(this.ske_json_dragonbonesData);
        this.egretFactory.parseTextureAtlasData(this.tex_json_textureData, this.tex_png_texture);
        var armature = this.egretFactory.buildArmature(donghua_name);
        var armatureDisplay = armature.getDisplay();
        component.addChild(armatureDisplay);
        if (x != null) {
            armatureDisplay.x = x;
        }
        if (y != null) {
            armatureDisplay.y = y;
        }
        armature.animation.play(dongzuo_name);
        dragonBones.WorldClock.clock.add(armature);
        if (this.boole == true) {
            component.addEventListener(egret.Event.ENTER_FRAME, function () {
                dragonBones.WorldClock.clock.advanceTime(0.03);
            }, this);
        }
        this.boole = false;
        return armatureDisplay;
    };
    return t;
}());
__reflect(t.prototype, "t");
