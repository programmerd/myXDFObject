class Index extends eui.Component implements eui.UIComponent {
	public clickLabel: eui.Label;
	public music: eui.Image;
	public reset: eui.Image;
	public endStart: eui.Group;
	public clickStart: eui.Image;
	public subNum = new Value<number>(1);	//定义可监听的数字


	//动画
	public cursor = {
		take: "tickling",			//接收返回值使用 可传可不传
		dom: "keySetGroupAnimate",	//addChild的dom节点 不传默认 this.addChild
		dragonbonesData: "anjianfankui_ske_json",	//必传
		textureData1: "anjianfankui_tex_json",		//必传
		texture1: "anjianfankui_tex_png",			//必传
		name: "fankui",								//必传
		count: 1									//必传
	};
	// 音乐
	public music_bj: egret.SoundChannel;
	public racTipMusic: egret.SoundChannel;
	public isMusic: boolean = true;

	public tq_bj: egret.Sound = RES.getRes("tq_bj_mp3");

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
		this.subNum.addEventListener(Data.DATA, this.changNumber, this); //当数字发生改变时调用
		super.childrenCreated();

		// 开始按钮 等游戏实现后 解开注释使用
		// this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
		// 	this.endStart.visible = false;
		// 	this.start();
		// }, this);

		this.start()
	}
	// 开始游戏
	public start() {
	//	键盘 计算器x y 坐标可传可不传 默认0,0点
		// 调用小键盘
		// this.addChild(new Keyset(this,0,0))
		// 计算器
		// this.addChild(new cacl(this,100,100));
	}
	//监听数字函数
	public changNumber(e: egret.Event) {
		console.log(e.target.value)
		console.log(this.subNum.value)
	}
	//开始 暂停 背景音乐
	public musicFun() {
		if (this.isMusic) {
			this.music_bj.stop()
			this.isMusic = false;
			this.music.source = "music_close_png"
		} else {
			this.music_bj = this.tq_bj.play(0, -1)
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
		armature.animation.gotoAndPlayByFrame(dbObj.name, 1, dbObj.count);
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