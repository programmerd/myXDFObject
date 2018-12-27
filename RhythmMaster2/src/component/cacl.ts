class cacl extends eui.Component implements eui.UIComponent {
	public cacl: Index
	public caclSkin: eui.Group;
	public caclGroup: eui.Group;
	public closeCacl: eui.Rect;
	public ac: eui.Image;
	public ride: eui.Image;
	public remove: eui.Image;
	public minus: eui.Image;
	public add: eui.Image;
	public sum: eui.Label;
	public sum0: eui.Label;
	public submit: eui.Image;
	public value: number = 0;
	public towValue: number = 0;
	public valueArr: Array<any> = [];
	public typeArr: Array<any> = [];
	public count: number = 0;



	public submitNum: number = 0;
	public constructor(Index: Index,x:number=0,y:number=0) {
		super();
		this.skinName = "caclSkin";
		this.cacl = Index;
		this.caclSkin.x = x;
		this.caclSkin.y = y;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.start();
	}
	protected start() {
		this.caclGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.keyDown, this);
		this.add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addFun, this);
		this.minus.addEventListener(egret.TouchEvent.TOUCH_TAP, this.minusFun, this);
		this.ride.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rideFun, this);
		this.remove.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeFun, this);
		this.ac.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickAC, this);
		this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
		this.closeCacl.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.cacl.removeChild(this) }, this);
	}
	//按键
	public keyDown(e: egret.TouchEvent) {
		if (this.typeArr[this.typeArr.length - 1] == "=") {
			this.settingValue()
		}
		this.sum0.visible = false;
		var text = e.target.source.split("_")[0].split("cacl")[1];
		this.sum.text = parseInt(this.sum.text + text) + "";
		this.value = parseInt(this.value + text);
	}
	//更改value
	public settingValue() {
		if (this.submitNum < 1) {
			this.value = 0;
			this.submitNum += 1;
		}
	}
	//加
	public addFun() {
		this.computed("+")
	}
	//减
	public minusFun() {
		this.computed("-")
	}
	//乘
	public rideFun() {
		this.computed("x")
	}
	//除
	public removeFun() {
		this.computed("÷")
	}
	//归零
	public clickAC() {
		this.sum.text = "0";
		this.sum0.text = "0";
		this.sum0.visible = false;
		this.value = 0;
		this.count = 0;
		this.typeArr = [];
	}
	//等于
	public submitFun() {
		this.computed("=");
		this.value = parseInt(this.sum0.text);
		this.submitNum = 0;
		this.count = 0;
	}
	//计算
	public computed(type) {
		// this. value1 = parseInt(this.sum.text);
		this.valueArr.push(this.value);
		this.typeArr.push(type);
		var total = 0;
		var sum0Value = parseInt(this.sum0.text)
		console.log("-->", this.count)
		if (this.count >= 1) {
			this.towValue = this.value;
			switch (this.typeArr[this.typeArr.length - 2]) {
				case "+":
					total = sum0Value + this.towValue;
					break;
				case "-":
					total = sum0Value - this.towValue;
					break;
				case "x":
					total = sum0Value * this.towValue;
					break;
				case "÷":
					total = sum0Value / this.towValue;
					break;
			}
			this.sum0.text = total + "";
		} else {
			console.log("初始化")
			this.sum0.text = this.value + "";
		}

		// console.log("==>", this.sum0.text)
		// console.log("==>", this.typeArr[this.typeArr.length - 2])
		// console.log("==>", this.towValue)
		// console.log(this.typeArr)

		this.sum.text = "";
		this.sum0.visible = true;
		this.value = 0;
		this.count++;
	}
}