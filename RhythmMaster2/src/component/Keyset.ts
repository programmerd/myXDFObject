
class Keyset extends eui.Component implements eui.UIComponent {

	private cacl: Index;
	public keySetGroup: eui.Group;
	private key1: eui.Image;
	private key2: eui.Image;
	private key3: eui.Image;
	private key4: eui.Image;
	private key5: eui.Image;
	private key6: eui.Image;
	private key7: eui.Image;
	private key8: eui.Image;
	private key9: eui.Image;
	private key0: eui.Image;
	private keyRevise: eui.Button;
	private keyOk: eui.Button;
	private RectBj: eui.Rect;
	private index: number;

	public constructor(cacl: Index, x: number = 0, y: number = 0) {
		super();
		this.skinName = "KeysetSkin";
		this.cacl = cacl;
		this.x = 0;
		this.y = 0;
		// console.log(x, y)
		this.keySetGroup.x = x;
		this.keySetGroup.y = y;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		for (var i = 0; i < 10; i++) {
			this["key" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickKeyFun, this)
		}
		this.cacl.clickLabel.text = "";
		this.keyRevise.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reviseFun, this);
		this.keyOk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
		this.RectBj.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
		this.index = this.cacl.labelGroup.$children.indexOf(this.cacl.clickLabel);
	}

	private clickKeyFun(e: egret.TouchEvent): void {
		var name = e.target.source.split("_")[0];
		// console.log(this.cacl.clickLabel.text)
		if (this.cacl.clickLabel.text.length < 1) {
			this.cacl.resultNum = name.split("key")[1];
			// this.cacl.clickLabel.text += name.split("key")[1];
			var subImg: any = this.cacl.showNumGroup.$children;
			subImg[this.index].source = name.split("key")[1] + "_png";
		}
	}

	private reviseFun(e: egret.TouchEvent): void {
		// this.cacl.clickLabel.text = ""
		this.cacl.resultNum = null;
		var subImg: any = this.cacl.showNumGroup.$children;
		subImg[this.index].source = "";
	}

	public submitFun(e: egret.TouchEvent): void {
		this.cacl.judgeResult()
		// if (this.cacl.clickLabel.text != "") {
		// 	this.cacl.clickLabel.text = parseInt(this.cacl.clickLabel.text) + "";
		// } else {
		// 	this.cacl.clickLabel.text = ""
		// }
		this.cacl.removeChild(this)
	}

}

