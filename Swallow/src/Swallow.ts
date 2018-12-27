class Swallow extends eui.Component implements eui.UIComponent {
	public clickLabel: eui.Label;
	public bj: eui.Image;
	public music: eui.Image;
	public revise: eui.Image;
	public group: eui.Group;
	public image1: eui.Image;
	public image: eui.Image;
	public image0: eui.Image;
	public showSwallow: eui.Group;
	public swallow: eui.Image;
	public clickSubject: eui.Group;
	public showSubject: eui.Group;
	public subject: eui.Image;
	public title: eui.Image;
	public input: eui.Image;
	public imgBorder: eui.Image;
	public labelGroup: eui.Group;
	public subjectImage: eui.Image;
	public affirm: eui.Button;
	public switch: eui.Button;
	public back: eui.Image;
	public clickStart: eui.Image;
	public endStart: eui.Group;
	public overRect: eui.Rect;

	public showTipGroup: eui.Group
	public showSubjectTip: eui.Image

	public tipLabel: eui.Image;
	public tipLabelOpen: eui.Image;
	public flie: eui.Group;
	public clickBtn: eui.Group;
	public clickBtn1: eui.Group;
	public clickBtn2: eui.Group;
	public clickBtn3: eui.Group;
	public imgTransition: eui.Image;
	public Reel: egret.tween.TweenGroup;
	public closeSwallow: egret.tween.TweenGroup;
	public closeSub: egret.tween.TweenGroup;
	public subNum = 1;
	public isCursor = true; 	//是否第一次

	public moveGroup: eui.Group;
	public moveGroup1: eui.Group;
	public moveGroup2: eui.Group;
	public moveGroup3: eui.Group;
	public subLabel1: eui.Group;
	public subLabel2: eui.Group;
	public subLabel3: eui.Group;
	public clickSubLabel: eui.Group;
	public clickSubLabel1: eui.Group;
	public clickSubLabel2: eui.Group;
	public clickSubLabel3: eui.Group;

	private touchStatus: boolean = false;              //当前触摸状态，按下时，值为true
	private distance: egret.Point = new egret.Point();
	public shape: egret.Shape = new egret.Shape();
	public isFirstLineTo = true;
	public isClose: Array<any> = [];
	public trigonPosition: Array<any> = [];
	public submitArr: Array<any> = [
		[18],
		[20],
		[2, 3]
	]
	public resultsArr: Array<any> = [
		["ABE", "ACE", "BD", "CD"],
		["BCE", "ABE", "CD", "AD"],
		["ABO", "BCO", "AF", "CF", "ACO", "BCO", "AE", "BE", "ABO", "ACO", "BD", "CD"],
	];
	public resultArr: Array<any> = []

	//动画
	public mc: egret.MovieClip;
	public egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
	public armature: dragonBones.Armature;
	public warcraftNormal = { dragonbonesData: "swallow1_ske_json", textureData1: "swallow1_tex_json", texture1: "swallow1_tex_png", name: "swallow1", count: -1 };
	public file = { dragonbonesData: "fuhuo_ske_json", textureData1: "fuhuo_tex_json", texture1: "fuhuo_tex_png", name: "fuhuo", count: 1 };
	public paopaosuilie = { dom: "clickSubject", dragonbonesData: "paopaosuilie_ske_json", textureData1: "paopaosuilie_tex_json", texture1: "paopaosuilie_tex_png", name: "paopaosuilie", count: 1 };

	//音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;


	public fy_bj: egret.Sound = RES.getRes("fy_bj_mp3"); //背景
	public fy_tip1: egret.Sound = RES.getRes("fy_tip1_mp3"); //提示1
	public fy_tip2: egret.Sound = RES.getRes("fy_tip2_mp3"); //提示2
	public fy_revise: egret.Sound = RES.getRes("fy_revise_mp3"); //结束提示
	public fy_zq: egret.Sound = RES.getRes("fy_zq_mp3"); //正确
	public fy_error: egret.Sound = RES.getRes("fy_error_mp3"); //错误
	public fy_clickTip: egret.Sound = RES.getRes("fy_clickTip_mp3"); //点击
	public fy_fh: egret.Sound = RES.getRes("fy_fh_mp3"); //复活
	public fy_gshj: egret.Sound = RES.getRes("fy_gshj_mp3"); //光束汇聚
	public fy_jiao: egret.Sound = RES.getRes("fy_jiao_mp3"); //叫
	public fy_jzdk: egret.Sound = RES.getRes("fy_jzdk_mp3"); //卷轴打开
	public fy_qpbz: egret.Sound = RES.getRes("fy_qpbz_mp3"); //气泡爆炸
	public fy_tuoru: egret.Sound = RES.getRes("fy_tuoru_mp3"); //拖入

	public constructor() {
		super();
		this.skinName = "SwallowSkin";
		this.addEventListener(egret.Event.ENTER_FRAME, function (): void {
			dragonBones.WorldClock.clock.advanceTime(0.03);
		}, this);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.clickBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtnFun, this);
		this.clickSubject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSubjectFun, this)
		this.shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
		this.shape.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
		this.affirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.affirmFun, this)
		this.switch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchFun, this)
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backFun, this)
		this.clickSubLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSubLabelFun, this);
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
		this.overRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
		this.labelGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showTipFun, this);
		this.showTipGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.showTipGroup.visible = false }, this);
		this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.endStart.visible = false;
			this.start();
		}, this);
		// this.start()
	}
	public start() {
		this.showSubject.visible = false;
		this.flie.visible = false;
		this.overRect.visible = false;
		this.tipLabel.visible = true;
		this.tipLabelOpen.visible = false;
		this.fy_tip1.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, () => {
			this.music_bj = this.fy_bj.play(0, -1);
			this.music_bj.volume = 0.3
			this.playMusic("fy_jzdk");
			// this.Reel.play(0);
			// setTimeout(() => {
			// 	this.cursorFun()
			// }, 1000)
		}, this)
		this.Reel.play(0);
		setTimeout(() => {
			this.cursorFun()
		}, 1000)



	}
	// 点击题目
	public clickSubjectFun(e: egret.TouchEvent) {
		if (e.target.name != "group" && e.target.source.split("_").reverse()[1] == "click") {

			this.mc.x = 880;
			this.mc.y = 365
			this.tipLabel.visible = false;
			this.tipLabelOpen.visible = true;

			this.fy_clickTip.play(0, 1)
			this.playMusic("fy_tip2");
			this.affirm.enabled = false;
			this.switch.enabled = false;
			// this.switch.visible = true;

			this.subNum = e.target.name;

			this.showSubject.visible = true;
			this.clickBtn.visible = true;
			this.moveGroup.visible = true;
			this.clickSubLabel.visible = false;

			this.subject.source = "subject" + e.target.name + "_png";
			this.title.source = "title" + e.target.name + "_png";
			this.input.source = "input" + e.target.name + "_png";
			this.imgBorder.source = "border" + e.target.name + "_png";

			for (var i = 0; i < this.resultsArr[this.subNum - 1].length; i++) {
				this.resultArr[i] = this.resultsArr[this.subNum - 1][i]
			}

			this.isClose = [];
			this.trigonPosition = [];
			this.isFirstLineTo = true;

			for (var i = 1; i < 4; i++) {
				if (i == this.subNum) {
					this["moveGroup" + i].visible = true;
					this["clickBtn" + i].visible = true;
				} else {
					this["moveGroup" + i].visible = false;
					this["clickBtn" + i].visible = false;
				}
				this["subLabel" + i].visible = false;
				this["clickSubLabel" + i].visible = false;
			}
		}
	}
	//连接
	public clickBtnFun(e: egret.TouchEvent) {
		if (e.target.name != "group" && this.trigonPosition.indexOf(e.target.name) == -1) {
			this.playMusic("fy_clickTip");
			// console.log(e.target.name);
			// console.log(e.target)
			var x = this.clickBtn.x + e.target.parent.x + e.target.x + (e.target.width / 2);
			var y = this.clickBtn.y + e.target.parent.y + e.target.y + (e.target.height / 2);
			this.isClose.push({ x: x, y: y });
			if (this.isFirstLineTo) {
				this.trigonPosition = [];
				this.shape.graphics.clear();

				this.shape.graphics.lineStyle(15, 0x663500);
				this.shape.graphics.moveTo(x, y);
				this.shape.graphics.lineTo(x, y)
				this.isFirstLineTo = false;
				this.mc.x = 720;
				this.mc.y = 660
			} else {
				this.shape.graphics.lineTo(x, y);
				if (this.isClose.length >= 2) {
					this.mc.x = 910;
					this.mc.y = 600;
					this.shape.touchEnabled = true;
				}
				if (this.isClose.length >= 3) {
					// this.mc.x = 800;
					// this.mc.y = 500;
					if (this.mc)
						if (this.mc.parent) {
							this.removeChild(this.mc);
						}
					this.shape.graphics.clear()
					this.shape.graphics.lineStyle(15, 0x663500);
					this.shape.graphics.beginFill(0xF1C411);
					this.shape.graphics.moveTo(this.isClose[0].x, this.isClose[0].y);
					this.shape.graphics.lineTo(this.isClose[0].x, this.isClose[0].y);
					this.shape.graphics.lineTo(this.isClose[1].x, this.isClose[1].y);
					this.shape.graphics.lineTo(this.isClose[2].x, this.isClose[2].y);
					this.shape.graphics.lineTo(this.isClose[0].x, this.isClose[0].y)
					this.shape.graphics.endFill();
					this.isClose = [];
					this.isFirstLineTo = true;
				}
			}

			this.trigonPosition.push(e.target.name);
			this.addChildAt(this.shape, 100);
			if (this.isCursor && this.isClose.length == 0) {
				this.cursorFun2();
				this.isCursor = false;
			}
		}
	}
	//按下
	public mouseDown(e: egret.TouchEvent) {
		this.trigonPosition.sort();
		this.touchStatus = true;
		this.distance.x = e.stageX - this.shape.x;
		this.distance.y = e.stageY - this.shape.y;
		if (this.mc)
			if (this.mc.parent) {
				this.removeChild(this.mc);
			}
	}
	//抬起
	public mouseUp(e: egret.TouchEvent) {
		// this.isFirstLineTo = false;
		// console.log("抬起")
		// console.log(this.resultArr)
		var isHit: boolean = this["moveGroup" + this.subNum].hitTestPoint(e.stageX, e.stageY);
		var index: number = this.resultArr.indexOf(this.trigonPosition.join(""))
		// console.log(index)
		// console.log(isHit)

		// console.log(this.trigonPosition.join(""));

		if (isHit && index != -1) {
			this.playMusic("fy_zq");
			console.log("答案正确");
			var x = this.moveGroup.x + this["moveGroup" + this.subNum].x + this["moveGroup" + this.subNum].$children[index].x;
			var y = this.moveGroup.y + this["moveGroup" + this.subNum].y + this["moveGroup" + this.subNum].$children[index].y;
			this.imgTransition.visible = true;
			this.imgTransition.source = "img_" + this.subNum + "_" + this.trigonPosition.join("") + "_png";
			this.imgTransition.width = this["moveGroup" + this.subNum].$children[index].width;
			this.imgTransition.height = this["moveGroup" + this.subNum].$children[index].height;
			this.imgTransition.x = e.stageX;
			this.imgTransition.y = e.stageY;

			egret.Tween.get(this.imgTransition, {
				loop: false,//设置循环播放
			})
				.to({ x: x, y: y }, 500)//设置2000毫秒内 rotation 属性变为360
				.call(() => {
					this["moveGroup" + this.subNum].$children[index].source = "img_" + this.subNum + "_" + this.trigonPosition.join("") + "_png";
					this.resultArr[index] = "TRUE";
					this.trigonPosition = [];
					this.imgTransition.visible = false;
					this.isAchieve()	//判断是否填完
				})
		} else {
			this.playMusic("fy_error");
			console.log("答案错误")
			this.trigonPosition = [];

		}
		// 画线初始化
		this.shape.x = 0;
		this.shape.y = 0;
		this.shape.graphics.clear();
		this.isClose = [];
		this.isFirstLineTo = true;

		this.imgBorder.visible = false
		this.touchStatus = false;
	}
	//鼠标移动
	public mouseMove(e: egret.TouchEvent) {
		if (this.touchStatus) {
			this.shape.x = e.stageX - this.distance.x;
			this.shape.y = e.stageY - this.distance.y;
			var isHit: boolean = this["moveGroup" + this.subNum].hitTestPoint(e.stageX, e.stageY);
			isHit ? this.imgBorder.visible = true : this.imgBorder.visible = false;
			isHit ? this.playMusic("fy_tuoru") : ""
		}
	}
	public filtersFun() {
		var distance: number = 0;           /// 阴影的偏移距离，以像素为单位
		var angle: number = 45;              /// 阴影的角度，0 到 360 度
		var color: number = 0xffff00;        /// 阴影的颜色，不包含透明度
		var alpha: number = 1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
		var blurX: number = 16;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
		var blurY: number = 16;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
		var strength: number = 3;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
		var quality: number = egret.BitmapFilterQuality.LOW;              /// 应用滤镜的次数，暂无实现
		var inner: boolean = false;            /// 指定发光是否为内侧发光
		var knockout: boolean = false;            /// 指定对象是否具有挖空效果
		var dropShadowFilter: egret.DropShadowFilter = new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY,
			strength, quality, inner, knockout);

		this.clickBtn.filters = [dropShadowFilter]
	}
	//判断是否填完
	public isAchieve() {
		var item = true;
		for (var i = 0; i < this.resultArr.length; i++) {
			if (this.resultArr[i] != "TRUE") {
				item = false;
				break;
			}
		}
		item ? this.switch.enabled = true : this.switch.enabled = false;
	}
	//输入答案
	public clickSubLabelFun(e: egret.TouchEvent) {
		if (e.target.name != "group") {
			this.playMusic("fy_tuoru")
			this.affirm.enabled = true;
			this.clickLabel = e.target;
			this.addChild(new Keyset(this, this.clickSubLabel.x, this.clickSubLabel.y - 300))
		}
	}
	//确认
	public affirmFun() {

		var subLabel = this["clickSubLabel" + this.subNum].$children;
		var result = true;
		for (var i = 0; i < subLabel.length; i++) {
			if (subLabel[i].text != this.submitArr[this.subNum - 1][i]) {
				subLabel[i].text = "输入"
				result = false;
				break;
			}
		}
		if (result) {
			this.playMusic("fy_clickTip");

			this.tipLabel.visible = true;
			this.tipLabelOpen.visible = false;

			this.clickSubLabel.visible = false;
			this["subLabel" + this.subNum].visible = false;
			this.showSubject.visible = false;

			var imgs: any = this.clickSubject.$children;
			setTimeout(() => {
				var lei = this.animationFun(this.paopaosuilie)
				lei.x = imgs[this.subNum - 1].x + imgs[this.subNum - 1].width / 2;
				lei.y = imgs[this.subNum - 1].y + imgs[this.subNum - 1].height / 2;
			}, 500)

			// if (this.subNum >= 3) {
			// 	var imgs: any = this.clickSubject.$children[this.subNum - 1]
			// 	imgs.source = "sub_" + this.subNum + "_up_png";
			// 	this.flie.visible = true;
			// 	setTimeout(() => {
			// 		this.pokeAnimation(this.file)
			// 		this.playMusic("fy_gshj");
			// 		this.fy_fh.play(0, 1)
			// 	}, 1000)

			// } else {
			// 	var imgs: any = this.clickSubject.$children;
			// 	imgs[this.subNum - 1].source = "sub_" + this.subNum + "_up_png";
			// 	imgs[this.subNum].source = "sub_" + this.subNum + "_click_png";

			// }

		} else {
			this.playMusic("fy_error");
		}
	}
	//切换
	public switchFun() {
		this.playMusic("fy_clickTip");
		this.moveGroup.visible = false;
		this.clickBtn.visible = false;
		this.clickSubLabel.visible = true;

		this["moveGroup" + this.subNum].visible = false;
		this["clickBtn" + this.subNum].visible = false;
		this["subLabel" + this.subNum].visible = true;
		this["clickSubLabel" + this.subNum].visible = true;

		this["clickSubLabel" + this.subNum].$children.map((item) => {
			item.text = "输入"
		})
		this.switch.enabled = false;

	}
	//返回
	public backFun() {
		this.playMusic("fy_clickTip");
		this.tipLabel.visible = true;
		this.tipLabelOpen.visible = false;
		this.shape.graphics.clear();
		this["subLabel" + this.subNum].visible = false;
		this.moveGroup.visible = false;
		this.clickBtn.visible = false;
		this.clickSubLabel.visible = false;
		this.showSubject.visible = false;
		if (this.subNum >= 3) {
			this["moveGroup" + this.subNum].$children.map((item) => {
				if (item.source != "BD_png" || item.source != "DC_png")
					item.source = "yanweimoxing_10_png"
			})
		} else {
			this["moveGroup" + this.subNum].$children.map((item) => {
				item.source = "yanweimoxing_09_png"
			})
		}
		if (this.mc)
			if (this.mc.parent) {
				this.removeChild(this.mc);
			}
	}
	//手指
	public cursorFun() {
		if (this.mc)
			if (this.mc.parent) {
				this.removeChild(this.mc);
			}
		var data = RES.getRes("shouzhi_json");
		var txtr = RES.getRes("shouzhi_png");
		var mcFactory = new egret.MovieClipDataFactory(data, txtr);
		this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("shouzhi"));
		this.addChildAt(this.mc, 900)
		this.mc.play(-1);
		this.mc.x = 1200;
		this.mc.y = 510;
	}
	public cursorFun2() {
		if (this.mc)
			if (this.mc.parent) {
				this.removeChild(this.mc);
			}
		var data = RES.getRes("shouzhi2_json");
		var txtr = RES.getRes("shouzhi2_png");
		var mcFactory = new egret.MovieClipDataFactory(data, txtr);
		this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("shouzhi2"));
		this.addChildAt(this.mc, 900)
		this.mc.play(-1);
		this.mc.x = 850;
		this.mc.y = 700;
	}
	//动画
	public fireAnimation() {
		var data = RES.getRes("fuhuo01_mc_json");
		var txtr = RES.getRes("fuhuo01_tex_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("fuhuo01"));
		this.addChild(mc);
		mc.play(-1);
		mc.x = 500;
		mc.y = 500;
		mc.addEventListener(egret.Event.COMPLETE, function () {
			console.log("播放完成")
		}, this)
	}
	//题目显示
	public showTipFun() {
		this.showTipGroup.visible = true;
		this.showSubjectTip.source = this.tipLabel.visible ? "yanweimoxing_70_png" : "yanweimoxing_71_png"
	}
	//龙骨动画
	public pokeAnimation(dbObj) {
		// if (this.armature) {
		// 	this.warcraftGroup.removeChild(this.armature.getDisplay())
		// }
		// console.log(dbObj)
		var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		var textureData1 = RES.getRes(dbObj.textureData1);
		var texture1 = RES.getRes(dbObj.texture1);

		this.egretFactory.parseDragonBonesData(dragonbonesData);
		this.egretFactory.parseTextureAtlasData(textureData1, texture1);

		this.armature = this.egretFactory.buildArmature(dbObj.name);
		var armatureDisplay = this.armature.getDisplay();

		this.flie.addChild(armatureDisplay);
		if (dbObj.name == "swallow1") {
			armatureDisplay.x = -90;
			armatureDisplay.y = -220;
		}

		this.armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 0.8;
		dragonBones.WorldClock.clock.add(this.armature);//添加时间钟
		//监听时间钟 只需执行一次 放到了构造中 -->
		//播放完成的回调
		if (dbObj.name == "fuhuo") {
			setTimeout(() => {
				this.swallow.source = "yanweimoxing_34_png";
				this.closeSub.play(0)
			}, 1000)
		}
		this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
			// this.armature.animation.gotoAndStopByFrame(dbObj.name, 1)
			console.log("动画播放完成");
			this.overRect.visible = true;
			this.flie.removeChild(this.armature.getDisplay());
			this.closeSwallow.play(0);
			this.fy_revise.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, () => {
				this.playMusic("fy_jiao");
			}, this)
			this.pokeAnimation(this.warcraftNormal)
		}, this)
	}
	// 特效
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

		armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale =1;
		armature.scaleX=1.2;
		armature.scaleY=1.2;
		//监听帧
		armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
			// console.log(e.frameLabel)
		}, this)
		//动画播放完成
		armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
			if (armature.parent) {	// 播放完成移除动画
				dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
			}
			if (this.subNum >= 3) {
				var imgs: any = this.clickSubject.$children[this.subNum - 1]
				imgs.source = "sub_" + this.subNum + "_up_png";
				this.flie.visible = true;
				setTimeout(() => {
					this.pokeAnimation(this.file)
					this.playMusic("fy_gshj");
					this.fy_fh.play(0, 1)
				}, 1000)

			} else {
				var imgs: any = this.clickSubject.$children;
				imgs[this.subNum - 1].source = "sub_" + this.subNum + "_up_png";
				imgs[this.subNum].source = "sub_" + this.subNum + "_click_png";

			}
		}, this)

		return armature;
	}
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.fy_bj.play(0, -1)
			this.music_bj.volume = 0.3
			this.isMusic = true;
			this.music.source = "music_png"
		}
	}
	//重置
	public reviseFun() {
		window.location.reload();
		// var imgs: any = this.clickSubject.$children;
		// var lei = this.animationFun(this.paopaosuilie)
		// lei.x = imgs[this.subNum - 1].x + imgs[this.subNum - 1].width / 2;
		// lei.y = imgs[this.subNum - 1].y + imgs[this.subNum - 1].height / 2;

	}
	//移除并播放音乐
	public playMusic(name, count = 1) {
		if (this.racTipMusic) {
			this.racTipMusic.stop()
		}
		this.racTipMusic = this[name].play(0, count)
	}
}