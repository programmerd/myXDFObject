
/**
 * 对外提供调用龙骨动画方法
 */
class t {
	private egretFactory: dragonBones.EgretFactory;//骨骼动画工厂类
	private ske_json_dragonbonesData;//待缓存入工厂的龙骨数据
	private tex_json_textureData;//待缓存入工厂的json数据
	private tex_png_texture;//待缓存入工厂的png纹理集
	private boole: boolean = true;
	public constructor() {
		this.egretFactory = dragonBones.EgretFactory.factory;

	}


	//对外提供
	public gugedonghua(ske_json: string, tex_json: string, tex_png: string, component: eui.Component, donghua_name: string, dongzuo_name: string, x?: number, y?: number):any {
		this.ske_json_dragonbonesData = RES.getRes(ske_json);
		this.tex_json_textureData = RES.getRes(tex_json);
		this.tex_png_texture = RES.getRes(tex_png);
		this.egretFactory.parseDragonBonesData(this.ske_json_dragonbonesData);
		this.egretFactory.parseTextureAtlasData(this.tex_json_textureData, this.tex_png_texture);
		var armature: dragonBones.Armature = this.egretFactory.buildArmature(donghua_name);
		var armatureDisplay = armature.getDisplay();
		
		component.addChild(armatureDisplay);
		if (x != null) {
			armatureDisplay.x = x;
		}
		if (y != null) {
			armatureDisplay.y = y;
		}
		armature.animation.play(dongzuo_name);
		dragonBones.WorldClock.clock.add(armature);
		if (this.boole == true) {
			component.addEventListener(egret.Event.ENTER_FRAME, function (): void {
				dragonBones.WorldClock.clock.advanceTime(0.03);
			}, this);
		}
		this.boole = false;
		return armatureDisplay;
	}















}

