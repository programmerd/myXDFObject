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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Transformers":"resource/eui_skins/project/Transformers.exml","KingKong":"resource/eui_skins/KingKong.exml","RandomClass":"resource/eui_skins/project/RandomClass.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/KingKong.exml'] = window.KingKongSkin = (function (_super) {
	__extends(KingKongSkin, _super);
	var KingKongSkin$Skin1 = 	(function (_super) {
		__extends(KingKongSkin$Skin1, _super);
		function KingKongSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","beam_click_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","beam_disable_png")
					])
			];
		}
		var _proto = KingKongSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "beam_png";
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
		return KingKongSkin$Skin1;
	})(eui.Skin);

	var KingKongSkin$Skin2 = 	(function (_super) {
		__extends(KingKongSkin$Skin2, _super);
		function KingKongSkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","capacity_click_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","capacity_disable_png")
					])
			];
		}
		var _proto = KingKongSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "capacity_png";
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
		return KingKongSkin$Skin2;
	})(eui.Skin);

	var KingKongSkin$Skin3 = 	(function (_super) {
		__extends(KingKongSkin$Skin3, _super);
		function KingKongSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","next_click_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","next_disable_png")
					])
			];
		}
		var _proto = KingKongSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "next_png";
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
		return KingKongSkin$Skin3;
	})(eui.Skin);

	var KingKongSkin$Skin4 = 	(function (_super) {
		__extends(KingKongSkin$Skin4, _super);
		function KingKongSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","revise_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","revise_png")
					])
			];
		}
		var _proto = KingKongSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "revise_png";
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
		return KingKongSkin$Skin4;
	})(eui.Skin);

	function KingKongSkin() {
		_super.call(this);
		this.skinParts = ["endHuan","result","PlaneV","bottomCount","subject01","subject02","yanwu","beam","capacity","next","music","revise","gameOver","overImage","GAMEOVER","image0","image","huan","image1","image2","huan0","overTX","startBtn","startGroup"];
		
		this.height = 1080;
		this.width = 1920;
		this.endHuan_i();
		this.result_i();
		this.elementsContent = [this._Image1_i(),this.PlaneV_i(),this.bottomCount_i(),this._Image2_i(),this.subject01_i(),this.subject02_i(),this.yanwu_i(),this.beam_i(),this.capacity_i(),this.next_i(),this.music_i(),this.revise_i(),this._Group1_i(),this.gameOver_i(),this.overImage_i(),this.GAMEOVER_i(),this.huan_i(),this.huan0_i(),this.overTX_i(),this.startGroup_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [360],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [-360],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [360],[],this._Object6,"rotation");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [-360],[],this._Object8,"rotation");
		eui.Binding.$bindProperties(this, ["gameOver"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [374.63],[],this._Object9,"y");
	}
	var _proto = KingKongSkin.prototype;

	_proto.endHuan_i = function () {
		var t = new egret.tween.TweenGroup();
		this.endHuan = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
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
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object3_i();
		t.paths = [this._To2_i()];
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To2_i = function () {
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
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object5_i();
		t.paths = [this._To3_i()];
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To3_i = function () {
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
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.props = this._Object7_i();
		t.paths = [this._To4_i()];
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto.result_i = function () {
		var t = new egret.tween.TweenGroup();
		this.result = t;
		t.items = [this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._To5_i()];
		return t;
	};
	_proto._To5_i = function () {
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
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "beam_bj_png";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.PlaneV_i = function () {
		var t = new eui.Image();
		this.PlaneV = t;
		t.source = "V1_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomCount_i = function () {
		var t = new eui.Image();
		this.bottomCount = t;
		t.source = "bottom_count_png";
		t.visible = false;
		t.x = 862;
		t.y = 634;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "subject_top_png";
		t.x = 100.49;
		t.y = -2.03;
		return t;
	};
	_proto.subject01_i = function () {
		var t = new eui.Image();
		this.subject01 = t;
		t.source = "subject_top1_png";
		t.x = 503;
		t.y = 37.97;
		return t;
	};
	_proto.subject02_i = function () {
		var t = new eui.Image();
		this.subject02 = t;
		t.source = "subject_top2_png";
		t.visible = false;
		t.x = 467.99;
		t.y = 17.5;
		return t;
	};
	_proto.yanwu_i = function () {
		var t = new eui.Rect();
		this.yanwu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0xffffff;
		t.height = 257;
		t.strokeAlpha = 0;
		t.strokeColor = 0x444444;
		t.width = 512;
		t.x = 699.33;
		t.y = 603.63;
		return t;
	};
	_proto.beam_i = function () {
		var t = new eui.Button();
		this.beam = t;
		t.horizontalCenter = 36.5;
		t.label = "";
		t.y = 954.21;
		t.skinName = KingKongSkin$Skin1;
		return t;
	};
	_proto.capacity_i = function () {
		var t = new eui.Button();
		this.capacity = t;
		t.enabled = false;
		t.height = 357;
		t.label = "";
		t.width = 527;
		t.x = 1444.5;
		t.y = 775.71;
		t.skinName = KingKongSkin$Skin2;
		return t;
	};
	_proto.next_i = function () {
		var t = new eui.Button();
		this.next = t;
		t.height = 235;
		t.label = "";
		t.width = 200;
		t.x = 1756;
		t.y = 635;
		t.skinName = KingKongSkin$Skin3;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1763;
		t.y = 26;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Button();
		this.revise = t;
		t.label = "";
		t.x = 1613.21;
		t.y = 26;
		t.skinName = KingKongSkin$Skin4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = -66;
		t.y = 190;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "left_count_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 40;
		t.text = "×1000000";
		t.textColor = 0xb8fefc;
		t.verticalAlign = "middle";
		t.width = 210;
		t.x = 293;
		t.y = 58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 40;
		t.text = "×100000";
		t.textColor = 0xB8FEFC;
		t.verticalAlign = "middle";
		t.width = 204;
		t.x = 293;
		t.y = 127;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 40;
		t.text = "×10000";
		t.textColor = 0xB8FEFC;
		t.verticalAlign = "middle";
		t.width = 201;
		t.x = 294;
		t.y = 194.96;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 40;
		t.text = "×1000";
		t.textColor = 0xB8FEFC;
		t.verticalAlign = "middle";
		t.width = 195;
		t.x = 295;
		t.y = 264.4;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 40;
		t.text = "×100";
		t.textColor = 0xB8FEFC;
		t.verticalAlign = "middle";
		t.width = 195;
		t.x = 296;
		t.y = 332.88;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 40;
		t.text = "×10";
		t.textColor = 0xB8FEFC;
		t.verticalAlign = "middle";
		t.width = 195;
		t.x = 296;
		t.y = 402.36;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 40;
		t.text = "×1";
		t.textColor = 0xB8FEFC;
		t.verticalAlign = "middle";
		t.width = 195;
		t.x = 297;
		t.y = 468.8;
		return t;
	};
	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.x = 581;
		t.y = -458;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "result_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "resultSize_png";
		t.x = 255;
		t.y = 166.4;
		return t;
	};
	_proto.overImage_i = function () {
		var t = new eui.Image();
		this.overImage = t;
		t.source = "King_bj_jpg";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.GAMEOVER_i = function () {
		var t = new eui.Image();
		this.GAMEOVER = t;
		t.source = "gameOver_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.huan_i = function () {
		var t = new eui.Group();
		this.huan = t;
		t.visible = false;
		t.x = 218.5;
		t.y = 207.13;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.image0_i(),this.image_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 482;
		t.source = "huan02_png";
		t.width = 482;
		t.x = -92.5;
		t.y = -78.76;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 506.97;
		t.source = "huan04_png";
		t.width = 506.97;
		t.x = -103.64;
		t.y = -90.42;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.anchorOffsetX = 174;
		t.anchorOffsetY = 174;
		t.height = 348;
		t.source = "huan01_png";
		t.width = 348;
		t.x = 148.5;
		t.y = 162.61;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 149.44;
		t.anchorOffsetY = 147.42;
		t.height = 294.84;
		t.source = "huan03_png";
		t.width = 298.93;
		t.x = 149.44;
		t.y = 161.65;
		return t;
	};
	_proto.huan0_i = function () {
		var t = new eui.Group();
		this.huan0 = t;
		t.visible = false;
		t.x = 1427;
		t.y = 451.13;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.image1_i(),this.image2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 430;
		t.source = "huan02_png";
		t.width = 430;
		t.x = 10.17;
		t.y = 17.04;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 454.97;
		t.source = "huan04_png";
		t.width = 454.97;
		t.x = -0.97;
		t.y = 5.38;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.anchorOffsetX = 148;
		t.anchorOffsetY = 148;
		t.height = 296;
		t.source = "huan01_png";
		t.width = 296;
		t.x = 225.17;
		t.y = 232.41;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.anchorOffsetX = 122.48;
		t.anchorOffsetY = 120.82;
		t.height = 241.64;
		t.source = "huan03_png";
		t.width = 244.99;
		t.x = 225.15;
		t.y = 230.85;
		return t;
	};
	_proto.overTX_i = function () {
		var t = new eui.Group();
		this.overTX = t;
		t.height = 1080;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.startGroup_i = function () {
		var t = new eui.Group();
		this.startGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.startBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.strokeAlpha = 0;
		t.strokeColor = 0xffffff;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Image();
		this.startBtn = t;
		t.source = "startpic_png";
		t.x = 741.5;
		t.y = 458;
		return t;
	};
	return KingKongSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/project/MyList.exml'] = window.MyList = (function (_super) {
	__extends(MyList, _super);
	function MyList() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this._Label1_i()];
	}
	var _proto = MyList.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 45;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xb8fefc;
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MyList;
})(eui.Skin);generateEUI.paths['resource/eui_skins/project/RandomClass.exml'] = window.RandomClassSkin = (function (_super) {
	__extends(RandomClassSkin, _super);
	function RandomClassSkin() {
		_super.call(this);
		this.skinParts = ["randomGroup","randomScroll"];
		
		this.height = 40;
		this.width = 33;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = RandomClassSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 33;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.randomScroll_i()];
		return t;
	};
	_proto.randomScroll_i = function () {
		var t = new eui.Scroller();
		this.randomScroll = t;
		t.enabled = false;
		t.height = 40;
		t.width = 33;
		t.x = 0.25;
		t.y = 0;
		t.viewport = this.randomGroup_i();
		return t;
	};
	_proto.randomGroup_i = function () {
		var t = new eui.Group();
		this.randomGroup = t;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.x = -4.75;
		t.y = -6;
		return t;
	};
	return RandomClassSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/project/RandomLabel.exml'] = window.RandomLabel = (function (_super) {
	__extends(RandomLabel, _super);
	function RandomLabel() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 40;
		this.width = 33;
		this.elementsContent = [this._Label1_i()];
	}
	var _proto = RandomLabel.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 40;
		t.size = 40;
		t.text = "L";
		t.textAlign = "center";
		t.textColor = 0x52f9fe;
		t.verticalAlign = "middle";
		t.width = 33;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return RandomLabel;
})(eui.Skin);generateEUI.paths['resource/eui_skins/project/Transformers.exml'] = window.TransformersSkin = (function (_super) {
	__extends(TransformersSkin, _super);
	function TransformersSkin() {
		_super.call(this);
		this.skinParts = ["btn","listGroup","myScroller"];
		
		this.height = 60;
		this.width = 60;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TransformersSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btn_i(),this.myScroller_i()];
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.66;
		t.label = "Button";
		t.visible = false;
		t.width = 54.55;
		t.x = 1;
		t.y = 3;
		return t;
	};
	_proto.myScroller_i = function () {
		var t = new eui.Scroller();
		this.myScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 60;
		t.viewport = this.listGroup_i();
		return t;
	};
	_proto.listGroup_i = function () {
		var t = new eui.Group();
		this.listGroup = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		return t;
	};
	return TransformersSkin;
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