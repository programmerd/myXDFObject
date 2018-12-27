
class Keyset extends eui.Component implements eui.UIComponent {

	private cooky: CookySkin;
	private CookySkin:CookySkin;
	public keySet: eui.Group;
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
	

	public constructor(cooky:CookySkin,x:number,y:number) {
		super();
		this.skinName = "KeysetSkin";
		this.cooky=cooky;
		this.x=0;
		this.y=0;
		console.log
		this.keySet.x=x;
		this.keySet.y=y;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		for (var i = 0; i < 10; i++) {
			this["key" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickKeyFun, this)
		}
		this.keyRevise.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reviseFun,this);
		this.keyOk.addEventListener(egret.TouchEvent.TOUCH_TAP,this.submitFun,this);
	}

	private clickKeyFun(e: egret.TouchEvent): void {
		var name = e.target.source.split("_")[0];
		console.log(this.cooky)
		if (this.cooky.clickLabel.text.length < 4) {
			this.cooky.clickLabel.text += name.split("key")[1];
		}
	}

	private reviseFun(e:egret.TouchEvent):void{
		this.cooky.clickLabel.text =""
	}

	public submitFun(e:egret.TouchEvent):void{
		this.cooky.jianpan.play(0,1);

		this.cooky.uradBorder.visible = false;
		this.cooky.ormosiaBorder.visible = false;
		this.cooky.removeChild(this)
	}

}

