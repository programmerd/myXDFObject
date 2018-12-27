class Warcraft extends eui.Component implements eui.UIComponent {
	public bj: eui.Group;
	public tipAsk: eui.Image;
	public subTip: eui.Image;
	public music: eui.Image;
	public revise: eui.Image;
	public dapao: eui.Group;
	public ordnance: eui.Image;
	public clickFire: eui.Button;
	public timu: eui.Group;
	public subject: eui.Image;
	public subjectMax: eui.Image;
	public subjectMin: eui.Image;
	public warcraftGroup: eui.Group;
	public doudong: egret.tween.TweenGroup;
	public aida: egret.tween.TweenGroup;

	public write: eui.Group;
	public write1: eui.Group;
	public write2: eui.Group;
	public write3: eui.Group;
	public clickLabel: eui.Label;

	public gameOver: eui.Group;
	public gameOverMask: eui.Rect;

	public clickStart:eui.Image;
	public endStart:eui.Group;

	//当前题目
	public subNum = 1;
	//充能
	public energyGroup: eui.Group
	public fashe: eui.Group
	//音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;


	public ms_bj: egret.Sound = RES.getRes("ms_bj_mp3");
	public ms_subject: egret.Sound = RES.getRes("ms_subject_mp3");
	public ms_fs: egret.Sound = RES.getRes("ms_fs_mp3");	//发射
	public ms_bf: egret.Sound = RES.getRes("ms_bf_mp3");	//报复
	public ms_bl: egret.Sound = RES.getRes("ms_bl_mp3");	//玻璃
	public ms_bz: egret.Sound = RES.getRes("ms_bz_mp3"); //爆炸
	public ms_cj: egret.Sound = RES.getRes("ms_cj_mp3"); //惨叫
	public ms_doud: egret.Sound = RES.getRes("ms_doud_mp3"); //抖动
	public ms_jn: egret.Sound = RES.getRes("ms_jn_mp3"); //聚能
	public ms_sl: egret.Sound = RES.getRes("ms_sl_mp3"); //胜利
	public ms_yd: egret.Sound = RES.getRes("ms_yd_mp3"); //移动

	//答案
	public resultRrr: Array<any> = [
		[10, 10, 1, 19, 10, 10, 19],
		[20, 20, 1, 39, 20, 20, 39],
		[153, 11, 153, 11, 13, 10, 11, 143, 11, 143, 11, 13],
	];
	public resultRrrError: Array<any> = [[], [], []];
	//动画
	public egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
	public armature: dragonBones.Armature;
	public armatureOver: dragonBones.Armature;
	public warcraftNormal = { dragonbonesData: "stand_ske_json", textureData1: "stand_tex_json", texture1: "stand_tex_png", name: "Armature", count: -1 };
	public warcraftBaofu = { dragonbonesData: "hit_ske_json", textureData1: "hit_tex_json", texture1: "hit_tex_png", name: "baofu", count: 1 };
	public warcraftBomb = { dragonbonesData: "bomb_ske_json", textureData1: "bomb_tex_json", texture1: "bomb_tex_png", name: "bomb", count: 1 };
	public warcraftOver = { dragonbonesData: "over_ske_json", textureData1: "over_tex_json", texture1: "over_tex_png", name: "over", count: -1 };
	public constructor() {
		super();
		this.skinName = "WarcraftSkin";
		this.addEventListener(egret.Event.ENTER_FRAME, function (): void {
			dragonBones.WorldClock.clock.advanceTime(0.03);
		}, this);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.clickFire.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fireFun, this);
		this.write.addEventListener(egret.TouchEvent.TOUCH_TAP, this.writeLiabel, this);
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
		this.tipAsk.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.subTip.visible = true;
		}, this);
		this.subTip.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.subTip.visible = false;
		}, this);
		this.gameOverMask.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.gameOver.visible = false;
			this.start()
		}, this);
		this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.gameOver.visible = false;
			this.endStart.visible = false;
			this.start();
		}, this);
		// this.start();
	}

	public start() {
		this.subNum = 1;
		this.targetGame();
		this.music_bj=this.ms_bj.play(0, -1);
		this.playMusic("ms_subject");

	}
	//粒子特效
	public overAnimation(texture, config, x = 900, y = 500): void {
		var texture = RES.getRes(texture);
		var config = RES.getRes(config);
		var system = new particle.GravityParticleSystem(texture, config);
		this.addChild(system);
		system.x = x;
		system.y = y;
		// var tw = egret.Tween.get(system, { loop: true });
		// tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
		system.start(-1);

	}
	//mc 序列帧动画
	public energyAnimation() {
		var data = RES.getRes("huiju_json");
		var txtr = RES.getRes("huiju_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("huiju"));
		// this.particleArr[index] = mc;
		this.energyGroup.addChild(mc);
		mc.play(3);
		mc.x = 0;
		mc.y = 0
		mc.addEventListener(egret.Event.COMPLETE, function () {
			this.energyGroup.removeChild(mc);
			setTimeout(() => { this.fireAnimation() }, 500)
		}, this)
	}
	public fireAnimation() {
		this.playMusic("ms_fs");
		var data = RES.getRes("jiguang_mc_json");
		var txtr = RES.getRes("jiguang_mc_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("jiguang_mc"));
		// this.particleArr[index] = mc;
		this.fashe.addChild(mc);
		this.doudong.play(0);
		mc.play(1);
		mc.x = 0;
		mc.y = 30;
		mc.addEventListener(egret.Event.COMPLETE, function () {
			this.fashe.removeChild(mc);
			if (this.subNum >= 3) {
				this.playMusic("ms_bz");
				this.pokeAnimation(this.warcraftBomb);
			} else {
				this.ms_doud.play(0,1);
				this.playMusic("ms_cj");
				this.subNum++;
				this.targetGame()
			}

		}, this)
	}
	public leihenAnimation() {
		var data = RES.getRes("liehen01_mc_json");
		var txtr = RES.getRes("liehen01_tex_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("liehen"));
		// this.particleArr[index] = mc;
		this.addChild(mc);
		mc.play(1);
		mc.x = 1000;
		mc.y = 500
		mc.addEventListener(egret.Event.COMPLETE, function () {
			console.log("动画播放完成1")
			this.removeChild(mc)
		}, this)
	}
	//龙骨动画
	public pokeAnimation(dbObj) {
		if (this.armature) {
			this.warcraftGroup.removeChild(this.armature.getDisplay())
		}
		// console.log(dbObj)
		var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		var textureData1 = RES.getRes(dbObj.textureData1);
		var texture1 = RES.getRes(dbObj.texture1);

		// let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		this.egretFactory.parseDragonBonesData(dragonbonesData);
		this.egretFactory.parseTextureAtlasData(textureData1, texture1);

		this.armature = this.egretFactory.buildArmature(dbObj.name);
		var armatureDisplay = this.armature.getDisplay();

		this.warcraftGroup.addChild(armatureDisplay);
		if (dbObj.name == "baofu") {
			var tw = egret.Tween.get(this.warcraftGroup, { loop: false });
			this.playMusic("ms_yd");
			tw.to({ x: 1052 }, 300)
				.wait(700)
				.call(() => {
					this.leihenAnimation();
					this.aida.play(0);

					this.ms_bf.play(0,1);
					this.playMusic("ms_bl");
				})
				.wait(500)
				.to({ x: 1586 }, 1000).call(() => {
					this.clickFire.enabled = true;
				})
		}
		armatureDisplay.x = 380;
		armatureDisplay.y = 350;

		this.armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 1;

		dragonBones.WorldClock.clock.add(this.armature);//添加时间钟
		//监听时间钟 只需执行一次 放到了构造中 -->
		//播放完成的回调
		this.armature.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
			console.log("动画播放完成")
			this.pokeAnimation(this.warcraftNormal);
			this.resultRrrError[this.subNum - 1] = [];
			if (dbObj.name == "bomb") {
				if (this.subNum >= 3) {
					this.gameOverFun()
				} else {
					this.subNum++;
					this.targetGame()
				}

			}
		}, this)
	}
	//结束动画
	public gongxiAnimation(dbObj) {
		if (this.armatureOver) {
			this.gameOver.removeChild(this.armatureOver.getDisplay())
		}
		this.gameOver.visible = true;
		var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		var textureData1 = RES.getRes(dbObj.textureData1);
		var texture1 = RES.getRes(dbObj.texture1);

		// let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		this.egretFactory.parseDragonBonesData(dragonbonesData);
		this.egretFactory.parseTextureAtlasData(textureData1, texture1);

		this.armatureOver = this.egretFactory.buildArmature(dbObj.name);
		var armatureDisplay = this.armatureOver.getDisplay();
		this.gameOver.addChildAt(armatureDisplay, 0);

		this.armatureOver.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count).timeScale = 1;
		armatureDisplay.x = 960
		armatureDisplay.y = 540
		dragonBones.WorldClock.clock.add(this.armatureOver);//添加时间钟
		//监听时间钟 只需执行一次 放到了构造中 -->
		//播放完成的回调
		this.armatureOver.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {

		}, this)
	}
	//换题
	public targetGame() {
		this.clickFire.enabled = true;
		this.pokeAnimation(this.warcraftNormal);
		this.subject.source = "subject" + this.subNum + "_png";
		this.subjectMax.source = "resultMax" + this.subNum + "_png";
		this.subjectMin.source = "resultMin" + this.subNum + "_png";
		//显示输入框
		for (var i = 1; i < 4; i++) {
			if (this.subNum == i) {
				this["write" + i].visible = true;
			} else {
				this["write" + i].visible = false;
			}
		}
		for (var i = 0; i < this["write" + this.subNum].$children.length; i++) {
			this["write" + this.subNum].$children[i].text = ""
		}
	}

	//开炮
	public fireFun() {
		this.clickFire.enabled = false;
		var writeArr = this["write" + this.subNum].$children;
		// console.log("答案 :" + this["write" + this.subNum].$children)
		for (var i = 0; i < writeArr.length; i++) {
			if (writeArr[i].text != this.resultRrr[this.subNum - 1][i]) {
				this.resultRrrError[this.subNum - 1].push(writeArr[i])
			}
		}
		console.log(this.resultRrrError)
		if (this.resultRrrError[this.subNum - 1].length == 0) {
			this.playMusic("ms_jn");
			this.energyAnimation();
		} else {
			this.pokeAnimation(this.warcraftBaofu);
			// this.energyAnimation();
		}

	}
	//Label答题事件
	public writeLiabel(e: egret.TouchEvent) {
		if (e.target.type) {
			this.clickLabel = e.target;
			var x = e.target.x - 350;
			if (x < 0) {
				x = 50
			}
			this.addChild(new Keyset(this, x, e.target.y + 520))
		}
	}
	//通关
	public gameOverFun() {
		this.playMusic("ms_sl",-1);
		this.gongxiAnimation(this.warcraftOver);

	}
	//音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.ms_bj.play(0, -1)
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