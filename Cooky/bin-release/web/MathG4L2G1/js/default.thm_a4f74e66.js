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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","CookySkin":"resource/eui_skins/CookySkin.exml","MyButton":"resource/eui_skins/MyButton.exml","ClickBtb":"resource/eui_skins/conponemt/ClickBtb.exml","Keyset":"resource/eui_skins/components/Keyset.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.source = "button_up_png";
		t.visible = false;
		t.width = 91;
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.left = 5;
		t.right = 1;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.bottom = 25;
		t.left = 50;
		t.right = 50;
		t.top = 25;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/components/Keyset.exml'] = window.KeysetSkin = (function (_super) {
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
		this.skinParts = ["keyRevise","keyOk","key0","key1","key2","key3","key4","key5","key6","key7","key8","key9","keySet"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.keySet_i()];
	}
	var _proto = KeysetSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
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
	_proto.keySet_i = function () {
		var t = new eui.Group();
		this.keySet = t;
		t.x = 127;
		t.y = 138;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/conponemt/ClickBtb.exml'] = window.ClickBtn = (function (_super) {
	__extends(ClickBtn, _super);
	function ClickBtn() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 76;
		this.width = 76;
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
	var _proto = ClickBtn.prototype;

	return ClickBtn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/Subject1.exml'] = window.Subject1 = (function (_super) {
	__extends(Subject1, _super);
	function Subject1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 526;
		this.width = 902;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Subject1.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "subject1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Subject1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/surfaceCellCount.exml'] = window.surfaceCellCount = (function (_super) {
	__extends(surfaceCellCount, _super);
	var surfaceCellCount$Skin3 = 	(function (_super) {
		__extends(surfaceCellCount$Skin3, _super);
		function surfaceCellCount$Skin3() {
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
		var _proto = surfaceCellCount$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "alertBtn4_png";
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
		return surfaceCellCount$Skin3;
	})(eui.Skin);

	function surfaceCellCount() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 103;
		this.width = 233;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = surfaceCellCount.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.label = "";
		t.width = 216;
		t.x = 6.5;
		t.y = 15;
		t.skinName = surfaceCellCount$Skin3;
		return t;
	};
	return surfaceCellCount;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/indoorCellBtn.exml'] = window.indoorCellBtn = (function (_super) {
	__extends(indoorCellBtn, _super);
	var indoorCellBtn$Skin4 = 	(function (_super) {
		__extends(indoorCellBtn$Skin4, _super);
		function indoorCellBtn$Skin4() {
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
		var _proto = indoorCellBtn$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "alertBtn3_png";
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
		return indoorCellBtn$Skin4;
	})(eui.Skin);

	function indoorCellBtn() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 105;
		this.width = 233;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = indoorCellBtn.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 219;
		t.x = 5.5;
		t.y = 14;
		t.skinName = indoorCellBtn$Skin4;
		return t;
	};
	return indoorCellBtn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CookySkin.exml'] = window.CookySkinSkin = (function (_super) {
	__extends(CookySkinSkin, _super);
	var CookySkinSkin$Skin5 = 	(function (_super) {
		__extends(CookySkinSkin$Skin5, _super);
		function CookySkinSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","start-disabled_png")
					])
			];
		}
		var _proto = CookySkinSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "start_png";
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
		return CookySkinSkin$Skin5;
	})(eui.Skin);

	var CookySkinSkin$Skin6 = 	(function (_super) {
		__extends(CookySkinSkin$Skin6, _super);
		function CookySkinSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","hortation-disabled_png")
					])
			];
		}
		var _proto = CookySkinSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hortation_png";
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
		return CookySkinSkin$Skin6;
	})(eui.Skin);

	var CookySkinSkin$Skin7 = 	(function (_super) {
		__extends(CookySkinSkin$Skin7, _super);
		function CookySkinSkin$Skin7() {
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
		var _proto = CookySkinSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "clearBtn_png";
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
		return CookySkinSkin$Skin7;
	})(eui.Skin);

	var CookySkinSkin$Skin8 = 	(function (_super) {
		__extends(CookySkinSkin$Skin8, _super);
		function CookySkinSkin$Skin8() {
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
		var _proto = CookySkinSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "music_png";
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
		return CookySkinSkin$Skin8;
	})(eui.Skin);

	var CookySkinSkin$Skin9 = 	(function (_super) {
		__extends(CookySkinSkin$Skin9, _super);
		function CookySkinSkin$Skin9() {
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
		var _proto = CookySkinSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "load_png";
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
		return CookySkinSkin$Skin9;
	})(eui.Skin);

	var CookySkinSkin$Skin10 = 	(function (_super) {
		__extends(CookySkinSkin$Skin10, _super);
		function CookySkinSkin$Skin10() {
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
		var _proto = CookySkinSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
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
		return CookySkinSkin$Skin10;
	})(eui.Skin);

	var CookySkinSkin$Skin11 = 	(function (_super) {
		__extends(CookySkinSkin$Skin11, _super);
		function CookySkinSkin$Skin11() {
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
		var _proto = CookySkinSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "alertOk_png";
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
		return CookySkinSkin$Skin11;
	})(eui.Skin);

	function CookySkinSkin() {
		_super.call(this);
		this.skinParts = ["subject","over01","cookyScale1","cookyScale3","cookyScale2","subjectBj","start","hortation","clearBtn","uradBorder","ormosiaBorder","urad","ormosia","cooky1","cooky2","cooky3","canvasDiv","lineRect","r00","r01","r04","r03","r10","r11","r02","r12","r13","r14","r20","r21","r22","r23","r24","r30","r31","r32","r33","r34","r40","r41","r42","r43","r44","r50","r51","r52","r53","r54","r60","r61","r62","r63","r64","r70","r71","r72","r73","r74","music","onLoad","revise","cookyLabel1","cookyLabel2","cookyLabel3","subjectAlert","surfaceCell","indoorCell","suface","indoor","labelAClick","labelBClick","labelFClick","labelEClick","labelC","lvCount","labelD","redCount","labelA","labelB","labelE","labelF","alertOk","alertMask","image","gameOver"];
		
		this.height = 1080;
		this.width = 1920;
		this.subject_i();
		this.over01_i();
		this.cookyScale1_i();
		this.cookyScale3_i();
		this.cookyScale2_i();
		this.elementsContent = [this._Image1_i(),this.subjectBj_i(),this._Image2_i(),this._Image3_i(),this.start_i(),this.hortation_i(),this.clearBtn_i(),this.uradBorder_i(),this.ormosiaBorder_i(),this.urad_i(),this.ormosia_i(),this.cooky1_i(),this.cooky2_i(),this.cooky3_i(),this.canvasDiv_i(),this.lineRect_i(),this.r00_i(),this.r01_i(),this.r04_i(),this.r03_i(),this.r10_i(),this.r11_i(),this.r02_i(),this.r12_i(),this.r13_i(),this.r14_i(),this.r20_i(),this.r21_i(),this.r22_i(),this.r23_i(),this.r24_i(),this.r30_i(),this.r31_i(),this.r32_i(),this.r33_i(),this.r34_i(),this.r40_i(),this.r41_i(),this.r42_i(),this.r43_i(),this.r44_i(),this.r50_i(),this.r51_i(),this.r52_i(),this.r53_i(),this.r54_i(),this.r60_i(),this.r61_i(),this.r62_i(),this.r63_i(),this.r64_i(),this.r70_i(),this.r71_i(),this.r72_i(),this.r73_i(),this.r74_i(),this.music_i(),this.onLoad_i(),this.revise_i(),this.cookyLabel1_i(),this.cookyLabel2_i(),this.cookyLabel3_i(),this.subjectAlert_i(),this.alertMask_i(),this.gameOver_i()];
		
		eui.Binding.$bindProperties(this, ["subjectBj"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [360],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, ["cooky1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [134.87],[],this._Object6,"height");
		eui.Binding.$bindProperties(this, [316.61],[],this._Object6,"width");
		eui.Binding.$bindProperties(this, [1801],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [466.64],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, ["cooky3"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [161.43],[],this._Object7,"height");
		eui.Binding.$bindProperties(this, [272.38],[],this._Object7,"width");
		eui.Binding.$bindProperties(this, [1374.48],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [677.92],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, ["cooky2"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [189.28],[],this._Object8,"height");
		eui.Binding.$bindProperties(this, [253],[],this._Object8,"width");
		eui.Binding.$bindProperties(this, [1376.53],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [464.24],[],this._Object8,"y");
	}
	var _proto = CookySkinSkin.prototype;

	_proto.subject_i = function () {
		var t = new egret.tween.TweenGroup();
		this.subject = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "sineIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.over01_i = function () {
		var t = new egret.tween.TweenGroup();
		this.over01 = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object4_i();
		t.paths = [this._To3_i()];
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto.cookyScale1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.cookyScale1 = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set2_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto.cookyScale3_i = function () {
		var t = new egret.tween.TweenGroup();
		this.cookyScale3 = t;
		t.items = [this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._To5_i()];
		return t;
	};
	_proto._To5_i = function () {
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
	_proto.cookyScale2_i = function () {
		var t = new egret.tween.TweenGroup();
		this.cookyScale2 = t;
		t.items = [this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._To6_i()];
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1080;
		t.source = "cookybj_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.subjectBj_i = function () {
		var t = new eui.Image();
		this.subjectBj = t;
		t.anchorOffsetX = 703.5;
		t.anchorOffsetY = 50;
		t.height = 130;
		t.source = "subject_png";
		t.width = 1407;
		t.x = 799.53;
		t.y = 48.91;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 123;
		t.left = 45;
		t.right = 686;
		t.source = "plank_png";
		t.top = 123;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 125;
		t.left = 1262;
		t.right = 66;
		t.source = "plank-right_png";
		t.top = 126;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Button();
		this.start = t;
		t.anchorOffsetX = 149;
		t.anchorOffsetY = 71;
		t.bottom = -2;
		t.enabled = false;
		t.label = "";
		t.left = 489;
		t.right = 1133;
		t.top = 940;
		t.skinName = CookySkinSkin$Skin5;
		return t;
	};
	_proto.hortation_i = function () {
		var t = new eui.Button();
		this.hortation = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 50.5;
		t.bottom = 24;
		t.enabled = false;
		t.label = "";
		t.left = 1422;
		t.right = 222;
		t.top = 955;
		t.skinName = CookySkinSkin$Skin6;
		return t;
	};
	_proto.clearBtn_i = function () {
		var t = new eui.Button();
		this.clearBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 1692.73;
		t.y = 963.06;
		t.skinName = CookySkinSkin$Skin7;
		return t;
	};
	_proto.uradBorder_i = function () {
		var t = new eui.Image();
		this.uradBorder = t;
		t.anchorOffsetX = 119;
		t.anchorOffsetY = 51.5;
		t.source = "border2_png";
		t.x = 527.5;
		t.y = 215.32;
		return t;
	};
	_proto.ormosiaBorder_i = function () {
		var t = new eui.Image();
		this.ormosiaBorder = t;
		t.anchorOffsetX = 119;
		t.anchorOffsetY = 51.5;
		t.source = "border2_png";
		t.x = 962.03;
		t.y = 212.91;
		return t;
	};
	_proto.urad_i = function () {
		var t = new eui.Label();
		this.urad = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 62;
		t.size = 36;
		t.text = "请输入";
		t.textAlign = "center";
		t.textColor = 0xd3af8f;
		t.verticalAlign = "middle";
		t.width = 194;
		t.x = 428;
		t.y = 182;
		return t;
	};
	_proto.ormosia_i = function () {
		var t = new eui.Label();
		this.ormosia = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 62;
		t.size = 36;
		t.text = "请输入";
		t.textAlign = "center";
		t.textColor = 0xd3af8f;
		t.verticalAlign = "middle";
		t.width = 184;
		t.x = 872;
		t.y = 182;
		return t;
	};
	_proto.cooky1_i = function () {
		var t = new eui.Image();
		this.cooky1 = t;
		t.anchorOffsetX = 435.31;
		t.anchorOffsetY = 185.44;
		t.height = 370.87;
		t.source = "cooky1_png";
		t.width = 870.62;
		t.x = 633.31;
		t.y = 641.68;
		return t;
	};
	_proto.cooky2_i = function () {
		var t = new eui.Image();
		this.cooky2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 507.58;
		t.source = "cooky2_png";
		t.width = 495;
		t.x = 449.41;
		t.y = 311.7;
		return t;
	};
	_proto.cooky3_i = function () {
		var t = new eui.Image();
		this.cooky3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 368.87;
		t.source = "cooky3_png";
		t.width = 622.38;
		t.x = 320.85;
		t.y = 445.64;
		return t;
	};
	_proto.canvasDiv_i = function () {
		var t = new eui.Rect();
		this.canvasDiv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 243;
		t.enabled = true;
		t.fillAlpha = 0;
		t.fillColor = 0xffffff;
		t.left = 179;
		t.right = 834;
		t.strokeAlpha = 0;
		t.strokeColor = 0xf9f9f9;
		t.strokeWeight = 65;
		t.top = 300;
		return t;
	};
	_proto.lineRect_i = function () {
		var t = new eui.Rect();
		this.lineRect = t;
		t.fillAlpha = 0;
		t.height = 526;
		t.skinName = "Subject1";
		t.width = 902;
		t.x = 180.9;
		t.y = 311.7;
		return t;
	};
	_proto.r00_i = function () {
		var t = new eui.Button();
		this.r00 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 179.22;
		t.y = 300.3;
		return t;
	};
	_proto.r01_i = function () {
		var t = new eui.Button();
		this.r01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 179.22;
		t.y = 424.1;
		return t;
	};
	_proto.r04_i = function () {
		var t = new eui.Button();
		this.r04 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 178.72;
		t.y = 796.85;
		return t;
	};
	_proto.r03_i = function () {
		var t = new eui.Button();
		this.r03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 178.72;
		t.y = 672.5;
		return t;
	};
	_proto.r10_i = function () {
		var t = new eui.Button();
		this.r10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 302.81;
		t.y = 300.25;
		return t;
	};
	_proto.r11_i = function () {
		var t = new eui.Button();
		this.r11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 302.81;
		t.y = 424.64;
		return t;
	};
	_proto.r02_i = function () {
		var t = new eui.Button();
		this.r02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.skinName = "skins.ButtonSkin";
		t.width = 42;
		t.x = 179.22;
		t.y = 547.92;
		return t;
	};
	_proto.r12_i = function () {
		var t = new eui.Button();
		this.r12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.skinName = "skins.ButtonSkin";
		t.width = 42;
		t.x = 302.81;
		t.y = 548.5;
		return t;
	};
	_proto.r13_i = function () {
		var t = new eui.Button();
		this.r13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 302.81;
		t.y = 673.16;
		return t;
	};
	_proto.r14_i = function () {
		var t = new eui.Button();
		this.r14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 302.31;
		t.y = 797.35;
		return t;
	};
	_proto.r20_i = function () {
		var t = new eui.Button();
		this.r20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 427;
		t.y = 300.25;
		return t;
	};
	_proto.r21_i = function () {
		var t = new eui.Button();
		this.r21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 427;
		t.y = 424.64;
		return t;
	};
	_proto.r22_i = function () {
		var t = new eui.Button();
		this.r22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 427;
		t.y = 547.92;
		return t;
	};
	_proto.r23_i = function () {
		var t = new eui.Button();
		this.r23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 427;
		t.y = 673.12;
		return t;
	};
	_proto.r24_i = function () {
		var t = new eui.Button();
		this.r24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 426.5;
		t.y = 797.31;
		return t;
	};
	_proto.r30_i = function () {
		var t = new eui.Button();
		this.r30 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 551.23;
		t.y = 300.25;
		return t;
	};
	_proto.r31_i = function () {
		var t = new eui.Button();
		this.r31 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 551.23;
		t.y = 424.64;
		return t;
	};
	_proto.r32_i = function () {
		var t = new eui.Button();
		this.r32 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 551.23;
		t.y = 547.92;
		return t;
	};
	_proto.r33_i = function () {
		var t = new eui.Button();
		this.r33 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 551.23;
		t.y = 673;
		return t;
	};
	_proto.r34_i = function () {
		var t = new eui.Button();
		this.r34 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 551.23;
		t.y = 797.31;
		return t;
	};
	_proto.r40_i = function () {
		var t = new eui.Button();
		this.r40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 674.91;
		t.y = 300.25;
		return t;
	};
	_proto.r41_i = function () {
		var t = new eui.Button();
		this.r41 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 674.91;
		t.y = 424.1;
		return t;
	};
	_proto.r42_i = function () {
		var t = new eui.Button();
		this.r42 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 674.91;
		t.y = 547.92;
		return t;
	};
	_proto.r43_i = function () {
		var t = new eui.Button();
		this.r43 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 673.91;
		t.y = 673;
		return t;
	};
	_proto.r44_i = function () {
		var t = new eui.Button();
		this.r44 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 674.5;
		t.y = 797.35;
		return t;
	};
	_proto.r50_i = function () {
		var t = new eui.Button();
		this.r50 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 798.9;
		t.y = 299.21;
		return t;
	};
	_proto.r51_i = function () {
		var t = new eui.Button();
		this.r51 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 798;
		t.y = 424.1;
		return t;
	};
	_proto.r52_i = function () {
		var t = new eui.Button();
		this.r52 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 798.9;
		t.y = 547.92;
		return t;
	};
	_proto.r53_i = function () {
		var t = new eui.Button();
		this.r53 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 798;
		t.y = 673.12;
		return t;
	};
	_proto.r54_i = function () {
		var t = new eui.Button();
		this.r54 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 798.53;
		t.y = 796.81;
		return t;
	};
	_proto.r60_i = function () {
		var t = new eui.Button();
		this.r60 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 922.5;
		t.y = 299.21;
		return t;
	};
	_proto.r61_i = function () {
		var t = new eui.Button();
		this.r61 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 922.5;
		t.y = 424.1;
		return t;
	};
	_proto.r62_i = function () {
		var t = new eui.Button();
		this.r62 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 922.5;
		t.y = 547.5;
		return t;
	};
	_proto.r63_i = function () {
		var t = new eui.Button();
		this.r63 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 922.5;
		t.y = 673.12;
		return t;
	};
	_proto.r64_i = function () {
		var t = new eui.Button();
		this.r64 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.skinName = "skins.ButtonSkin";
		t.width = 42;
		t.x = 922.5;
		t.y = 796.81;
		return t;
	};
	_proto.r70_i = function () {
		var t = new eui.Button();
		this.r70 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 1046.67;
		t.y = 300.25;
		return t;
	};
	_proto.r71_i = function () {
		var t = new eui.Button();
		this.r71 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 1046.67;
		t.y = 424.64;
		return t;
	};
	_proto.r72_i = function () {
		var t = new eui.Button();
		this.r72 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 1046.67;
		t.y = 547.92;
		return t;
	};
	_proto.r73_i = function () {
		var t = new eui.Button();
		this.r73 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 1047.17;
		t.y = 673.12;
		return t;
	};
	_proto.r74_i = function () {
		var t = new eui.Button();
		this.r74 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 1046.67;
		t.y = 796.31;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Button();
		this.music = t;
		t.label = "";
		t.x = 1748;
		t.y = 20.91;
		t.skinName = CookySkinSkin$Skin8;
		return t;
	};
	_proto.onLoad_i = function () {
		var t = new eui.Button();
		this.onLoad = t;
		t.label = "";
		t.x = 1594.36;
		t.y = 23.91;
		t.skinName = CookySkinSkin$Skin9;
		return t;
	};
	_proto.revise_i = function () {
		var t = new eui.Button();
		this.revise = t;
		t.enabled = false;
		t.label = "";
		t.x = 1091;
		t.y = 169.88;
		t.skinName = CookySkinSkin$Skin10;
		return t;
	};
	_proto.cookyLabel1_i = function () {
		var t = new eui.Label();
		this.cookyLabel1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 52;
		t.size = 42;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf2ede8;
		t.verticalAlign = "middle";
		t.width = 77;
		t.x = 1663;
		t.y = 381.74;
		return t;
	};
	_proto.cookyLabel2_i = function () {
		var t = new eui.Label();
		this.cookyLabel2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 54;
		t.size = 42;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf2ede8;
		t.verticalAlign = "middle";
		t.width = 81;
		t.x = 1663;
		t.y = 584.5;
		return t;
	};
	_proto.cookyLabel3_i = function () {
		var t = new eui.Label();
		this.cookyLabel3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 52;
		t.size = 42;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf2ede8;
		t.verticalAlign = "middle";
		t.width = 77;
		t.x = 1663;
		t.y = 781.35;
		return t;
	};
	_proto.subjectAlert_i = function () {
		var t = new eui.Group();
		this.subjectAlert = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 1080;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "subjectAlert_png";
		t.x = 198.5;
		t.y = 234.94;
		return t;
	};
	_proto.alertMask_i = function () {
		var t = new eui.Group();
		this.alertMask = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.2;
		t.fillColor = 0x000000;
		t.height = 1080;
		t.strokeAlpha = 0;
		t.strokeColor = 0xffffff;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 219.5;
		t.y = 126.09;
		t.elementsContent = [this._Image5_i(),this.surfaceCell_i(),this.indoorCell_i(),this.suface_i(),this.indoor_i(),this.labelAClick_i(),this.labelBClick_i(),this.labelFClick_i(),this.labelEClick_i(),this.lvCount_i(),this.redCount_i(),this.labelA_i(),this.labelB_i(),this.labelE_i(),this.labelF_i(),this.alertOk_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "alert1_png";
		t.x = -10;
		t.y = -8;
		return t;
	};
	_proto.surfaceCell_i = function () {
		var t = new eui.Image();
		this.surfaceCell = t;
		t.source = "alertBtn2_png";
		t.x = 354.23;
		t.y = 300.6;
		return t;
	};
	_proto.indoorCell_i = function () {
		var t = new eui.Image();
		this.indoorCell = t;
		t.source = "alertBtn3_png";
		t.x = 659.5;
		t.y = 300.6;
		return t;
	};
	_proto.suface_i = function () {
		var t = new eui.Button();
		this.suface = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103;
		t.label = "";
		t.skinName = "surfaceCellCount";
		t.width = 232;
		t.x = 218.5;
		t.y = 187.28;
		return t;
	};
	_proto.indoor_i = function () {
		var t = new eui.Button();
		this.indoor = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103;
		t.label = "";
		t.skinName = "indoorCellBtn";
		t.width = 232;
		t.x = 522.25;
		t.y = 184.21;
		return t;
	};
	_proto.labelAClick_i = function () {
		var t = new eui.Image();
		this.labelAClick = t;
		t.source = "border2_png";
		t.x = 238.56;
		t.y = 412.48;
		return t;
	};
	_proto.labelBClick_i = function () {
		var t = new eui.Image();
		this.labelBClick = t;
		t.source = "border2_png";
		t.x = 539.07;
		t.y = 412.56;
		return t;
	};
	_proto.labelFClick_i = function () {
		var t = new eui.Image();
		this.labelFClick = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99;
		t.source = "border2_png";
		t.width = 136;
		t.x = 870.56;
		t.y = 418.41;
		return t;
	};
	_proto.labelEClick_i = function () {
		var t = new eui.Image();
		this.labelEClick = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99.97;
		t.source = "border2_png";
		t.width = 209.22;
		t.x = 1007.88;
		t.y = 415.08;
		return t;
	};
	_proto.lvCount_i = function () {
		var t = new eui.Group();
		this.lvCount = t;
		t.x = 353.57;
		t.y = 524;
		t.elementsContent = [this._Image6_i(),this.labelC_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "alertBtn4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelC_i = function () {
		var t = new eui.Label();
		this.labelC = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 61.82;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "10";
		t.textAlign = "right";
		t.textColor = 0xA94701;
		t.verticalAlign = "middle";
		t.width = 217.95;
		t.y = 20;
		return t;
	};
	_proto.redCount_i = function () {
		var t = new eui.Group();
		this.redCount = t;
		t.x = 665.13;
		t.y = 524;
		t.elementsContent = [this._Image7_i(),this.labelD_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "alertBtn1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelD_i = function () {
		var t = new eui.Label();
		this.labelD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 61.82;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "11";
		t.textAlign = "right";
		t.textColor = 0xa94701;
		t.verticalAlign = "middle";
		t.width = 216.43;
		t.y = 20.25;
		return t;
	};
	_proto.labelA_i = function () {
		var t = new eui.Label();
		this.labelA = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 354;
		t.fontFamily = "SimHei";
		t.left = 269;
		t.right = 882;
		t.size = 46;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xA94701;
		t.top = 437;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.labelB_i = function () {
		var t = new eui.Label();
		this.labelB = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 356;
		t.fontFamily = "SimHei";
		t.left = 570;
		t.right = 582;
		t.size = 46;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xa94701;
		t.top = 437;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.labelE_i = function () {
		var t = new eui.Label();
		this.labelE = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 350;
		t.fontFamily = "SimHei";
		t.left = 1036;
		t.right = 145;
		t.size = 46;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xA94701;
		t.top = 433;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.labelF_i = function () {
		var t = new eui.Label();
		this.labelF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 52;
		t.size = 46;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xa94701;
		t.verticalAlign = "middle";
		t.width = 110;
		t.x = 885;
		t.y = 442;
		return t;
	};
	_proto.alertOk_i = function () {
		var t = new eui.Button();
		this.alertOk = t;
		t.label = "";
		t.x = 519.13;
		t.y = 638.85;
		t.skinName = CookySkinSkin$Skin11;
		return t;
	};
	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.visible = false;
		t.x = 0;
		t.y = -12.31;
		t.elementsContent = [this._Rect3_i(),this._Image8_i(),this.image_i(),this._Image9_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.enabled = true;
		t.fillAlpha = 0.6;
		t.height = 1080;
		t.strokeAlpha = 0;
		t.width = 1920;
		t.x = 0;
		t.y = 12.31;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "gameoverbj01_png";
		t.x = 374;
		t.y = 0;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 548.5;
		t.anchorOffsetY = 540;
		t.source = "gameoverbj02_png";
		t.x = 964.5;
		t.y = 546.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "cooky-over_png";
		t.x = 716.91;
		t.y = 183.19;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 144;
		t.size = 40;
		t.text = "点击任意位置重新开始游戏";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 1710;
		t.x = 105;
		t.y = 936;
		return t;
	};
	return CookySkinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/borderColor.exml'] = window.borderColor = (function (_super) {
	__extends(borderColor, _super);
	var borderColor$Skin12 = 	(function (_super) {
		__extends(borderColor$Skin12, _super);
		function borderColor$Skin12() {
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
		var _proto = borderColor$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "border2_png";
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
		return borderColor$Skin12;
	})(eui.Skin);

	function borderColor() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 103;
		this.width = 232;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = borderColor.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103;
		t.label = "";
		t.width = 233;
		t.x = 0;
		t.y = 0;
		t.skinName = borderColor$Skin12;
		return t;
	};
	return borderColor;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/inputBorder.exml'] = window.inputBorder = (function (_super) {
	__extends(inputBorder, _super);
	function inputBorder() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 62;
		this.width = 194;
		this.elementsContent = [this._Image1_i(),this._TextInput1_i()];
	}
	var _proto = inputBorder.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "border2_png";
		t.x = -23;
		t.y = -20.5;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.height = 62;
		t.width = 194;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return inputBorder;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/lndoorCellCount.exml'] = window.lndoorCellCount = (function (_super) {
	__extends(lndoorCellCount, _super);
	var lndoorCellCount$Skin13 = 	(function (_super) {
		__extends(lndoorCellCount$Skin13, _super);
		function lndoorCellCount$Skin13() {
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
		var _proto = lndoorCellCount$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "alertBtn1_png";
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
		return lndoorCellCount$Skin13;
	})(eui.Skin);

	function lndoorCellCount() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 103;
		this.width = 233;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = lndoorCellCount.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.label = "";
		t.width = 216;
		t.x = 6.5;
		t.y = 15;
		t.skinName = lndoorCellCount$Skin13;
		return t;
	};
	return lndoorCellCount;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/MyButtonSkin.exml'] = window.MyButtonSkin = (function (_super) {
	__extends(MyButtonSkin, _super);
	var MyButtonSkin$Skin14 = 	(function (_super) {
		__extends(MyButtonSkin$Skin14, _super);
		function MyButtonSkin$Skin14() {
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
		var _proto = MyButtonSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dou1_png";
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
		return MyButtonSkin$Skin14;
	})(eui.Skin);

	function MyButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 42;
		this.width = 42;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = MyButtonSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.height = 42;
		t.label = "";
		t.width = 42;
		t.x = 0;
		t.y = 0;
		t.skinName = MyButtonSkin$Skin14;
		return t;
	};
	return MyButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/MyRedButtonSkin.exml'] = window.MyRedButtonSkin = (function (_super) {
	__extends(MyRedButtonSkin, _super);
	var MyRedButtonSkin$Skin15 = 	(function (_super) {
		__extends(MyRedButtonSkin$Skin15, _super);
		function MyRedButtonSkin$Skin15() {
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
		var _proto = MyRedButtonSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dou2_png";
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
		return MyRedButtonSkin$Skin15;
	})(eui.Skin);

	function MyRedButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 42;
		this.width = 42;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = MyRedButtonSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.width = 42;
		t.x = -1;
		t.y = 1;
		t.skinName = MyRedButtonSkin$Skin15;
		return t;
	};
	return MyRedButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/Subject2.exml'] = window.Subject2 = (function (_super) {
	__extends(Subject2, _super);
	function Subject2() {
		_super.call(this);
		this.skinParts = ["subject2"];
		
		this.height = 526;
		this.width = 902;
		this.elementsContent = [this.subject2_i()];
	}
	var _proto = Subject2.prototype;

	_proto.subject2_i = function () {
		var t = new eui.Image();
		this.subject2 = t;
		t.source = "subject2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Subject2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/Subject3.exml'] = window.Subject3 = (function (_super) {
	__extends(Subject3, _super);
	function Subject3() {
		_super.call(this);
		this.skinParts = ["subject3"];
		
		this.height = 526;
		this.width = 902;
		this.elementsContent = [this.subject3_i()];
	}
	var _proto = Subject3.prototype;

	_proto.subject3_i = function () {
		var t = new eui.Image();
		this.subject3 = t;
		t.source = "subject3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Subject3;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cookySubject/surfaceCellBtn.exml'] = window.surfaceCellBtn = (function (_super) {
	__extends(surfaceCellBtn, _super);
	var surfaceCellBtn$Skin16 = 	(function (_super) {
		__extends(surfaceCellBtn$Skin16, _super);
		function surfaceCellBtn$Skin16() {
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
		var _proto = surfaceCellBtn$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "alertBtn2_png";
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
		return surfaceCellBtn$Skin16;
	})(eui.Skin);

	function surfaceCellBtn() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 103;
		this.width = 233;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = surfaceCellBtn.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.label = "";
		t.width = 216;
		t.x = 6.5;
		t.y = 15;
		t.skinName = surfaceCellBtn$Skin16;
		return t;
	};
	return surfaceCellBtn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CueButton.exml'] = window.Button = (function (_super) {
	__extends(Button, _super);
	function Button() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = Button.prototype;

	return Button;
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
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.bottom = "8";
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.top = "8";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.bold = true;
		t.bottom = 11;
		t.left = 10;
		t.right = 10;
		t.size = 32;
		t.textAlign = "center";
		t.textColor = 0xb88853;
		t.top = 11;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
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