class Dinosaur extends eui.Component implements eui.UIComponent {
	//开始
	public startButton: eui.Image;
	public startGroupe: eui.Group
	//小键盘 存放labela按钮
	public clickLabel: eui.Label
	//基本按钮
	public subject: eui.Image;
	public sum: eui.Image;
	public tip: eui.Image;
	public cacl: eui.Image;
	public meat: eui.Image;
	public egg: eui.Image;
	public next: eui.Image;
	public previous: eui.Image;
	public music: eui.Image;
	public revise: eui.Image;

	//提示
	public tipGroup: eui.Group;
	public tipImage: eui.Image;
	public subjectTip:eui.Group;

	//石头
	public stone00: eui.Image;
	public stone01: eui.Image;
	public stone02: eui.Image;
	public stone10: eui.Image;
	public stone11: eui.Image;
	public stone12: eui.Image;
	public stone20: eui.Image;
	public stone21: eui.Image;
	public stone22: eui.Image;
	//石头Label
	public inputLabel: eui.Group;
	public label00: eui.Label;
	public label12: eui.Label;
	public label21: eui.Label;
	public label20: eui.Label;
	public label11: eui.Label;
	public label10: eui.Label;
	public label01: eui.Label;
	public label02: eui.Label;
	public label22: eui.Label;
	public labelSum: eui.Label;
	//初始化 题目排序
	public RecNum: number = 1;
	public Rec1: Array<any> = [
		["输入", "输入", "输入"],
		["输入", "8", "6"],
		["9", "输入", "输入"],
	];
	public Rec2: Array<any> = [
		["输入", "12", "输入"],
		["输入", "输入", "20"],
		["16", "输入", "11"],
	];
	public Rec3: Array<any> = [
		["输入", "35", "89"],
		["1", "输入", "输入"],
		["输入", "输入", "输入"],
	];
	public RecResult: Array<any> = [
		[
			[5, 12, 7],
			[10, 8, 6],
			[9, 4, 11],
			[24],
		],
		[
			[19, 12, 14],
			[10, 15, 20],
			[16, 18, 11],
			[45],
		],
		[
			[194, 35, 89],
			[1, 106, 211],
			[123, 177, 18],
			[318],
		],
	]

	public RecPosition: any;
	//破壳动画
	public egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
	public pokrGroup: eui.Group
	public poke: dragonBones.Armature
	//动画存放对象
	public dbObj: any;
	//破蛋过程
	public step: number = 0;
	//黑线
	public wrong: eui.Group;
	// 音乐
	public kl_bj: egret.Sound = RES.getRes("kl_bj_mp3");	//背景
	public kl_tip: egret.Sound = RES.getRes("kl_tip_mp3");	//背景读题
	public kl_egg_l: egret.Sound = RES.getRes("kl_egg_l_mp3");	//恐龙蛋裂
	public kl_up: egret.Sound = RES.getRes("kl_up_mp3");	//恐龙跳出来
	public kl_chi: egret.Sound = RES.getRes("kl_chi_mp3");	//恐龙吃肉
	public kl_chi_2: egret.Sound = RES.getRes("kl_chi_2_mp3");	//恐龙吃肉 冒桃心
	public kl_error: egret.Sound = RES.getRes("kl_error_mp3");	//恐龙吃肉
	public music_bj: egret.SoundChannel;
	public isMusic: boolean = true;


	public constructor() {
		super();
		this.addEventListener(egret.Event.ENTER_FRAME, function (): void {
			dragonBones.WorldClock.clock.advanceTime(0.03);
		}, this);
		this.skinName = "DinosaurSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.startGroupe.visible = true
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.start() }, this);
		// this.pokeAnimation()
	}
	protected start() {
		this.startGroupe.visible = false
		this.subjectTip.touchChildren=false;
		this.subjectTip.visible=false;
		this.RecNum = 1;	//第一个矩阵
		this.step = 0;	//动画播放步骤
		this.egg.visible = true;	//显示蛋
		this.music_bj = this.kl_bj.play(0, -1);
		this.kl_tip.play(0, 1);



		console.log(this.music)
		this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextFun, this);
		this.previous.addEventListener(egret.TouchEvent.TOUCH_TAP, this.previousFun, this);
		this.labelSum.addEventListener(egret.TouchEvent.TOUCH_TAP, this.labelSumFun, this);
		this.cacl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickCaclFun, this);
		this.tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tipFun, this);
		this.tipGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.tipGroup.visible = false }, this);
		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.subjectTip.visible=true}, this);
		this.subjectTip.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.subjectTip.visible=false}, this);
		this.recFun() //题目__生成函数
	}
	//计算器
	public clickCaclFun() {
		this.addChild(new cacl(this));
	}
	//下一关
	public nextFun() {
		this.targetFun();
		this.RecNum += 1;
		this.recFun();
		this.previous.visible = true;
		this.next.visible = this.RecNum >= 3 ? false : true;
	}
	//上一关
	public previousFun() {
		// this.step=0;
		this.targetFun();
		this.RecNum -= 1;
		this.recFun();
		this.next.visible = true;
		this.previous.visible = this.RecNum <= 1 ? false : true;

	}
	public targetFun() {
		this.step = 0;
		this.egg.source = "egg_png"
		this.egg.visible = true;
		console.log(this.poke)
		if (this.poke) {
			this.pokrGroup.removeChild(this.poke.getDisplay())
			this.poke = undefined
		}
	}
	//提醒
	public tipFun() {
		this.tipImage.source = "rectangle0" + this.RecNum + "_png";
		this.tipGroup.visible = true;
	}
	//点击输入
	public clickStone(e: egret.TouchEvent): void {
		this.clickLabel = e.target;
		this.RecPosition = e.target.name;
		var x = e.target.parent.x + e.target.x;
		var y = e.target.parent.y + e.target.y;
		console.log(x, y)
		this.addChild(new Keyset(this, x - 500, y - 200));

	}
	//幻和
	public labelSumFun(e: egret.TouchEvent): void {
		this.clickLabel = e.target;
		this.RecPosition = { "i": 3, "j": 0 }
		this.addChild(new Keyset(this, e.target.x, e.target.y + 100))
	}
	//判断输入对错
	public inspectLabel() {
		console.log("输入:" + this.clickLabel.text, "坐标：", this.RecPosition);
		var result = this.RecResult[this.RecNum - 1][this.RecPosition.i][this.RecPosition.j];
		console.log("正确答案：", result);
		if (result == this.clickLabel.text) {
			//更换石头背景
			this.RecPosition.i >= 3 ? "" : this["stone" + this.RecPosition.i + this.RecPosition.j].source = "stone01_png";
			this.stepPlay()
		} else {
			//更换石头背景
			this.RecPosition.i >= 3 ? "" : this["stone" + this.RecPosition.i + this.RecPosition.j].source = "clickStone01_png";
			this.stepPlayError();
		}
	}
	//播放恐龙动画
	public stepPlay() {
		console.log(this.step)
		switch (this.step) {
			case 0:
				this.egg.source = "egg1_png";
				this.kl_egg_l.play(0, 1);
				break;
			case 1:
				this.egg.source = "egg2_png";
				this.kl_egg_l.play(0, 1);
				break;
			case 2:
				this.kl_up.play(0, 1)
				this.dbObj = { dragonbonesData: "poke_ske_json", textureData1: "poke_tex_json", texture1: "poke_tex_png", name: "Sprite" }
				this.egg.visible = false;
				this.pokeAnimation();
				break;
			default:
				var n = Math.ceil(Math.random() * 4);
				this.kl_chi.play(0, 1)
				this.dbObj = { dragonbonesData: "chi" + n + "_ske_json", textureData1: "chi" + n + "_tex_json", texture1: "chi" + n + "_tex_png", name: "Chi" + n }
					this.heartAnimation()
				this.pokeAnimation();
				break;
		}
		this.step++;
	}
	//回答错误
	public stepPlayError() {
		this.kl_error.play(0, 1)
		if (this.step > 2) {
			this.dbObj = { dragonbonesData: "tanqi_ske_json", textureData1: "tanqi_tex_json", texture1: "tanqi_tex_png", name: "Tanqi" }
			this.pokeAnimation();
		} else {
			this.lineAnimation();
		}

	}
	//矩形题目生成
	public recFun() {
		var arr = this["Rec" + this.RecNum]
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				if (arr[i][j] == "输入") {
					this['label' + i + j].textColor = "D4670D";
					this["stone" + i + j].source = "clickStone01_png";
					this['label' + i + j].name = { "i": i, "j": j };
					this['label' + i + j].addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStone, this)
				} else {
					this['label' + i + j].textColor = "635F39";
					this["stone" + i + j].source = "stone01_png";
				}
				this["label" + i + j].text = arr[i][j]
			}
		}
		this.labelSum.text = "点击输入";
	}
	//破壳动画
	public pokeAnimation() {
		if (this.poke) {
			this.pokrGroup.removeChild(this.poke.getDisplay())
		}
		console.log(this.dbObj)
		var dragonbonesData = RES.getRes(this.dbObj.dragonbonesData);
		var textureData1 = RES.getRes(this.dbObj.textureData1);
		var texture1 = RES.getRes(this.dbObj.texture1);

		// let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
		this.egretFactory.parseDragonBonesData(dragonbonesData);
		this.egretFactory.parseTextureAtlasData(textureData1, texture1);

		this.poke = this.egretFactory.buildArmature(this.dbObj.name);
		var armatureDisplay = this.poke.getDisplay();

		this.pokrGroup.addChild(armatureDisplay);
		armatureDisplay.x = 465;
		armatureDisplay.y = 500;
		// this.poke.animation.gotoAndStopByFrame("Sprite",1);
		this.poke.animation.gotoAndPlayByFrame(this.dbObj.name, 1, 1).timeScale = 0.5;

		dragonBones.WorldClock.clock.add(this.poke);//添加时间钟
		//监听时间钟 只需执行一次 放到了构造中 -->
		//播放完成的回调
		this.poke.addEventListener(dragonBones.EventObject.COMPLETE, function (e) {
			console.log("-->", e.target.animation.animationDataList)
			this.poke.animation.gotoAndStopByProgress(this.dbObj.name, 1);
			// this.poke.animation.gotoAndStop(this.dbObj.name, 0);
			// this.pokrGroup.removeChild(armatureDisplay)
		}, this)
	}
	//黑线 回答错误
	public lineAnimation() {
		var data = RES.getRes("heixian_json");
		var txtr = RES.getRes("heixian_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		var mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("heixian"));
		this.wrong.addChild(mc);
		mc.play(1);
		mc.addEventListener(egret.Event.COMPLETE, function () {
			console.log("播放完成")
			this.wrong.removeChild(mc)
		}, this)
	}
	//桃心动画
	public heartAnimation(x = 450, y = 300): void {
		var texture = RES.getRes("taoxin02_png");
		var config = RES.getRes("taoxin02_json");
		var system = new particle.GravityParticleSystem(texture, config);
		this.addChildAt(system, 5)
		system.x = x;
		system.y = y;
		// var tw = egret.Tween.get(system, { loop: true });
		// tw.to({ x: 420, y: 763 }, 1000).to({ x: 0, y: 0 }, 0).to({ x: 420, y: 763 }, 1000)
		system.start();
		// var timer = setInterval(() => {
		// 		if (system.alpha > 0) {
		// 			system.alpha -= 0.1
		// 		}else{
		// 			clearInterval(timer)
		// 			this.removeChild(system)   7248  2769 1112
		// 		}
		// 	}, 250)
		this.kl_chi_2.play(0, 1).addEventListener(egret.Event.SOUND_COMPLETE, () => {
			this.removeChild(system)
		}, this)
	}
	//音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.kl_bj.play(0, -1)
			this.isMusic = true;
			this.music.source = "music_png"
		}
	}
	//重置
	public reviseFun() {
		window.location.reload();
	}
}