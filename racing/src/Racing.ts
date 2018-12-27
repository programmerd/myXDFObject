class Racing extends eui.Component implements eui.UIComponent {
	public clickLabel: eui.Label;

	public subject: eui.Image;
	public col1: eui.Image;
	public col2: eui.Image;
	public col3: eui.Image;
	public col4: eui.Image;
	public submit: eui.Image;
	public previous: eui.Image;
	public next: eui.Image;
	public music: eui.Image;
	public result: eui.Image;
	public revise: eui.Image;
	public option1: eui.Image;
	public option2: eui.Image;
	public options: eui.Group;
	public rac1: eui.Group;
	public rac2: eui.Group;
	public rac3: eui.Group;
	public rac4: eui.Group;

	public rac_source: eui.Group;
	public rac_position: eui.Group;
	public racGo: egret.tween.TweenGroup

	//切换题目label
	public racLabel: eui.Group;
	public racLabel1: eui.Group;
	public racLabel2: eui.Group;
	public racLabel3: eui.Group;
	public setInput: eui.Label;
	//选择 设
	public setInputArr: Array<any> = [
		["国内品牌", "国外品牌"],
		["学生", "故事书"],
		["现在小东", "4年前小东"],
	]
	//正确答案
	public resultArr: Array<any> = [
		["5x+2", "x", "5x+2", "200", "33", "167", "33"],
		["5x", "11", "8x", "4", "5", "5", "36"],
		["3x-x", "10", "5", "9"]
	]
	//存放第n题第n排对错
	public submitArr: Array<any> = [[], [], []];
	//存放粒子特效
	public particleArr: Array<any> = [];
	public overAnimationArr: Array<any> = [];
	//当前属于第几题
	public subjectNum: number;

	//结束
	public closeMask: eui.Rect;
	public gameover: eui.Group;
	public opacity: egret.tween.TweenGroup;
	public egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
	public armature: dragonBones.Armature;
	public showFong: eui.Group
	//提示
	public tipGroup: eui.Group
	public resultTip: eui.Image
	//开始
	public openStart: eui.Group
	public startpic: eui.Image
	//音乐
	public rac_bj: egret.Sound = RES.getRes("rac_bj_mp3");	//背景
	public rac_ok: egret.Sound = RES.getRes("rac_ok_mp3");	//ok
	public rac_go: egret.Sound = RES.getRes("rac_go_mp3");	//出发
	public rac_start_fire: egret.Sound = RES.getRes("rac_start_fire_mp3");	//启动不出发
	public rac_go_stop: egret.Sound = RES.getRes("rac_go_stop_mp3");	//终点刹车
	public rac_fete: egret.Sound = RES.getRes("rac_fete_mp3");	//终点欢乐
	public rac_error: egret.Sound = RES.getRes("rac_error_mp3");	//终点欢乐
	public rac_sub_1: egret.Sound = RES.getRes("rac_sub_1_mp3");	//读题1
	public rac_sub_2: egret.Sound = RES.getRes("rac_sub_2_mp3");	//读题2
	public rac_sub_3: egret.Sound = RES.getRes("rac_sub_3_mp3");	//读题3
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;

	public constructor() {
		super();
		this.skinName = "RacingSkin";
		this.addEventListener(egret.Event.ENTER_FRAME, function (): void {
			dragonBones.WorldClock.clock.advanceTime(0.03);
		}, this);
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.tipGroup.touchChildren = false;
		this.openStart.visible = true;
		this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);//GO
		this.previous.addEventListener(egret.TouchEvent.TOUCH_TAP, this.previousFun, this);
		this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextFun, this);
		this.options.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setOptionFun, this);
		this.racLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.labelFun, this);
		this.closeMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.recommence, this);
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.result.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.tipGroup.visible = true }, this);
		this.tipGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.tipGroup.visible = false }, this);
		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);

		this.startpic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this);
		this.startpic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this);

		// this.start()
	}
	public start() {
		this.subjectNum = 1;	//第一题
		this.tipGroup.visible = false;
		this.openStart.visible = false;
		this.switchSub();	//切换资源
		this.music_bj = this.rac_bj.play(0, -1);

	}
	//上一关
	public previousFun() {
		this.next.visible = true;
		this.subjectNum--;
		this.switchSub()
		if (this.subjectNum <= 1) {
			this.previous.visible = false;
		}
	}
	//下一关
	public nextFun() {
		this.previous.visible = true;
		this.subjectNum++
		this.switchSub()
		if (this.subjectNum >= 3) {
			this.next.visible = false;
		}

	}
	// 切换资源
	public switchSub() {
		this.subject.source = "subject" + this.subjectNum + "_png";
		this.col1.source = "col_" + this.subjectNum + "_1_png";
		this.col2.source = "col_" + this.subjectNum + "_2_png";
		this.col3.source = "col_" + this.subjectNum + "_3_png";
		this.col4.source = "col_" + this.subjectNum + "_4_png";
		this.option1.source = "option_" + this.subjectNum + "_1_png";
		this.option2.source = "option_" + this.subjectNum + "_2_png";
		this.resultTip.source = "tip" + this.subjectNum + "_png";
		for (var i = 1; i < 4; i++) {
			if (this.subjectNum == i) {
				this["racLabel" + i].visible = true;
			} else {
				this["racLabel" + i].visible = false;
			}
		}
		this.reviseLabelText();
	}
	//重置label的值
	public reviseLabelText() {
		for (var i = 0; i < this["racLabel" + this.subjectNum].$children.length; i++) {
			this["racLabel" + this.subjectNum].$children[i].text = "输入"
		}
		this.setInput.text = "点击下面按钮";
		this.playMusic("rac_sub_" + this.subjectNum);
		this.removeParticle();
	}
	//设
	public setOptionFun(e: egret.TouchEvent) {
		// console.log(e.target.source.split("_").reverse()[1])
		if (e.target.name != "group") {
			var j = e.target.source.split("_").reverse()[1];
			this.setInput.text = this.setInputArr[this.subjectNum - 1][j - 1];
		}

	}
	//label点击事件
	public labelFun(e: egret.TouchEvent) {
		if (e.target.type) {
			this.clickLabel = e.target;
			var x = this.racLabel.x + e.target.x;
			var y = this.racLabel.y + e.target.y;
			this.addChild(new keySet(this, x - 230, y - 200));
		}
	}
	//粒子特效
	public fireAnimation(texture, config, index): void {
		if (this.particleArr[index]) {
			this["rac" + (index + 1)].removeChild(this.particleArr[index]);
		}
		var texture = RES.getRes(texture);
		var config = RES.getRes(config);
		var system = new particle.GravityParticleSystem(texture, config);
		this.particleArr[index] = system;
		this["rac" + (index + 1)].addChildAt(system, 0);
		system.x = 30;
		system.y = 40;
		// var tw = egret.Tween.get(system, { loop: true });
		// tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
		system.start(-1);
	}
	//结束粒子特效
	public overAnimation(texture, config, x = 900, y = 500): void {
		var texture = RES.getRes(texture);
		var config = RES.getRes(config);
		var system = new particle.GravityParticleSystem(texture, config);
		this.overAnimationArr.push(system);
		this.addChild(system);
		system.x = x;
		system.y = y;
		// var tw = egret.Tween.get(system, { loop: true });
		// tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
		system.start(-1);
	}
	//mc 序列帧动画
	public mistAnimation(index) {
		var data = RES.getRes("heiyan01_json");
		var txtr = RES.getRes("heiyan01_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("heiyan"));
		// this.particleArr[index] = mc;
		this["rac" + (index + 1)].addChildAt(mc, 0);
		mc.play(4);
		mc.x = -50;
		mc.y = -15
		mc.addEventListener(egret.Event.COMPLETE, function () {
			this["rac" + (index + 1)].removeChild(mc);
		}, this)
	}
	//龙骨动画
	public pokeAnimation(dbObj) {
		if (this.armature) {
			this.gameover.removeChild(this.armature.getDisplay())
		}
		console.log(dbObj)
		var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		var textureData1 = RES.getRes(dbObj.textureData1);
		var texture1 = RES.getRes(dbObj.texture1);

		// let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		this.egretFactory.parseDragonBonesData(dragonbonesData);
		this.egretFactory.parseTextureAtlasData(textureData1, texture1);

		this.armature = this.egretFactory.buildArmature(dbObj.name);
		var armatureDisplay = this.armature.getDisplay();

		this.gameover.addChild(armatureDisplay);
		armatureDisplay.x = 1000;
		armatureDisplay.y = 500;

		this.armature.animation.gotoAndPlayByFrame(dbObj.name, 1, 1).timeScale = 1;

		dragonBones.WorldClock.clock.add(this.armature);//添加时间钟
		//监听时间钟 只需执行一次 放到了构造中 -->
		//播放完成的回调
		this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
			// console.log("-->", e.target.animation.animationDataList)
			// this.armature.animation.gotoAndStopByProgress(dbObj.name, 1);
			// this.armature.animation.gotoAndStop(dbObj.name, 0);
			// this.gameover.removeChild(armatureDisplay)
			this.overAnimation("xingguang01_png", "xingguang01_json", 1000, 400);
			this.overAnimation("xingguang01_png", "xingguang01_json", 800, 650);
			this.overAnimation("xingguang02_png", "xingguang02_json");
			this.playMusic("rac_fete", -1);
			this.musicFun();
		}, this)
	}
	//GO
	public submitFun() {
		this.playMusic("rac_ok")
		switch (this.subjectNum) {
			case 1:
				this.result1()
				break;
			case 2:
				this.result2()
				break;
			case 3:
				this.result3()
				break;
		}
		this.commitFun()
	}
	public result1() {
		var label = this["racLabel" + this.subjectNum].$children;
		var result = this.resultArr[this.subjectNum - 1];
		var label2 =label[1].text == result[1] && label[2].text == result[2];
		var label3 =label[1].text == result[2] && label[2].text == result[1];
		//一排
		if (this.setInput.text == "国外品牌" && label[0].text == result[0]) {
			this.submitArr[this.subjectNum - 1][0] = true;
		} else {
			this.submitArr[this.subjectNum - 1][0] = false;
		}
		//二排
		if ((label2 || label3) && label[3].text == result[3]) {
			this.submitArr[this.subjectNum - 1][1] = true;
		} else {
			this.submitArr[this.subjectNum - 1][1] = false;
		}
		//三排
		if (label[4].text == result[4]) {
			this.submitArr[this.subjectNum - 1][2] = true;
		} else {
			this.submitArr[this.subjectNum - 1][2] = false;
		}
		//四排
		if (label[5].text == result[5] && label[6].text == result[6]) {
			this.submitArr[this.subjectNum - 1][3] = true;
		} else {
			this.submitArr[this.subjectNum - 1][3] = false;
		}

	}
	public result2() {
		var label = this["racLabel" + this.subjectNum].$children;
		var result = this.resultArr[this.subjectNum - 1];
		var label21=label[0].text == result[0] && label[1].text == result[1];
		var label22=label[0].text == result[1] && label[1].text == result[0];
		//一排
		if (this.setInput.text == "学生") {
			this.submitArr[this.subjectNum - 1][0] = true;
		} else {
			this.submitArr[this.subjectNum - 1][0] = false;
		}
		//二排
		if ((label21 ||label22) && label[2].text == result[2] && label[3].text == result[3]) {
			this.submitArr[this.subjectNum - 1][1] = true;
		} else {
			this.submitArr[this.subjectNum - 1][1] = false;
		}
		//三排
		if (label[4].text == result[4]) {
			this.submitArr[this.subjectNum - 1][2] = true;
		} else {
			this.submitArr[this.subjectNum - 1][2] = false;
		}
		//四排
		if (label[5].text == result[5] && label[6].text == result[6]) {
			this.submitArr[this.subjectNum - 1][3] = true;
		} else {
			this.submitArr[this.subjectNum - 1][3] = false;
		}

	}
	public result3() {
		var label = this["racLabel" + this.subjectNum].$children;
		var result = this.resultArr[this.subjectNum - 1];
		var label21=(label[0].text == result[0] || label[0].text=="2x") && label[1].text == result[1];
		var label22=label[0].text == result[1] && (label[1].text == result[0] || label[1].text=="2x");
		//一排
		if (this.setInput.text == "4年前小东") {
			this.submitArr[this.subjectNum - 1][0] = true;
		} else {
			this.submitArr[this.subjectNum - 1][0] = false;
		}
		//二排
		if (label21 ||label22) {
			this.submitArr[this.subjectNum - 1][1] = true;
		} else {
			this.submitArr[this.subjectNum - 1][1] = false;
		}
		//三排
		if (label[2].text == result[2]) {
			this.submitArr[this.subjectNum - 1][2] = true;
		} else {
			this.submitArr[this.subjectNum - 1][2] = false;
		}
		//四排
		if (label[3].text == result[3]) {
			this.submitArr[this.subjectNum - 1][3] = true;
		} else {
			this.submitArr[this.subjectNum - 1][3] = false;
		}
	}
	//最终提交
	public commitFun() {
		console.log(this.particleArr);
		if (this.submitArr[this.subjectNum - 1].indexOf(false) == -1) {
			this.submitArr[this.subjectNum - 1].map((item, index) => {
				this.fireAnimation("saicheweibu01_png", "saicheweibu01_json", index)
			})
			this.racGo.play(0);
			this.playMusic("rac_go")
			setTimeout(() => {
				this.gameoverFun()
			}, 3100)
		} else {
			this.removeParticle();
			this.submitArr[this.subjectNum - 1].map((item, index) => {
				setTimeout(() => { this.playMusic("rac_error") }, 300)
				if (item) {
					this.fireAnimation("fire_png", "fire_json", index)
				} else {
					this.mistAnimation(index)
				}
			})
		}

	}
	//位置重置 移除动画
	public removeParticle() {
		this.rac_position.x = 33;	//赛车归位
		//移除不用的动画 释放内存
		this.particleArr.map((item, index) => {
			if (item) {
				this["rac" + (index + 1)].removeChild(item);
				this.particleArr[index] = undefined;
			}

		})
	}
	//GAMEOVER
	public gameoverFun() {
		this.gameover.visible = true;
		this.opacity.play(0);
		this.playMusic("rac_go_stop")
		setTimeout(() => {
			var dbObj = { dragonbonesData: "rac_ske_json", textureData1: "rac_tex_json", texture1: "rac_tex_png", name: "MovieClip" }
			this.pokeAnimation(dbObj)
		}, 1500)
	}
	//重新开始
	public recommence() {
		if (this.overAnimationArr.length != 0) {
			this.gameover.visible = false;
			this.showFong.alpha = 1;
			this.overAnimationArr.map((item, index) => {
				this.removeChild(item)
			});

			this.overAnimationArr = [];

			if (this.armature) {
				this.gameover.removeChild(this.armature.getDisplay())
				this.armature = undefined;
			}

			this.reviseLabelText();
			this.musicFun();
		}
	}

	//音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.rac_bj.play(0, -1)
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
		this.racTipMusic = this[name].play(0, count)
	}
}