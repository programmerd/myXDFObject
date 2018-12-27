class CookySkin extends eui.Component implements eui.UIComponent {
	public subject: egret.tween.TweenGroup;
	public over01: egret.tween.TweenGroup;
	public cookyScale1: egret.tween.TweenGroup;
	public cookyScale2: egret.tween.TweenGroup;
	public cookyScale3: egret.tween.TweenGroup;

	public gameOver: eui.Group;

	public subjectBj: eui.Image;
	public subjectAlert: eui.Rect;
	public start: eui.Button;
	public hortation: eui.Button;
	public clearBtn: eui.Button;
	public urad: eui.Label; //绿豆
	public ormosia: eui.Label; //红豆
	public canvasDiv: eui.Rect;
	public music: eui.Button;
	public onLoad: eui.Button;
	public revise: eui.Button;
	public uradBorder: eui.Image;
	public ormosiaBorder: eui.Image;
	public lineRect: eui.Rect;
	//边 图
	public surfaceCell: eui.Image;
	public indoorCell: eui.Image;
	//边 按钮
	public suface: eui.Button;
	public indoor: eui.Button;
	//焦点光
	public labelAClick: eui.Image;
	public labelBClick: eui.Image;
	public labelEClick: eui.Image;
	public labelFClick: eui.Image;

	//label
	public labelA: eui.Label
	public labelB: eui.Label
	public labelC: eui.Label
	public labelD: eui.Label
	public labelE: eui.Label
	public labelF: eui.Label

	public lvCount: eui.Group;
	public redCount: eui.Group;
	public alertMask: eui.Group;

	public t: t = new t();
	public count: number = 0;
	public clickArr: Array<any> = [];
	public isClose: boolean = false;	//连线是否闭合

	public r00: eui.Button;
	public r01: eui.Button;
	public r02: eui.Button;
	public r03: eui.Button;
	public r04: eui.Button;
	public r10: eui.Button;
	public r11: eui.Button;
	public r12: eui.Button;
	public r13: eui.Button;
	public r14: eui.Button;
	public r20: eui.Button;
	public r21: eui.Button;
	public r22: eui.Button;
	public r23: eui.Button;
	public r24: eui.Button;
	public r30: eui.Button;
	public r31: eui.Button;
	public r32: eui.Button;
	public r33: eui.Button;
	public r34: eui.Button;
	public r40: eui.Button;
	public r41: eui.Button;
	public r42: eui.Button;
	public r43: eui.Button;
	public r44: eui.Button;
	public r50: eui.Button;
	public r51: eui.Button;
	public r52: eui.Button;
	public r53: eui.Button;
	public r54: eui.Button;
	public r60: eui.Button;
	public r61: eui.Button;
	public r62: eui.Button;
	public r63: eui.Button;
	public r64: eui.Button;
	public r70: eui.Button;
	public r71: eui.Button;
	public r72: eui.Button;
	public r73: eui.Button;
	public r74: eui.Button;

	public alertOk: eui.Button;

	public subjectRrad01: Array<any> = ["r11", "r22", "r32", "r41", "r52", "r61", "r72", "r64", "r54", "r44", "r34", "r24", "r14", "r02"];
	public subjectOrmosia01: Array<any> = ["r12", "r13", "r23", "r33", "r42", "r43", "r53", "r62", "r63"];
	public subjectLine01: Array<any> = ["r11", "r22", "r32", "r41", "r52", "r61", "r72", "r64", "r14", "r02", "r11"];

	public subjectRrad02: Array<any> = ["r30", "r51", "r63", "r44", "r52", "r42", "r23"];
	public subjectOrmosia02: Array<any> = ["r31", "r32", 'r41', "r53"];
	public subjectLine02: Array<any> = ["r30", "r51", "r63", "r44", "r52", "r42", "r23", 'r30'];

	public subjectRrad03: Array<any> = ["r11", "r21", "r22", "r32", "r31", "r41", "r42", "r52", "r51", "r61", "r62", "r63", "r64", "r54", "r44", "r34", "r24", "r14", "r13", "r12"];
	public subjectOrmosia03: Array<any> = ["r23", "r33", "r43", "r53"];
	public subjectLine03: Array<any> = ["r11", "r21", "r22", "r32", "r31", "r41", "r42", "r52", "r51", "r61", "r64", "r14", "r11"];

	//动画返回值
	public animationllogu: any = null;
	//绘制路径
	private subjectCount: number = 1;
	public subjectArr: any = this['subjectRrad0' + this.subjectCount];
	public subjectCue: any = this['subjectLine0' + this.subjectCount];
	public subjectOrmosia: any = this['subjectOrmosia0' + this.subjectCount];

	//绿边豆
	public uradArr: Array<any> = [];
	//绘制线
	public shape: egret.Shape = new egret.Shape();
	//初始化提示位置
	public cueCount: number = 0;
	public cueX: number
	public cueY: number

	//存放点击边数
	public cellArr: Array<any> = [];

	//存放labela按钮
	public clickLabel: eui.Label

	//饼干
	private cooky1: eui.Image;
	private cooky2: eui.Image;
	private cooky3: eui.Image;





	private cookyLabel1: eui.Label;
	private cookyLabel2: eui.Label;
	private cookyLabel3: eui.Label;
	public GameOver: GameOver;
	//MP3
	public cookyBj: egret.Sound =RES.getRes("cookyBj_mp3");//背景
	public cookyCreat: egret.Sound = new egret.Sound();; // 创建
	public gameOverMp3: egret.Sound = new egret.Sound();	//结束奖励
	public jianpan: egret.Sound = new egret.Sound();  //键盘完成
	public cookyTip: egret.Sound = RES.getRes("cookyTip_mp3");
	public okMusic: egret.Sound = new egret.Sound();;
	public startCreate: egret.Sound = new egret.Sound();;
	public stopMusic: egret.SoundChannel;
	public isPlay: boolean = true;

	public constructor() {
		super();
	
		this.skinName = 'CookySkinSkin';
		this.subject.play();
		this.cooky1.visible = false;
		this.cooky2.visible = false;
		this.cooky3.visible = false;
		this.cookyLabel1.text = "";
		this.cookyLabel2.text = "";
		this.cookyLabel3.text = "";
		this.GameOver = new GameOver();
		this.gameOver.visible = false;
		this.subjectAlert.visible = false;
		this.GameOver.start(RES.getRes("red01_png"), RES.getRes("red01_json"))
		this.GameOver.start(RES.getRes("yellow01_png"), RES.getRes("yellow01_json"))
		this.GameOver.start(RES.getRes("blue01_png"), RES.getRes("blue01_json"))
		this.GameOver.start(RES.getRes("green01_png"), RES.getRes("green01_json"))

		//音乐
		this.musicLoad()
		// addEventListener(egret.TouchEvent.ACTIVATE,this.musicLoad,this)
		// console.log(this.stopMusic)
		// this.over01.play();
		// this.GameOver.play();
		// this.addChild(this.GameOver)
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	public musicLoad():void{
		// 音乐
		// this.cookyBj.load("../resource/assets/Cooky/music/cookyBj.mp3")	//背景
		// this.cookyTip.load("../resource/assets/Cooky/music/cookyTip.mp3")	//背景
		this.cookyBj = RES.getRes("cookyBj_mp3");	//背景
		// this.cookyBj.addEventListener(egret.Event.COMPLETE, this.funs, this)
		this.cookyCreat = RES.getRes("cookyCreat_mp3"); // 创建
		this.gameOverMp3 = RES.getRes("gameOver_mp3");	//结束奖励
		this.jianpan = RES.getRes("jianpan_mp3");  //键盘完成
		this.cookyTip = RES.getRes("cookyTip_mp3"); //
		// this.cookyTip.addEventListener(egret.Event.COMPLETE, this.funs, this)
		this.okMusic = RES.getRes("okMusic_mp3");
		this.startCreate = RES.getRes("startCreate_mp3");	//开始制作

		this.stopMusic = this.cookyBj.play(0, -1);
		this.cookyTip.play(0, 1);
	}

	private funs(e: egret.Event): void {
		console.log("--->", e.target);
		// (e) => {
		// e.target.originAudio.play(0,-1)
		// this.stopMusic = this.cookyBj.play(0, -1);
		// 	console.log("进入")
		// }
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		// this.hortation.enabled = true; //奖励按钮
		this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startClick, this);	// 开始制作
		this.clearBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearClick, this);	//删除
		this.hortation.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hortationClick, this);//奖励
		this.revise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseClick, this); // 回退
		this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicClick, this); // 音乐
		this.onLoad.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoadClick, this); // 重置
		this.suface.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellFun, this)	//点击边豆
		this.indoor.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellFun, this)	//点击边豆
		this.surfaceCell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellImageFun, this)	//点击边豆图
		this.indoorCell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellImageFun, this)	//点击边豆图
		this.labelA.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellFun, this)	//点击label
		this.labelB.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellFun, this)	//点击label
		this.labelE.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellFun, this)	//点击label
		this.labelF.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellFun, this)	//点击label
		this.lvCount.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellLabelImageFun, this)	//点击Label豆图
		this.redCount.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cellLabelImageFun, this)	//点击Label豆图
		this.alertOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.alertSubmit, this);
		this.GameOver.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameOvers, this);
		this.subjectBj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.subjectTip, this);
		this.subjectAlert.addEventListener(egret.TouchEvent.TOUCH_TAP, this.subjectTip, this);

		this.urad.addEventListener(egret.TouchEvent.TOUCH_TAP, this.uradText, this)
		// this.urad.addEventListener(egret.TouchEvent.CHANGE, this.uradText, this)
		this.ormosia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ormosiaText, this)
		// this.ormosia.addEventListener(egret.TouchEvent.CHANGE, this.ormosiaText, this)

		this.uradArr = [];	//点击的点
		this.clickArr = [];	//绘制点的坐标
		this.uradBorder.visible = false;
		this.ormosiaBorder.visible = false;
		this.urad.text = "请输入";
		this.ormosia.text = "请输入";
		this.start.enabled = false;
		this.suface.skinName = "borderColor";
		this.indoor.skinName = "";
		this.suface.name = "suface";
		this.indoor.name = "indoor";
		this.surfaceCell.name = "surfaceCellBtn";
		this.indoorCell.name = "indoorCellBtn";
		this.surfaceCell.visible = false;
		this.indoorCell.visible = false;


		this.labelA.text = "";
		this.labelB.text = "";
		this.labelE.text = "";
		this.labelF.text = "";
		this.labelA.name = "labelA";
		this.labelB.name = "labelB";
		this.labelE.name = "result";
		this.labelF.name = "num";
		this.labelAClick.visible = false;
		this.labelBClick.visible = false;
		this.labelEClick.visible = false;
		this.labelFClick.visible = false;

		this.lvCount.visible = false;
		this.redCount.visible = false;
		this.labelC.text = this.subjectArr.length;
		this.labelD.text = this.subjectOrmosia.length;

		for (var i = 0; i < this.subjectArr.length; i++) {
			this[this.subjectArr[i]].name = this.subjectArr[i]
			this[this.subjectArr[i]].addEventListener(egret.TouchEvent.TOUCH_END, this.coordinateFunction, this)
		}
		this.lineRect.skinName = 'Subject' + this.subjectCount;

		//弹框
		this.alertMask.visible = false;
		// this.count = 0;
		// this.cueCount = 0;
		this.cueFunction()
	}

	//输入边豆
	private uradText(e: egret.TouchEvent): void {

		e.target.text = "";
		this.clickLabel = e.target;
		this.addChild(new Keyset(this, 678, 66))
		this.uradBorder.visible = true;
		this.ormosiaBorder.visible = false;
		if (e.target.text == this.subjectArr.length) {
			this.uradBorder.visible = false;
		}

	}

	private ormosiaText(e: egret.TouchEvent): void {
		e.target.text = "";
		this.clickLabel = e.target
		this.addChild(new Keyset(this, 1094, 66))
		this.uradBorder.visible = false;
		this.ormosiaBorder.visible = true;
		if (e.target.text == this.subjectOrmosia.length) {
			this.ormosiaBorder.visible = false;
		}
	}
	// 点击选择边豆
	private cellFun(e: egret.TouchEvent): void {
		this.cellArr[0] = e.target.name;
		if (e.target.name == "num") {
			this.labelAClick.visible = false;
			this.labelBClick.visible = false;
			this.labelFClick.visible = true;
			this.labelEClick.visible = false;
			this.addChild(new Keyset(this, 1015, 625));
			this.clickLabel = e.target;

		} else if (e.target.name == "result") {
			this.labelAClick.visible = false;
			this.labelBClick.visible = false;
			this.labelFClick.visible = false;
			this.labelEClick.visible = true;

			this.surfaceCell.visible = false;
			this.indoorCell.visible = false;
			this.lvCount.visible = false;
			this.redCount.visible = false;

			this.addChild(new Keyset(this, 1015, 625));
			this.clickLabel = e.target;

		} else if (e.target.name == "labelA" || e.target.name == "labelB") {
			this.lvCount.visible = true;
			this.redCount.visible = true;
			if (e.target.name == "labelA") {
				this.labelAClick.visible = true;
				this.labelBClick.visible = false;
				this.labelEClick.visible = false;
			} else {
				this.labelAClick.visible = false;
				this.labelBClick.visible = true;
				this.labelEClick.visible = false;
			}
		} else {
			this.surfaceCell.visible = true;
			this.indoorCell.visible = true;
			if (e.target.name == "suface") {
				e.target.skinName = "borderColor";
				this.indoor.skinName = this.indoor.skinName == "borderColor" ? "" : this.indoor.skinName
			} else {
				e.target.skinName = "borderColor";
				this.suface.skinName = this.suface.skinName == "borderColor" ? "" : this.suface.skinName
			}
		}


	}
	// 点击边豆img
	private cellImageFun(e: egret.TouchEvent): void {
		this.surfaceCell.visible = false;
		this.indoorCell.visible = false;
		this[this.cellArr[0]].skinName = e.target.name;
	}
	// 点击边豆LABEL -img
	private cellLabelImageFun(e: egret.TouchEvent): void {
		console.log(e.target)
		this.lvCount.visible = false;
		this.redCount.visible = false;
		this[this.cellArr[0]].text = e.target.text;
	}
	//提交答题结果
	private alertSubmit(e: egret.TouchEvent): void {
		var labelText = parseInt(this.labelE.text);
		var labelfText = parseInt(this.labelF.text);
		var result = (this.subjectArr.length / 2 + this.subjectOrmosia.length - 1) * 2;
		if (labelfText != 2) {
			this.labelF.text = "";
		} else if (labelText == result) {
			this["cooky" + this.subjectCount].visible = true;
			this["cookyLabel" + this.subjectCount].text = result;
			this.alertMask.visible = false;
			if (this.subjectCount >= 3) {
				// alert("恭喜通关");
				this.hortation.enabled = true;
				this.start.enabled = false;
				this.cookyScale3.play(0);
			} else {
				// alert("恭喜回答正确")
				this.cookyCreat.play(0, 1);
				this.reviseCooky()
			}

		} else {
			this.labelE.text = ""
		}

	}
	//提示函数
	private cueFunction(): void {
		// var animationllogu= this.animationllogu
		if (this.subjectCue.length == this.cueCount) {
			this.removeChild(this.animationllogu);
			this.animationllogu = null;
		} else {
			this.cueX = this[this.subjectCue[this.cueCount]].x + this[this.subjectCue[this.cueCount]].width / 2;
			this.cueY = this[this.subjectCue[this.cueCount]].y + this[this.subjectCue[this.cueCount]].height / 2;
			console.log(this.animationllogu)
			if (this.cueCount == 0) {
				this.animationllogu = this.t.gugedonghua("spot_ske_json", "spot_tex_json", "spot_tex_png", this, "Sprite", "Sprite", this.cueX, this.cueY);
			} else {
				this.animationllogu = this.animationllogu ? this.removeChild(this.animationllogu) : null;
				this.animationllogu = this.t.gugedonghua("spot_ske_json", "spot_tex_json", "spot_tex_png", this, "Sprite", "Sprite", this.cueX, this.cueY);

			}



		}

	}

	//点的坐标
	private coordinateFunction(e: egret.TouchEvent): void {
		console.log(e.target.name)
		if (this.subjectCue[this.cueCount] == e.target.name) {
			console.log("数量：" + this.cueCount)
			this.revise.enabled = true;
			this.cueCount++;
			this.cueFunction();
			if (this.uradArr.indexOf(e.target.name) == -1) {
				this.count++;
				this.uradArr.push(e.target.name)	//存储点击按钮到uradArr中
				e.target.skinName = 'MyButtonSkin'; //换皮肤
				this.drawLine(e.target.x + e.target.width / 2, e.target.y + e.target.height / 2);
			} else {
				if (e.target.name == this.uradArr[0]) {
					// this.uradArr.length==this.subjectArr.length && 
					this.drawLine(e.target.x + e.target.width / 2, e.target.y + e.target.height / 2);
				}
			}
		}

		// console.log(this.count)
		// console.log(this.cueCount)
	}

	//开始绘制
	private startClick(event: egret.TouchEvent): void {

		if (this.urad.text == this.subjectArr.length && this.ormosia.text == this.subjectOrmosia.length) {
			// this.removeChild(new Keyset())
			// alert("答题")

			this.alertMask.visible = true;
		} else {

			if (this.urad.text != this.subjectArr.length) {
				this.uradBorder.visible = true;
				// this.removeChild()
			} else {
				console.log(this.urad.text != this.subjectArr.length)
				this.ormosiaBorder.visible = true;
				// this.removeChild()
			}
		}

	}
	//清除绘制
	private clearClick(event: egret.TouchEvent): void {
		console.log("清除绘制");
	}
	//奖励
	private hortationClick(event: egret.TouchEvent): void {
		console.log("奖励");
		this.gameOverMp3.play(0, 1)
		this.gameOver.visible = true;
		this.over01.play();
		this.GameOver.play();
		this.addChild(this.GameOver)
	}
	//回退
	private reviseClick(): void {
		console.log("回退", this.cueCount);

		if (this.cueCount == 0 || this.isClose) {
			this.revise.enabled = false;
		} else {
			this.backspace();
		}

	}
	//音乐
	private musicClick(): void {

		console.log("音乐")
		this.isPlay ? this.stopMusic.stop() : this.stopMusic = this.cookyBj.play(0, -1);
		this.isPlay = !this.isPlay
		// this.cooky1.visible = true;

		// this.cookyScale1.play(0);
	}
	//重置
	private onLoadClick(): void {
		console.log("重置");
		window.location.reload();
	}
	//鼠标触摸 画线
	private drawLine(x: number, y: number): void {
		if (!this.isClose) {
			this.shape.graphics.lineStyle(20, 0xB76729)
			if (this.count == 1) {
				this.shape.graphics.moveTo(x, y);
				this.shape.graphics.lineTo(x, y);
			} else {
				this.shape.graphics.lineTo(x, y);
			}
			//判断是否闭合
			if (this.clickArr.length > 2 && (this.clickArr[0].x == x && this.clickArr[0].y == y)) {
				console.log('闭合了');
				this.startCreate.play(0, 1);
				// console.log("绿豆	：", this.subjectArr.length)
				// console.log("红豆：", this.subjectOrmosia.length)
				this.isClose = true;
				this.drawAllDrop();
			}
			var boot = this.clickArr.map((item) => {
				if (item.x == x && item.y == y) {
					return true;
				} else {
					return false;
				}
			})
			if (boot.indexOf(true) == -1) {
				this.clickArr.push({ "x": x, "y": y })
			}
			this.addChildAt(this.shape, 20);
		}
	}
	//弹出提示框
	private subjectTip(e: egret.TouchEvent): void {
		this.subject.stop();
		if (this.subjectAlert.visible) {
			this.subjectAlert.visible = false;
		} else {
			this.subjectAlert.visible = true;
		}
	}
	//回退
	private backspace(): void {
		console.log(this.isClose)
		this.count = 0;
		//清除最后一次点击的点
		this.clickArr.splice(this.clickArr.length - 1, 1);
		//清除最后一个绿边豆
		var uradFast = this.uradArr[this.uradArr.length - 1];
		this[uradFast].skinName = ""
		this.uradArr.splice(this.uradArr.length - 1, 1);
		//清除提示'
		console.log(this.uradArr.length, this.cueCount)
		if (this.uradArr.length < this.cueCount) {
			this.cueCount--;
			this.cueFunction();
		}

		//清除划线
		this.shape.graphics.clear()
		for (var i = 0; i < this.clickArr.length; i++) {
			console.log(i)
			var arr: any = this.clickArr[i];
			this.count++;

			if (!this.isClose) {

				this.shape.graphics.lineStyle(20, 0xB76729)
				if (this.count == 1) {
					this.shape.graphics.moveTo(arr.x, arr.y);
					this.shape.graphics.lineTo(arr.x, arr.y);
				} else {
					this.shape.graphics.lineTo(arr.x, arr.y);
				}
			}
		}
		this.addChildAt(this.shape, 20);
	}

	//绘制点
	private drawAllDrop(): void {
		for (var i = 0; i < this.subjectArr.length; i++) {
			var dropSkinName = this[this.subjectArr[i]];
			dropSkinName.skinName = "MyButtonSkin"

		}
		for (var j = 0; j < this.subjectOrmosia.length; j++) {
			var dropOrmosia: eui.Button = this[this.subjectOrmosia[j]];
			dropOrmosia.skinName = "MyRedButtonSkin";
			console.log(dropOrmosia)
		}
		//加边框
		this.uradBorder.visible = true;
		// this.urad.enabled = true;
		// this.ormosia.enabled = true;
		this.urad.text = "";
		this.clickLabel = this.urad;
		this.start.enabled = true;

	}

	private reviseCooky(): void {
		//清除画线
		this.shape.graphics.clear();
		//清除边豆
		for (var i = 0; i < this.subjectArr.length; i++) {
			var dropSkinName = this[this.subjectArr[i]];
			dropSkinName.skinName = ""

		}
		for (var j = 0; j < this.subjectOrmosia.length; j++) {
			var dropOrmosia: eui.Button = this[this.subjectOrmosia[j]];
			dropOrmosia.skinName = "";
		}
		console.log(this.subjectCount)

		this["cookyScale" + this.subjectCount].play(0);
		//换题目皮肤
		this.subjectCount++;
		this.lineRect.skinName = 'Subject' + this.subjectCount;
		this.subjectArr = this['subjectRrad0' + this.subjectCount];
		this.subjectCue = this['subjectLine0' + this.subjectCount];
		this.subjectOrmosia = this['subjectOrmosia0' + this.subjectCount];

		//绘制画线
		this.isClose = false

		//重置提示及绘制步骤
		this.count = 0;
		this.cueCount = 0;
		// this.cueFunction()
		this.childrenCreated();
	}
	private gameOvers(e: egret.TouchEvent): void {
		console.log(e);
		this.over01.stop()
		this.GameOver.stop();
		this.gameOver.visible = false;
		this.removeChild(this.GameOver)
		this.hortation.enabled = false; //奖励按钮
		this.shape.graphics.clear();
		//清除边豆
		for (var i = 0; i < this.subjectArr.length; i++) {
			var dropSkinName = this[this.subjectArr[i]];
			dropSkinName.skinName = ""

		}
		for (var j = 0; j < this.subjectOrmosia.length; j++) {
			var dropOrmosia: eui.Button = this[this.subjectOrmosia[j]];
			dropOrmosia.skinName = "";
		}
		for (var c = 1; c < 4; c++) {
			this["cooky" + c].visible = false;
			this["cookyLabel" + c].text = "";
			// this["cookyScale" + c] = "";

		}

		//换题目皮肤
		this.subjectCount = 1
		this.lineRect.skinName = 'Subject' + this.subjectCount;
		this.subjectArr = this['subjectRrad0' + this.subjectCount];
		this.subjectCue = this['subjectLine0' + this.subjectCount];
		this.subjectOrmosia = this['subjectOrmosia0' + this.subjectCount];

		//绘制画线
		this.isClose = false

		//重置提示及绘制步骤
		this.count = 0;
		this.cueCount = 0;
		// this.removeChild(this.animationllogu)
		// this.cueFunction()
		this.childrenCreated();
	}
}
