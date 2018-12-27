class RandomClass extends eui.Component implements eui.UIComponent {
	public randomScroll: eui.Scroller;
	public randomGroup: eui.Group;
	public randomList: eui.List = new eui.List();
	public KingKong:KingKong
	public list: Array<any> = [];

	public time = 0;
	public interval: any = null
	public randomCount = 0;

	public aa: any;
	public constructor(KingKong,random) {
		super();
		this.skinName = "RandomClassSkin";
		this.randomCount = random * 40;
		this.KingKong=KingKong;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.start();
	}

	public start(): void {
		var exml = `
			<?xml version="1.0" encoding="utf-8"?>
<e:Skin class="RandomLabel" width="33" height="40" xmlns:e="http://ns.egret.com/eui">
	<e:Label text="{data}" x="0" y="0" width="33" height="40" fontFamily="fz" bold="true" verticalAlign="middle" textAlign="center" size="40" textColor="0x52f9fe"/>
</e:Skin>
		`;
		this.randomScroll.verticalScrollBar.autoVisibility = false;
		this.randomScroll.verticalScrollBar.visible = false;
		this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		this.randomList.dataProvider = new eui.ArrayCollection(this.list)
		this.randomGroup.addChild(this.randomList);
		this.randomList.itemRendererSkinName = exml;
		this.randomAnimate();
	}
	public randomAnimate() {
		clearInterval(this.interval);
		this.interval = setInterval(this.intervalFun, this.time);
	}
	public intervalFun = () => {
		this.randomScroll.viewport.scrollV += 3;
		console.log(this.time)

		if (this.time >= 11 && this.randomScroll.viewport.scrollV >= this.randomCount) {
			this.randomScroll.viewport.scrollV = this.randomCount;
			clearInterval(this.interval);
			this.KingKong.beamButton(true);
		} else
			if (this.randomScroll.viewport.scrollV >= this.randomList.height - 40) {
				this.randomScroll.viewport.scrollV = 0;
				this.time += 5;
				clearInterval(this.interval);
				this.interval = setInterval(this.intervalFun, this.time);
			}

	}
}