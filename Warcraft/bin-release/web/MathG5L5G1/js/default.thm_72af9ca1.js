window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Warcraft":"resource/eui_skins/Warcraft.exml","Keyset":"resource/eui_skins/component/Keyset.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/component/Keyset.exml'] = window.KeysetSkin = (function (_super) {
	__extends(KeysetSkin, _super);
	var KeysetSkin$Skin1 = 	(function (_super) {
		__extends(KeysetSkin$Skin1, _super);
		function KeysetSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = KeysetSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "keyset-revise_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return KeysetSkin$Skin1;
	})(eui.Skin);

	var KeysetSkin$Skin2 = 	(function (_super) {
		__extends(KeysetSkin$Skin2, _super);
		function KeysetSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = KeysetSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ok_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return KeysetSkin$Skin2;
	})(eui.Skin);

	function KeysetSkin() {
		_super.call(this);
		this.skinParts = ["RectBj","keyRevise","keyOk","key0","key1","key2","key3","key4","key5","key6","key7","key8","key9","keySetGroup"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.RectBj_i(),this.keySetGroup_i()];
	}
	var _proto = KeysetSkin.prototype;

	_proto.RectBj_i = function () {
		var t = new eui.Rect();
		this.RectBj = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0xffffff;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.keySetGroup_i = function () {
		var t = new eui.Group();
		this.keySetGroup = t;
		t.x = 96;
		t.y = 62;
		t.elementsContent = [this._Image1_i(),this.keyRevise_i(),this.keyOk_i(),this.key0_i(),this.key1_i(),this.key2_i(),this.key3_i(),this.key4_i(),this.key5_i(),this.key6_i(),this.key7_i(),this.key8_i(),this.key9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "keyset-mask_png";
		t.width = 502;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.keyRevise_i = function () {
		var t = new eui.Button();
		this.keyRevise = t;
		t.label = "";
		t.x = 133;
		t.y = 216;
		t.skinName = KeysetSkin$Skin1;
		return t;
	};
	_proto.keyOk_i = function () {
		var t = new eui.Button();
		this.keyOk = t;
		t.label = "";
		t.x = 221;
		t.y = 217;
		t.skinName = KeysetSkin$Skin2;
		return t;
	};
	_proto.key0_i = function () {
		var t = new eui.Image();
		this.key0 = t;
		t.source = "key0_png";
		t.x = 388.3;
		t.y = 120;
		return t;
	};
	_proto.key1_i = function () {
		var t = new eui.Image();
		this.key1 = t;
		t.source = "key1_png";
		t.x = 24.5;
		t.y = 27;
		return t;
	};
	_proto.key2_i = function () {
		var t = new eui.Image();
		this.key2 = t;
		t.source = "key2_png";
		t.x = 113.95;
		t.y = 26;
		return t;
	};
	_proto.key3_i = function () {
		var t = new eui.Image();
		this.key3 = t;
		t.source = "key3_png";
		t.x = 205.5;
		t.y = 26;
		return t;
	};
	_proto.key4_i = function () {
		var t = new eui.Image();
		this.key4 = t;
		t.source = "key4_png";
		t.x = 296.25;
		t.y = 27;
		return t;
	};
	_proto.key5_i = function () {
		var t = new eui.Image();
		this.key5 = t;
		t.source = "key5_png";
		t.x = 388.3;
		t.y = 26;
		return t;
	};
	_proto.key6_i = function () {
		var t = new eui.Image();
		this.key6 = t;
		t.source = "key6_png";
		t.x = 21.5;
		t.y = 121;
		return t;
	};
	_proto.key7_i = function () {
		var t = new eui.Image();
		this.key7 = t;
		t.source = "key7_png";
		t.x = 114.5;
		t.y = 120;
		return t;
	};
	_proto.key8_i = function () {
		var t = new eui.Image();
		this.key8 = t;
		t.source = "key8_png";
		t.x = 206;
		t.y = 121;
		return t;
	};
	_proto.key9_i = function () {
		var t = new eui.Image();
		this.key9 = t;
		t.source = "key9_png";
		t.x = 297.5;
		t.y = 120;
		return t;
	};
	return KeysetSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Warcraft.exml'] = window.WarcraftSkin = (function (_super) {
	__extends(WarcraftSkin, _super);
	var WarcraftSkin$Skin3 = 	(function (_super) {
		__extends(WarcraftSkin$Skin3, _super);
		function WarcraftSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WarcraftSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "fire_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WarcraftSkin$Skin3;
	})(eui.Skin);

	function WarcraftSkin() {
		_super.call(this);
		this.skinParts = ["doudong","aida","outGo","tipAsk","music","revise","bj","ordnance","clickFire","dapao","subject","subjectMax","subjectMin","timu","energyGroup","fashe","warcraftGroup","write1","write2","write3","write","gameOverMask","gameOver","subTip","clickStart","endStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.doudong_i();
		this.aida_i();
		this.outGo_i();
		this.elementsContent = [this.bj_i(),this.dapao_i(),this.timu_i(),this.energyGroup_i(),this.fashe_i(),this.warcraftGroup_i(),this.write_i(),this.gameOver_i(),this.subTip_i(),this.endStart_i()];
		
		eui.Binding.$bindProperties(this, ["warcraftGroup"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [1834],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [1586],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["dapao"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [3],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-3],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
		eui.Binding.$bindProperties(this, [3],[],this._Object7,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"rotation");
		eui.Binding.$bindProperties(this, [-3],[],this._Object9,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"rotation");
		eui.Binding.$bindProperties(this, [3],[],this._Object11,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"rotation");
		eui.Binding.$bindProperties(this, ["warcraftGroup"],[0],this._TweenItem3,"target");
	}
	var _proto = WarcraftSkin.prototype;

	_proto.doudong_i = function () {
		var t = new egret.tween.TweenGroup();
		this.doudong = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.aida_i = function () {
		var t = new egret.tween.TweenGroup();
		this.aida = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.outGo_i = function () {
		var t = new egret.tween.TweenGroup();
		this.outGo = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._To13_i()];
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		return t;
	};
	_proto.bj_i = function () {
		var t = new eui.Group();
		this.bj = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.tipAsk_i(),this.music_i(),this.revise_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bj_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipAsk_i = function () {
		var t = new eui.Image();
		this.tipAsk = t;
		t.source = "subject_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1748;
		t.y = 24.5;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Image();
		this.revise = t;
		t.source = "revise_png";
		t.x = 1616;
		t.y = 24.5;
		return t;
	};
	_proto.dapao_i = function () {
		var t = new eui.Group();
		this.dapao = t;
		t.anchorOffsetX = 422;
		t.anchorOffsetY = 197;
		t.x = 586;
		t.y = 540;
		t.elementsContent = [this.ordnance_i(),this.clickFire_i()];
		return t;
	};
	_proto.ordnance_i = function () {
		var t = new eui.Image();
		this.ordnance = t;
		t.source = "ordnance_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.clickFire_i = function () {
		var t = new eui.Button();
		this.clickFire = t;
		t.label = "";
		t.x = 317.5;
		t.y = 117;
		t.skinName = WarcraftSkin$Skin3;
		return t;
	};
	_proto.timu_i = function () {
		var t = new eui.Group();
		this.timu = t;
		t.x = 0;
		t.y = 880;
		t.elementsContent = [this.subject_i(),this.subjectMax_i(),this.subjectMin_i()];
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "subject3_png";
		t.x = 588;
		t.y = 0;
		return t;
	};
	_proto.subjectMax_i = function () {
		var t = new eui.Image();
		this.subjectMax = t;
		t.source = "resultMax1_png";
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto.subjectMin_i = function () {
		var t = new eui.Image();
		this.subjectMin = t;
		t.source = "resultMin1_png";
		t.x = 1318.5;
		t.y = 15;
		return t;
	};
	_proto.energyGroup_i = function () {
		var t = new eui.Group();
		this.energyGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 172;
		t.y = 528;
		return t;
	};
	_proto.fashe_i = function () {
		var t = new eui.Group();
		this.fashe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.width = 820;
		t.x = 996;
		t.y = 510;
		return t;
	};
	_proto.warcraftGroup_i = function () {
		var t = new eui.Group();
		this.warcraftGroup = t;
		t.anchorOffsetX = 330;
		t.anchorOffsetY = 366;
		t.height = 732;
		t.width = 660;
		t.x = 1586;
		t.y = 518;
		return t;
	};
	_proto.write_i = function () {
		var t = new eui.Group();
		this.write = t;
		t.x = 0;
		t.y = 914.79;
		t.elementsContent = [this.write1_i(),this.write2_i(),this.write3_i()];
		return t;
	};
	_proto.write1_i = function () {
		var t = new eui.Group();
		this.write1 = t;
		t.anchorOffsetX = 0.67;
		t.anchorOffsetY = 0.33;
		t.height = 163.99;
		t.visible = false;
		t.width = 1917;
		t.x = 0.84;
		t.y = 0.71;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 190.66;
		t.y = 97.99;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 306.51;
		t.y = 79.99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 401.67;
		t.y = 80.66;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1589.5;
		t.y = 84.49;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1675.49;
		t.y = 59.61;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1764.16;
		t.y = 26;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1764.15;
		t.y = 83.96;
		return t;
	};
	_proto.write2_i = function () {
		var t = new eui.Group();
		this.write2 = t;
		t.anchorOffsetX = 0.67;
		t.anchorOffsetY = 0.33;
		t.height = 163.99;
		t.visible = false;
		t.width = 1917;
		t.x = 0.84;
		t.y = 0.66;
		t.elementsContent = [this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 190.66;
		t.y = 97.99;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 306.51;
		t.y = 79.99;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 401.67;
		t.y = 81.33;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1588.83;
		t.y = 85.16;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1675.49;
		t.y = 59.71;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1764.15;
		t.y = 25.34;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1764.15;
		t.y = 84.63;
		return t;
	};
	_proto.write3_i = function () {
		var t = new eui.Group();
		this.write3 = t;
		t.anchorOffsetX = 0.67;
		t.anchorOffsetY = 0.33;
		t.height = 163.99;
		t.visible = false;
		t.width = 1917;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i(),this._Label26_i()];
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 38;
		t.size = 20;
		t.text = "153";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 41.33;
		t.x = 148.83;
		t.y = 105.66;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 37.33;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 39.33;
		t.x = 223;
		t.y = 89.84;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 36.67;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 40.67;
		t.x = 296.84;
		t.y = 50.52;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 36.67;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 40.67;
		t.x = 295.5;
		t.y = 106.32;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 36.67;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 40.67;
		t.x = 367.33;
		t.y = 89.84;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 36.67;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 40.67;
		t.x = 417.32;
		t.y = 49.82;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 36.67;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 40.67;
		t.x = 417.32;
		t.y = 103.64;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1556.16;
		t.y = 85.83;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1632.83;
		t.y = 72.2;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1722.33;
		t.y = 28.82;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1723;
		t.y = 87.16;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xEF0000;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xF90000;
		t.fontFamily = "fz";
		t.height = 42;
		t.size = 20;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 46;
		t.x = 1808.99;
		t.y = 60.33;
		return t;
	};
	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.height = 1080;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.gameOverMask_i()];
		return t;
	};
	_proto.gameOverMask_i = function () {
		var t = new eui.Rect();
		this.gameOverMask = t;
		t.fillAlpha = 0;
		t.height = 1080;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.subTip_i = function () {
		var t = new eui.Image();
		this.subTip = t;
		t.source = "subTip_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.endStart_i = function () {
		var t = new eui.Group();
		this.endStart = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.clickStart_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.clickStart_i = function () {
		var t = new eui.Image();
		this.clickStart = t;
		t.source = "startpic_png";
		t.x = 738.5;
		t.y = 451.5;
		return t;
	};
	return WarcraftSkin;
})(eui.Skin);