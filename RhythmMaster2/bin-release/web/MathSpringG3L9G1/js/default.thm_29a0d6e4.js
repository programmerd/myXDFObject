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
						new eui.SetProperty("_Image1","source","jiezoudashi_06_1_png")
					])
			];
		}
		var _proto = IndexSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jiezoudashi_06_png";
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

	function IndexSkin() {
		_super.call(this);
		this.skinParts = ["successTween","animateGroup","subject","changpianGroup","music","reset","keyingGroup","showNumGroup","labelGroup","next","prev","submit","showSubject","image","gameOver","clickStart","endStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.successTween_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.animateGroup_i(),this.subject_i(),this._Image4_i(),this.changpianGroup_i(),this.music_i(),this.reset_i(),this.keyingGroup_i(),this.showNumGroup_i(),this.labelGroup_i(),this.next_i(),this.prev_i(),this.submit_i(),this.showSubject_i(),this.gameOver_i(),this.endStart_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [360],[],this._Object2,"rotation");
	}
	var _proto = IndexSkin.prototype;

	_proto.successTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.successTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._To1_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To1_i = function () {
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
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_05_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.animateGroup_i = function () {
		var t = new eui.Group();
		this.animateGroup = t;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "jiezoudashi_01_png";
		t.x = 450;
		t.y = 20.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_01_5_png";
		t.x = 374;
		t.y = 0;
		return t;
	};
	_proto.changpianGroup_i = function () {
		var t = new eui.Group();
		this.changpianGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.width = 152;
		t.x = 374;
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
	_proto.reset_i = function () {
		var t = new eui.Image();
		this.reset = t;
		t.source = "revise_png";
		t.x = 1579.12;
		t.y = 25;
		return t;
	};
	_proto.keyingGroup_i = function () {
		var t = new eui.Group();
		this.keyingGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 913;
		t.width = 1867;
		t.x = 57;
		t.y = 144;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_22_png";
		t.x = 913;
		t.y = 17;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_23_png";
		t.x = 1049.5;
		t.y = 16;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_24_png";
		t.x = 1189.32;
		t.y = 17;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_25_png";
		t.x = 407.52;
		t.y = 114;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_26_png";
		t.x = 574.52;
		t.y = 114;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_27_png";
		t.x = 750;
		t.y = 114;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_28_png";
		t.x = 913.5;
		t.y = 114;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_29_png";
		t.x = 1072.51;
		t.y = 114;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_30_png";
		t.x = 1225.52;
		t.y = 114;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_31_png";
		t.x = 720;
		t.y = 224;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_32_png";
		t.x = 913;
		t.y = 223;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_33_png";
		t.x = 907;
		t.y = 367;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_34_png";
		t.x = 1131.84;
		t.y = 367;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_35_png";
		t.x = 1348.69;
		t.y = 367;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_36_png";
		t.x = 904;
		t.y = 524;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_37_png";
		t.x = 1153.02;
		t.y = 523;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_38_png";
		t.x = 1411.02;
		t.y = 524;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_40_png";
		t.x = 1189.32;
		t.y = 683;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_39_png";
		t.x = 1482.84;
		t.y = 683;
		return t;
	};
	_proto.showNumGroup_i = function () {
		var t = new eui.Group();
		this.showNumGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 909;
		t.width = 1915;
		t.x = 2.5;
		t.y = 151;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "4_png";
		t.x = 1005.45;
		t.y = 18;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "4_png";
		t.x = 1147.5;
		t.y = 18;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "4_png";
		t.x = 1294.3;
		t.y = 18;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.source = "4_png";
		t.x = 514.36;
		t.y = 115.56;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.source = "4_png";
		t.x = 684.88;
		t.y = 115.56;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.source = "4_png";
		t.x = 852.22;
		t.y = 115.56;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.source = "4_png";
		t.x = 1019.36;
		t.y = 115.56;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.source = "4_png";
		t.x = 1180.36;
		t.y = 115.56;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.52;
		t.scaleY = 0.52;
		t.source = "4_png";
		t.x = 1343.5;
		t.y = 115.56;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.63;
		t.scaleY = 0.63;
		t.source = "4_png";
		t.x = 829.43;
		t.y = 231;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.63;
		t.scaleY = 0.63;
		t.source = "4_png";
		t.x = 1024.5;
		t.y = 230;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.74;
		t.scaleY = 0.74;
		t.source = "4_png";
		t.x = 1026.5;
		t.y = 375;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.74;
		t.scaleY = 0.74;
		t.source = "4_png";
		t.x = 1261.37;
		t.y = 375;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.74;
		t.scaleY = 0.74;
		t.source = "4_png";
		t.x = 1489.26;
		t.y = 375;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "4_png";
		t.x = 1028.35;
		t.y = 535.05;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "4_png";
		t.x = 1296.52;
		t.y = 535.05;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "4_png";
		t.x = 1565.54;
		t.y = 535.05;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_png";
		t.x = 1346.34;
		t.y = 695;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_png";
		t.x = 1641.19;
		t.y = 692.88;
		return t;
	};
	_proto.labelGroup_i = function () {
		var t = new eui.Group();
		this.labelGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 904;
		t.name = "group";
		t.width = 1912.33;
		t.x = 3;
		t.y = 156;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 971.33;
		t.y = 8.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 1110.67;
		t.y = 9;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.67;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 127;
		t.x = 1252;
		t.y = 11;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.01;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.67;
		t.x = 468.33;
		t.y = 103.77;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.01;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.67;
		t.x = 636.85;
		t.y = 103.77;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.01;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.67;
		t.x = 808.33;
		t.y = 103.77;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.01;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.67;
		t.x = 966.32;
		t.y = 105.1;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.01;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.67;
		t.x = 1129.85;
		t.y = 105.1;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.34;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 153.67;
		t.x = 1288.18;
		t.y = 102;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.01;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 160.34;
		t.x = 786.52;
		t.y = 214.88;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.34;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 165.67;
		t.x = 971.87;
		t.y = 214.88;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.67;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 197.67;
		t.x = 969.2;
		t.y = 358.16;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.67;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 208.34;
		t.x = 1194.96;
		t.y = 358.16;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 221.67;
		t.x = 1417.52;
		t.y = 358.16;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.67;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 223;
		t.x = 966.17;
		t.y = 517.5;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 241.67;
		t.x = 1218.85;
		t.y = 517.5;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 249.67;
		t.x = 1478.02;
		t.y = 514.84;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131.91;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 270.4;
		t.x = 1258.63;
		t.y = 675.59;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131.91;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 270.4;
		t.x = 1577.26;
		t.y = 678.62;
		return t;
	};
	_proto.next_i = function () {
		var t = new eui.Image();
		this.next = t;
		t.source = "next_png";
		t.visible = false;
		t.x = 1771;
		t.y = 283;
		return t;
	};
	_proto.prev_i = function () {
		var t = new eui.Image();
		this.prev = t;
		t.source = "prev_png";
		t.visible = false;
		t.x = 40;
		t.y = 281;
		return t;
	};
	_proto.submit_i = function () {
		var t = new eui.Button();
		this.submit = t;
		t.label = "";
		t.x = 1673;
		t.y = 374.5;
		t.skinName = IndexSkin$Skin3;
		return t;
	};
	_proto.showSubject_i = function () {
		var t = new eui.Group();
		this.showSubject = t;
		t.touchChildren = false;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image43_i()];
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
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.source = "jiezoudashi_49_png";
		t.x = 306.5;
		t.y = 297;
		return t;
	};
	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.height = 1080;
		t.touchChildren = false;
		t.visible = false;
		t.x = 0;
		t.y = -0.5;
		t.elementsContent = [this._Rect2_i(),this._Image44_i(),this.image_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i()];
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
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.source = "suc5_png";
		t.x = 472;
		t.y = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 550;
		t.anchorOffsetY = 510;
		t.source = "suc6_png";
		t.x = 970;
		t.y = 515.5;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.source = "suc1_png";
		t.x = 371;
		t.y = 193;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.source = "suc2_png";
		t.x = 472;
		t.y = 714.5;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.source = "suc2_png";
		t.x = 579;
		t.y = 181.5;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.source = "suc3_png";
		t.x = 651.5;
		t.y = 364;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.source = "suc4_png";
		t.x = 622;
		t.y = 438;
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