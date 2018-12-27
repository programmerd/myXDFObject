class keySet extends eui.Component implements eui.UIComponent {
	public keySet: Racing
	public keyDown: eui.Group;
	public keyx: eui.Image;
	public keyAdd: eui.Image;
	public keyMinus: eui.Image;
	public key1: eui.Image;
	public key2: eui.Image;
	public key3: eui.Image;
	public key4: eui.Image;
	public key5: eui.Image;
	public key6: eui.Image;
	public key7: eui.Image;
	public key8: eui.Image;
	public key9: eui.Image;
	public key0: eui.Image;
	public keyRevise: eui.Image;
	public keyOk: eui.Image;
	public closeKeySet: eui.Rect;
	public keysetGroup: eui.Group;
	public first:boolean;

	public constructor(props,x,y) {
		super();
		this.skinName = "keySetSkin";
		this.keySet = props;
		this.keysetGroup.x=x;
		this.keysetGroup.y=y;
		this.first=true;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.keySetFun();
	}
	public keySetFun() {
		this.keyDown.touchChildren = true;
		this.keyDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.keyDownFun, this);
		this.keyOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
		this.closeKeySet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
		this.keyRevise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
	}

	//键盘按下
	public keyDownFun(e: egret.TouchEvent) {
		if(this.first){
			this.first=false;
			this.keySet.clickLabel.text=""
		}
		if (!e.target.$Group && this.keySet.clickLabel.text.length<7) {
			// console.log(e.target.source.split("_")[0].split("key").reverse()[0])
			var text = e.target.source.split("_")[0].split("key").reverse()[0];
			this.keySet.clickLabel.text += text;
		}

	}
	private reviseFun(e: egret.TouchEvent): void {
		this.keySet.clickLabel.text = ""
	}

	public submitFun(e: egret.TouchEvent): void {
		if (this.keySet.clickLabel.text == "") {
			this.keySet.clickLabel.text = "输入"
		}
		this.keySet.removeChild(this)
	}

}