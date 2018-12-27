class Index extends eui.Component implements eui.UIComponent {

	public clickLabel: eui.Label;
	public music: eui.Image;
	public reset: eui.Image;
	public endStart: eui.Group;
	public clickStart: eui.Image;
	public subNum = new Value<number>(0);	//定义可监听的数字
	public subject: eui.Image;
	public keyingGroup: eui.Group;
	public showNumGroup: eui.Group;
	public labelGroup: eui.Group;
	public animateGroup: eui.Group;
	public gameOver: eui.Group;
	public successTween: egret.tween.TweenGroup;

	public submit: eui.Button;
	public changpianGroup: eui.Group;
	public showSubject: eui.Group;
	public resultNum: number;
	public index: number;
	private isPlayMusic: boolean = false;
	private isPlayAnimate: Array<any> = [];

	public resultEnabled: Array<any> = [
		[2, 8, 13, 16, 18],
		[17]
	];
	public resultArr: Array<any> = [
		[
			0, 2, 8, 10, 13, 15, 16, 17, 18
		],
		[
			0, 17, 18
		]
	];
	public preinstallArr: Array<any> = [
		[
			6, 1, 0, 1, 3, 7, 9, 3, 0, 7, 8, 1, 3, 0, 1, 3, 0, 0, 0
		],
		[
			8, 0, 9, 1, 2, 9, 7, 0, 8, 9, 6, 1, 0, 8, 1, 0, 8, 0, 0
		]

	]
	public isResultArr: Array<any> = [];

	//动画
	public jiezou1 = {
		// take: "tickling",			//接收返回值使用 可传可不传
		dom: "animateGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "jiezou1_ske_json",	//必传
		textureData1: "jiezou1_tex_json",		//必传
		texture1: "jiezou1_tex_png",			//必传
		name: "jiezou1",						//必传
		count: 1								//必传
	};
	public jiezou2 = {
		// take: "tickling",			//接收返回值使用 可传可不传
		dom: "animateGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "jiezou2_ske_json",	//必传
		textureData1: "jiezou2_tex_json",		//必传
		texture1: "jiezou2_tex_png",			//必传
		name: "jiezou2",						//必传
		count: 1								//必传
	};
	public jiezou3 = {
		// take: "tickling",			//接收返回值使用 可传可不传
		dom: "animateGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "jiezou3_ske_json",	//必传
		textureData1: "jiezou3_tex_json",		//必传
		texture1: "jiezou3_tex_png",			//必传
		name: "jiezou3",						//必传
		count: 1								//必传
	};
	public jiezou4 = {
		// take: "tickling",			//接收返回值使用 可传可不传
		dom: "animateGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "jiezou4_ske_json",	//必传
		textureData1: "jiezou4_tex_json",		//必传
		texture1: "jiezou4_tex_png",			//必传
		name: "jiezou4",						//必传
		count: 1								//必传
	};
	public jiezou5 = {
		// take: "tickling",			//接收返回值使用 可传可不传
		dom: "animateGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "jiezou5_ske_json",	//必传
		textureData1: "jiezou5_tex_json",		//必传
		texture1: "jiezou5_tex_png",			//必传
		name: "jiezou5",						//必传
		count: 1								//必传
	};
	public jiezou6 = {
		// take: "tickling",			//接收返回值使用 可传可不传
		dom: "animateGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "jiezou6_ske_json",	//必传
		textureData1: "jiezou6_tex_json",		//必传
		texture1: "jiezou6_tex_png",			//必传
		name: "jiezou6",						//必传
		count: 1								//必传
	};
	public changpian = {
		// take: "tickling",			//接收返回值使用 可传可不传
		dom: "changpianGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "changpian_ske_json",	//必传
		textureData1: "changpian_tex_json",		//必传
		texture1: "changpian_tex_png",			//必传
		name: "changpian",						//必传
		count: -1								//必传
	};
	// 音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;

	public tq_bj: egret.Sound = RES.getRes("tq_bj_mp3");
	public success: egret.Sound = RES.getRes("success_mp3");
	public error: egret.Sound = RES.getRes("error_mp3");
	public bj: egret.Sound = RES.getRes("bj_mp3");
	public music1: egret.Sound = RES.getRes("music1_mp3");
	public music2: egret.Sound = RES.getRes("music2_mp3");
	public tip: egret.Sound = RES.getRes("tip_mp3");

	public constructor() {
		super();
		this.skinName = "IndexSkin";

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
		this.subNum.addEventListener(Data.DATA, this.changNumber, this); //当数字发生改变时调用
		this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.showSubject.visible = true }, this)
		this.showSubject.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.showSubject.visible = false }, this)
		this.labelGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enteringLabel, this);
		this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.referFun, this);
		this.gameOver.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);


		// 开始按钮 等游戏实现后 解开注释使用
		this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.endStart.visible = false;
			this.start();
		}, this);

		// this.start()
	}
	// 开始游戏
	public start() {
		this.subNum.value = 1;
		this.animationFun(this.changpian)
		this.music_bj = this.bj.play(0, -1)
		this.playMusic('tip')
		this.gameOver.visible = false;
	}

	//点击输入正确答案按钮
	public enteringLabel(e: egret.TouchEvent) {
		if (e.target.name != "group") {
			this.clickLabel = e.target;
			this.index = this.labelGroup.$children.indexOf(e.target);
			var x = e.target.x + e.target.parent.x - 500;
			var y = e.target.y + e.target.parent.y - 200;
			this.addChild(new Keyset(this, 350, 500))
		}
	}
	//判断对错
	public judgeResult() {
		var preinstall = this.preinstallArr[this.subNum.value - 1];
		this.isResultArr[this.index] = this.resultNum;
		this.isSuccessFun();
		if (this.resultNum == preinstall[this.index]) {
			console.log("回答正确")
			this.Highlight(this.keyingGroup.$children[this.index], true);
			this.playMusic("success");

		} else {
			console.log("回答错误");
			this.Highlight(this.keyingGroup.$children[this.index], false)
			this.playMusic("error");
		}
	}
	//监听数字函数
	public changNumber() {
		this.labelGroup.visible = true;
		this.keyingGroup.visible = true;
		this.showNumGroup.visible = true;
		var labelChild: any = this.labelGroup.$children;
		var keyingChild: any = this.keyingGroup.$children;
		var showNumChild: any = this.showNumGroup.$children;
		this.isResultArr = [];
		for (let i = 0; i < this.labelGroup.$children.length; i++) {
			var index = this.resultArr[this.subNum.value - 1].indexOf(i);  //在答案中查找对应下标
			var imgUrl = keyingChild[i].source.split("_");				//区分可点与不可点按键图片
			if (index != -1) {
				var preinstall = this.preinstallArr[this.subNum.value - 1];	//预设字母数字值的数组
				labelChild[i].visible = false;								//隐藏预设label 
				keyingChild[i].source = imgUrl[0] + "_d_" + imgUrl[imgUrl.length - 2] + "_" + imgUrl[imgUrl.length - 1];	//设置不可点图片样式
				showNumChild[i].source = preinstall[i] + "_png";
				this.isResultArr[i] = preinstall[i]
			} else {
				labelChild[i].visible = true;
				keyingChild[i].source = imgUrl[0] + "_" + imgUrl[imgUrl.length - 2] + "_" + imgUrl[imgUrl.length - 1];	//设置可点图片样式
				showNumChild[i].source = "";
			}
			keyingChild[i].visible = true;
			showNumChild[i].visible = true;

			keyingChild[i].filters = null;	//清除高亮显示
		}
		this.resultEnabled[this.subNum.value - 1].map((item) => {
			labelChild[item].visible = false;
			keyingChild[item].visible = false;
			showNumChild[item].visible = false;
		})


		this.isSuccessFun();
	}
	//判断是否全部答对
	public isSuccessFun() {
		var preinstall = this.preinstallArr[this.subNum.value - 1];
		console.log(this.isResultArr)
		if (this.isResultArr.join("") == preinstall.join("")) {
			console.log("正确");
			this.submit.enabled = true;
		} else {
			console.log("有误");
			this.submit.enabled = false;
		}
	
	}
	//确认 提交按钮
	public referFun() {
		this.isMusic = true;
		this.musicFun()

		this.labelGroup.visible = false;
		this.keyingGroup.visible = false;
		this.showNumGroup.visible = false;
		this.submit.enabled = false;
		this.isPlayAnimate = [];

		this.animationFun(this.jiezou1)
		this.animationFun(this.jiezou2)
		this.animationFun(this.jiezou3)
		this.animationFun(this.jiezou4)
		this.animationFun(this.jiezou5)
		this.animationFun(this.jiezou6)

		this.playMusic("music" + this.subNum.value).addEventListener(egret.Event.SOUND_COMPLETE, () => {
			this.isPlayMusic = true;
		}, this)


		console.log("确认");
	}
	//开始 暂停 背景音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.bj.play(0, -1)
			this.isMusic = true;
			this.music.source = "music_png"
		}
	}
	//重置
	public resetFun() {
		window.location.reload();
	}
	//调用移除上一个音乐 并播放本次音乐
	public playMusic(name, count = 1) {
		if (this.racTipMusic) {
			this.racTipMusic.stop()
		}
		this.racTipMusic = this[name].play(0, count);
		return this.racTipMusic;
	}
	//动画  
	public animationFun(dbObj) {
		//进来先移除动画在播放  避免动画叠加
		if (this[dbObj.take]) {
			if (this[dbObj.take].parent) {
				dbObj.dom ? this[dbObj.dom].removeChild(this[dbObj.take]) : this.removeChild(this[dbObj.take]);
			}
		}
		//添加文件
		let dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		let textureData = RES.getRes(dbObj.textureData1);
		let texture = RES.getRes(dbObj.texture1);
		// 创建动画工厂
		let egretFactoryA = new dragonBones.EgretFactory();
		egretFactoryA.parseDragonBonesData(dragonbonesData);
		egretFactoryA.parseTextureAtlasData(textureData, texture);
		//创建动画
		let armature: dragonBones.EgretArmatureDisplay = egretFactoryA.buildArmatureDisplay(dbObj.name);
		//添加到舞台
		dbObj.dom ? this[dbObj.dom].addChild(armature) : this.addChild(armature);

		//播放动画

		armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = Math.random() + 1;

		//监听帧
		armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
			// console.log(e.frameLabel)
		}, this)
		//动画播放完成
		armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
			if (armature.parent) {	// 播放完成移除动画
				dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
			}

			if (this.isPlayMusic) {
				this.isPlayAnimate.push(dbObj.name)
				if (this.isPlayAnimate.length >= 6 && this.subNum.value <= 1) {
					this.subNum.value++;
					this.isPlayMusic = false;
					this.musicFun();
				} else if (this.isPlayAnimate.length >= 6 && this.subNum.value >= 2) {
					console.log("恭喜通关");
					this.isPlayMusic = false;
					this.musicFun();
					this.gameOver.visible = true;
					this.successTween.play(0)
				}

			} else {
				if (dbObj.name == "jiezou1") {
					this.animationFun(this.jiezou1)
				} else if (dbObj.name == "jiezou2") {
					this.animationFun(this.jiezou2)
				} else if (dbObj.name == "jiezou3") {
					this.animationFun(this.jiezou3)
				} else if (dbObj.name == "jiezou4") {
					this.animationFun(this.jiezou4)
				} else if (dbObj.name == "jiezou5") {
					this.animationFun(this.jiezou5)
				} else if (dbObj.name == "jiezou6") {
					this.animationFun(this.jiezou6)
				}
			}


		}, this)

		return armature;
	}
	//高亮显示
	public Highlight(target, isSuccess: boolean) {

		var distance: number = 6;           /// 阴影的偏移距离，以像素为单位
		var angle: number = 45;              /// 阴影的角度，0 到 360 度
		var color: number = 0x56fdff;        /// 阴影的颜色，不包含透明度
		var alpha: number = 0.7;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
		var blurX: number = 30;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
		var blurY: number = 30;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
		var strength: number = 3;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
		var quality: number = egret.BitmapFilterQuality.LOW;              /// 应用滤镜的次数，暂无实现
		var inner: boolean = false;            /// 指定发光是否为内侧发光
		var knockout: boolean = false;            /// 指定对象是否具有挖空效果
		var dropShadowFilter: egret.DropShadowFilter = new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY,
			strength, quality, inner, knockout);
		if (isSuccess) {
			target.filters = [dropShadowFilter]
		} else {
			target.filters = null;
		}
	}
}