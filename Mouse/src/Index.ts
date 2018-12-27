class Index extends eui.Component implements eui.UIComponent {
	public clickLabel: eui.Label;
	public music: eui.Image;
	public reset: eui.Image;
	public endStart: eui.Group;
	public clickStart: eui.Image;
	public subject: eui.Image;
	public subjectGroup: eui.Group;
	public submit: eui.Button
	public nailao: eui.Image
	public mouse1:eui.Image
	public mouse2:eui.Image
	public subNum = new Value<number>(1);	//定义可监听的数字
	public shapeOne: eui.Group;
	public resultGroup: eui.Group;
	public mouseGroup: eui.Group;
	public mouseGroup2: eui.Group;
	public clickLineBtn: eui.Group;
	public btnArr: Array<any> = [];
	public clickBtnArr: Array<any> = [];	//点过的点数组
	public countOne: number = 0;	//累加1
	public countTwo: number = 0;	//累加2
	public speed: number = 300 //速度
	public mouseLineArr: Array<any> = [0, 6, 10, 11, 12, 25, 24];	//第一只老鼠走的路线
	public mouseDistanceOne: number = 0;		//第一只小老鼠走的路程
	public mouseDistanceTwo: number = 0;		//第二只小老鼠走的路程
	// 画线
	private shape: egret.Shape = new egret.Shape();
	private shape2: egret.Shape = new egret.Shape();
	private isFirstLineTo: boolean = true;
	//动画
	public mouseOne: egret.tween.TweenGroup;
	public tickling: dragonBones.EgretArmatureDisplay;
	public tickling2: dragonBones.EgretArmatureDisplay;
	public resultAniumate: dragonBones.EgretArmatureDisplay;
	public successTx: dragonBones.EgretArmatureDisplay;

	public direction = {
		take: "tickling",			//接收返回值使用 可传可不传
		dom: "mouseGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "xiaolaoshu_ske_json",	//必传
		textureData1: "xiaolaoshu_tex_json",		//必传
		texture1: "xiaolaoshu_tex_png",			//必传
		name: "xiaolaoshu",							//必传
		animateName: "you",						//默认与骨架名相同
		count: -1									//必传
	};
	public direction2 = {
		take: "tickling2",			//接收返回值使用 可传可不传
		dom: "mouseGroup2",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "xiaolaoshu_ske_json",	//必传
		textureData1: "xiaolaoshu_tex_json",		//必传
		texture1: "xiaolaoshu_tex_png",			//必传
		name: "xiaolaoshu",							//必传
		animateName: "you",						//默认与骨架名相同
		count: -1									//必传
	};
	public resultSuccess = {
		take: "resultAniumate",			//接收返回值使用 可传可不传
		dom: "resultGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "xiaolaoshu1_ske_json",	//必传
		textureData1: "xiaolaoshu1_tex_json",		//必传
		texture1: "xiaolaoshu1_tex_png",			//必传
		name: "xiaolaoshu1",							//必传
		animateName: "dui",						//默认与骨架名相同
		count: -1									//必传
	};
	public taoxin = {
		take: "successTx",			//接收返回值使用 可传可不传
		dom: "resultGroup",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "taoxin_ske_json",	//必传
		textureData1: "taoxin_tex_json",		//必传
		texture1: "taoxin_tex_png",			//必传
		name: "taoxin",							//必传
		//默认与骨架名相同
		count: -1									//必传
	};
	// 音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;

	public bj: egret.Sound = RES.getRes("bj_mp3");
	public music_subject: egret.Sound = RES.getRes("music_subject_mp3");
	public click_node: egret.Sound = RES.getRes("click_node_mp3");
	public pao: egret.Sound = RES.getRes("pao_mp3");
	public success: egret.Sound = RES.getRes("success_mp3");
	public error: egret.Sound = RES.getRes("error_mp3");

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
		this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.subjectGroup.visible = true }, this);
		this.subjectGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.subjectGroup.visible = false }, this);
		this.subNum.addEventListener(Data.DATA, this.changNumber, this); //当数字发生改变时调用
		this.clickLineBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtnLine, this);
		this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
		eui.Watcher.watch(this, ["countOne"], this.changeCountOne, this)
		eui.Watcher.watch(this, ["countTwo"], this.changeCountTow, this)
		super.childrenCreated();

		// 开始按钮 等游戏实现后 解开注释使用
		this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.endStart.visible = false;
			this.start();
		}, this);

		// this.start()
	}
	// 开始游戏
	public start() {
		//	键盘 计算器x y 坐标可传可不传 默认0,0点
		// 调用小键盘
		// this.addChild(new Keyset(this,0,0))
		// 计算器
		// this.addChild(new cacl(this,100,100));
		this.music_bj=this.bj.play(0,-1);
		this.playMusic("music_subject")
		this.nailao.visible = true;
		this.btnArr = this.clickLineBtn.$children.slice(0);


		// var points: string[] = ["0,0", "250,50", "45,100", "400,300"];
		// let drawLineTween: demo.DrawLineTwen = new demo.DrawLineTwen(points);
		// drawLineTween.start();
		// this.addChild(drawLineTween);

		//初始画线
		for (let i = 0; i < this.mouseLineArr.length; i++) {
			var mouseOne1 = this.clickLineBtn.getChildAt(this.mouseLineArr[i])
			this.shape2.graphics.lineStyle(15, 0xF5D3A7)
			if (i == 0) {
				this.shape2.graphics.clear();
				this.shape2.graphics.lineStyle(15, 0xF5D3A7)
				this.shape2.graphics.moveTo(mouseOne1.x, mouseOne1.y)
			} else {
				this.shape2.graphics.lineTo(mouseOne1.x, mouseOne1.y)

			}
			this.shape2.graphics.endFill();
			this.shapeOne.addChild(this.shape2)
		}

		this.mouseAnimateOne();
	}
	//监听老鼠1
	public changeCountOne() {
		// this.speed
		if (this.countOne == 0) return ""
		var mouseOne1 = this.clickLineBtn.getChildAt(this.mouseLineArr[this.countOne])
		var mouseOne2 = this.clickLineBtn.getChildAt(this.mouseLineArr[this.countOne - 1])
		var directionX = mouseOne1.x - mouseOne2.x
		var directionY = mouseOne1.y - mouseOne2.y
		if (directionX > 0) {
			this.tickling.animation.play("you")
		} else if (directionX < 0) {
			this.tickling.animation.play("zuo")
		} else if (directionY > 0) {
			this.tickling.animation.play("xia")
		} else if (directionY < 0) {
			this.tickling.animation.play("shang")
		}

		var distanceOne = Math.sqrt(Math.pow((mouseOne2.x - mouseOne1.x), 2) + Math.pow((mouseOne2.y - mouseOne1.y), 2));
		var mouseTimer: number = (distanceOne / this.speed) * 1000;

		egret.Tween.get(this.mouseGroup).to({ x: 275 + mouseOne1.x, y: 390 + mouseOne1.y }, mouseTimer).call(() => {
			// console.log(this.countOne, this.mouseLineArr.length - 1)
			if (this.countOne < this.mouseLineArr.length - 1) {
				this.countOne++;
			} else {
				if (this.isFirstLineTo) {
					var btn: any = this.clickLineBtn.getChildAt(0);
					btn.enabled = true;
					this.mouseGroup.visible = false;
					this.mouse1.visible=true;
					this.playTweenFun()
				} else if (this.mouseDistanceOne == this.mouseDistanceTwo) {
					this.resultAniumate = this.animationFun(this.resultSuccess);
					this.resultAniumate.animation.play("dui");
					this.mouseGroup.visible = false;
					this.mouseGroup2.visible = false;
					this.successTx = this.animationFun(this.taoxin);
					this.playMusic("success",-1);
					this.successTx.x = 150;
					this.successTx.y = 50;
					this.successTx.scaleX = 1.5;
					this.successTx.scaleY = 1.5;

				} else if (this.mouseDistanceOne > this.mouseDistanceTwo) {
					this.resultAniumate = this.animationFun(this.resultSuccess);
					this.resultAniumate.animation.play("cuo");
					this.playMusic("error",-1)
					this.nailao.visible = false;
					this.mouseGroup.visible = false;
					this.mouseGroup2.visible = false;
				}

				this.tickling.animation.play("you");
			}

		})
	}
	// 监听老鼠2
	public changeCountTow() {
		// this.speed
		if (this.countTwo == 0) return ""

		var mouseTwo1 = this.clickLineBtn.getChildAt(this.clickBtnArr[this.countTwo])
		var mouseTwo2 = this.clickLineBtn.getChildAt(this.clickBtnArr[this.countTwo - 1])
		var directionX = mouseTwo1.x - mouseTwo2.x
		var directionY = mouseTwo1.y - mouseTwo2.y
		if (directionX > 0) {
			this.tickling2.animation.play("you")
		} else if (directionX < 0) {
			this.tickling2.animation.play("zuo")
		} else if (directionY > 0) {
			this.tickling2.animation.play("xia")
		} else if (directionY < 0) {
			this.tickling2.animation.play("shang")
		}

		var distanceTow = Math.sqrt(Math.pow((mouseTwo2.x - mouseTwo1.x), 2) + Math.pow((mouseTwo2.y - mouseTwo1.y), 2))
		var mouseTimer: number = (distanceTow / this.speed) * 1000;
		egret.Tween.get(this.mouseGroup2).to({ x: 275 + mouseTwo1.x, y: 390 + mouseTwo1.y }, mouseTimer).call(() => {
			if (this.countTwo < this.clickBtnArr.length - 1) {
				this.countTwo++;
			} else {
				if (this.mouseDistanceOne < this.mouseDistanceTwo) {
					this.resultAniumate = this.animationFun(this.resultSuccess)
					this.resultAniumate.animation.play("cuo");
					this.playMusic("error",-1)
					this.nailao.visible = false;
					this.mouseGroup.visible = false;
					this.mouseGroup2.visible = false;
				}
				this.tickling2.animation.play("you")
			}

		})
	}
	//点击连线
	public clickBtnLine(e: egret.TouchEvent) {
		if (e.target.name != "group") {
			this.playMusic("click_node")
			var minArr: Array<any> = []
			var minArrLeftX: Array<any> = [];
			var minArrRightX: Array<any> = [];
			var minArrTopY: Array<any> = [];
			var minArrBottomY: Array<any> = [];

			var btnLine: any = this.clickLineBtn.$children;
			var index = btnLine.indexOf(e.target);
			// console.log(index)
			// if (index != 24) {
				this.clickBtnArr.push(index);
				// console.log(this.clickBtnArr)
			// } else {
				// var mouseArr = this.mouseLineArr.slice(0,-1)
				// console.log(this.clickBtnArr.join("")==mouseArr.join(""))
				// console.log(mouseArr)
				// console.log(this.mouseLineArr)
			// }

			//循环判断方向数组
			for (let i = 0; i < this.btnArr.length; i++) {
				this.btnArr[i].enabled = false;
				// if (this.clickBtnArr.indexOf(i) == -1) {
				//判断y轴相等的情况下x轴的坐标情况
				if (i != index && this.btnArr[i].y == e.target.y) {

					var x = e.target.x - this.btnArr[i].x

					if (x > 0) {
						minArrLeftX.push(this.btnArr[i])
					} else {
						minArrRightX.push(this.btnArr[i])
					}

					// console.log("-->",x,y)
					// console.log(Math.sqrt(x*x + y*y))

					minArr.push(this.btnArr[i]);

					// this.btnArr[i].enabled=true
				}
				//判断x轴相等的情况下y轴的坐标情况
				if (i != index && this.btnArr[i].x == e.target.x) {

					var y = e.target.y - this.btnArr[i].y
					//判断其他点对于当前点的位置
					if (y > 0) {
						minArrTopY.push(this.btnArr[i])
					} else {
						minArrBottomY.push(this.btnArr[i])
					}

					minArr.push(this.btnArr[i]);

					// this.btnArr[i].enabled=true
				}
				// }


			}


			// console.log(minArr.some(item => item.x - e.target.x < 0))
			// console.log(minArr.some(item => item.x - e.target.x > 0))
			// console.log(minArr.some(item => item.y - e.target.y < 0))
			// console.log(minArr.some(item => item.y - e.target.y > 0))
			//判断那个方向是可以点击的
			var isLeft = minArr.some(item => item.x - e.target.x < 0)
			var isRight = minArr.some(item => item.x - e.target.x > 0)
			var isTop = minArr.some(item => item.y - e.target.y < 0)
			var isBottom = minArr.some(item => item.y - e.target.y > 0)

			//排序
			minArrLeftX.sort((a: any, b: any) => {
				return b.x - a.x
			})
			minArrRightX.sort((a: any, b: any) => {
				return a.x - b.x
			})
			minArrTopY.sort((a: any, b: any) => {
				return b.y - a.y
			})
			minArrBottomY.sort((a: any, b: any) => {
				return a.y - b.y
			})
			// console.log("左", minArrLeftX)
			// console.log("右", minArrRightX)
			// console.log("上", minArrTopY)
			// console.log("下", minArrBottomY)
			if(this.clickBtnArr.join("")==this.mouseLineArr.slice(0,-1).join("")){
				isRight=false;
			}
			if (index != 24) {
				isLeft ? minArrLeftX[0].enabled = true : "";
				isRight ? minArrRightX[0].enabled = true : "";
				isTop ? minArrTopY[0].enabled = true : "";
				isBottom ? minArrBottomY[0].enabled = true : "";
			} else {
				this.submit.enabled = true;
			}
			for (var i = 0; i < this.clickBtnArr.length; i++) {
				this.btnArr[this.clickBtnArr[i]].enabled = false;
			}
			//画线
			var lineX = e.target.x;
			var lineY = e.target.y;

			this.shape.graphics.lineStyle(15, 0xff00ff)

			if (this.isFirstLineTo) {
				this.shape.graphics.clear();
				this.shape.graphics.lineStyle(15, 0xff00ff)
				this.shape.graphics.moveTo(lineX, lineY)
				this.isFirstLineTo = false;
			}
			this.shape.graphics.lineTo(lineX, lineY)
			this.shape.graphics.endFill();
			this.clickLineBtn.addChild(this.shape)
			e.target.enabled = false;	//当前点击元素禁止点击
			this.playTweenFun()
		}
	}
	//监听数字函数
	public changNumber(e: egret.Event) {
		console.log(e.target.value)
		console.log(this.subNum.value)
	}
	//比赛
	private submitFun() {
		console.log("开始比赛")
		this.playMusic("pao",-1);
		this.submit.enabled = false;
		this.mouseDistanceOne = 0;
		this.mouseDistanceTwo = 0
		this.countOne = 0;
		this.countTwo = 0;
		this.mouseGroup.visible = true;
		this.mouseGroup2.visible = true;
		this.mouse1.visible=false;
		this.mouse2.visible=false;
		//移除桃心动画
		if (this.successTx) {
			if (this.successTx.parent) {
				this.resultGroup.removeChild(this.successTx);
			}
		}

		for (let i = 1; i < this.mouseLineArr.length; i++) {
			var mouseOne1 = this.clickLineBtn.getChildAt(this.mouseLineArr[i])
			var mouseOne2 = this.clickLineBtn.getChildAt(this.mouseLineArr[i - 1])

			this.mouseDistanceOne += Math.sqrt(Math.pow((mouseOne2.x - mouseOne1.x), 2) + Math.pow((mouseOne2.y - mouseOne1.y), 2))
		}
		for (let i = 1; i < this.clickBtnArr.length; i++) {
			var mouseTwo1 = this.clickLineBtn.getChildAt(this.clickBtnArr[i])
			var mouseTwo2 = this.clickLineBtn.getChildAt(this.clickBtnArr[i - 1])
			this.mouseDistanceTwo += Math.sqrt(Math.pow((mouseTwo2.x - mouseTwo1.x), 2) + Math.pow((mouseTwo2.y - mouseTwo1.y), 2))
		}
		console.log("第一只", this.mouseDistanceOne)
		console.log("第二只", this.mouseDistanceTwo)
		this.mouseAnimateOne()
		this.mouseAnimateTow()
	}
	//动画一播放
	public mouseAnimateOne() {
		this.mouseGroup.visible = true;
		this.tickling = this.animationFun(this.direction);
		this.tickling.scaleX = 0.7;
		this.tickling.scaleY = 0.7;
		this.tickling.animation.play("you")

		egret.Tween.get(this.mouseGroup).to({ x: 275, y: 390 }, 0).call(() => {
			this.countOne++;
		})
	}
	//动画二播放
	public mouseAnimateTow() {
		this.mouseGroup2.visible = true;
		this.tickling2 = this.animationFun(this.direction2);
		this.tickling2.scaleX = 0.7;
		this.tickling2.scaleY = 0.7;
		this.tickling2.animation.play("you")

		egret.Tween.get(this.mouseGroup2).to({ x: 275, y: 390 }, 0).call(() => {
			this.countTwo++;
		})
	}
	public playTweenFun() {
		var btns: any = this.clickLineBtn.$children;
		for (var i = 0; i < btns.length; i++) {

			if (btns[i].enabled) {
				egret.Tween.get(btns[i], { loop: true }).to({ scaleX: 2, scaleY: 2 }, 500).to({ scaleX: 1, scaleY: 1 }, 500)
			} else {
				btns[i].scaleX = 1;
				btns[i].scaleY = 1;
				egret.Tween.removeTweens(btns[i])
			}
		}
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
		// this.tickling=this.animationFun(this.direction);
		// console.log(this.tickling.animation.play("shang"))
		// console.log(this.tickling.animation.play("zhuan", 1))

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
		armature.animation.gotoAndPlayByFrame(dbObj.animateName ? dbObj.animateName : dbObj.name, 1, dbObj.count);
		//监听帧
		armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, (e) => {
			// console.log(e.frameLabel)
		}, this)
		//动画播放完成
		armature.addEventListener(dragonBones.EventObject.COMPLETE, () => {
			if (armature.parent) {	// 播放完成移除动画
				dbObj.dom ? this[dbObj.dom].removeChild(armature) : this.removeChild(armature);
			}
		}, this)

		return armature;
	}
}