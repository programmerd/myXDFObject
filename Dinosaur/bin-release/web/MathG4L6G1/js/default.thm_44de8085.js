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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Dinosaur":"resource/eui_skins/Dinosaur.exml","cacl":"resource/eui_skins/component/cacl.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
		this.skinParts = ["closeCacl","caclGroup","ac","ride","remove","minus","add","submit","sum","sum0"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.closeCacl_i(),this._Group1_i()];
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 554.17;
		t.y = 580.03;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/Dinosaur.exml'] = window.DinosaurSkin = (function (_super) {
	__extends(DinosaurSkin, _super);
	function DinosaurSkin() {
		_super.call(this);
		this.skinParts = ["stone00","stone01","stone02","stone10","stone11","stone12","stone20","stone21","stone22","sum","tip","cacl","music","revise","meat","egg","pokrGroup","wrong","next","previous","labelSum","label00","label12","label21","label20","label11","label10","label01","label02","label22","inputLabel","subject","tipImage","tipGroup","subjectTip","startButton","startGroupe"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Group1_i(),this.sum_i(),this.tip_i(),this.cacl_i(),this.music_i(),this.revise_i(),this.meat_i(),this.egg_i(),this.pokrGroup_i(),this.wrong_i(),this.next_i(),this.previous_i(),this.labelSum_i(),this.inputLabel_i(),this.subject_i(),this.tipGroup_i(),this.subjectTip_i(),this.startGroupe_i()];
	}
	var _proto = DinosaurSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.stone00_i(),this.stone01_i(),this.stone02_i(),this.stone10_i(),this.stone11_i(),this.stone12_i(),this.stone20_i(),this.stone21_i(),this.stone22_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bj_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "stone_bj_png";
		t.x = 130.4;
		t.y = 618.48;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rectangle_png";
		t.x = 920.41;
		t.y = 348.73;
		return t;
	};
	_proto.stone00_i = function () {
		var t = new eui.Image();
		this.stone00 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1062.65;
		t.y = 363.32;
		return t;
	};
	_proto.stone01_i = function () {
		var t = new eui.Image();
		this.stone01 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1245.8000000000002;
		t.y = 366;
		return t;
	};
	_proto.stone02_i = function () {
		var t = new eui.Image();
		this.stone02 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1437.98;
		t.y = 364;
		return t;
	};
	_proto.stone10_i = function () {
		var t = new eui.Image();
		this.stone10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1018.7200000000001;
		t.y = 556.32;
		return t;
	};
	_proto.stone11_i = function () {
		var t = new eui.Image();
		this.stone11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1243.72;
		t.y = 556.32;
		return t;
	};
	_proto.stone12_i = function () {
		var t = new eui.Image();
		this.stone12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1464.8;
		t.y = 556.32;
		return t;
	};
	_proto.stone20_i = function () {
		var t = new eui.Image();
		this.stone20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 990.61;
		t.y = 744.15;
		return t;
	};
	_proto.stone21_i = function () {
		var t = new eui.Image();
		this.stone21 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1243.72;
		t.y = 744.15;
		return t;
	};
	_proto.stone22_i = function () {
		var t = new eui.Image();
		this.stone22 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stone01_png";
		t.x = 1511.48;
		t.y = 750.8100000000001;
		return t;
	};
	_proto.sum_i = function () {
		var t = new eui.Image();
		this.sum = t;
		t.source = "sum_png";
		t.x = 1178.72;
		t.y = 288.66;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Image();
		this.tip = t;
		t.source = "top_png";
		t.x = 990.3;
		t.y = 951;
		return t;
	};
	_proto.cacl_i = function () {
		var t = new eui.Image();
		this.cacl = t;
		t.source = "caclButton_png";
		t.x = 1388.72;
		t.y = 947;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1683.8;
		t.y = 25;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Image();
		this.revise = t;
		t.source = "revise_png";
		t.x = 1538;
		t.y = 29;
		return t;
	};
	_proto.meat_i = function () {
		var t = new eui.Image();
		this.meat = t;
		t.source = "meat_png";
		t.visible = false;
		t.x = 79;
		t.y = 947;
		return t;
	};
	_proto.egg_i = function () {
		var t = new eui.Image();
		this.egg = t;
		t.source = "egg_png";
		t.x = 270.09;
		t.y = 287.99;
		return t;
	};
	_proto.pokrGroup_i = function () {
		var t = new eui.Group();
		this.pokrGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1078;
		t.width = 890;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wrong_i = function () {
		var t = new eui.Group();
		this.wrong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 304;
		t.width = 242;
		t.x = 318;
		t.y = 247;
		return t;
	};
	_proto.next_i = function () {
		var t = new eui.Image();
		this.next = t;
		t.source = "next_png";
		t.x = 1683.8;
		t.y = 549;
		return t;
	};
	_proto.previous_i = function () {
		var t = new eui.Image();
		this.previous = t;
		t.source = "previous_png";
		t.x = 895;
		t.y = 547;
		return t;
	};
	_proto.labelSum_i = function () {
		var t = new eui.Label();
		this.labelSum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "点击输入";
		t.textAlign = "center";
		t.textColor = 0xd4670d;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 1310.72;
		t.y = 285.99;
		return t;
	};
	_proto.inputLabel_i = function () {
		var t = new eui.Group();
		this.inputLabel = t;
		t.x = 996.3;
		t.y = 392;
		t.elementsContent = [this.label00_i(),this.label12_i(),this.label21_i(),this.label20_i(),this.label11_i(),this.label10_i(),this.label01_i(),this.label02_i(),this.label22_i()];
		return t;
	};
	_proto.label00_i = function () {
		var t = new eui.Label();
		this.label00 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635f39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 68;
		t.y = 0;
		return t;
	};
	_proto.label12_i = function () {
		var t = new eui.Label();
		this.label12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635F39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 470.42;
		t.y = 194;
		return t;
	};
	_proto.label21_i = function () {
		var t = new eui.Label();
		this.label21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635F39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 251.7;
		t.y = 383;
		return t;
	};
	_proto.label20_i = function () {
		var t = new eui.Label();
		this.label20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635F39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = -2;
		t.y = 383;
		return t;
	};
	_proto.label11_i = function () {
		var t = new eui.Label();
		this.label11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635F39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 247.7;
		t.y = 194;
		return t;
	};
	_proto.label10_i = function () {
		var t = new eui.Label();
		this.label10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xd4670d;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 25;
		t.y = 194;
		return t;
	};
	_proto.label01_i = function () {
		var t = new eui.Label();
		this.label01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635F39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 253.7;
		t.y = 0;
		return t;
	};
	_proto.label02_i = function () {
		var t = new eui.Label();
		this.label02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635F39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 443.7;
		t.y = 0;
		return t;
	};
	_proto.label22_i = function () {
		var t = new eui.Label();
		this.label22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 104;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x635F39;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 516;
		t.y = 383;
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "subject_png";
		t.x = 261;
		t.y = -21;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.tipImage_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.strokeAlpha = 0;
		t.strokeWeight = 0;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipImage_i = function () {
		var t = new eui.Image();
		this.tipImage = t;
		t.source = "rectangle01_png";
		t.x = 676.09;
		t.y = 183;
		return t;
	};
	_proto.subjectTip_i = function () {
		var t = new eui.Group();
		this.subjectTip = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Image4_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "subjectTip_png";
		t.x = 533.72;
		t.y = 251;
		return t;
	};
	_proto.startGroupe_i = function () {
		var t = new eui.Group();
		this.startGroupe = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this.startButton_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 1080;
		t.strokeAlpha = 0;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.startButton_i = function () {
		var t = new eui.Image();
		this.startButton = t;
		t.source = "startpic_png";
		t.x = 741.5;
		t.y = 487;
		return t;
	};
	return DinosaurSkin;
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
})(eui.Skin);