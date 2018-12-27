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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Index":"resource/eui_skins/Index.exml","Keyset":"resource/eui_skins/component/Keyset.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/component/cacl.exml'] = window.caclSkin = (function (_super) {
	__extends(caclSkin, _super);
	function caclSkin() {
		_super.call(this);
		this.skinParts = ["closeCacl","caclGroup","ac","ride","remove","minus","add","submit","sum","sum0","caclSkin"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.closeCacl_i(),this.caclSkin_i()];
	}
	var _proto = caclSkin.prototype;

	_proto.closeCacl_i = function () {
		var t = new eui.Rect();
		this.closeCacl = t;
		t.fillAlpha = 0;
		t.height = 1080;
		t.strokeAlpha = 0;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caclSkin_i = function () {
		var t = new eui.Group();
		this.caclSkin = t;
		t.x = 554.17;
		t.y = 560.33;
		t.elementsContent = [this._Image1_i(),this.caclGroup_i(),this.ac_i(),this.ride_i(),this.remove_i(),this.minus_i(),this.add_i(),this.submit_i(),this.sum_i(),this.sum0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cacl_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.caclGroup_i = function () {
		var t = new eui.Group();
		this.caclGroup = t;
		t.x = 19;
		t.y = 141;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cacl0_png";
		t.x = 0;
		t.y = 231;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "cacl00_png";
		t.x = 87;
		t.y = 232;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "cacl1_png";
		t.x = 0;
		t.y = 155;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "cacl2_png";
		t.x = 87;
		t.y = 154;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "cacl3_png";
		t.x = 171;
		t.y = 154;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "cacl4_png";
		t.x = 0;
		t.y = 79;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "cacl5_png";
		t.x = 87;
		t.y = 78;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "cacl6_png";
		t.x = 171;
		t.y = 80;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "cacl7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "cacl8_png";
		t.x = 87;
		t.y = 2;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "cacl9_png";
		t.x = 171;
		t.y = 0;
		return t;
	};
	_proto.ac_i = function () {
		var t = new eui.Image();
		this.ac = t;
		t.source = "caclAC_png";
		t.x = 19;
		t.y = 65;
		return t;
	};
	_proto.ride_i = function () {
		var t = new eui.Image();
		this.ride = t;
		t.source = "caclx_png";
		t.x = 106;
		t.y = 65;
		return t;
	};
	_proto.remove_i = function () {
		var t = new eui.Image();
		this.remove = t;
		t.source = "remove_png";
		t.x = 190;
		t.y = 65;
		return t;
	};
	_proto.minus_i = function () {
		var t = new eui.Image();
		this.minus = t;
		t.source = "minus_png";
		t.x = 275;
		t.y = 65.5;
		return t;
	};
	_proto.add_i = function () {
		var t = new eui.Image();
		this.add = t;
		t.source = "add_png";
		t.x = 275;
		t.y = 224.5;
		return t;
	};
	_proto.submit_i = function () {
		var t = new eui.Image();
		this.submit = t;
		t.source = "amount_png";
		t.x = 192.5;
		t.y = 375;
		return t;
	};
	_proto.sum_i = function () {
		var t = new eui.Label();
		this.sum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fz";
		t.height = 39;
		t.size = 35;
		t.text = "0";
		t.textAlign = "right";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 306;
		t.x = 26;
		t.y = 22;
		return t;
	};
	_proto.sum0_i = function () {
		var t = new eui.Label();
		this.sum0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fz";
		t.height = 39;
		t.size = 35;
		t.text = "0";
		t.textAlign = "right";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 306;
		t.x = 26;
		t.y = 22;
		return t;
	};
	return caclSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/Index.exml'] = window.IndexSkin = (function (_super) {
	__extends(IndexSkin, _super);
	var IndexSkin$Skin3 = 	(function (_super) {
		__extends(IndexSkin$Skin3, _super);
		function IndexSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","bisai2_png")
					])
			];
		}
		var _proto = IndexSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bisai_png";
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
		return IndexSkin$Skin3;
	})(eui.Skin);

	var IndexSkin$Skin4 = 	(function (_super) {
		__extends(IndexSkin$Skin4, _super);
		function IndexSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin4;
	})(eui.Skin);

	var IndexSkin$Skin5 = 	(function (_super) {
		__extends(IndexSkin$Skin5, _super);
		function IndexSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin5;
	})(eui.Skin);

	var IndexSkin$Skin6 = 	(function (_super) {
		__extends(IndexSkin$Skin6, _super);
		function IndexSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin6;
	})(eui.Skin);

	var IndexSkin$Skin7 = 	(function (_super) {
		__extends(IndexSkin$Skin7, _super);
		function IndexSkin$Skin7() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin7;
	})(eui.Skin);

	var IndexSkin$Skin8 = 	(function (_super) {
		__extends(IndexSkin$Skin8, _super);
		function IndexSkin$Skin8() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin8;
	})(eui.Skin);

	var IndexSkin$Skin9 = 	(function (_super) {
		__extends(IndexSkin$Skin9, _super);
		function IndexSkin$Skin9() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin9;
	})(eui.Skin);

	var IndexSkin$Skin10 = 	(function (_super) {
		__extends(IndexSkin$Skin10, _super);
		function IndexSkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin10;
	})(eui.Skin);

	var IndexSkin$Skin11 = 	(function (_super) {
		__extends(IndexSkin$Skin11, _super);
		function IndexSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin11;
	})(eui.Skin);

	var IndexSkin$Skin12 = 	(function (_super) {
		__extends(IndexSkin$Skin12, _super);
		function IndexSkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin12;
	})(eui.Skin);

	var IndexSkin$Skin13 = 	(function (_super) {
		__extends(IndexSkin$Skin13, _super);
		function IndexSkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin13;
	})(eui.Skin);

	var IndexSkin$Skin14 = 	(function (_super) {
		__extends(IndexSkin$Skin14, _super);
		function IndexSkin$Skin14() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin14;
	})(eui.Skin);

	var IndexSkin$Skin15 = 	(function (_super) {
		__extends(IndexSkin$Skin15, _super);
		function IndexSkin$Skin15() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin15;
	})(eui.Skin);

	var IndexSkin$Skin16 = 	(function (_super) {
		__extends(IndexSkin$Skin16, _super);
		function IndexSkin$Skin16() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin16;
	})(eui.Skin);

	var IndexSkin$Skin17 = 	(function (_super) {
		__extends(IndexSkin$Skin17, _super);
		function IndexSkin$Skin17() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin17;
	})(eui.Skin);

	var IndexSkin$Skin18 = 	(function (_super) {
		__extends(IndexSkin$Skin18, _super);
		function IndexSkin$Skin18() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin18;
	})(eui.Skin);

	var IndexSkin$Skin19 = 	(function (_super) {
		__extends(IndexSkin$Skin19, _super);
		function IndexSkin$Skin19() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin19;
	})(eui.Skin);

	var IndexSkin$Skin20 = 	(function (_super) {
		__extends(IndexSkin$Skin20, _super);
		function IndexSkin$Skin20() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin20;
	})(eui.Skin);

	var IndexSkin$Skin21 = 	(function (_super) {
		__extends(IndexSkin$Skin21, _super);
		function IndexSkin$Skin21() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin21;
	})(eui.Skin);

	var IndexSkin$Skin22 = 	(function (_super) {
		__extends(IndexSkin$Skin22, _super);
		function IndexSkin$Skin22() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin22;
	})(eui.Skin);

	var IndexSkin$Skin23 = 	(function (_super) {
		__extends(IndexSkin$Skin23, _super);
		function IndexSkin$Skin23() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin23;
	})(eui.Skin);

	var IndexSkin$Skin24 = 	(function (_super) {
		__extends(IndexSkin$Skin24, _super);
		function IndexSkin$Skin24() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin24;
	})(eui.Skin);

	var IndexSkin$Skin25 = 	(function (_super) {
		__extends(IndexSkin$Skin25, _super);
		function IndexSkin$Skin25() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin25;
	})(eui.Skin);

	var IndexSkin$Skin26 = 	(function (_super) {
		__extends(IndexSkin$Skin26, _super);
		function IndexSkin$Skin26() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin26;
	})(eui.Skin);

	var IndexSkin$Skin27 = 	(function (_super) {
		__extends(IndexSkin$Skin27, _super);
		function IndexSkin$Skin27() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin27;
	})(eui.Skin);

	var IndexSkin$Skin28 = 	(function (_super) {
		__extends(IndexSkin$Skin28, _super);
		function IndexSkin$Skin28() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin28;
	})(eui.Skin);

	var IndexSkin$Skin29 = 	(function (_super) {
		__extends(IndexSkin$Skin29, _super);
		function IndexSkin$Skin29() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin29;
	})(eui.Skin);

	var IndexSkin$Skin30 = 	(function (_super) {
		__extends(IndexSkin$Skin30, _super);
		function IndexSkin$Skin30() {
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
						new eui.SetProperty("_Image1","source","yuan_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","an_png")
					])
			];
		}
		var _proto = IndexSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "yuan_png";
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
		return IndexSkin$Skin30;
	})(eui.Skin);

	function IndexSkin() {
		_super.call(this);
		this.skinParts = ["subject","music","submit","reset","mouse2","mouse1","shapeOne","clickLineBtn","mouseGroup","mouseGroup2","nailao","resultGroup","subjectGroup","clickStart","endStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.subject_i(),this.music_i(),this.submit_i(),this.reset_i(),this.mouse2_i(),this.mouse1_i(),this.shapeOne_i(),this.clickLineBtn_i(),this.mouseGroup_i(),this.mouseGroup2_i(),this.resultGroup_i(),this.subjectGroup_i(),this.endStart_i()];
	}
	var _proto = IndexSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bj1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bj2_png";
		t.x = 127;
		t.y = 296;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bj3_png";
		t.x = -2;
		t.y = -1.83;
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "timu_png";
		t.x = 273;
		t.y = 0;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1724.7;
		t.y = 19;
		return t;
	};
	_proto.submit_i = function () {
		var t = new eui.Button();
		this.submit = t;
		t.enabled = false;
		t.height = 264;
		t.label = "";
		t.width = 259;
		t.x = 1661;
		t.y = 784;
		t.skinName = IndexSkin$Skin3;
		return t;
	};
	_proto.reset_i = function () {
		var t = new eui.Image();
		this.reset = t;
		t.source = "revise_png";
		t.x = 1579.12;
		t.y = 25;
		return t;
	};
	_proto.mouse2_i = function () {
		var t = new eui.Image();
		this.mouse2 = t;
		t.source = "mouse_left_png";
		t.x = 273;
		t.y = 108;
		return t;
	};
	_proto.mouse1_i = function () {
		var t = new eui.Image();
		this.mouse1 = t;
		t.rotation = 358.87;
		t.source = "mouse_right_png";
		t.visible = false;
		t.x = 14.59;
		t.y = 101.99;
		return t;
	};
	_proto.shapeOne_i = function () {
		var t = new eui.Group();
		this.shapeOne = t;
		t.height = 639;
		t.width = 1192;
		t.x = 224;
		t.y = 362;
		return t;
	};
	_proto.clickLineBtn_i = function () {
		var t = new eui.Group();
		this.clickLineBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 639;
		t.name = "group";
		t.width = 1192;
		t.x = 224;
		t.y = 362.5;
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i(),this._Button4_i(),this._Button5_i(),this._Button6_i(),this._Button7_i(),this._Button8_i(),this._Button9_i(),this._Button10_i(),this._Button11_i(),this._Button12_i(),this._Button13_i(),this._Button14_i(),this._Button15_i(),this._Button16_i(),this._Button17_i(),this._Button18_i(),this._Button19_i(),this._Button20_i(),this._Button21_i(),this._Button22_i(),this._Button23_i(),this._Button24_i(),this._Button25_i(),this._Button26_i(),this._Button27_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 0;
		t.y = 0;
		t.skinName = IndexSkin$Skin4;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 271;
		t.y = 0;
		t.skinName = IndexSkin$Skin5;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 524;
		t.y = 0;
		t.skinName = IndexSkin$Skin6;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 742;
		t.y = 0;
		t.skinName = IndexSkin$Skin7;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 986;
		t.y = 0;
		t.skinName = IndexSkin$Skin8;
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 1192;
		t.y = 0;
		t.skinName = IndexSkin$Skin9;
		return t;
	};
	_proto._Button7_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 0;
		t.y = 228;
		t.skinName = IndexSkin$Skin10;
		return t;
	};
	_proto._Button8_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 271;
		t.y = 228;
		t.skinName = IndexSkin$Skin11;
		return t;
	};
	_proto._Button9_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 986;
		t.y = 192;
		t.skinName = IndexSkin$Skin12;
		return t;
	};
	_proto._Button10_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 1192;
		t.y = 192;
		t.skinName = IndexSkin$Skin13;
		return t;
	};
	_proto._Button11_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 0;
		t.y = 454;
		t.skinName = IndexSkin$Skin14;
		return t;
	};
	_proto._Button12_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 0;
		t.y = 636;
		t.skinName = IndexSkin$Skin15;
		return t;
	};
	_proto._Button13_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 271;
		t.y = 636;
		t.skinName = IndexSkin$Skin16;
		return t;
	};
	_proto._Button14_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 271;
		t.y = 454;
		t.skinName = IndexSkin$Skin17;
		return t;
	};
	_proto._Button15_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 271;
		t.y = 513.35;
		t.skinName = IndexSkin$Skin18;
		return t;
	};
	_proto._Button16_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 271;
		t.y = 314;
		t.skinName = IndexSkin$Skin19;
		return t;
	};
	_proto._Button17_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 271;
		t.y = 124;
		t.skinName = IndexSkin$Skin20;
		return t;
	};
	_proto._Button18_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 524;
		t.y = 124;
		t.skinName = IndexSkin$Skin21;
		return t;
	};
	_proto._Button19_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 524;
		t.y = 314;
		t.skinName = IndexSkin$Skin22;
		return t;
	};
	_proto._Button20_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 742;
		t.y = 314;
		t.skinName = IndexSkin$Skin23;
		return t;
	};
	_proto._Button21_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 810;
		t.y = 314;
		t.skinName = IndexSkin$Skin24;
		return t;
	};
	_proto._Button22_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 986;
		t.y = 314;
		t.skinName = IndexSkin$Skin25;
		return t;
	};
	_proto._Button23_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 986;
		t.y = 452;
		t.skinName = IndexSkin$Skin26;
		return t;
	};
	_proto._Button24_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 1192;
		t.y = 452;
		t.skinName = IndexSkin$Skin27;
		return t;
	};
	_proto._Button25_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 1192;
		t.y = 636;
		t.skinName = IndexSkin$Skin28;
		return t;
	};
	_proto._Button26_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 810;
		t.y = 636;
		t.skinName = IndexSkin$Skin29;
		return t;
	};
	_proto._Button27_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 15.5;
		t.anchorOffsetY = 15.5;
		t.enabled = false;
		t.height = 31;
		t.label = "";
		t.width = 31;
		t.x = 810;
		t.y = 513.35;
		t.skinName = IndexSkin$Skin30;
		return t;
	};
	_proto.mouseGroup_i = function () {
		var t = new eui.Group();
		this.mouseGroup = t;
		t.anchorOffsetX = 53.48;
		t.anchorOffsetY = 30.69;
		t.height = 53.33;
		t.rotation = 359.39;
		t.visible = false;
		t.width = 103.03;
		t.x = 275;
		t.y = 390;
		return t;
	};
	_proto.mouseGroup2_i = function () {
		var t = new eui.Group();
		this.mouseGroup2 = t;
		t.anchorOffsetX = 53.48;
		t.anchorOffsetY = 30.69;
		t.height = 53.33;
		t.rotation = 359.39;
		t.visible = false;
		t.width = 103.03;
		t.x = 275;
		t.y = 390;
		return t;
	};
	_proto.resultGroup_i = function () {
		var t = new eui.Group();
		this.resultGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.width = 350;
		t.x = 1514;
		t.y = 511.5;
		t.elementsContent = [this.nailao_i()];
		return t;
	};
	_proto.nailao_i = function () {
		var t = new eui.Image();
		this.nailao = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nailao_png";
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.subjectGroup_i = function () {
		var t = new eui.Group();
		this.subjectGroup = t;
		t.touchChildren = false;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image4_i()];
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
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tanchuang_png";
		t.x = 384.12;
		t.y = 304.35;
		return t;
	};
	_proto.endStart_i = function () {
		var t = new eui.Group();
		this.endStart = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.clickStart_i()];
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
	_proto.clickStart_i = function () {
		var t = new eui.Image();
		this.clickStart = t;
		t.source = "startpic_png";
		t.x = 741.5;
		t.y = 451.5;
		return t;
	};
	return IndexSkin;
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
})(eui.Skin);