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
var Transformers = (function (_super) {
    __extends(Transformers, _super);
    function Transformers(KingKong, i) {
        var _this = _super.call(this) || this;
        _this.mylist = new eui.List();
        _this.myGroup = new eui.DataGroup();
        _this.skinName = "TransformersSkin";
        _this.KingKong = KingKong;
        _this.count = i;
        return _this;
    }
    Transformers.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Transformers.prototype.childrenCreated = function () {
        this.myScroller.addEventListener(eui.UIEvent.CHANGE_START, this.scrollerWidth2, this);
        this.myScroller.addEventListener(eui.UIEvent.CHANGE_END, this.scrollerWidth, this);
        // this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickBtn, this);
        this.myScroller.verticalScrollBar.autoVisibility = false;
        this.myScroller.verticalScrollBar.visible = false;
        var exml = "\n\t\t<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\t\t\t<e:Skin class=\"MyList\" width=\"60\" height=\"60\" xmlns:e=\"http://ns.egret.com/eui\">\n\t\t\t<e:Label text=\"{data}\" x=\"0\" y=\"0\"  anchorOffsetX=\"0\" width=\"60\" anchorOffsetY=\"0\" height=\"60\" verticalAlign=\"middle\" textAlign=\"center\" size=\"45\" bold=\"true\" textColor=\"0xB8FEFC\" fontFamily=\"fz\"/>\n\t\t</e:Skin>";
        this.List = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        _super.prototype.childrenCreated.call(this);
        this.mylist.dataProvider = new eui.ArrayCollection(this.List);
        this.listGroup.addChild(this.mylist);
        this.mylist.itemRendererSkinName = exml;
    };
    Transformers.prototype.scrollerWidth2 = function () {
        this.KingKong.bx_transition.play(0, 1);
        if (this.KingKong.cursorTop) {
            this.KingKong.removeChild(this.KingKong.cursor);
            this.KingKong.cursorTop = false;
        }
    };
    Transformers.prototype.scrollerWidth = function (e) {
        // console.log(this.myScroller.viewport.scrollV)
        // console.log(this.listGroup.height)
        var itemHieght = this.listGroup.height;
        var scrollPosition = Math.round(this.myScroller.viewport.scrollV / this.listGroup.height);
        this.KingKong.switchResult[this.count] = scrollPosition;
        // console.log(this.KingKong.switchResult)
        this.myScroller.viewport.scrollV = scrollPosition * itemHieght;
        return scrollPosition;
    };
    return Transformers;
}(eui.Component));
__reflect(Transformers.prototype, "Transformers", ["eui.UIComponent", "egret.DisplayObject"]);
var LabelRenderer = (function (_super) {
    __extends(LabelRenderer, _super);
    function LabelRenderer() {
        var _this = _super.call(this) || this;
        _this.touchChildren = true;
        _this.labelDisplay = new eui.Label();
        _this.addChild(_this.labelDisplay);
        return _this;
    }
    LabelRenderer.prototype.dataChanged = function () {
        // console.log(this.data)
        this.labelDisplay.height = 60;
        this.labelDisplay.text = this.data;
    };
    return LabelRenderer;
}(eui.ItemRenderer));
__reflect(LabelRenderer.prototype, "LabelRenderer");
//# sourceMappingURL=Transformers.js.map