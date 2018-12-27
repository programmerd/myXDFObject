class Transformers extends eui.Component implements eui.UIComponent {
	public mylist: eui.List = new eui.List();
	public myGroup: eui.DataGroup = new eui.DataGroup();
	public listGroup: eui.Group;
	public myScroller: eui.Scroller;
	// public btn:eui.Button;
	public KingKong: KingKong;
	public count: number;

	public List: Array<any>;
	public constructor(KingKong, i) {
		super();
		this.skinName = "TransformersSkin";
		this.KingKong = KingKong;
		this.count = i;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		this.myScroller.addEventListener(eui.UIEvent.CHANGE_START, this.scrollerWidth2, this);
		this.myScroller.addEventListener(eui.UIEvent.CHANGE_END, this.scrollerWidth, this);
		// this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickBtn, this);
		this.myScroller.verticalScrollBar.autoVisibility = false;
		this.myScroller.verticalScrollBar.visible = false;

		var exml = `
		<?xml version="1.0" encoding="utf-8"?>
			<e:Skin class="MyList" width="60" height="60" xmlns:e="http://ns.egret.com/eui">
			<e:Label text="{data}" x="0" y="0"  anchorOffsetX="0" width="60" anchorOffsetY="0" height="60" verticalAlign="middle" textAlign="center" size="45" bold="true" textColor="0xB8FEFC" fontFamily="fz"/>
		</e:Skin>`

		this.List = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		super.childrenCreated();
		this.mylist.dataProvider = new eui.ArrayCollection(this.List)
		this.listGroup.addChild(this.mylist)
		this.mylist.itemRendererSkinName = exml;
	}

	public scrollerWidth2() {
		this.KingKong.bx_transition.play(0, 1);
		if(this.KingKong.cursorTop){
			this.KingKong.removeChild(this.KingKong.cursor);
			this.KingKong.cursorTop=false
		}
	}
	public scrollerWidth(e: egret.TouchEvent): any {

		// console.log(this.myScroller.viewport.scrollV)
		// console.log(this.listGroup.height)
		let itemHieght = this.listGroup.height;
		let scrollPosition = Math.round(this.myScroller.viewport.scrollV / this.listGroup.height)
		this.KingKong.switchResult[this.count] = scrollPosition;
		// console.log(this.KingKong.switchResult)
		this.myScroller.viewport.scrollV = scrollPosition * itemHieght;
		return scrollPosition
	}
	// protected onClickBtn():void{

	// 	this.myScroller.viewport.scrollV = 239
	// }
}


class LabelRenderer extends eui.ItemRenderer {
	private labelDisplay: eui.Label;
	public constructor() {
		super();
		this.touchChildren = true;
		this.labelDisplay = new eui.Label();
		this.addChild(this.labelDisplay);
	}
	protected dataChanged(): void {
		// console.log(this.data)
		this.labelDisplay.height = 60;
		this.labelDisplay.text = this.data;
	}
}