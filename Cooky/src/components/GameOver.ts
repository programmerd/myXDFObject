class GameOver extends eui.Component{
	public system:particle.GravityParticleSystem;
	public texture:any;
	public config:any;
	public systemArr:Array<any>=[];

	public constructor() {
		super();
		this.systemArr=[];
	}

	public start(texture,config):void{
		this.texture=texture;
		this.config=config;
        var system = new particle.GravityParticleSystem(this.texture, this.config);
        this.addChild(system);
		this.systemArr.push(system);
       
	}
	public stop(){
		this.systemArr.map((item)=>{
			item.stop();
		})
	}
	public play(){
 		this.systemArr.map((item)=>{
			item.start();
		})
	}
}