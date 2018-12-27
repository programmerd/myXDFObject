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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Billiards":"resource/eui_skins/Billiards.exml","Keyset":"resource/eui_skins/component/Keyset.exml"};generateEUI.paths['resource/eui_skins/Billiards.exml'] = window.BilliardsSkin = (function (_super) {
	__extends(BilliardsSkin, _super);
	var BilliardsSkin$Skin1 = 	(function (_super) {
		__extends(BilliardsSkin$Skin1, _super);
		function BilliardsSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","huanletaiqiu_38_1_png")
					])
			];
		}
		var _proto = BilliardsSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "huanletaiqiu_38_png";
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
		return BilliardsSkin$Skin1;
	})(eui.Skin);

	function BilliardsSkin() {
		_super.call(this);
		this.skinParts = ["lose","music","revise","subject","writePosition","writeNumber","clickOk","inputPos1","inputPos2","inputSum","clickPosition","inputNum","inputNum1","inputNum2","clickNumber","taiqiu","taiqiu2","taiqiu1","closeTip","showTip","textRow","textNum","textSum","sumGroup","rowGroup","numGroup","resultGroup","image","image1","loseGroup","image0","guangshu","successGroup","taiqiuOver","clickStart","endStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.lose_i();
		this.elementsContent = [this._Image1_i(),this.music_i(),this.revise_i(),this.subject_i(),this.writePosition_i(),this.writeNumber_i(),this.clickOk_i(),this.clickPosition_i(),this.clickNumber_i(),this._Group1_i(),this.taiqiu_i(),this._Group2_i(),this.showTip_i(),this.resultGroup_i(),this.loseGroup_i(),this.successGroup_i(),this.taiqiuOver_i(),this.endStart_i()];
		
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [30],[],this._Object2,"rotation");
	}
	var _proto = BilliardsSkin.prototype;

	_proto.lose_i = function () {
		var t = new egret.tween.TweenGroup();
		this.lose = t;
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
		t.source = "huanletaiqiu_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1749;
		t.y = 14;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Image();
		this.revise = t;
		t.source = "revise_png";
		t.x = 1605.5;
		t.y = 19;
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "huanletaiqiu_43_png";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto.writePosition_i = function () {
		var t = new eui.Image();
		this.writePosition = t;
		t.source = "position1_png";
		t.touchEnabled = true;
		t.x = 36;
		t.y = 335;
		return t;
	};
	_proto.writeNumber_i = function () {
		var t = new eui.Image();
		this.writeNumber = t;
		t.source = "number1_png";
		t.x = 1504;
		t.y = 292.5;
		return t;
	};
	_proto.clickOk_i = function () {
		var t = new eui.Button();
		this.clickOk = t;
		t.label = "";
		t.x = 822;
		t.y = 934;
		t.skinName = BilliardsSkin$Skin1;
		return t;
	};
	_proto.clickPosition_i = function () {
		var t = new eui.Group();
		this.clickPosition = t;
		t.name = "group";
		t.x = 95.83;
		t.y = 440;
		t.elementsContent = [this.inputPos1_i(),this.inputPos2_i(),this.inputSum_i()];
		return t;
	};
	_proto.inputPos1_i = function () {
		var t = new eui.Label();
		this.inputPos1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 79.33;
		t.name = "position";
		t.size = 48;
		t.text = "输入";
		t.textAlign = "center";
		t.textColor = 0xaa4801;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 40.67;
		t.y = 0;
		return t;
	};
	_proto.inputPos2_i = function () {
		var t = new eui.Label();
		this.inputPos2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 79.33;
		t.name = "position";
		t.size = 48;
		t.text = "输入";
		t.textAlign = "center";
		t.textColor = 0xaa4801;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 40.67;
		t.y = 100;
		return t;
	};
	_proto.inputSum_i = function () {
		var t = new eui.Label();
		this.inputSum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 72.66;
		t.name = "position";
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xaa4801;
		t.verticalAlign = "middle";
		t.width = 276;
		t.x = 0;
		t.y = 247.01;
		return t;
	};
	_proto.clickNumber_i = function () {
		var t = new eui.Group();
		this.clickNumber = t;
		t.name = "group";
		t.x = 1564.5;
		t.y = 401.01;
		t.elementsContent = [this.inputNum_i(),this.inputNum1_i(),this.inputNum2_i()];
		return t;
	};
	_proto.inputNum_i = function () {
		var t = new eui.Label();
		this.inputNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 72.66;
		t.name = "number";
		t.size = 48;
		t.text = "输入";
		t.textAlign = "center";
		t.textColor = 0xaa4801;
		t.verticalAlign = "middle";
		t.width = 276;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.inputNum1_i = function () {
		var t = new eui.Label();
		this.inputNum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 72.66;
		t.name = "number";
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xaa4801;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 40;
		t.y = 144.33;
		return t;
	};
	_proto.inputNum2_i = function () {
		var t = new eui.Label();
		this.inputNum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 72.66;
		t.name = "number";
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xaa4801;
		t.verticalAlign = "middle";
		t.width = 196;
		t.x = 40;
		t.y = 243.67;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 880.4;
		t.y = 889.8;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 33;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 66;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 99;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 132.4;
		t.y = 0;
		return t;
	};
	_proto.taiqiu_i = function () {
		var t = new eui.Group();
		this.taiqiu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.width = 1866;
		t.x = 26.5;
		t.y = 154;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 720;
		t.width = 989;
		t.x = 462.5;
		t.y = 154;
		t.elementsContent = [this.taiqiu2_i(),this.taiqiu1_i()];
		return t;
	};
	_proto.taiqiu2_i = function () {
		var t = new eui.Image();
		this.taiqiu2 = t;
		t.source = "taiqiu_png";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto.taiqiu1_i = function () {
		var t = new eui.Image();
		this.taiqiu1 = t;
		t.source = "taiqiu1_png";
		t.visible = false;
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto.showTip_i = function () {
		var t = new eui.Group();
		this.showTip = t;
		t.height = 1080;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.closeTip_i(),this._Image7_i()];
		return t;
	};
	_proto.closeTip_i = function () {
		var t = new eui.Rect();
		this.closeTip = t;
		t.fillAlpha = 0.6;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_44_png";
		t.x = 304;
		t.y = 292.5;
		return t;
	};
	_proto.resultGroup_i = function () {
		var t = new eui.Group();
		this.resultGroup = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.textRow_i(),this.textNum_i(),this.textSum_i(),this.sumGroup_i(),this.rowGroup_i(),this.numGroup_i()];
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
		t.source = "huanletaiqiu_24_png";
		t.x = 530;
		t.y = 258;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_25_png";
		t.x = 676;
		t.y = 401.01;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_25_png";
		t.x = 1056;
		t.y = 395.34;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 1088;
		t.y = 618;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 1132;
		t.y = 618;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 1176.5;
		t.y = 618;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 702;
		t.y = 618;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 746;
		t.y = 618;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_23_png";
		t.x = 790.5;
		t.y = 618;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_45_png";
		t.x = 836;
		t.y = 517;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fz";
		t.size = 48;
		t.text = "第";
		t.textAlign = "center";
		t.textColor = 0xaa4801;
		t.verticalAlign = "middle";
		t.x = 612;
		t.y = 414;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fz";
		t.size = 48;
		t.text = "个";
		t.textAlign = "center";
		t.textColor = 0xAA4801;
		t.verticalAlign = "middle";
		t.x = 1263;
		t.y = 414;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fz";
		t.size = 48;
		t.text = "行， 第";
		t.textAlign = "center";
		t.textColor = 0xAA4801;
		t.verticalAlign = "middle";
		t.x = 888;
		t.y = 414;
		return t;
	};
	_proto.textRow_i = function () {
		var t = new eui.Label();
		this.textRow = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 72;
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xAA4801;
		t.verticalAlign = "middle";
		t.width = 187;
		t.x = 683;
		t.y = 405.34;
		return t;
	};
	_proto.textNum_i = function () {
		var t = new eui.Label();
		this.textNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 72;
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xAA4801;
		t.verticalAlign = "middle";
		t.width = 187;
		t.x = 1064;
		t.y = 401.01;
		return t;
	};
	_proto.textSum_i = function () {
		var t = new eui.Label();
		this.textSum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 124;
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xAA4801;
		t.verticalAlign = "middle";
		t.width = 121;
		t.x = 888.5;
		t.y = 564;
		return t;
	};
	_proto.sumGroup_i = function () {
		var t = new eui.Group();
		this.sumGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 100;
		t.x = 900;
		t.y = 578;
		return t;
	};
	_proto.rowGroup_i = function () {
		var t = new eui.Group();
		this.rowGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 100;
		t.x = 726;
		t.y = 392;
		return t;
	};
	_proto.numGroup_i = function () {
		var t = new eui.Group();
		this.numGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.width = 100;
		t.x = 1120;
		t.y = 396;
		return t;
	};
	_proto.loseGroup_i = function () {
		var t = new eui.Group();
		this.loseGroup = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.image_i(),this.image1_i(),this._Image18_i(),this._Image19_i(),this._Image20_i()];
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
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 540;
		t.anchorOffsetY = 515;
		t.source = "huanletaiqiu_32_png";
		t.x = 940.5;
		t.y = 514.5;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.anchorOffsetX = 548;
		t.anchorOffsetY = 518;
		t.source = "huanletaiqiu_32_1_png";
		t.x = 981;
		t.y = 517.5;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_33_png";
		t.x = 641.5;
		t.y = 427.5;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_34_png";
		t.x = 794;
		t.y = 335;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_35_png";
		t.x = 587;
		t.y = 540;
		return t;
	};
	_proto.successGroup_i = function () {
		var t = new eui.Group();
		this.successGroup = t;
		t.touchChildren = false;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this.image0_i(),this.guangshu_i(),this._Image21_i(),this._Image22_i(),this._Image23_i()];
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
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.anchorOffsetX = 540;
		t.anchorOffsetY = 515;
		t.source = "huanletaiqiu_26_png";
		t.x = 960;
		t.y = 509;
		return t;
	};
	_proto.guangshu_i = function () {
		var t = new eui.Group();
		this.guangshu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 320;
		t.touchChildren = false;
		t.width = 320;
		t.x = 960;
		t.y = 533.5;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_29_png";
		t.x = 641.5;
		t.y = 316;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_30_png";
		t.x = 802;
		t.y = 317;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "huanletaiqiu_31_png";
		t.x = 600;
		t.y = 586.5;
		return t;
	};
	_proto.taiqiuOver_i = function () {
		var t = new eui.Group();
		this.taiqiuOver = t;
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
		t.elementsContent = [this._Rect4_i(),this.clickStart_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
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
		t.y = 494;
		return t;
	};
	return BilliardsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
		return KeysetSkin$Skin2;
	})(eui.Skin);

	var KeysetSkin$Skin3 = 	(function (_super) {
		__extends(KeysetSkin$Skin3, _super);
		function KeysetSkin$Skin3() {
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
		var _proto = KeysetSkin$Skin3.prototype;

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
		return KeysetSkin$Skin3;
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
		t.skinName = KeysetSkin$Skin2;
		return t;
	};
	_proto.keyOk_i = function () {
		var t = new eui.Button();
		this.keyOk = t;
		t.label = "";
		t.x = 221;
		t.y = 217;
		t.skinName = KeysetSkin$Skin3;
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
})(eui.Skin);