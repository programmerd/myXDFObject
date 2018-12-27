class Index extends eui.Component implements eui.UIComponent {
	public clickLabel: eui.Label;
	public music: eui.Image;
	public reset: eui.Image;
	public endStart: eui.Group;
	public clickStart: eui.Image;

	public subject: eui.Image;
	public pandas: eui.Image;
	public result: eui.Image;
	public resultMask: eui.Group;
	public digit: eui.Image;
	public rank: eui.Group;
	public rank1: eui.Group;
	public rank2: eui.Group;
	public rank3: eui.Group;
	public rank4: eui.Group;
	public assemble: eui.Group;
	public assemble1: eui.Group;
	public assemble2: eui.Group;
	public assemble3: eui.Group;
	public assemble4: eui.Group;
	public hint: eui.Group;
	public tipSub: eui.Image;
	public tipResult: eui.Image;
	public bomb: eui.Group;
	public bombGroup: eui.Group;
	public dataGroup: eui.Group;
	public resultImg: eui.Image
	public revise: eui.Image
	public resultGroup1: eui.Group;
	public resultGroup2: eui.Group;
	public resultGroup3: eui.Group;
	public resultGroup4: eui.Group;
	public panzi: eui.Group;
	public panzi1: eui.Group;
	public panzi2: eui.Group;
	public panzi3: eui.Group;
	public panzi4: eui.Group;

	public shiwu: eui.Group;
	public shiwu1: eui.Group;
	public shiwu2: eui.Group;
	public shiwu3: eui.Group;
	public shiwu4: eui.Group;

	public keepMask: eui.Group;
	public keep: eui.Image;
	public keepOn: eui.Image;

	public gameOver: eui.Group;
	public overs: eui.Group;

	public mc: egret.MovieClip;
	public mcFactory: egret.MovieClipDataFactory;
	public panda: eui.Group;
	public file = { dom: "panda", dragonbonesData: "xiongmao_ske_json", textureData1: "xiongmao_tex_json", texture1: "xiongmao_tex_png", name: "pandaPlay", count: 1 };
	public huoAnimate = { dom: "bomb", dragonbonesData: "dianhuo_ske_json", textureData1: "dianhuo_tex_json", texture1: "dianhuo_tex_png", name: "dianhuo", count: 3 };
	public bombAinamate = { dom: "bombGroup", dragonbonesData: "baozha01_ske_json", textureData1: "baozha01_tex_json", texture1: "baozha01_tex_png", name: "bomp", count: 1 };
	public stream = { dom: "panda", dragonbonesData: "liulei_ske_json", textureData1: "liulei_tex_json", texture1: "liulei_tex_png", name: "liulei", count: -1 };
	public over = { dom: "overs", dragonbonesData: "yanhua01_ske_json", textureData1: "yanhua01_tex_json", texture1: "yanhua01_tex_png", name: "yanhua", count: -1 };

	public sunNum: number = 1;
	public clickCount: number = 1;
	public clickImageArr: Array<any> = [];
	public clickImagePosArr: Array<any> = [];
	public resultArr: Array<any> = [
		["A33"],
		["A53", "C51"],
		["A73", "C42", "C22"],
		["C63", "C42", "C22"]
	]
	public isResult: Array<any> = [];
	public imgArr: Array<any> = ["luobo_png", "nangua_png", "wosun_png", "xigua_png", "yumi_png"];
	// 音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;

	public panda_bj: egret.Sound = RES.getRes("panda_bj_mp3");
	public panda_click: egret.Sound = RES.getRes("panda_click_mp3");
	public panda_chi: egret.Sound = RES.getRes("panda_chi_mp3");
	public panda_error: egret.Sound = RES.getRes("panda_error_mp3");
	public panda_go: egret.Sound = RES.getRes("panda_go_mp3");
	public panda_sub1: egret.Sound = RES.getRes("panda_sub1_mp3");
	public panda_sub2: egret.Sound = RES.getRes("panda_sub2_mp3");
	public panda_sub3: egret.Sound = RES.getRes("panda_sub3_mp3");
	public panda_sub4: egret.Sound = RES.getRes("panda_sub4_mp3");
	public panda_bz: egret.Sound = RES.getRes("panda_bz_mp3");

	public constructor() {
		super();
		this.skinName = "IndexSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		this.skinName = "IndexSkin"
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
		this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
		this.gameOver.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);


		this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.subjectFun, this);
		this.hint.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.hint.visible = false }, this);
		this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickResult, this);
		this.assemble.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickResult, this);

		this.shiwu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickShiwuFun, this);

		this.keep.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initialise, this);
		this.keepOn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initialise, this);

		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
		this.result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resultFun, this);
		this.resultMask.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.resultMask.visible = false }, this);



		// 开始按钮 等游戏实现后 解开注释使用
		this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.endStart.visible = false;
			this.start();
		}, this);

		// this.start()
	}
	// 开始游戏
	public start() {
		this.sunNum = 1;
		this.gameOver.visible = false;
		this.music_bj = this.panda_bj.play(0, -1);
		this.cursorFun();
		this.initialise();
	}
	//初始化
	public initialise() {
		console.log(this.sunNum);
		this.playMusic("panda_sub" + this.sunNum);
		this.isResult = [];
		this.keepMask.visible = false;
		this.keep.visible = false;

		this.rank.touchChildren = true;
		this.assemble.touchChildren = true;
		this.shiwu.touchChildren = true;
		this.subject.source = `timu${this.sunNum}_png`;
		this.digit.source = `xiamian${this.sunNum}_png`;
		this.resultImg.source = `daan${this.sunNum}_png`;

		this.pandas.source = "pandaImg_png";
		this.pandas.visible = true;

		this.resultImg.visible = false;
		this.revise.visible = false;

		for (var i = 0; i < this.rank.$children.length; i++) {
			if ((this.sunNum - 1) == i) {
				this.rank.$children[i].visible = true;
				this.assemble.$children[i].visible = true;
				this.dataGroup.$children[i].visible = true;
			} else {
				this.rank.$children[i].visible = false;
				this.assemble.$children[i].visible = false;
				this.dataGroup.$children[i].visible = false;
			}
			this.panzi.$children[i].visible = false;
			this.shiwu.$children[i].visible = false;
		}
		this.clickImageArr.map((item, index) => {
			item.x = this.clickImagePosArr[index].x;
			item.y = this.clickImagePosArr[index].y;
			item.visible = true;
		})
	}
	//点击题目
	public subjectFun() {
		this.playMusic("panda_click")
		this.hint.visible = true;
		this.tipSub.source = `fangda${this.sunNum}_png`;
	}
	//点击答案
	public resultFun() {
		this.playMusic("panda_click")
		this.resultMask.visible = true;
		this.tipResult.source = `xiti${this.sunNum}_png`
	}
	//选择答案
	public clickResult(e: egret.TouchEvent) {
		if (e.target.name != "group") {


			this.playMusic("panda_click");
			//禁止点击
			this.rank.touchChildren = false;
			this.assemble.touchChildren = false;
			//还原位置使用
			var len = this.rank.$children[this.sunNum - 1].$children.length;
			this.clickImageArr.push(e.target);
			this.clickImagePosArr.push({ x: e.target.x, y: e.target.y });
			// 添加答案
			this.isResult.push(e.target.source.split("_")[0]);
			// console.log(this.dataGroup);
			var img = this.dataGroup.$children[this.sunNum - 1].$children[this.clickCount - 1];
			var x = this.dataGroup.x + img.x - e.target.parent.x - e.target.parent.parent.x + (img.width - e.target.width) / 2;
			var y = this.dataGroup.y + img.y - e.target.parent.y - e.target.parent.parent.y + (img.height - e.target.height) / 2;

			egret.Tween.get(e.target).to({ x: x, y: y }, 500).wait(100).call(() => {
				if (this.sunNum == 1) {
					this.mc.x = 1050;
					this.mc.y = 930;
				}
				if (this.clickCount >= len) {
					this.clickCount = 1;
					this.isSuccessFun()
				} else {
					this.clickCount++;
					this.rank.touchChildren = true;
					this.assemble.touchChildren = true;
					this.revise.visible = true;
				}
			}, this)
		}
	}
	//喂食物
	public clickShiwuFun(e: egret.TouchEvent) {

		if (e.target.name != "group") {
			if (this.sunNum == 1) {
				this.removeChild(this.mc)
			}
			this.playMusic("panda_click")
			var event = e.target;
			this.shiwu.touchChildren = false;
			this.clickImageArr.push(e.target);
			this.clickImagePosArr.push({ x: e.target.x, y: e.target.y });
			var x = 960 - (e.target.parent.x + e.target.parent.parent.x) - e.target.width / 2;
			var y = 700 - (e.target.parent.y + e.target.parent.parent.y) - e.target.height / 2;
			this.animationFun(this.file);
			this.playMusic("panda_chi")
			egret.Tween.get(e.target).to({ x: x, y: y }, 300).wait(100).call(() => {
				this.pandas.visible = false;
				event.visible = false;
			}, this)
		}
	}
	//判断对错
	public isSuccessFun() {
		console.log(this.isResult.sort());
		console.log(this.resultArr[this.sunNum - 1].sort());
		var isSuccess = false;
		this.revise.visible = false;
		for (var j = 0; j < this.isResult.length; j++) {
			var isBool = this.isResult.sort()[j] == this.resultArr[this.sunNum - 1].sort()[j];
			if (!isBool) {
				isSuccess = isBool;
				break;
			} else {
				isSuccess = isBool;
			}
		}
		console.log(isSuccess)
		isBool ? this.successFun() : this.errorFun();
	}
	public successFun() {
		// alert("回答正确");
		this.shiwu.touchEnabled = true;
		this.resultImg.visible = true;

		for (var i = 0; i < this.panzi.$children.length; i++) {
			if ((this.sunNum - 1) == i) {
				this.panzi.$children[i].visible = true;
				this.shiwu.$children[i].visible = true;
			} else {
				this.panzi.$children[i].visible = false;
				this.shiwu.$children[i].visible = false;
			}
		}
	}
	public errorFun() {
		// alert("回答错误");
		// this.bombTween.play(0)

		egret.Tween.get(this.bomb).to({ y: 740 }, 500).call(() => {
			this.animationFun(this.huoAnimate)
		})



	}
	//手指

	public cursorFun(x = 200, y = 400) {
		if (this.mc)
			if (this.mc.parent) {
				this.removeChild(this.mc);
			}
		var data = RES.getRes("shouzhi_json");
		var txtr = RES.getRes("shouzhi_png");
		var mcFactory = new egret.MovieClipDataFactory(data, txtr);
		this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("shouzhi"));
		this.addChild(this.mc)
		this.mc.play(-1);
		this.mc.x = x;
		this.mc.y = y;
	}
	// 动画
	public animationFun(dbObj) {
		let dragonbonesData = RES.getRes(dbObj.dragonbonesData);
		let textureData = RES.getRes(dbObj.textureData1);
		let texture = RES.getRes(dbObj.texture1);
		// 
		let egretFactoryA = new dragonBones.EgretFactory();
		egretFactoryA.parseDragonBonesData(dragonbonesData);
		egretFactoryA.parseTextureAtlasData(textureData, texture);

		let armature = egretFactoryA.buildArmatureDisplay(dbObj.name);
		dbObj.dom ? this[dbObj.dom].addChild(armature) : this.addChild(armature);
		// armature.x = ;
		if (dbObj.name == "pandaPlay") {
			armature.y = 30;
			armature.scaleX = 2;
			armature.scaleY = 2;
		} else if (dbObj.name == "dianhuo") {
			armature.x = 190;
			armature.y = 10;
			armature.scaleX = 2;
			armature.scaleY = 2;
		} else if (dbObj.name == "bomp") {
			armature.scaleX = 2;
			armature.scaleY = 2;
			this.playMusic("panda_bz")
			setTimeout(() => {
				this.pandas.source = "pandaImgError_png";
			}, 500)
		} else if (dbObj.name == "liulei") {
			armature.y = -100;
			armature.scaleX = 2;
			armature.scaleY = 2;
		} else if (dbObj.name == "yanhua") {
			armature.scaleX = 2.5;
			armature.scaleY = 2.5;
		}

		armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count);
		armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
			dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
			if (dbObj.name == "pandaPlay") {
				this.pandas.visible = true;
				this.shiwu.touchChildren = true;
				if (this.clickCount >= this["shiwu" + this.sunNum].$children.length) {
					this.clickCount = 1;
					if (this.sunNum >= 4) {
						this.pandas.visible = false;
						this.gameOver.visible = true;
						this.animationFun(this.stream);
						this.animationFun(this.over);
					} else {
						this.sunNum++
						this.keepMask.visible = true;
						this.playMusic("panda_go");
					}

				} else {
					this.clickCount++;
				}
			} else if (dbObj.name == "dianhuo") {
				this.animationFun(this.bombAinamate);
				this.bomb.y = 1085;
			} else if (dbObj.name == "bomp") {
				this.keep.visible = true;
				this.playMusic("panda_error")
			}

		}, this)
		return armature;
	}

	//撤销
	public reviseFun() {
		if (this.clickCount > 1) {
			this.playMusic("panda_click");
			var index = this.clickImageArr.length - 1;
			var x = this.clickImagePosArr[index].x;
			var y = this.clickImagePosArr[index].y;
			egret.Tween.get(this.clickImageArr[index]).to({ x: x, y: y }, 300).call(() => {
				this.clickImageArr.splice(index, 1);
				this.clickImagePosArr.splice(index, 1);
				this.clickCount--;
				if (this.clickCount <= 1) {
					this.revise.visible = false;
				}
			})
		}
	}
	//开始 暂停 背景音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.panda_bj.play(0, -1)
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

}


