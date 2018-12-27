class Index extends eui.Component implements eui.UIComponent {
	public clickLabel: eui.Label;
	public music: eui.Image;
	public reset: eui.Image;
	public endStart: eui.Group;
	public clickStart: eui.Image;
	public subNum = new Value<number>(1);
	public numberArr: Array<any> = [2, 5, 4, 25, 8, 125, 3, 9];
	public keySet: eui.Group;
	public keySetGroupAnimate: eui.Group;
	public keyLabelGroup: eui.Group;
	public keyLabelCount: number;

	public overMask: eui.Rect;
	public overMask2: eui.Rect;
	public yue: eui.Group;
	public timu: eui.Image;
	public tipBtn: eui.Image;
	public shuject: eui.Image;
	public gequ: eui.Image;
	public starts: eui.Group;
	public start1: eui.Image;
	public start2: eui.Image;

	public clickNum: eui.Group;
	public clickNum1: eui.Group;
	public next: eui.Image;
	public prev: eui.Image;
	public timuGroup: eui.Group;
	public tipGroup: eui.Group;
	public smallStart: Array<any> = [
		["Do", "Do", "So", "So", "La", "La", "So", "Fa", "Fa", "Mi", "Mi", "Re", "Re", "Do", "So", "So", "Fa", "Fa", "Mi", "Mi", "Re", "So", "So", "Fa", "Fa", "Mi", "Mi", "Re"],	//小星星
		["Mi", "Mi", "Mi", "Fa", "So", "Mi", "Re", "Do", "Do", "Do", "Re", "Mi", "Mi", "Ti2", "La2", "Mi", "Re", "La2", "Mi", "Re", "La2", "Mi", "Re", "Do", "Do"],	//虫儿飞
		["Mi", "Mi", "Re", "Do", "Re", "Do", "Ti2", "La2", "La2", "La2", "Fa", "Fa", "Mi", "Re", "Do", "Re", "Fa", "Mi", "Fa", "Fa", "Mi", "Re", "Re", "Fa", "Mi", "Mi", "Do", "La2", "La2", "Ti2", "Mi", "Mi", "Re", "Do", "Ti2", "Do", "La2"],	//四季歌
		[
			"So", "So", "La", "So", "Do8", "Ti",
			"So", "So", "La", "So", "Re8", "Do8",
			"So", "So", "So8", "Mi8", "Do8", "Ti", "La",
			"Fa8", "Fa8", "Mi8", "Do8", "Re8", "Do8", "Do8",

		],	//生日快乐歌
		[
			"Mi", "Mi", "So", "La", "Do8", "Do8", "La", "So", "So", "La", "So",
			"So", "So", "So", "Mi", "So", "La", "La", "So",
			"Mi", "Re", "Mi", "So", "Mi", "Re", "Do", "Do", "Re", "Do"
		],	//茉莉花
		[
			"Mi", "Mi", "Fa", "So", "So", "Fa", "Mi", "Re", "Do", "Do", "Re", "Mi", "Mi", "Re", "Re",
			"Mi", "Mi", "Fa", "So", "So", "Fa", "Mi", "Re", "Do", "Do", "Re", "Mi", "Re", "Do", "Do"
		],	//欢乐颂
		[
			"So", "Do8", "Re8", "Mi8", "Re8", "Do8", "Re8", "So8", "Mi8",
			"Mi8", "Fa8", "So8", "So8", "So8", "So8", "So8", "Mi8", "Do8",
			"So8", "So8", "So8", "So8", "So8", "Mi8", "Do8",
			"Do8", "Re8", "Mi8", "Mi8", "Mi8", "La8", "Re8", "Mi8", "Re8", "Do8", "La", "Do8"
		]	//summer

	]
	public smallStartTime: Array<any> = [
		[0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1],
		[0, 0.5, 0.25, 0.25, 0.5, 0.5, 1, 1, 0.5, 0.25, 0.25, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 0.75, 0.25, 2],
		[0, 1, 0.75, 0.25, 0.5, 0.5, 0.5, 0.5, 1, 1, 1,
			1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1,
			1, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 1, 1,
			1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1
		],
		[0, 0.5, 0.5, 1, 1, 1, 2,
			0.5, 0.5, 1, 1, 1, 2,
			0.5, 0.5, 1, 1, 1, 1, 2,
			0.5, 0.5, 1, 1, 1, 1, 1

		],
		[0, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 2,
			1, 1, 1, 0.5, 0.5, 1, 1, 2,
			1, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 2
		],
		[0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.25, 1,
			0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.25, 1
		],
		[0, 0.25, 0.25, 0.25, 0.25, 0.5, 0.25, 0.5, 0.5, 1,
			0.5, 0.5, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.25,
			0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.25,
			0.5, 0.25, 0.5, 0.25, 0.25, 0.5, 0.5, 0.125, 0.125, 0.25, 0.25, 0.25

		]
	];

	// 音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;

	public Do: egret.Sound = RES.getRes("Do_mp3");
	public Do8: egret.Sound = RES.getRes("Do+_mp3");
	public Re: egret.Sound = RES.getRes("Re_mp3");
	public Re8: egret.Sound = RES.getRes("Re+_mp3");
	public Mi: egret.Sound = RES.getRes("Mi_mp3");
	public Mi8: egret.Sound = RES.getRes("Mi+_mp3");
	public Fa: egret.Sound = RES.getRes("Fa_mp3");
	public Fa8: egret.Sound = RES.getRes("Fa+_mp3");
	public So: egret.Sound = RES.getRes("So_mp3");
	public So8: egret.Sound = RES.getRes("So+_mp3");
	public La: egret.Sound = RES.getRes("La_mp3");
	public La2: egret.Sound = RES.getRes("La-_mp3");
	public La8: egret.Sound = RES.getRes("La+_mp3");
	public Ti: egret.Sound = RES.getRes("Ti_mp3");
	public Ti2: egret.Sound = RES.getRes("Ti-_mp3");
	public click: egret.Sound = RES.getRes("click_mp3");
	public subTip: egret.Sound = RES.getRes("subTip_mp3");
	public error: egret.Sound = RES.getRes("error_mp3");
	public gq_bj: egret.Sound = RES.getRes("bj_music_mp3");

	// 动画
	public pianos = { dom: "keySetGroupAnimate", dragonbonesData: "Piano_ske_json", textureData1: "Piano_tex_json", texture1: "Piano_tex_png", name: "Piano", count: 1 };
	public over = { dragonbonesData: "gangqinjiemian_ske_json", textureData1: "gangqinjiemian_tex_json", texture1: "gangqinjiemian_tex_png", name: "over", count: 1 };
	public gameover = { dragonbonesData: "gangqinzhanshi_ske_json", textureData1: "gangqinzhanshi_tex_json", texture1: "gangqinzhanshi_tex_png", name: "gameover", count: 1 };
	public over2:any
	public gameover2 = {take:"over2", dragonbonesData: "zhanshi01_ske_json", textureData1: "zhanshi01_tex_json", texture1: "zhanshi01_tex_png", name: "over2", count: 1 };
	public tickling: any
	public cursor = { take: "tickling", dom: "keySetGroupAnimate", dragonbonesData: "anjianfankui_ske_json", textureData1: "anjianfankui_tex_json", texture1: "anjianfankui_tex_png", name: "fankui", count: 1 };
	

	public constructor() {
		super();
		this.skinName = "IndexSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);

	}


	protected childrenCreated(): void {
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);

		super.childrenCreated();

		this.keySet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.keySetBtnFun, this)

		this.subNum.addEventListener(Data.DATA, this.changeNumFun, this)
		this.clickNum.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickNumFun, this);
		this.clickNum1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickNumFun, this);
		this.next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickNext, this);
		this.prev.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickPrev, this);
		this.timu.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.timuGroup.visible = true }, this);
		this.timuGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.timuGroup.visible = false }, this);
		this.tipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.tipGroup.visible = true }, this);
		this.tipGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.tipGroup.visible = false }, this);


		// 开始按钮 等游戏实现后 解开注释使用
		this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.endStart.visible = false;
			this.start();
		}, this);

		// this.start()
	}
	// 开始游戏
	public start() {
		this.changeNumFun();
		this.music_bj = this.gq_bj.play(0, -1)
		this.playMusic("subTip");
		this.tweenAnimate();
	
	}
	//下一首
	public clickNext() {
		this.playMusic("click")
		this.subNum.value += this.subNum.value % 2 == 0 ? 1 : 2;
	}
	//上一首
	public clickPrev() {
		this.playMusic("click")
		this.subNum.value -= this.subNum.value % 2 == 0 ? 1 : 2;
	}
	//监听subNum 变化
	public changeNumFun() {
		console.log("当前第几题：", this.subNum.value);
		//切换题目及资源文件
		this.shuject.source = `sub${this.subNum.value}_png`;
		if (this.subNum.value % 2 == 0) {
			this.start1.source = "xing1_png";	//添加星星 亮
		} else {
			this.start1.source = "xing2_png";
			this.start2.source = "xing2_png";
			this.gequ.source = `gequ${this.subNum.value}_png`;
		}

		//判断是否可点上一首与下一首 
		if (this.subNum.value <= 1) {
			this.prev.visible = false;
		} else if (this.subNum.value >= 7) {
			this.next.visible = false;
		} else {
			this.prev.visible = true;
			this.next.visible = true;
		}
		//重置钢琴上显示数字
		this.keyLabelGroup.$children.map((item: any) => {
			item.text = ""
		})
		//重置气泡并且返回整除个数

		//判断是否大于7 且遍历 数字 还原显示
		var buttonArr: any = this.keySet.$children;
		if (this.subNum.value >= 7) {
			this.clickNum.visible = false;
			this.clickNum1.visible = true;
			var enabledArr = this.clickNum1.$children.filter((item: any, index: number) => {
				buttonArr[index].enabled = true
				item.visible = true;
				return item.source.split("_")[0] % this.numberArr[this.subNum.value - 1] == 0
			})
		} else {
			this.clickNum.visible = true;
			this.clickNum1.visible = false;
			var enabledArr = this.clickNum.$children.filter((item: any, index: number) => {
				buttonArr[index].enabled = true
				item.visible = true;
				return item.source.split("_")[0] % this.numberArr[this.subNum.value - 1] == 0
			})
		}
		console.log(enabledArr)
		//设置禁止点击钢琴
		for (let i = enabledArr.length; i > 0; i--) {
			var len = this.keySet.$children.length
			var keyButton: any = this.keySet.$children[len - i];
			keyButton.enabled = false;	//设置禁止点击
			// this.keyLabelArr.push(this.keyNumGroup.getChildAt(len - i))
		}
		//保存起始位置
		this.keyLabelCount = this.keySet.$children.length - enabledArr.length;
	}
	// 选择数字
	public clickNumFun(e: egret.TouchEvent) {
		if (e.target.name != "group") {
			var num = e.target.source.split("_")[0];
			if (num % this.numberArr[this.subNum.value - 1] == 0) {		//可以被目标整除
				this.playMusic("click")
				console.log(num);
				var keying: any = this.keySet.getChildAt(this.keyLabelCount);
				var keyingLabel: any = this.keyLabelGroup.getChildAt(this.keyLabelCount)
				e.target.visible = false;
				keying.enabled = true;
				keyingLabel.text = num;
				this.keyLabelCount++;		//下次点击 点亮钢琴下一键
				console.log(this.keyLabelCount, this.keySet.$children.length);
				if (this.keyLabelCount >= this.keySet.$children.length) {
					if (this.subNum.value % 2 != 0) {
						this.subNum.value++;
					} else {
						this.musicFun()
						var index = this.subNum.value / 2 - 1;
						var total = this.smallStartTime[index].reduce((accumulator, currentValue) => accumulator + currentValue);
						this.start2.source = "xing1_png";
						this.overMask.visible = true;
						this.overMask2.visible = true;
						console.log("胜利界面");
						this.pianos.count = Math.floor(total / 2.33);
						this.gameover.count = Math.floor(total / 2.1);
						this.gameover2.count = Math.floor(total / 2.1);

						var over = this.animationFun(this.gameover);
						this.over2 = this.animationFun(this.gameover2);
						console.log(over)
						over.x = 0;
						over.y = 0;
						over.scaleX = 2;
						over.scaleY = 2.2;
						this.over2.x = 1000;
						this.over2.y = 0;
						this.over2.scaleX = 2;
						this.over2.scaleY = 2.2;

						this.animationFun(this.pianos)
						this.musicalNote()
					}
				}
			} else {		//选择数字不可被目标整除
				this.playMusic("error")
				console.log("->", num)
			}

		}
	}
	//钢琴按键点击
	public keySetBtnFun(e: egret.TouchEvent) {
		if (e.target.name != "group") {
			this.playMusic(e.target.name);
			this.tickling = this.animationFun(this.cursor);
			this.tickling.x = e.target.parent.x + e.target.x - 80;
			this.tickling.y = 100;
			this.tickling.scaleX = 2;
			this.tickling.scaleY = 2;
		}
	}
	//缓动动画
	public tweenAnimate() {
		this.clickNum.$children.map((item: any) => {
			egret.Tween.get(item, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 500).to({ scaleX: 1, scaleY: 1 }, 500)
		})
		this.clickNum1.$children.map((item: any) => {
			egret.Tween.get(item, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 500).to({ scaleX: 1, scaleY: 1 }, 500)
		})
		this.yue.$children.map((item: any) => {
			egret.Tween.get(item, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 1000).to({ scaleX: 1, scaleY: 1 }, 1000)
		})
	}
	//开始 暂停 背景音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.gq_bj.play(0, -1)
			this.isMusic = true;
			this.music.source = "music_png"
		}
	}
	//重置
	public resetFun() {
		window.location.reload();
		// this.subNum.value++;
		// this.musicalNote()
		// this.animationFun(this.pianos)
	}
	//音符调用
	public musicalNote() {
		var i = 0;
		var index = this.subNum.value / 2 - 1;
		var thih = this;
		var timer = setInterval(fn, this.smallStartTime[index][i] * 1000);
		function fn() {
			console.log(thih.smallStart[index][i])
			thih.playMusic(thih.smallStart[index][i])
			i++;
			clearInterval(timer)
			console.log("--->", i, thih.smallStart[index].length)
			if (i < thih.smallStart[index].length) {
				timer = setInterval(fn, thih.smallStartTime[index][i] * 1000);
			}
		}
	}
	//调用移除上一个音乐 并播放本次音乐
	public playMusic(name, count = 1) {
		if (this.racTipMusic) {
			this.racTipMusic.stop()
		}
		this.racTipMusic = this[name].play(0, count);
		return this.racTipMusic;
	}
	// 动画
	public animationFun(dbObj) {
		if (this[dbObj.take]) {
			if (this[dbObj.take].parent) {
				dbObj.dom ? this[dbObj.dom].removeChild(this[dbObj.take]) : this.removeChild(this[dbObj.take]);
			}
		}
		let dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		let textureData = RES.getRes(dbObj.textureData1);
		let texture = RES.getRes(dbObj.texture1);
		// 
		let egretFactoryA = new dragonBones.EgretFactory();
		egretFactoryA.parseDragonBonesData(dragonbonesData);
		egretFactoryA.parseTextureAtlasData(textureData, texture);

		let armature: dragonBones.EgretArmatureDisplay = egretFactoryA.buildArmatureDisplay(dbObj.name);
		dbObj.dom ? this[dbObj.dom].addChild(armature) : this.addChild(armature);


		armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count);
		//监听帧
		armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
			// var x = e.frameLabel.split("x")[1];
			// this.tickling = this.animationFun(this.cursor);
			// this.tickling.x = parseInt(x)+80;
			// this.tickling.y = 230;
			// this.tickling.scaleX = 2;
			// this.tickling.scaleY = 2;
		}, this)
		//动画播放完成
		armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
			if (armature.parent) {
				dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
			}
			if (dbObj.name == "gameover") {
				this.musicFun()
				this.overMask.visible = false;
				this.overMask2.visible = false;
				if (this.over2.parent) {
					this.removeChild(this.over2);
				}
			}

		}, this)

		return armature;
	}
}

