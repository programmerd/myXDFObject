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
						new eui.SetProperty("_Image1","source","do_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","do2-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_Do_png";
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
						new eui.SetProperty("_Image1","source","re_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","re-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_Re_png";
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
						new eui.SetProperty("_Image1","source","mi_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","mi-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_Mi_png";
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
						new eui.SetProperty("_Image1","source","fa_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","fa-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_Fa_png";
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
						new eui.SetProperty("_Image1","source","so_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","so-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_So_png";
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
						new eui.SetProperty("_Image1","source","la_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","la-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_La_png";
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
						new eui.SetProperty("_Image1","source","si_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","si-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_Ti_png";
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
						new eui.SetProperty("_Image1","source","do2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","do2-_png")
					])
			];
		}
		var _proto = IndexSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "click_Do2_png";
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

	function IndexSkin() {
		_super.call(this);
		this.skinParts = ["yue","music","reset","timu","tipBtn","shuject","gequ","next","prev","clickNum","clickNum1","overMask2","start1","start2","starts","keySet","keySetGroupAnimate","keyLabelGroup","timuGroup","tipGroup","overMask","clickStart","endStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.yue_i(),this.music_i(),this.reset_i(),this.timu_i(),this.tipBtn_i(),this.shuject_i(),this.gequ_i(),this.next_i(),this.prev_i(),this.clickNum_i(),this.clickNum1_i(),this.overMask2_i(),this.starts_i(),this._Image16_i(),this.keySet_i(),this.keySetGroupAnimate_i(),this.keyLabelGroup_i(),this.timuGroup_i(),this.tipGroup_i(),this.overMask_i(),this.endStart_i()];
	}
	var _proto = IndexSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "beijing_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.yue_i = function () {
		var t = new eui.Group();
		this.yue = t;
		t.x = 156;
		t.y = 327.5;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 71;
		t.anchorOffsetY = 87.5;
		t.source = "yue5_png";
		t.x = 1570;
		t.y = 140;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 55.5;
		t.anchorOffsetY = 74.5;
		t.source = "yue4_png";
		t.x = 341.5;
		t.y = 301.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 75.5;
		t.source = "yue3_png";
		t.x = 871;
		t.y = 347;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 74.5;
		t.anchorOffsetY = 87.5;
		t.source = "yue2_png";
		t.x = 1109;
		t.y = 87.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 75.5;
		t.source = "yue1_png";
		t.x = 67;
		t.y = 151.5;
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
	_proto.timu_i = function () {
		var t = new eui.Image();
		this.timu = t;
		t.source = "timu_png";
		t.x = 463;
		t.y = 0;
		return t;
	};
	_proto.tipBtn_i = function () {
		var t = new eui.Image();
		this.tipBtn = t;
		t.source = "tishi_png";
		t.x = 266;
		t.y = 17.5;
		return t;
	};
	_proto.shuject_i = function () {
		var t = new eui.Image();
		this.shuject = t;
		t.source = "sub2_png";
		t.x = 336.5;
		t.y = 237.5;
		return t;
	};
	_proto.gequ_i = function () {
		var t = new eui.Image();
		this.gequ = t;
		t.source = "gequ1_png";
		t.x = 1000;
		t.y = 237.5;
		return t;
	};
	_proto.next_i = function () {
		var t = new eui.Image();
		this.next = t;
		t.source = "xiayishou_png";
		t.x = 1604;
		t.y = 169;
		return t;
	};
	_proto.prev_i = function () {
		var t = new eui.Image();
		this.prev = t;
		t.source = "prev_png";
		t.x = 22;
		t.y = 168.5;
		return t;
	};
	_proto.clickNum_i = function () {
		var t = new eui.Group();
		this.clickNum = t;
		t.name = "group";
		t.x = 155.5;
		t.y = 354;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 81;
		t.source = "1001_png";
		t.x = 263;
		t.y = 81;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117.5;
		t.anchorOffsetY = 117.5;
		t.source = "125532_png";
		t.x = 524;
		t.y = 198.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117.5;
		t.anchorOffsetY = 117.5;
		t.source = "143605_png";
		t.x = 835;
		t.y = 117.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 80.5;
		t.anchorOffsetY = 81;
		t.source = "321_png";
		t.x = 1145;
		t.y = 235;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117.5;
		t.anchorOffsetY = 117;
		t.source = "15261719_png";
		t.x = 1438.5;
		t.y = 223;
		return t;
	};
	_proto.clickNum1_i = function () {
		var t = new eui.Group();
		this.clickNum1 = t;
		t.name = "group";
		t.visible = false;
		t.x = 155.5;
		t.y = 354;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117.5;
		t.anchorOffsetY = 117.5;
		t.source = "1101912_png";
		t.x = 263;
		t.y = 143.5;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117.5;
		t.anchorOffsetY = 117.5;
		t.source = "445900_png";
		t.x = 623.5;
		t.y = 222.5;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 117.5;
		t.anchorOffsetY = 117.5;
		t.source = "236327_png";
		t.x = 992;
		t.y = 130.5;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 139;
		t.anchorOffsetY = 138.5;
		t.source = "143143143_png";
		t.x = 1321;
		t.y = 186;
		return t;
	};
	_proto.overMask2_i = function () {
		var t = new eui.Rect();
		this.overMask2 = t;
		t.enabled = true;
		t.fillAlpha = 0.5;
		t.height = 1080;
		t.visible = false;
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.starts_i = function () {
		var t = new eui.Group();
		this.starts = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.width = 132;
		t.x = 1394;
		t.y = 240.5;
		t.elementsContent = [this.start1_i(),this.start2_i()];
		return t;
	};
	_proto.start1_i = function () {
		var t = new eui.Image();
		this.start1 = t;
		t.source = "xing2_png";
		t.visible = false;
		t.x = 6;
		t.y = 12;
		return t;
	};
	_proto.start2_i = function () {
		var t = new eui.Image();
		this.start2 = t;
		t.source = "xing2_png";
		t.x = 76;
		t.y = 12;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "di_png";
		t.x = 5.5;
		t.y = 750.5;
		return t;
	};
	_proto.keySet_i = function () {
		var t = new eui.Group();
		this.keySet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.name = "group";
		t.width = 1558;
		t.x = 185;
		t.y = 751;
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i(),this._Button4_i(),this._Button5_i(),this._Button6_i(),this._Button7_i(),this._Button8_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "Do";
		t.x = 1.97;
		t.y = -1;
		t.skinName = IndexSkin$Skin3;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "Re";
		t.x = 197;
		t.y = -1;
		t.skinName = IndexSkin$Skin4;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "Mi";
		t.x = 392;
		t.y = -1;
		t.skinName = IndexSkin$Skin5;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "Fa";
		t.x = 587;
		t.y = -1;
		t.skinName = IndexSkin$Skin6;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "So";
		t.x = 782;
		t.y = -1;
		t.skinName = IndexSkin$Skin7;
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "La";
		t.x = 977;
		t.y = -1;
		t.skinName = IndexSkin$Skin8;
		return t;
	};
	_proto._Button7_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "Ti";
		t.x = 1172;
		t.y = -1;
		t.skinName = IndexSkin$Skin9;
		return t;
	};
	_proto._Button8_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "Do8";
		t.x = 1367.4;
		t.y = -1;
		t.skinName = IndexSkin$Skin10;
		return t;
	};
	_proto.keySetGroupAnimate_i = function () {
		var t = new eui.Group();
		this.keySetGroupAnimate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 326;
		t.touchEnabled = false;
		t.width = 1883;
		t.x = 26;
		t.y = 750;
		return t;
	};
	_proto.keyLabelGroup_i = function () {
		var t = new eui.Group();
		this.keyLabelGroup = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 214;
		t.y = 814;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfcdd3d;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 1;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFCDD3D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 194;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFCDD3D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 387;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFCDD3D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 581;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFCDD3D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 775;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFCDD3D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 969;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFCDD3D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 1162;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "fz";
		t.height = 60;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x663500;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFCDD3D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 1356;
		t.y = 0;
		return t;
	};
	_proto.timuGroup_i = function () {
		var t = new eui.Group();
		this.timuGroup = t;
		t.touchChildren = false;
		t.visible = false;
		t.x = -1.5;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image17_i()];
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
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "timu-big_png";
		t.x = 204.5;
		t.y = 439;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.touchChildren = false;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Image18_i()];
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
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "tishikuang2_png";
		t.x = 367;
		t.y = 198.5;
		return t;
	};
	_proto.overMask_i = function () {
		var t = new eui.Rect();
		this.overMask = t;
		t.fillAlpha = 0.1;
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