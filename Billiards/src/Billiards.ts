class Billiards extends eui.Component implements eui.UIComponent {
	public clickLabel: eui.Label;
	public music: eui.Image;
	public revise: eui.Image;
	public subject: eui.Image;
	public taiqiu2: eui.Image;
	public taiqiu1: eui.Image;
	public writePosition: eui.Image;
	public writeNumber: eui.Image;
	public clickPosition: eui.Group;
	public inputPos1: eui.Label;
	public inputPos2: eui.Label;
	public inputSum: eui.Label;
	public clickNumber: eui.Group;
	public inputNum: eui.Label;
	public inputNum1: eui.Label;
	public inputNum2: eui.Label;
	public textNum: eui.Label;
	public textRow: eui.Label;
	public textSum: eui.Label;
	public clickOk: eui.Button;
	public taiqiu: eui.Group;
	public showTip: eui.Group;
	public resultGroup: eui.Group;
	public closeTip: eui.Rect;
	public isPosAndNum: string = "number"
	public sumGroup: eui.Group;
	public rowGroup: eui.Group;
	public numGroup: eui.Group;
	public guangshu: eui.Group;
	public inputLabel: eui.Label;
	public valueSum: number;
	public valueRow: number;
	public valueNum: number;

	public clickStart: eui.Image;
	public endStart: eui.Group
	//手指
	public hand: egret.MovieClip;
	public isFirst: boolean = true;
	// 缓动动画
	public loseGroup: eui.Group;
	public successGroup: eui.Group;
	public taiqiuOver: eui.Group;
	public lose: egret.tween.TweenGroup;
	//动画
	public egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
	public armature: dragonBones.Armature;
	public file = { dom: "taiqiu", dragonbonesData: "taiqiu_ske_json", textureData1: "taiqiu_tex_json", texture1: "taiqiu_tex_png", name: "taiqiu", count: 1 };
	public over = { dom: "taiqiuOver", dragonbonesData: "taiqiujieshu_ske_json", textureData1: "taiqiujieshu_tex_json", texture1: "taiqiujieshu_tex_png", name: "taiqiujieshu", count: 1 };
	public switchSum = { dom: "sumGroup", dragonbonesData: "shuzigundong_ske_json", textureData1: "shuzigundong_tex_json", texture1: "shuzigundong_tex_png", name: "shuzigundong", count: 8 };
	public switchRow = { dom: "rowGroup", dragonbonesData: "shuzigundong_ske_json", textureData1: "shuzigundong_tex_json", texture1: "shuzigundong_tex_png", name: "shuzigundong", count: 8 };
	public switchNum = { dom: "numGroup", dragonbonesData: "shuzigundong_ske_json", textureData1: "shuzigundong_tex_json", texture1: "shuzigundong_tex_png", name: "shuzigundong", count: 8 };
	public guangxian01 = { dom: "guangshu", dragonbonesData: "guangxian01_ske_json", textureData1: "guangxian01_tex_json", texture1: "guangxian01_tex_png", name: "guangxian01", count: -1 };
	public yanhua01 = { dom: "successGroup", dragonbonesData: "yanhua01_ske_json", textureData1: "yanhua01_tex_json", texture1: "yanhua01_tex_png", name: "yanhua01", count: -1 };
	public overAnimate: dragonBones.EgretArmatureDisplay;
	public overAnimate2: dragonBones.EgretArmatureDisplay;
	// 音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;

	public tq_bj: egret.Sound = RES.getRes("tq_bj_mp3");
	public tq_click: egret.Sound = RES.getRes("tq_click_mp3");
	public tq_error: egret.Sound = RES.getRes("tq_error_mp3");
	public tq_success: egret.Sound = RES.getRes("tq_success_mp3");
	public tq_fg: egret.Sound = RES.getRes("tq_fg_mp3");	//翻滚
	public tq_fz: egret.Sound = RES.getRes("tq_fz_mp3");	//出现翻转数字
	public tq_ok: egret.Sound = RES.getRes("tq_ok_mp3");	//OK
	public tq_mc: egret.Sound = RES.getRes("tq_mc_mp3");	//台球动画
	public tq_pp_error1: egret.Sound = RES.getRes("tq_pp_error1_mp3");	//匹配错误
	public tq_pp_error2: egret.Sound = RES.getRes("tq_pp_error2_mp3");	//匹配错误
	public tq_ppcg: egret.Sound = RES.getRes("tq_ppcg_mp3");	//匹配成功
	public tq_tip: egret.Sound = RES.getRes("tq_tip_mp3");	//读题

	public constructor() {
		super();
		this.skinName = "BilliardsSkin";
		this.addEventListener(egret.Event.ENTER_FRAME, function (): void {
			dragonBones.WorldClock.clock.advanceTime(0.03);
		}, this);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);

		this.taiqiu2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickTaiQiu, this);

		this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showTipFun, this);
		this.showTip.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.showTip.visible = false ,this.playMusic("tq_ok");}, this);

		this.clickNumber.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInputFun, this);
		this.clickPosition.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickInputFun, this);
		this.clickOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickOkFun, this);

		this.successGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseSub, this);
		this.loseGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.newlySub, this);

		this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.endStart.visible = false;
			this.start();
		}, this);
		// this.start()
	}
	public start() {
		this.reviseSub();
		this.music_bj = this.tq_bj.play(0, -1);
		this.hand = this.fireAnimation("shouzhi_json", "shouzhi_png", "heand");
	}
	//点击题目
	public showTipFun() {
		this.playMusic("tq_tip");
		this.showTip.visible = true;
	}
	//点击出现数字
	public clickTaiQiu() {
		console.log("点击");
		this.playMusic("tq_fz")
		this.taiqiu2.visible = false;
		this.animationFun(this.file);
		this.hand = this.fireAnimation("shouzhi_json", "shouzhi_png", "heand", 250, 580);

	}
	//还原
	public reviseSub() {
		this.playMusic("tq_tip");
		var position: any = this.clickPosition.$children;
		var number: any = this.clickNumber.$children;

		position.map((item) => {
			item.text = "输入"
		})
		number.map((item) => {
			item.text = "输入"
		})
		this.overAnimate ? this.guangshu.removeChild(this.overAnimate) : "";
		this.overAnimate2 ? this.successGroup.removeChild(this.overAnimate2) : "";

		this.writeNumber.source = "number1_png";
		this.writePosition.source = "position1_png";
		this.clickOk.enabled = false;
		this.resultGroup.visible = false;
		this.successGroup.visible = false;
		this.loseGroup.visible = false;
		this.taiqiuOver.visible = false;
		this.textRow.text = "";
		this.textNum.text = "";
		this.textSum.text = "";
	}
	//重新回答 
	public newlySub() {
		this.clickOk.enabled = false;
		this.resultGroup.visible = false;
		this.successGroup.visible = false;
		this.loseGroup.visible = false;
		this.taiqiuOver.visible = false;
		this.textRow.text = "";
		this.textNum.text = "";
		this.textSum.text = "";
	}
	//判断
	public testAndVerify() {
		var position: any = this.clickPosition.$children;
		var number: any = this.clickNumber.$children;
		console.log("判断")
		if (this.isPosAndNum == "number") {
			number.map((item, index) => {
				item.text == "输入" || item.text == "重新输入" ? this.clickOk.enabled = false : this.clickOk.enabled = true;
			})
		} else {
			position.map((item) => {
				item.text == "输入" || item.text == "重新输入" ? this.clickOk.enabled = false : this.clickOk.enabled = true;
			})
		}
		if (this.clickOk.enabled) {
			position[1].text = position[1].text >= position[0].text * 2 - 1 ? position[0].text * 2 - 1 : position[1].text;
			number[2].text = number[2].text >= number[1].text * 2 - 1 ? number[1].text * 2 - 1 : number[2].text;
			this.hand = this.fireAnimation("shouzhi_json", "shouzhi_png", "heand", 950, 1080);
			this.isFirst = false;
		}
	}
	//点击输入
	public clickInputFun(e: egret.TouchEvent) {
		if (e.target.name != "group") {
			this.playMusic('tq_click')
			this.hand.parent ? this.removeChild(this.hand) : "";
			this.clickLabel = e.target;
			this.isPosAndNum = e.target.name;
			var x = 0;
			var y = e.target.parent.y - 400;
			if (e.target.name == "number") {
				this.writeNumber.source = "number1_png"
				this.writePosition.source = "position2_png"

				x = e.target.parent.x - 150
			} else {
				this.writePosition.source = "position1_png"
				this.writeNumber.source = "number2_png";


				x = e.target.parent.x - 100
			}
			this.addChild(new Keyset(this, x, y));
		}
	}
	//确定
	public clickOkFun() {
		this.tq_ok.play(0, 1)
		this.hand.parent ? this.removeChild(this.hand) : "";
		this.resultGroup.visible = true;
		if (this.isPosAndNum == "number") {
			this.textSum.text = this.inputNum.text;

			this.textRow.textColor = 0xff0000;
			this.textNum.textColor = 0xff0000;
			this.textSum.textColor = 0xAA4801;

			this.inputLabel = this.textRow;


			this.valueRow = Math.floor(Math.sqrt(parseInt(this.textSum.text) - 1)) + 1; //(sum-1)^(-2/1)+1
			this.valueNum = (this.valueRow * 2 - 1) - (Math.pow(this.valueRow, 2) - parseInt(this.textSum.text));//(2n-1)-(n^2-sum)

			this.animationFun(this.switchRow);
			this.animationFunTow(this.switchNum)
			console.log(this.valueRow, this.valueNum)
		} else {
			this.textRow.text = this.inputPos1.text;
			this.textNum.text = this.inputPos2.text;

			this.textRow.textColor = 0xAA4801;
			this.textNum.textColor = 0xAA4801;
			this.textSum.textColor = 0xff0000;

			this.inputLabel = this.textSum;

			this.valueSum = Math.pow(parseInt(this.textRow.text), 2) - (parseInt(this.textRow.text) * 2 - 1 - parseInt(this.textNum.text)); //n^2 -(2n-1-x)
			console.log(this.valueSum)
			this.animationFun(this.switchSum)
		}
	}
	//动画
	public fireAnimation(data, txtr, name, x = 950, y = 500) {
		// console.log(this.hand.parent)
		if (this.hand)
			if (this.hand.parent) {
				this.removeChild(this.hand);
			}
		var data = RES.getRes(data);
		var txtr = RES.getRes(txtr);
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData(name));
		this.isFirst ? this.addChild(mc) : "";
		mc.play(-1);
		mc.x = x;
		mc.y = y;
		mc.addEventListener(egret.Event.COMPLETE, function () {
			this.removeChild(this.hand);
			console.log("播放完成")
		}, this)
		return mc;
	}
	//龙骨动画
	public animationFun(dbObj) {
		if (this.armature)
			if (this.armature.parent) {
				this[dbObj.dom].removeChild(this.armature.getDisplay())
			}
		// console.log(dbObj)
		var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		var textureData1 = RES.getRes(dbObj.textureData1);
		var texture1 = RES.getRes(dbObj.texture1);

		this.egretFactory.parseDragonBonesData(dragonbonesData);
		this.egretFactory.parseTextureAtlasData(textureData1, texture1);

		this.armature = this.egretFactory.buildArmature(dbObj.name);
		var armatureDisplay = this.armature.getDisplay();
		if (dbObj.name == "taiqiu") {
			this.taiqiu.visible = true;
			armatureDisplay.x = 929;
			armatureDisplay.y = 428;
		} else if (dbObj.name == "shuzigundong") {
			this.playMusic('tq_fg')
			armatureDisplay.x = 16;
			armatureDisplay.y = 9;
		} else if (dbObj.name == "taiqiujieshu") {
			this.playMusic("tq_mc")
			this.musicFun();
			armatureDisplay.x = 960;
			armatureDisplay.y = 540;
		}
		this[dbObj.dom].addChild(armatureDisplay);


		this.armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 1;
		dragonBones.WorldClock.clock.add(this.armature);//添加时间钟
		//监听时间钟 只需执行一次 放到了构造中 -->
		//播放完成的回调
		this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
			// this.armature.animation.gotoAndStopByFrame(dbObj.name, 1)
			console.log("动画播放完成");
			this[dbObj.dom].removeChild(this.armature.getDisplay());
			if (dbObj.name == "taiqiu") {
				this.taiqiu1.visible = true;
				this.taiqiu.visible = false;
			} else if (dbObj.name == "shuzigundong") {
				this.isPosAndNum == "number" ? this.inputLabel.text = this.valueRow + "" : this.inputLabel.text = this.valueSum + "";
				setTimeout(() => {
					this.estimateFun();
				}, 1000)
			} else if (dbObj.name == "taiqiujieshu") {
				this.taiqiuOver.visible = false;
				this.successGroup.visible = true;
				this.playMusic('tq_success');
				this.musicFun();
			}
			this.armature = undefined;
		}, this)
	}
	public animationFunTow(dbObj) {
		let dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		let textureData = RES.getRes(dbObj.textureData1);
		let texture = RES.getRes(dbObj.texture1);
		// 
		let egretFactoryA = new dragonBones.EgretFactory();
		egretFactoryA.parseDragonBonesData(dragonbonesData);
		egretFactoryA.parseTextureAtlasData(textureData, texture);

		let armatureDisplayA = egretFactoryA.buildArmatureDisplay(dbObj.name);
		this[dbObj.dom].addChild(armatureDisplayA);
		if (dbObj.name == "yanhua01") {
			armatureDisplayA.x = 900;
			armatureDisplayA.y = 500;
			armatureDisplayA.scaleX = 2;
			armatureDisplayA.scaleY = 2;
		}
		armatureDisplayA.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count);
		armatureDisplayA.addEventListener(dragonBones.EventObject.COMPLETE, () => {
			this[dbObj.dom].removeChild(armatureDisplayA);
			this.textNum.text = this.valueNum + "";
		}, this)
		return armatureDisplayA;
	}
	//判断对错
	public estimateFun() {
		var result = false;
		setTimeout(() => {
			this.resultGroup.visible = false;
		}, 1000)
		if (this.isPosAndNum == "number") {
			if (this.valueRow == parseInt(this.inputNum1.text) && this.valueNum == parseInt(this.inputNum2.text)) {
				console.log("恭喜");
				result = true;
			} else {
				this.inputNum1.text = "重新输入";
				this.inputNum2.text = "重新输入";
				console.log("失败");
				result = false;
			}
		} else {
			if (this.valueSum == parseInt(this.inputSum.text)) {
				console.log("恭喜");
				result = true;
				// this.successFun();
			} else {
				this.inputSum.text = "重新输入";
				console.log("失败");
				result = false;
				// this.loseGroup.visible = true;
				// this.lose.play(0)
			}
		}

		if (result) {
			this.playMusic('tq_ppcg');
			setTimeout(() => {
				this.successFun();
			}, 1000)

		} else {
			this.playMusic('tq_pp_error2');
			setTimeout(() => {
				this.loseGroup.visible = true;
				this.lose.play(0);
				this.playMusic('tq_error');
			}, 1000)

		}
	}
	public successFun() {
		this.taiqiuOver.visible = true;
		this.animationFun(this.over);
		this.overAnimate = this.animationFunTow(this.guangxian01);
		this.overAnimate2 = this.animationFunTow(this.yanhua01);
	}
	//音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.tq_bj.play(0, -1)
			this.isMusic = true;
			this.music.source = "music_png"
		}
	}
	//重置
	public reviseFun() {
		window.location.reload();
	}
	//移除并播放音乐
	public playMusic(name, count = 1) {
		if (this.racTipMusic) {
			this.racTipMusic.stop()
		}
		this.racTipMusic = this[name].play(0, count);
		return this.racTipMusic;
	}
}