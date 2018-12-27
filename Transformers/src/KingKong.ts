class KingKong extends eui.Component implements eui.UIComponent {

	public planeGroup: eui.Group;
	public plane: eui.Image;
	public flame: eui.Image;
	public beam: eui.Button;
	public capacity: eui.Button;
	public next: eui.Button;
	public music: eui.Image;
	public revise: eui.Button;
	// 飞机
	public PlaneV: eui.Image;
	public V2: eui.Image;
	public V3: eui.Image;
	public V4: eui.Image;
	public V5: eui.Image;
	public bottomCount: eui.Image;
	//题目
	public subject01: eui.Image;
	public subject02: eui.Image;

	public switchX: number = 151;
	public switchY: number = 248; // 211  279
	public switchSpaceY: number = 8;
	//滑动存放 对象 及 数值
	public switchArr: Array<Transformers> = [];
	public switchResult: Array<number> = [0, 0, 0, 0, 0, 0, 0];
	//随机数
	public randomX = 878;
	public randomY = 660;
	public randomWidth = 37;
	public randomPosition: Array<any> = [{ x: 862, y: 634, rx: 875, ry: 660 }, { x: 848, y: 585, rx: 861, ry: 611 }, { x: 848, y: 585, rx: 861, ry: 611 }, { x: 863, y: 364, rx: 876, ry: 390 }, { x: 850, y: 680, rx: 863, ry: 706 }]
	//随机数存放 对象 及 数值
	public randomArr: Array<RandomClass> = [];
	public randomResult: Array<number> = [1, 2, 3, 4, 5, 6, 7];
	//特效火焰
	public yanwu: eui.Rect;
	//飞机切换
	public planeArr: Array<any> = [];
	public planeCount: number = 1;
	//结束飞机动画
	public planeVideo: egret.Video;
	public gameVideo: egret.Video;
	//缓动动画
	public huan: eui.Group;
	public huan0: eui.Group;
	public endHuan: egret.tween.TweenGroup;
	public result: egret.tween.TweenGroup;
	//开始
	public startGroup: eui.Group;
	public startBtn: eui.Image
	public lineTexiao: Array<any> = [];
	//結束
	public overImage: eui.Image;
	public GAMEOVER: eui.Image;
	public overTX: eui.Group;
	//手指
	public cursor: egret.MovieClip
	public cursorTop: boolean = true;
	//音乐
	public isMusic: boolean = true;
	public bx_bj_play: egret.SoundChannel;
	public bx_bj: egret.Sound = RES.getRes("bx_bj_mp3")//背景
	public bx_beam_success: egret.Sound = RES.getRes("bx_beam_success_mp3") //发射成功
	public bx_beam_error: egret.Sound = RES.getRes("bx_beam_error_mp3") //发射成功
	public bx_capacity: egret.Sound = RES.getRes("bx_capacity_mp3") //充能
	public bx_capacity_gudong: egret.Sound = RES.getRes("bx_capacity_gudong_mp3") //充能数字
	public bx_transition: egret.Sound = RES.getRes("bx_transition_mp3") //选择数字时
	public bx_subject01: egret.Sound = RES.getRes("bx_subject01_mp3") //启动5架飞机
	public bx_subject02: egret.Sound = RES.getRes("bx_subject02_mp3") //介绍
	public bx_next: egret.Sound = RES.getRes("bx_next_mp3") //下一关

	public constructor() {
		super();
		this.skinName = "KingKongSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.overTX.touchChildren = false;
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this) //开始
		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this) //重置
		this.overTX.addEventListener(egret.TouchEvent.TOUCH_TAP, this.overTXFun, this) //特效
	}
	public start(state) {
		this.overImage.visible = false;
		this.GAMEOVER.visible = false;
		this.huan.visible = false;
		this.huan0.visible = false;
		this.overTX.visible = false;

		this.planeCount = 1;
		this.PlaneV.source = "V" + this.planeCount + "_png"
		this.startGroup.visible = false;
		//重置时作用
		this.bottomCount.visible = state == "revise" ? true : false; 	// 随机数板子
		this.subject02.visible = false;
		this.subject01.visible = true;
		this.revise.enabled = false;
		this.randomPositions();
		this.next.visible = true;

		this.bx_bj_play = this.bx_bj.play(0, -1)
		this.bx_subject01.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, () => { //音乐播放完成
			this.subject01.visible = false;
			this.subject02.visible = true;
			this.PlaneV.visible = true;
			this.bx_subject02.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, () => {
				this.capacity.enabled = true;
				this.revise.enabled = true;
				this.effetcFun("dot_png", "dot_json", 1340, 680, true);
				this.effetcFun("line_png", "line_json", 950, 750, true);
				this.cursor = this.cursorFun("shou_json", "shou_png", "shou");
			}, this)
		}, this)

		//事件监听
		this.capacity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.randomNumner, this) //充能
		this.beam.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beamFun, this)	//发射
		this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextFun, this)	//下一关
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this)	//音乐
		//方法调用
		this.beamButton(false) //发射按钮状态
		this.nextButton(false) //下一关按钮状态

		this.scrollFun();  //左侧滑块// this.randomFun(); //随机数

		// this.Plane("start")
		// this.endHuan.play(0)	//循环动画
		// this.result.play(0)	//结束提示动画
	}

	//充能
	public randomNumner(e: egret.TouchEvent): void {
		this.bx_capacity.play(0, 1)
		// this.bx_capacity.addEventListener(egret.Event.COMPLETE, () => {
		this.bx_capacity_gudong.play(0, 3)
		// }, this)
		this.bottomCount.visible = true;
		console.log("000->", this.randomArr)
		this.randomArr.map((item) => {
			this.removeChild(item);
		})
		for (let i = 0; i < 7; i++) {
			var random = Math.floor(Math.random() * 10);
			this.randomResult[i] = random;
			this.randomArr[i] = new RandomClass(this, random);
			this.randomArr[i].x = this.randomX + this.randomWidth * i;
			this.randomArr[i].y = this.randomY
			this.addChild(this.randomArr[i])
		}
		if (this.cursorTop) {
			this.removeChild(this.cursor)
			setTimeout(() => {
				this.cursor = this.cursorFun("shou2_json", "shou2_png", "shou2", 255, 300);
			}, 3000)
		}else{
			this.cursor=undefined
		}

		this.nextButton(false)
	}
	// 特效火焰
	public effetcFun(texture, config, x = 450, y = 0, posi = false): void {
		var texture = RES.getRes(texture);
		var config = RES.getRes(config);
		var system = new particle.GravityParticleSystem(texture, config);
		this.lineTexiao.push(system);
		posi ? this.addChildAt(system, 5) : this.overTX.addChild(system);
		system.x = x;
		system.y = y;
		// var tw = egret.Tween.get(system, { loop: true });
		// tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
		system.start()
	}
	//左侧滑块
	public scrollFun(): void {
		this.switchArr.map((item) => {
			this.removeChild(item);
		})
		for (let i = 0; i < 7; i++) {
			this.switchArr[i] = new Transformers(this, i);
			// console.log(this.switchY + this.switchSpaceY * i + this.switchArr[i].height * i)
			this.switchArr[i].x = this.switchX;
			this.switchArr[i].y = this.switchY + this.switchSpaceY * i + this.switchArr[i].height * i;
			this.addChild(this.switchArr[i])
		}
	}
	//发射按钮状态
	public beamButton(type) {
		this.beam.enabled = type
	}
	//发射
	public beamFun(e: egret.TouchEvent): void {
		this.scrollFun()
		console.log("---->", this.switchResult)
		console.log("---->", this.randomResult)
		console.log(this.switchResult.join('') == this.randomResult.join(''));
		if (this.switchResult.join('') == this.randomResult.join('')) {

			this.randomArr.map((item) => {
				setTimeout(() => {
					this.removeChild(item);
					this.bottomCount.visible = false;
				}, 1000)
			})
			this.randomArr = []
			this.bx_beam_success.play(0, 1)
			this.Plane("end");
		} else {
			this.bx_beam_error.play(0, 1)
			this.yanwuFun();	//烟雾动画
		}

		this.switchResult = [0, 0, 0, 0, 0, 0, 0]
	}
	//烟雾动画
	public yanwuFun() {
		console.log(11)
		var data = RES.getRes("yanwu_json");
		var txtr = RES.getRes("yanwu_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("yanwu"));

		// console.log(mc.width = 577, mc.height = 323)

		setTimeout(() => {
			this.yanwu.addChild(mc);
			mc.play(1);
		}, 300)
		mc.addEventListener(egret.Event.COMPLETE, function () {
			console.log(mc)
			this.yanwu.removeChild(mc)
		}, this)
	}
	//手指
	public cursorFun(data, txtr, name, x = 1856, y = 1000) {
		var data = RES.getRes(data);
		var txtr = RES.getRes(txtr);
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData(name));
		mc.x = x
		mc.y = y
		this.addChild(mc);
		mc.play(-1);
		// mc.addEventListener(egret.Event.COMPLETE, function () {
		// 	console.log(mc)
		// 	// this.removeChild(mc)
		// }, this);
		return mc;
	}
	//下一关按钮状态
	public nextButton(type) {
		this.next.enabled = type;
	}
	//下一关
	public nextFun(): void {
		this.bx_next.play(0, 1)
		// this.startPlane("v1_png", "v1_json", "v1");
		this.planeCount += 1;
		if (this.planeCount == 5) {
			this.next.visible = false;
		}
		this.Plane("start");
		this.beamButton(false) //发射按钮状态
		this.nextButton(false) //下一关按钮状态
	}
	//飞机初始化
	public startPlane(res, json, name) {
		this.planeArr.map((item) => {
			this.removeChild(item)
		})
		var data = RES.getRes(json);
		var txtr = RES.getRes(res);
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData(name));
		this.planeArr[0] = mc;
		// console.log(mc.x = -27, mc.y)
		this.addChildAt(mc, 1);
		setTimeout(() => {
			mc.play(0);
		}, 500)
		// mc.play(0);
		// mc.addEventListener(egret.Event.COMPLETE, function (){
		// 	console.log("ddd")
		//    this.removeChild(mc)
		// }, this)
	}
	//飞机结束动画
	public Plane(type) {
		// var dragonbonesData = RES.getRes("NewProject_3_ske_json");
		// var textureData1 = RES.getRes("NewProject_3_tex_json");
		// var texture1 = RES.getRes("NewProject_3_tex_png");

		// let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;

		// egretFactory.parseDragonBonesData(dragonbonesData);
		// egretFactory.parseTextureAtlasData(textureData1, texture1);

		// var armature: dragonBones.Armature = egretFactory.buildArmature("Sprite");
		// var armatureDisplay = armature.getDisplay();

		// // this.addChild(armatureDisplay);
		// armatureDisplay.x = 500;
		// armatureDisplay.y = 400;
		// armature.animation.gotoAndPlay("Sprite",1,-1);
		// dragonBones.WorldClock.clock.add(armature);
		// this.addEventListener(egret.Event.ENTER_FRAME, function (): void {
		// 		dragonBones.WorldClock.clock.advanceTime(0.03);
		// 	}, this);

		var status = type + "V" + this.planeCount + '.mp4'
		// console.log("结束",status)
		this.planeVideo = new egret.Video();
		this.planeVideo.x = 0;
		this.planeVideo.y = 0;
		this.planeVideo.width = 1920;
		this.planeVideo.height = 1080;
		this.planeVideo.fullscreen = false;
		// this.planeVideo.poster=("../resource/assets/particle/end_v3.mp4");
		this.planeVideo.load("resource/assets/particle/"+status);
		this.planeVideo.once(egret.Event.COMPLETE, this.onLoad, this);
		this.addChild(this.planeVideo);

	}
	//视频加载
	private onLoad(e) {
		var isEnd = e.target.src.split("/").reverse()[0].split("V")[0] == "end";
		// console.log("加载成功", e.target.src.split("/").reverse()[0].split("V")[0])

		if (isEnd) {
			setTimeout(() => {
				this.planeVideo.play(0);
			}, 500)
			this.planeVideo.addEventListener(egret.Event.ENDED, this.videoEnd, this)
		} else {
			this.planeVideo.play(0);
			console.log("这是开始动画-----》")
			this.planeVideo.addEventListener(egret.Event.ENDED, this.videoStart, this)
		}

	}
	private videoStart() {
		console.log("播放完成");
		this.PlaneV.source = "V" + this.planeCount + "_png"
		this.randomPositions();
		this.removeChild(this.planeVideo);
		this.beamButton(false) //发射按钮状态

	}
	//视频结束回调
	private videoEnd() {
		console.log("播放完成")
		this.removeChild(this.planeVideo);
		this.beamButton(false) //发射按钮状态
		this.nextButton(true) //下一关按钮状态
		// this.startPlane("startPlane3_png", "startPlane_json", "v3");
		// this.Plane("start")
		if (this.planeCount >= 5) {
			this.switchArr.map((item) => {
				this.removeChild(item);
			})
			this.overImage.visible = true;
			this.overTX.visible = true;
			this.gameOverFun();
		}
	}
	//合体视频
	private gameOverFun() {
		this.gameVideo = new egret.Video();
		this.gameVideo.x = 0;
		this.gameVideo.y = 0;
		this.gameVideo.width = 1920;
		this.gameVideo.height = 1080;
		this.gameVideo.fullscreen = false;
		// this.planeVideo.poster=("../resource/assets/particle/end_v3.mp4");
		this.gameVideo.load("resource/assets/particle/over.mp4");
		this.gameVideo.once(egret.Event.COMPLETE, () => {
			this.gameVideo.play(0);
			this.gameVideo.addEventListener(egret.Event.ENDED, () => {
				this.removeChild(this.gameVideo);
				this.GAMEOVER.visible = true;
				this.effetcFun("dot_top_png", "dot_top_json");
				this.effetcFun("face_top_png", "face_top_json");
				this.effetcFun("line_top_png", "line_top_json");
				this.huan.visible = true;
				this.huan0.visible = true;
				this.endHuan.play(0)	//循环动画
			}, this)
		}, this);
		this.addChild(this.gameVideo);
	}
	//音乐
	private musicFun() {
		if (this.isMusic) {
			this.bx_bj_play.stop()

			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.bx_bj_play = this.bx_bj.play(0, -1)
			this.isMusic = true;
			this.music.source = "music_png"
		}
	}

	//位置
	public randomPositions() {
		this.randomX = this.randomPosition[this.planeCount - 1].rx;
		this.randomY = this.randomPosition[this.planeCount - 1].ry;
		this.bottomCount.x = this.randomPosition[this.planeCount - 1].x;
		this.bottomCount.y = this.randomPosition[this.planeCount - 1].y;
	}
	//重置
	public reviseFun() {
		this.start("revise")
	}
	public overTXFun(e: egret.TouchEvent) {
		console.log(e.target);
		window.location.reload()
	}
}
