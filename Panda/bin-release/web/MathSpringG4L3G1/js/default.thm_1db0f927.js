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
	function IndexSkin() {
		_super.call(this);
		this.skinParts = ["pandas","music","reset","subject","result","resultImg","digit","rank1","rank2","rank3","rank4","rank","assemble1","assemble2","assemble3","assemble4","assemble","panda","resultGroup1","resultGroup2","resultGroup3","resultGroup4","dataGroup","bomb","bombGroup","panzi1","panzi2","panzi3","panzi4","panzi","shiwu1","shiwu2","shiwu3","shiwu4","shiwu","tipResult","resultMask","tipSub","hint","keep","revise","keepOn","keepMask","overs","gameOver","clickStart","endStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.pandas_i(),this.music_i(),this.reset_i(),this.subject_i(),this.result_i(),this.resultImg_i(),this.digit_i(),this.rank_i(),this.assemble_i(),this.panda_i(),this.dataGroup_i(),this.bomb_i(),this.bombGroup_i(),this.panzi_i(),this.shiwu_i(),this.resultMask_i(),this.hint_i(),this.keep_i(),this.revise_i(),this.keepMask_i(),this.gameOver_i(),this.endStart_i()];
	}
	var _proto = IndexSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "beijing_png";
		t.x = -3;
		t.y = 0;
		return t;
	};
	_proto.pandas_i = function () {
		var t = new eui.Image();
		this.pandas = t;
		t.source = "pandaImg_png";
		t.x = 455.5;
		t.y = 221.5;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1724.7;
		t.y = 12;
		return t;
	};
	_proto.reset_i = function () {
		var t = new eui.Image();
		this.reset = t;
		t.source = "revise_png";
		t.x = 1579.12;
		t.y = 17;
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "timu1_png";
		t.x = 157.5;
		t.y = 0;
		return t;
	};
	_proto.result_i = function () {
		var t = new eui.Image();
		this.result = t;
		t.source = "daan_png";
		t.x = 64.5;
		t.y = 14;
		return t;
	};
	_proto.resultImg_i = function () {
		var t = new eui.Image();
		this.resultImg = t;
		t.source = "daan1_png";
		t.x = 1476;
		t.y = 925;
		return t;
	};
	_proto.digit_i = function () {
		var t = new eui.Image();
		this.digit = t;
		t.source = "xiamian1_png";
		t.x = 475;
		t.y = 939;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Group();
		this.rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 551;
		t.name = "group";
		t.width = 148;
		t.x = 94.5;
		t.y = 202;
		t.elementsContent = [this.rank1_i(),this.rank2_i(),this.rank3_i(),this.rank4_i()];
		return t;
	};
	_proto.rank1_i = function () {
		var t = new eui.Group();
		this.rank1 = t;
		t.name = "group";
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "A33_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rank2_i = function () {
		var t = new eui.Group();
		this.rank2 = t;
		t.name = "group";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "A51_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "A53_png";
		t.x = 0;
		t.y = 195;
		return t;
	};
	_proto.rank3_i = function () {
		var t = new eui.Group();
		this.rank3 = t;
		t.name = "group";
		t.visible = false;
		t.x = 0;
		t.y = 1;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "A73_png";
		t.x = 4.5;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "A42_png";
		t.x = 0;
		t.y = 194;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "A22_png";
		t.x = 4.5;
		t.y = 390;
		return t;
	};
	_proto.rank4_i = function () {
		var t = new eui.Group();
		this.rank4 = t;
		t.name = "group";
		t.visible = false;
		t.x = 2;
		t.y = 3;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "A42_png";
		t.x = 0;
		t.y = 194;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "A22_png";
		t.x = 4.5;
		t.y = 390;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "A63_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.assemble_i = function () {
		var t = new eui.Group();
		this.assemble = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 560;
		t.name = "group";
		t.width = 153;
		t.x = 1657.88;
		t.y = 203;
		t.elementsContent = [this.assemble1_i(),this.assemble2_i(),this.assemble3_i(),this.assemble4_i()];
		return t;
	};
	_proto.assemble1_i = function () {
		var t = new eui.Group();
		this.assemble1 = t;
		t.name = "group";
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "C33_png";
		t.x = 3.5;
		t.y = 0;
		return t;
	};
	_proto.assemble2_i = function () {
		var t = new eui.Group();
		this.assemble2 = t;
		t.name = "group";
		t.visible = false;
		t.x = 6.12;
		t.y = -1;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "C51_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "C53_png";
		t.x = 0.88;
		t.y = 195.5;
		return t;
	};
	_proto.assemble3_i = function () {
		var t = new eui.Group();
		this.assemble3 = t;
		t.name = "group";
		t.visible = false;
		t.x = 0;
		t.y = -1;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "C73_png";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "C42_png";
		t.x = 0;
		t.y = 201;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "C22_png";
		t.x = 4;
		t.y = 391;
		return t;
	};
	_proto.assemble4_i = function () {
		var t = new eui.Group();
		this.assemble4 = t;
		t.name = "group";
		t.visible = false;
		t.x = -1;
		t.y = 0;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "C63_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "C42_png";
		t.x = 1;
		t.y = 196;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "C22_png";
		t.x = 5;
		t.y = 392;
		return t;
	};
	_proto.panda_i = function () {
		var t = new eui.Group();
		this.panda = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 421.21;
		t.width = 933.33;
		t.x = 490.83;
		t.y = 335.76;
		return t;
	};
	_proto.dataGroup_i = function () {
		var t = new eui.Group();
		this.dataGroup = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.horizontalCenter = 1;
		t.width = 1346;
		t.x = 420;
		t.y = 739;
		t.elementsContent = [this.resultGroup1_i(),this.resultGroup2_i(),this.resultGroup3_i(),this.resultGroup4_i()];
		return t;
	};
	_proto.resultGroup1_i = function () {
		var t = new eui.Group();
		this.resultGroup1 = t;
		t.height = 200;
		t.visible = false;
		t.width = 1346;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 528;
		t.y = 62;
		return t;
	};
	_proto.resultGroup2_i = function () {
		var t = new eui.Group();
		this.resultGroup2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.visible = false;
		t.width = 1346;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Image23_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 324;
		t.y = 55;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 764.5;
		t.y = 52.5;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "X_png";
		t.x = 613;
		t.y = 44.5;
		return t;
	};
	_proto.resultGroup3_i = function () {
		var t = new eui.Group();
		this.resultGroup3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.visible = false;
		t.width = 1346;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 115;
		t.y = 52;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 542;
		t.y = 52;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 988.62;
		t.y = 48;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "X_png";
		t.x = 404;
		t.y = 40;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "X_png";
		t.x = 829.5;
		t.y = 41;
		return t;
	};
	_proto.resultGroup4_i = function () {
		var t = new eui.Group();
		this.resultGroup4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.width = 1346;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 115;
		t.y = 52;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 542;
		t.y = 52;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "kuohao_png";
		t.x = 988.62;
		t.y = 48;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "X_png";
		t.x = 404;
		t.y = 40;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "X_png";
		t.x = 829.5;
		t.y = 41;
		return t;
	};
	_proto.bomb_i = function () {
		var t = new eui.Group();
		this.bomb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 274;
		t.width = 246;
		t.x = 832.5;
		t.y = 1085.34;
		t.elementsContent = [this._Image34_i()];
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "boo_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bombGroup_i = function () {
		var t = new eui.Group();
		this.bombGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 955.5;
		t.y = 521.5;
		return t;
	};
	_proto.panzi_i = function () {
		var t = new eui.Group();
		this.panzi = t;
		t.x = 385.68;
		t.y = 746;
		t.elementsContent = [this.panzi1_i(),this.panzi2_i(),this.panzi3_i(),this.panzi4_i()];
		return t;
	};
	_proto.panzi1_i = function () {
		var t = new eui.Group();
		this.panzi1 = t;
		t.visible = false;
		t.x = 414.29;
		t.y = 15;
		t.elementsContent = [this._Image35_i()];
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.panzi2_i = function () {
		var t = new eui.Group();
		this.panzi2 = t;
		t.visible = false;
		t.x = 192.88;
		t.y = 4.56;
		t.elementsContent = [this._Image36_i(),this._Image37_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 461;
		t.y = 1;
		return t;
	};
	_proto.panzi3_i = function () {
		var t = new eui.Group();
		this.panzi3 = t;
		t.visible = false;
		t.x = 0;
		t.y = 2.12;
		t.elementsContent = [this._Image38_i(),this._Image39_i(),this._Image40_i()];
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 415;
		t.y = 0.5;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 864.62;
		t.y = 0;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.panzi4_i = function () {
		var t = new eui.Group();
		this.panzi4 = t;
		t.visible = false;
		t.x = 0.91;
		t.y = 0;
		t.elementsContent = [this._Image41_i(),this._Image42_i(),this._Image43_i()];
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 415;
		t.y = 0.5;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 864.62;
		t.y = 0;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.source = "panzi_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.shiwu_i = function () {
		var t = new eui.Group();
		this.shiwu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 171.61;
		t.name = "group";
		t.touchEnabled = true;
		t.width = 1181.66;
		t.x = 377.59;
		t.y = 739.89;
		t.elementsContent = [this.shiwu1_i(),this.shiwu2_i(),this.shiwu3_i(),this.shiwu4_i()];
		return t;
	};
	_proto.shiwu1_i = function () {
		var t = new eui.Group();
		this.shiwu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150.3;
		t.name = "group";
		t.visible = false;
		t.width = 175.69;
		t.x = 493.33;
		t.y = 24.75;
		t.elementsContent = [this._Image44_i()];
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.source = "xigua_png";
		t.x = 17.97;
		t.y = 5.95;
		return t;
	};
	_proto.shiwu2_i = function () {
		var t = new eui.Group();
		this.shiwu2 = t;
		t.name = "group";
		t.visible = false;
		t.x = 281.82;
		t.y = 18.18;
		t.elementsContent = [this._Image45_i(),this._Image46_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.source = "luobo_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.source = "nangua_png";
		t.x = 465.77;
		t.y = 0;
		return t;
	};
	_proto.shiwu3_i = function () {
		var t = new eui.Group();
		this.shiwu3 = t;
		t.name = "group";
		t.visible = false;
		t.x = 100;
		t.y = 12.12;
		t.elementsContent = [this._Image47_i(),this._Image48_i(),this._Image49_i()];
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.source = "zhuzi_png";
		t.x = 0;
		t.y = 2.5;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.source = "zhuzi_png";
		t.x = 415.5;
		t.y = 2.5;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.source = "zhuzi_png";
		t.x = 864.5;
		t.y = 0;
		return t;
	};
	_proto.shiwu4_i = function () {
		var t = new eui.Group();
		this.shiwu4 = t;
		t.name = "group";
		t.visible = false;
		t.x = 96.97;
		t.y = 15.15;
		t.elementsContent = [this._Image50_i(),this._Image51_i(),this._Image52_i()];
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.source = "wosun_png";
		t.x = 0;
		t.y = 2.5;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.source = "wosun_png";
		t.x = 413.5;
		t.y = 2.5;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.source = "wosun_png";
		t.x = 864.5;
		t.y = 0;
		return t;
	};
	_proto.resultMask_i = function () {
		var t = new eui.Group();
		this.resultMask = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.tipResult_i()];
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
	_proto.tipResult_i = function () {
		var t = new eui.Image();
		this.tipResult = t;
		t.source = "xiti1_png";
		t.x = 386.5;
		t.y = 120;
		return t;
	};
	_proto.hint_i = function () {
		var t = new eui.Group();
		this.hint = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.tipSub_i()];
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
	_proto.tipSub_i = function () {
		var t = new eui.Image();
		this.tipSub = t;
		t.source = "fangda1_png";
		t.x = 295;
		t.y = 357;
		return t;
	};
	_proto.keep_i = function () {
		var t = new eui.Image();
		this.keep = t;
		t.source = "zailaiyici2_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Image();
		this.revise = t;
		t.source = "chexiao_png";
		t.x = 1632;
		t.y = 775.27;
		return t;
	};
	_proto.keepMask_i = function () {
		var t = new eui.Group();
		this.keepMask = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image53_i(),this.keepOn_i()];
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.source = "jiesuo_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.keepOn_i = function () {
		var t = new eui.Image();
		this.keepOn = t;
		t.source = "jixutiaozhan2_png";
		t.x = 740;
		t.y = 449;
		return t;
	};
	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.height = 1080;
		t.touchChildren = false;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.overs_i(),this._Rect3_i()];
		return t;
	};
	_proto.overs_i = function () {
		var t = new eui.Group();
		this.overs = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145.45;
		t.width = 139.39;
		t.x = 957;
		t.y = 580;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 1080;
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
		t.elementsContent = [this._Rect4_i(),this.clickStart_i()];
		return t;
	};
	_proto._Rect4_i = function () {
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
		t.visible = false;
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
		t.visible = false;
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