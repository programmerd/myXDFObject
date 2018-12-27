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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Swallow":"resource/eui_skins/Swallow.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
		t.visible = false;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/Swallow.exml'] = window.SwallowSkin = (function (_super) {
	__extends(SwallowSkin, _super);
	var SwallowSkin$Skin3 = 	(function (_super) {
		__extends(SwallowSkin$Skin3, _super);
		function SwallowSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","switch_enable_png")
					])
			];
		}
		var _proto = SwallowSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "switch_png";
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
		return SwallowSkin$Skin3;
	})(eui.Skin);

	var SwallowSkin$Skin4 = 	(function (_super) {
		__extends(SwallowSkin$Skin4, _super);
		function SwallowSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","affirm_enable_png")
					])
			];
		}
		var _proto = SwallowSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "affirm_png";
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
		return SwallowSkin$Skin4;
	})(eui.Skin);

	function SwallowSkin() {
		_super.call(this);
		this.skinParts = ["Reel","closeSwallow","closeSub","bj","music","revise","image1","group","image","image0","swallow","clickSubject","showSwallow","flie","subject","title","input","imgBorder","switch","affirm","back","showSubject","subjectImage","tipLabel","tipLabelOpen","labelGroup","clickBtn1","clickBtn2","clickBtn3","clickBtn","moveGroup1","moveGroup2","moveGroup3","moveGroup","imgTransition","label1_0","label1_2","label1_3","subLabel1","label2_0","label2_1","label2_3","subLabel2","label3_2","label3_3","label3_6","label3_7","subLabel3","label1_1","clickSubLabel1","label2_4","clickSubLabel2","label3_0","label3_1","clickSubLabel3","clickSubLabel","showSubjectTip","showTipGroup","overRect","clickStart","endStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.Reel_i();
		this.closeSwallow_i();
		this.closeSub_i();
		this.elementsContent = [this.bj_i(),this.music_i(),this.revise_i(),this._Image1_i(),this.group_i(),this.image_i(),this.image0_i(),this.showSwallow_i(),this.flie_i(),this.showSubject_i(),this.labelGroup_i(),this._Label1_i(),this.clickBtn_i(),this.moveGroup_i(),this.imgTransition_i(),this.subLabel1_i(),this.subLabel2_i(),this.subLabel3_i(),this.clickSubLabel_i(),this.showTipGroup_i(),this.overRect_i(),this.endStart_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [194.24],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [179],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1478.92],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [180.79],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1305.24],[],this._Object3,"width");
		eui.Binding.$bindProperties(this, [282.77],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [174.73],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [6.21],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [82.47],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["showSwallow"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["swallow"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["music"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["revise"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["labelGroup"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, ["clickSubject"],[0],this._TweenItem13,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
	}
	var _proto = SwallowSkin.prototype;

	_proto.Reel_i = function () {
		var t = new egret.tween.TweenGroup();
		this.Reel = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._To2_i()];
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
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._To3_i()];
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._To4_i()];
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set1_i(),this._To5_i(),this._To6_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto.closeSwallow_i = function () {
		var t = new egret.tween.TweenGroup();
		this.closeSwallow = t;
		t.items = [this._TweenItem6_i(),this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i(),this._TweenItem10_i(),this._TweenItem11_i(),this._TweenItem12_i()];
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._To7_i()];
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._To8_i()];
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._To9_i()];
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._To10_i()];
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._To11_i()];
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._To12_i()];
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._To13_i()];
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto.closeSub_i = function () {
		var t = new egret.tween.TweenGroup();
		this.closeSub = t;
		t.items = [this._TweenItem13_i()];
		return t;
	};
	_proto._TweenItem13_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem13 = t;
		t.paths = [this._To14_i()];
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto.bj_i = function () {
		var t = new eui.Image();
		this.bj = t;
		t.source = "bj_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1763.27;
		t.y = 25.41;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Image();
		this.revise = t;
		t.source = "revise_png";
		t.x = 1633.45;
		t.y = 25.41;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_32_png";
		t.visible = false;
		t.x = 194.89;
		t.y = 183.82;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.height = 878;
		t.scrollEnabled = true;
		t.width = 214.34;
		t.x = 822.16;
		t.y = 177.76;
		t.elementsContent = [this.image1_i()];
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yanweimoxing_032_png";
		t.x = -542.27;
		t.y = 82.47;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "yanweimoxing_012_png";
		t.x = 736.66;
		t.y = 182.03;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.source = "yanweimoxing_022_png";
		t.x = 933.47;
		t.y = 177.76;
		return t;
	};
	_proto.showSwallow_i = function () {
		var t = new eui.Group();
		this.showSwallow = t;
		t.alpha = 0;
		t.x = 59;
		t.y = 179;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.swallow_i(),this.clickSubject_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_30_png";
		t.x = 1312.45;
		t.y = 121.23;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_31_png";
		t.x = 0;
		t.y = 515;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_31_png";
		t.x = 1074.47;
		t.y = 716.23;
		return t;
	};
	_proto.swallow_i = function () {
		var t = new eui.Image();
		this.swallow = t;
		t.source = "yanweimoxing_33_png";
		t.x = 134.45;
		t.y = 0;
		return t;
	};
	_proto.clickSubject_i = function () {
		var t = new eui.Group();
		this.clickSubject = t;
		t.name = "group";
		t.x = 533;
		t.y = 153;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.name = "1";
		t.source = "sub_1_click_png";
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.name = "2";
		t.source = "sub_2_en_png";
		t.x = 160;
		t.y = 374;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 216;
		t.name = "3";
		t.source = "sub_3_en_png";
		t.width = 216;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto.flie_i = function () {
		var t = new eui.Group();
		this.flie = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 697;
		t.visible = false;
		t.width = 757;
		t.x = 582.5;
		t.y = 257.5;
		return t;
	};
	_proto.showSubject_i = function () {
		var t = new eui.Group();
		this.showSubject = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image8_i(),this.subject_i(),this._Image9_i(),this.title_i(),this._Group1_i(),this.switch_i(),this.affirm_i(),this.back_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_06_png";
		t.x = 545;
		t.y = 169;
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "subject3_png";
		t.x = 632;
		t.y = 216;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_07_png";
		t.x = 1260;
		t.y = 217;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.source = "title1_png";
		t.x = 1298;
		t.y = 374;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 312;
		t.width = 1914;
		t.x = 0;
		t.y = 768;
		t.elementsContent = [this.input_i(),this.imgBorder_i()];
		return t;
	};
	_proto.input_i = function () {
		var t = new eui.Image();
		this.input = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "input1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.imgBorder_i = function () {
		var t = new eui.Image();
		this.imgBorder = t;
		t.horizontalCenter = 0;
		t.source = "border1_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.switch_i = function () {
		var t = new eui.Button();
		this.switch = t;
		t.enabled = false;
		t.label = "";
		t.x = 358.5;
		t.y = 567;
		t.skinName = SwallowSkin$Skin3;
		return t;
	};
	_proto.affirm_i = function () {
		var t = new eui.Button();
		this.affirm = t;
		t.enabled = false;
		t.label = "";
		t.x = 87;
		t.y = 374;
		t.skinName = SwallowSkin$Skin4;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "back_png";
		t.x = 1639;
		t.y = 28;
		return t;
	};
	_proto.labelGroup_i = function () {
		var t = new eui.Group();
		this.labelGroup = t;
		t.touchChildren = false;
		t.x = 216.77;
		t.y = 10.02;
		t.elementsContent = [this.subjectImage_i(),this.tipLabel_i(),this.tipLabelOpen_i()];
		return t;
	};
	_proto.subjectImage_i = function () {
		var t = new eui.Image();
		this.subjectImage = t;
		t.source = "yanweimoxing_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.Image();
		this.tipLabel = t;
		t.source = "yanweimoxing_04_1_png";
		t.x = 91;
		t.y = 30;
		return t;
	};
	_proto.tipLabelOpen_i = function () {
		var t = new eui.Image();
		this.tipLabelOpen = t;
		t.source = "yanweimoxing_04_2_png";
		t.visible = false;
		t.x = 88.23;
		t.y = 30;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 96;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x0a6cb1;
		t.text = "E";
		t.textAlign = "center";
		t.textColor = 0x28e1fc;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 53;
		t.x = 862.5;
		t.y = 396;
		return t;
	};
	_proto.clickBtn_i = function () {
		var t = new eui.Group();
		this.clickBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 594;
		t.name = "group";
		t.visible = false;
		t.width = 610;
		t.x = 542.5;
		t.y = 180.5;
		t.elementsContent = [this.clickBtn1_i(),this.clickBtn2_i(),this.clickBtn3_i()];
		return t;
	};
	_proto.clickBtn1_i = function () {
		var t = new eui.Group();
		this.clickBtn1 = t;
		t.name = "group";
		t.visible = false;
		t.x = 88;
		t.y = 81;
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i(),this._Button4_i(),this._Button5_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "A";
		t.skinName = "";
		t.width = 80;
		t.x = 147.5;
		t.y = -20;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "D";
		t.skinName = "";
		t.width = 80;
		t.x = 216.5;
		t.y = 288;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "C";
		t.skinName = "";
		t.width = 80;
		t.x = 393.5;
		t.y = 288;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "E";
		t.skinName = "";
		t.width = 80;
		t.x = 191.5;
		t.y = 181;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "B";
		t.skinName = "";
		t.width = 80;
		t.x = -22;
		t.y = 288;
		return t;
	};
	_proto.clickBtn2_i = function () {
		var t = new eui.Group();
		this.clickBtn2 = t;
		t.name = "group";
		t.visible = false;
		t.x = 98;
		t.y = 91;
		t.elementsContent = [this._Button6_i(),this._Button7_i(),this._Button8_i(),this._Button9_i(),this._Button10_i()];
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "A";
		t.skinName = "";
		t.width = 80;
		t.x = -26;
		t.y = 277;
		return t;
	};
	_proto._Button7_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "D";
		t.skinName = "";
		t.width = 80;
		t.x = 56;
		t.y = 119;
		return t;
	};
	_proto._Button8_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "C";
		t.skinName = "";
		t.width = 80;
		t.x = 137.5;
		t.y = -27.5;
		return t;
	};
	_proto._Button9_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "E";
		t.skinName = "";
		t.width = 80;
		t.x = 160.5;
		t.y = 169;
		return t;
	};
	_proto._Button10_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "B";
		t.skinName = "";
		t.width = 80;
		t.x = 375.5;
		t.y = 273;
		return t;
	};
	_proto.clickBtn3_i = function () {
		var t = new eui.Group();
		this.clickBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 356;
		t.name = "group";
		t.visible = false;
		t.width = 468;
		t.x = 80;
		t.y = 77;
		t.elementsContent = [this._Button11_i(),this._Button12_i(),this._Button13_i(),this._Button14_i(),this._Button15_i(),this._Button16_i(),this._Button17_i()];
		return t;
	};
	_proto._Button11_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "A";
		t.skinName = "";
		t.width = 80;
		t.x = 154;
		t.y = -20;
		return t;
	};
	_proto._Button12_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "D";
		t.skinName = "";
		t.width = 80;
		t.x = 154;
		t.y = 294;
		return t;
	};
	_proto._Button13_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "C";
		t.skinName = "";
		t.width = 80;
		t.x = 394.5;
		t.y = 292;
		return t;
	};
	_proto._Button14_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "E";
		t.skinName = "";
		t.width = 80;
		t.x = 74;
		t.y = 133.5;
		return t;
	};
	_proto._Button15_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "B";
		t.skinName = "";
		t.width = 80;
		t.x = -12;
		t.y = 294;
		return t;
	};
	_proto._Button16_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "O";
		t.skinName = "";
		t.width = 80;
		t.x = 154;
		t.y = 171.5;
		return t;
	};
	_proto._Button17_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.name = "F";
		t.skinName = "";
		t.width = 80;
		t.x = 250.5;
		t.y = 105.5;
		return t;
	};
	_proto.moveGroup_i = function () {
		var t = new eui.Group();
		this.moveGroup = t;
		t.visible = false;
		t.x = 100.48;
		t.y = 774;
		t.elementsContent = [this.moveGroup1_i(),this.moveGroup2_i(),this.moveGroup3_i()];
		return t;
	};
	_proto.moveGroup1_i = function () {
		var t = new eui.Group();
		this.moveGroup1 = t;
		t.name = "group";
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.x = 299;
		t.y = 51;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 276.5;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 634.5;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 920;
		t.y = 0;
		return t;
	};
	_proto.moveGroup2_i = function () {
		var t = new eui.Group();
		this.moveGroup2 = t;
		t.name = "group";
		t.visible = false;
		t.x = 297;
		t.y = 51;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 276.5;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 634.5;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_09_png";
		t.x = 920;
		t.y = 0;
		return t;
	};
	_proto.moveGroup3_i = function () {
		var t = new eui.Group();
		this.moveGroup3 = t;
		t.alpha = 1;
		t.name = "group";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 192;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 453;
		t.y = 1;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 642.5;
		t.y = 5;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 923.5;
		t.y = 3;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 1114;
		t.y = 3;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 1370;
		t.y = 1;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 1563;
		t.y = 1;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 3;
		t.y = 153;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 191;
		t.y = 152;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 453;
		t.y = 151;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "yanweimoxing_10_png";
		t.x = 642.5;
		t.y = 153;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "BD_png";
		t.x = 920.46;
		t.y = 151;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "DC_png";
		t.x = 1110;
		t.y = 152;
		return t;
	};
	_proto.imgTransition_i = function () {
		var t = new eui.Image();
		this.imgTransition = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 178;
		t.source = "img_1_ACE_png";
		t.visible = false;
		t.width = 184;
		t.x = 1056;
		t.y = 816;
		return t;
	};
	_proto.subLabel1_i = function () {
		var t = new eui.Group();
		this.subLabel1 = t;
		t.visible = false;
		t.x = 414;
		t.y = 848;
		t.elementsContent = [this.label1_0_i(),this.label1_2_i(),this.label1_3_i()];
		return t;
	};
	_proto.label1_0_i = function () {
		var t = new eui.Label();
		this.label1_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "27";
		t.textAlign = "center";
		t.textColor = 0xf1c411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label1_2_i = function () {
		var t = new eui.Label();
		this.label1_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 638.47;
		t.y = 0;
		return t;
	};
	_proto.label1_3_i = function () {
		var t = new eui.Label();
		this.label1_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 927;
		t.y = 0;
		return t;
	};
	_proto.subLabel2_i = function () {
		var t = new eui.Group();
		this.subLabel2 = t;
		t.visible = false;
		t.x = 414;
		t.y = 848;
		t.elementsContent = [this.label2_0_i(),this.label2_1_i(),this.label2_3_i()];
		return t;
	};
	_proto.label2_0_i = function () {
		var t = new eui.Label();
		this.label2_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label2_1_i = function () {
		var t = new eui.Label();
		this.label2_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 281.5;
		t.y = 2;
		return t;
	};
	_proto.label2_3_i = function () {
		var t = new eui.Label();
		this.label2_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "12";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 638.47;
		t.y = 0;
		return t;
	};
	_proto.subLabel3_i = function () {
		var t = new eui.Group();
		this.subLabel3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 290;
		t.visible = false;
		t.width = 1719;
		t.x = 101;
		t.y = 778;
		t.elementsContent = [this.label3_2_i(),this.label3_3_i(),this.label3_6_i(),this.label3_7_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i()];
		return t;
	};
	_proto.label3_2_i = function () {
		var t = new eui.Label();
		this.label3_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 142;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 451.5;
		t.y = 0;
		return t;
	};
	_proto.label3_3_i = function () {
		var t = new eui.Label();
		this.label3_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 142;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 639.66;
		t.y = 1;
		return t;
	};
	_proto.label3_6_i = function () {
		var t = new eui.Label();
		this.label3_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 142;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 1370;
		t.y = 0;
		return t;
	};
	_proto.label3_7_i = function () {
		var t = new eui.Label();
		this.label3_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 142;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 1561;
		t.y = 0;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "img_3_ABO_png";
		t.x = 3;
		t.y = -4;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "img_3_BCO_png";
		t.x = 189.48;
		t.y = -5;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "img_3_ACO_png";
		t.x = 923;
		t.y = -2;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "img_3_BCO_png";
		t.x = 1113;
		t.y = -6;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "img_3_ABO_png";
		t.x = 3;
		t.y = 146;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.source = "img_3_ACO_png";
		t.x = 195;
		t.y = 144;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.source = "img_3_BD_png";
		t.x = 451;
		t.y = 146;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.source = "img_3_CD_png";
		t.x = 641;
		t.y = 146;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = "BD_png";
		t.x = 921;
		t.y = 146;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.source = "DC_png";
		t.x = 1113;
		t.y = 146;
		return t;
	};
	_proto.clickSubLabel_i = function () {
		var t = new eui.Group();
		this.clickSubLabel = t;
		t.anchorOffsetY = 0;
		t.height = 236;
		t.name = "group";
		t.visible = false;
		t.x = 648.47;
		t.y = 804;
		t.elementsContent = [this.clickSubLabel1_i(),this.clickSubLabel2_i(),this.clickSubLabel3_i()];
		return t;
	};
	_proto.clickSubLabel1_i = function () {
		var t = new eui.Group();
		this.clickSubLabel1 = t;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.name = "group";
		t.visible = false;
		t.x = 49.03;
		t.y = 36;
		t.elementsContent = [this.label1_1_i()];
		return t;
	};
	_proto.label1_1_i = function () {
		var t = new eui.Label();
		this.label1_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "27";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = -2;
		t.y = 10;
		return t;
	};
	_proto.clickSubLabel2_i = function () {
		var t = new eui.Group();
		this.clickSubLabel2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.name = "group";
		t.visible = false;
		t.width = 175;
		t.x = 686;
		t.y = 36;
		t.elementsContent = [this.label2_4_i()];
		return t;
	};
	_proto.label2_4_i = function () {
		var t = new eui.Label();
		this.label2_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 148;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "12";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.clickSubLabel3_i = function () {
		var t = new eui.Group();
		this.clickSubLabel3 = t;
		t.name = "group";
		t.visible = false;
		t.x = 824;
		t.y = 122;
		t.elementsContent = [this.label3_0_i(),this.label3_1_i()];
		return t;
	};
	_proto.label3_0_i = function () {
		var t = new eui.Label();
		this.label3_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 142;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.label3_1_i = function () {
		var t = new eui.Label();
		this.label3_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 142;
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x663500;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0xF1C411;
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 190.48;
		t.y = 0;
		return t;
	};
	_proto.showTipGroup_i = function () {
		var t = new eui.Group();
		this.showTipGroup = t;
		t.touchChildren = false;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.showSubjectTip_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.showSubjectTip_i = function () {
		var t = new eui.Image();
		this.showSubjectTip = t;
		t.source = "yanweimoxing_70_png";
		t.x = 266;
		t.y = 309.5;
		return t;
	};
	_proto.overRect_i = function () {
		var t = new eui.Rect();
		this.overRect = t;
		t.fillAlpha = 0;
		t.height = 1080;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.endStart_i = function () {
		var t = new eui.Group();
		this.endStart = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this.clickStart_i()];
		return t;
	};
	_proto._Rect3_i = function () {
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
		t.x = 719;
		t.y = 451.5;
		return t;
	};
	return SwallowSkin;
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
})(eui.Skin);