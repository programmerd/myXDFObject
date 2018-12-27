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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Racing":"resource/eui_skins/Racing.exml","keySet":"resource/eui_skins/component/keySet.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/component/keySet.exml'] = window.keySetSkin = (function (_super) {
	__extends(keySetSkin, _super);
	function keySetSkin() {
		_super.call(this);
		this.skinParts = ["closeKeySet","keyx","keyAdd","keyMinus","key1","key2","key3","key4","key5","key6","key7","key8","key9","key0","keyDown","keyRevise","keyOk","keysetGroup"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.closeKeySet_i(),this.keysetGroup_i()];
	}
	var _proto = keySetSkin.prototype;

	_proto.closeKeySet_i = function () {
		var t = new eui.Rect();
		this.closeKeySet = t;
		t.fillAlpha = 0;
		t.height = 1080;
		t.strokeAlpha = 0;
		t.width = 1920;
		t.x = -6;
		t.y = -6;
		return t;
	};
	_proto.keysetGroup_i = function () {
		var t = new eui.Group();
		this.keysetGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.keyDown_i(),this.keyRevise_i(),this.keyOk_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "keyset_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.keyDown_i = function () {
		var t = new eui.Group();
		this.keyDown = t;
		t.x = 22;
		t.y = 29;
		t.elementsContent = [this.keyx_i(),this.keyAdd_i(),this.keyMinus_i(),this.key1_i(),this.key2_i(),this.key3_i(),this.key4_i(),this.key5_i(),this.key6_i(),this.key7_i(),this.key8_i(),this.key9_i(),this.key0_i()];
		return t;
	};
	_proto.keyx_i = function () {
		var t = new eui.Image();
		this.keyx = t;
		t.source = "keyx_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto.keyAdd_i = function () {
		var t = new eui.Image();
		this.keyAdd = t;
		t.source = "key+_png";
		t.x = 97;
		t.y = 1;
		return t;
	};
	_proto.keyMinus_i = function () {
		var t = new eui.Image();
		this.keyMinus = t;
		t.source = "key-_png";
		t.x = 192;
		t.y = 0;
		return t;
	};
	_proto.key1_i = function () {
		var t = new eui.Image();
		this.key1 = t;
		t.source = "key1_png";
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto.key2_i = function () {
		var t = new eui.Image();
		this.key2 = t;
		t.source = "key2_png";
		t.x = 97;
		t.y = 78;
		return t;
	};
	_proto.key3_i = function () {
		var t = new eui.Image();
		this.key3 = t;
		t.source = "key3_png";
		t.x = 192;
		t.y = 78;
		return t;
	};
	_proto.key4_i = function () {
		var t = new eui.Image();
		this.key4 = t;
		t.source = "key4_png";
		t.x = 1;
		t.y = 155;
		return t;
	};
	_proto.key5_i = function () {
		var t = new eui.Image();
		this.key5 = t;
		t.source = "key5_png";
		t.x = 97;
		t.y = 155;
		return t;
	};
	_proto.key6_i = function () {
		var t = new eui.Image();
		this.key6 = t;
		t.source = "key6_png";
		t.x = 192;
		t.y = 155;
		return t;
	};
	_proto.key7_i = function () {
		var t = new eui.Image();
		this.key7 = t;
		t.source = "key7_png";
		t.x = 1;
		t.y = 233;
		return t;
	};
	_proto.key8_i = function () {
		var t = new eui.Image();
		this.key8 = t;
		t.source = "key8_png";
		t.x = 97;
		t.y = 232;
		return t;
	};
	_proto.key9_i = function () {
		var t = new eui.Image();
		this.key9 = t;
		t.source = "key9_png";
		t.x = 192;
		t.y = 231;
		return t;
	};
	_proto.key0_i = function () {
		var t = new eui.Image();
		this.key0 = t;
		t.source = "key0_png";
		t.x = 97;
		t.y = 308;
		return t;
	};
	_proto.keyRevise_i = function () {
		var t = new eui.Image();
		this.keyRevise = t;
		t.source = "revise2_png";
		t.x = 20;
		t.y = 338;
		return t;
	};
	_proto.keyOk_i = function () {
		var t = new eui.Image();
		this.keyOk = t;
		t.source = "ok_png";
		t.x = 214;
		t.y = 338;
		return t;
	};
	return keySetSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/Racing.exml'] = window.RacingSkin = (function (_super) {
	__extends(RacingSkin, _super);
	function RacingSkin() {
		_super.call(this);
		this.skinParts = ["racGo","opacity","subject","col1","col2","col3","col4","submit","music","result","revise","setInput","racLabel1","racLabel2","racLabel3","racLabel","rac1","rac2","rac3","rac4","rac_position","option1","option2","options","previous","next","resultTip","tipGroup","startpic","openStart","closeMask","showFong","gameover"];
		
		this.height = 1080;
		this.width = 1920;
		this.racGo_i();
		this.opacity_i();
		this.elementsContent = [this._Group1_i(),this._Group2_i(),this.setInput_i(),this.racLabel_i(),this.rac_position_i(),this.options_i(),this._Group3_i(),this.tipGroup_i(),this.openStart_i(),this.gameover_i()];
		
		eui.Binding.$bindProperties(this, ["rac_position"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [2100],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, ["showFong"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
	}
	var _proto = RacingSkin.prototype;

	_proto.racGo_i = function () {
		var t = new egret.tween.TweenGroup();
		this.racGo = t;
		t.items = [this._TweenItem1_i()];
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
		t.duration = 3000;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto.opacity_i = function () {
		var t = new egret.tween.TweenGroup();
		this.opacity = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._To2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1000;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.subject_i(),this.col1_i(),this.col2_i(),this.col3_i(),this.col4_i(),this.submit_i(),this.music_i(),this.result_i(),this.revise_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "rac_bj_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.subject_i = function () {
		var t = new eui.Image();
		this.subject = t;
		t.source = "subject1_png";
		t.x = 233.45;
		t.y = 0;
		return t;
	};
	_proto.col1_i = function () {
		var t = new eui.Image();
		this.col1 = t;
		t.source = "col_1_1_png";
		t.x = 559;
		t.y = 190.58;
		return t;
	};
	_proto.col2_i = function () {
		var t = new eui.Image();
		this.col2 = t;
		t.source = "col_1_2_png";
		t.x = 559;
		t.y = 408.88;
		return t;
	};
	_proto.col3_i = function () {
		var t = new eui.Image();
		this.col3 = t;
		t.source = "col_1_3_png";
		t.x = 559;
		t.y = 618.42;
		return t;
	};
	_proto.col4_i = function () {
		var t = new eui.Image();
		this.col4 = t;
		t.source = "col_1_4_png";
		t.x = 559;
		t.y = 806.3;
		return t;
	};
	_proto.submit_i = function () {
		var t = new eui.Image();
		this.submit = t;
		t.source = "go_png";
		t.x = 885.09;
		t.y = 937.42;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.source = "music_png";
		t.x = 1783.3;
		t.y = 0;
		return t;
	};
	_proto.result_i = function () {
		var t = new eui.Image();
		this.result = t;
		t.source = "result_png";
		t.x = 80.98;
		t.y = 6;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Image();
		this.revise = t;
		t.source = "revise_png";
		t.x = 1648;
		t.y = 6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 291;
		t.y = 156.58;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "set_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "col_png";
		t.x = 0;
		t.y = 210.42;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "undo_png";
		t.x = 0;
		t.y = 424.42;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ask_png";
		t.x = 0;
		t.y = 630.72;
		return t;
	};
	_proto.setInput_i = function () {
		var t = new eui.Label();
		this.setInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 66.36;
		t.size = 33;
		t.text = "选择";
		t.textAlign = "center";
		t.textColor = 0xffdc36;
		t.verticalAlign = "middle";
		t.width = 216.42;
		t.x = 677;
		t.y = 221;
		return t;
	};
	_proto.racLabel_i = function () {
		var t = new eui.Group();
		this.racLabel = t;
		t.x = 588.58;
		t.y = 217.36;
		t.elementsContent = [this.racLabel1_i(),this.racLabel2_i(),this.racLabel3_i()];
		return t;
	};
	_proto.racLabel1_i = function () {
		var t = new eui.Group();
		this.racLabel1 = t;
		t.visible = false;
		t.x = 82.42;
		t.y = 3.64;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 63.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 200.42;
		t.x = 723.33;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 0;
		t.y = 219.34;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 374;
		t.y = 219.34;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 774.67;
		t.y = 219.34;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 775.57;
		t.y = 431.98;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 277.5;
		t.y = 619.25;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 765.9;
		t.y = 619.25;
		return t;
	};
	_proto.racLabel2_i = function () {
		var t = new eui.Group();
		this.racLabel2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 692.64;
		t.visible = false;
		t.width = 1116.87;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 4.24;
		t.y = 224.5;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 302.59;
		t.y = 225.46;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 640.67;
		t.y = 224.5;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 63.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 200.42;
		t.x = 913.56;
		t.y = 224.5;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 643.73;
		t.y = 436.54;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 247.17;
		t.y = 619.25;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 775.02;
		t.y = 620.77;
		return t;
	};
	_proto.racLabel3_i = function () {
		var t = new eui.Group();
		this.racLabel3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 692.64;
		t.visible = false;
		t.width = 1116.87;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i()];
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 34.08;
		t.y = 211.18;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 361.42;
		t.y = 211.18;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 361.42;
		t.y = 426.54;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 59.69;
		t.size = 42;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xFFDC36;
		t.verticalAlign = "middle";
		t.width = 203.09;
		t.x = 240.29;
		t.y = 608.6;
		return t;
	};
	_proto.rac_position_i = function () {
		var t = new eui.Group();
		this.rac_position = t;
		t.x = 33;
		t.y = 214;
		t.elementsContent = [this.rac1_i(),this.rac2_i(),this.rac3_i(),this.rac4_i()];
		return t;
	};
	_proto.rac1_i = function () {
		var t = new eui.Group();
		this.rac1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.width = 324;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rac_red_png";
		t.top = 0;
		return t;
	};
	_proto.rac2_i = function () {
		var t = new eui.Group();
		this.rac2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.width = 324;
		t.x = 0;
		t.y = 199;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rac_bule_png";
		t.top = 0;
		return t;
	};
	_proto.rac3_i = function () {
		var t = new eui.Group();
		this.rac3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.width = 324;
		t.x = 0;
		t.y = 410;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rac_yellow_png";
		t.top = 0;
		return t;
	};
	_proto.rac4_i = function () {
		var t = new eui.Group();
		this.rac4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.width = 324;
		t.x = 0;
		t.y = 599.8;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rac_purple_png";
		t.top = 0;
		return t;
	};
	_proto.options_i = function () {
		var t = new eui.Group();
		this.options = t;
		t.name = "group";
		t.x = 599.91;
		t.y = 322.7;
		t.elementsContent = [this.option1_i(),this.option2_i()];
		return t;
	};
	_proto.option1_i = function () {
		var t = new eui.Image();
		this.option1 = t;
		t.fillMode = "clip";
		t.source = "option_1_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.option2_i = function () {
		var t = new eui.Image();
		this.option2 = t;
		t.source = "option_1_2_png";
		t.x = 227.18;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 6.06;
		t.y = 511;
		t.elementsContent = [this.previous_i(),this.next_i()];
		return t;
	};
	_proto.previous_i = function () {
		var t = new eui.Image();
		this.previous = t;
		t.source = "previous_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.next_i = function () {
		var t = new eui.Image();
		this.next = t;
		t.source = "next_png";
		t.x = 1833.21;
		t.y = 2;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.resultTip_i()];
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
	_proto.resultTip_i = function () {
		var t = new eui.Image();
		this.resultTip = t;
		t.source = "tip1_png";
		t.x = 324;
		t.y = 118;
		return t;
	};
	_proto.openStart_i = function () {
		var t = new eui.Group();
		this.openStart = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.startpic_i()];
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
	_proto.startpic_i = function () {
		var t = new eui.Image();
		this.startpic = t;
		t.source = "startpic_png";
		t.x = 730;
		t.y = 416;
		return t;
	};
	_proto.gameover_i = function () {
		var t = new eui.Group();
		this.gameover = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.closeMask_i(),this.showFong_i()];
		return t;
	};
	_proto.closeMask_i = function () {
		var t = new eui.Rect();
		this.closeMask = t;
		t.fillAlpha = 0.8;
		t.height = 1080;
		t.strokeAlpha = 1;
		t.strokeColor = 0xe01111;
		t.strokeWeight = 0;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.showFong_i = function () {
		var t = new eui.Group();
		this.showFong = t;
		t.x = 0;
		t.y = 402;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "hebberg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "prosit_png";
		t.x = 353.92;
		t.y = 44;
		return t;
	};
	return RacingSkin;
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