class ClickBtb extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName="ClickBtn"
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}