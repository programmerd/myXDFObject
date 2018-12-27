var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super.call(this) || this;
        _this.subNum = new Value(1); //定义可监听的数字
        _this.btnArr = [];
        _this.clickBtnArr = []; //点过的点数组
        _this.countOne = 0; //累加1
        _this.countTwo = 0; //累加2
        _this.speed = 300; //速度
        _this.mouseLineArr = [0, 6, 10, 11, 12, 25, 24]; //第一只老鼠走的路线
        _this.mouseDistanceOne = 0; //第一只小老鼠走的路程
        _this.mouseDistanceTwo = 0; //第二只小老鼠走的路程
        // 画线
        _this.shape = new egret.Shape();
        _this.shape2 = new egret.Shape();
        _this.isFirstLineTo = true;
        _this.direction = {
            take: "tickling",
            dom: "mouseGroup",
            dragonbonesData: "xiaolaoshu_ske_json",
            textureData1: "xiaolaoshu_tex_json",
            texture1: "xiaolaoshu_tex_png",
            name: "xiaolaoshu",
            animateName: "you",
            count: -1 //必传
        };
        _this.direction2 = {
            take: "tickling2",
            dom: "mouseGroup2",
            dragonbonesData: "xiaolaoshu_ske_json",
            textureData1: "xiaolaoshu_tex_json",
            texture1: "xiaolaoshu_tex_png",
            name: "xiaolaoshu",
            animateName: "you",
            count: -1 //必传
        };
        _this.resultSuccess = {
            take: "resultAniumate",
            dom: "resultGroup",
            dragonbonesData: "xiaolaoshu1_ske_json",
            textureData1: "xiaolaoshu1_tex_json",
            texture1: "xiaolaoshu1_tex_png",
            name: "xiaolaoshu1",
            animateName: "dui",
            count: -1 //必传
        };
        _this.taoxin = {
            take: "successTx",
            dom: "resultGroup",
            dragonbonesData: "taoxin_ske_json",
            textureData1: "taoxin_tex_json",
            texture1: "taoxin_tex_png",
            name: "taoxin",
            //默认与骨架名相同
            count: -1 //必传
        };
        _this.isMusic = true;
        _this.bj = RES.getRes("bj_mp3");
        _this.music_subject = RES.getRes("music_subject_mp3");
        _this.click_node = RES.getRes("click_node_mp3");
        _this.pao = RES.getRes("pao_mp3");
        _this.success = RES.getRes("success_mp3");
        _this.error = RES.getRes("error_mp3");
        _this.skinName = "IndexSkin";
        return _this;
    }
    Index.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Index.prototype.childrenCreated = function () {
        var _this = this;
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicFun, this);
        this.reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetFun, this);
        this.subject.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.subjectGroup.visible = true; }, this);
        this.subjectGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.subjectGroup.visible = false; }, this);
        this.subNum.addEventListener(Data.DATA, this.changNumber, this); //当数字发生改变时调用
        this.clickLineBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBtnLine, this);
        this.submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submitFun, this);
        eui.Watcher.watch(this, ["countOne"], this.changeCountOne, this);
        eui.Watcher.watch(this, ["countTwo"], this.changeCountTow, this);
        _super.prototype.childrenCreated.call(this);
        // 开始按钮 等游戏实现后 解开注释使用
        this.clickStart.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.endStart.visible = false;
            _this.start();
        }, this);
        // this.start()
    };
    // 开始游戏
    Index.prototype.start = function () {
        //	键盘 计算器x y 坐标可传可不传 默认0,0点
        // 调用小键盘
        // this.addChild(new Keyset(this,0,0))
        // 计算器
        // this.addChild(new cacl(this,100,100));
        this.music_bj = this.bj.play(0, -1);
        this.playMusic("music_subject");
        this.nailao.visible = true;
        this.btnArr = this.clickLineBtn.$children.slice(0);
        // var points: string[] = ["0,0", "250,50", "45,100", "400,300"];
        // let drawLineTween: demo.DrawLineTwen = new demo.DrawLineTwen(points);
        // drawLineTween.start();
        // this.addChild(drawLineTween);
        //初始画线
        for (var i = 0; i < this.mouseLineArr.length; i++) {
            var mouseOne1 = this.clickLineBtn.getChildAt(this.mouseLineArr[i]);
            this.shape2.graphics.lineStyle(15, 0xF5D3A7);
            if (i == 0) {
                this.shape2.graphics.clear();
                this.shape2.graphics.lineStyle(15, 0xF5D3A7);
                this.shape2.graphics.moveTo(mouseOne1.x, mouseOne1.y);
            }
            else {
                this.shape2.graphics.lineTo(mouseOne1.x, mouseOne1.y);
            }
            this.shape2.graphics.endFill();
            this.shapeOne.addChild(this.shape2);
        }
        this.mouseAnimateOne();
    };
    //监听老鼠1
    Index.prototype.changeCountOne = function () {
        var _this = this;
        // this.speed
        if (this.countOne == 0)
            return "";
        var mouseOne1 = this.clickLineBtn.getChildAt(this.mouseLineArr[this.countOne]);
        var mouseOne2 = this.clickLineBtn.getChildAt(this.mouseLineArr[this.countOne - 1]);
        var directionX = mouseOne1.x - mouseOne2.x;
        var directionY = mouseOne1.y - mouseOne2.y;
        if (directionX > 0) {
            this.tickling.animation.play("you");
        }
        else if (directionX < 0) {
            this.tickling.animation.play("zuo");
        }
        else if (directionY > 0) {
            this.tickling.animation.play("xia");
        }
        else if (directionY < 0) {
            this.tickling.animation.play("shang");
        }
        var distanceOne = Math.sqrt(Math.pow((mouseOne2.x - mouseOne1.x), 2) + Math.pow((mouseOne2.y - mouseOne1.y), 2));
        var mouseTimer = (distanceOne / this.speed) * 1000;
        egret.Tween.get(this.mouseGroup).to({ x: 275 + mouseOne1.x, y: 390 + mouseOne1.y }, mouseTimer).call(function () {
            // console.log(this.countOne, this.mouseLineArr.length - 1)
            if (_this.countOne < _this.mouseLineArr.length - 1) {
                _this.countOne++;
            }
            else {
                if (_this.isFirstLineTo) {
                    var btn = _this.clickLineBtn.getChildAt(0);
                    btn.enabled = true;
                    _this.mouseGroup.visible = false;
                    _this.mouse1.visible = true;
                    _this.playTweenFun();
                }
                else if (_this.mouseDistanceOne == _this.mouseDistanceTwo) {
                    _this.resultAniumate = _this.animationFun(_this.resultSuccess);
                    _this.resultAniumate.animation.play("dui");
                    _this.mouseGroup.visible = false;
                    _this.mouseGroup2.visible = false;
                    _this.successTx = _this.animationFun(_this.taoxin);
                    _this.playMusic("success", -1);
                    _this.successTx.x = 150;
                    _this.successTx.y = 50;
                    _this.successTx.scaleX = 1.5;
                    _this.successTx.scaleY = 1.5;
                }
                else if (_this.mouseDistanceOne > _this.mouseDistanceTwo) {
                    _this.resultAniumate = _this.animationFun(_this.resultSuccess);
                    _this.resultAniumate.animation.play("cuo");
                    _this.playMusic("error", -1);
                    _this.nailao.visible = false;
                    _this.mouseGroup.visible = false;
                    _this.mouseGroup2.visible = false;
                }
                _this.tickling.animation.play("you");
            }
        });
    };
    // 监听老鼠2
    Index.prototype.changeCountTow = function () {
        var _this = this;
        // this.speed
        if (this.countTwo == 0)
            return "";
        var mouseTwo1 = this.clickLineBtn.getChildAt(this.clickBtnArr[this.countTwo]);
        var mouseTwo2 = this.clickLineBtn.getChildAt(this.clickBtnArr[this.countTwo - 1]);
        var directionX = mouseTwo1.x - mouseTwo2.x;
        var directionY = mouseTwo1.y - mouseTwo2.y;
        if (directionX > 0) {
            this.tickling2.animation.play("you");
        }
        else if (directionX < 0) {
            this.tickling2.animation.play("zuo");
        }
        else if (directionY > 0) {
            this.tickling2.animation.play("xia");
        }
        else if (directionY < 0) {
            this.tickling2.animation.play("shang");
        }
        var distanceTow = Math.sqrt(Math.pow((mouseTwo2.x - mouseTwo1.x), 2) + Math.pow((mouseTwo2.y - mouseTwo1.y), 2));
        var mouseTimer = (distanceTow / this.speed) * 1000;
        egret.Tween.get(this.mouseGroup2).to({ x: 275 + mouseTwo1.x, y: 390 + mouseTwo1.y }, mouseTimer).call(function () {
            if (_this.countTwo < _this.clickBtnArr.length - 1) {
                _this.countTwo++;
            }
            else {
                if (_this.mouseDistanceOne < _this.mouseDistanceTwo) {
                    _this.resultAniumate = _this.animationFun(_this.resultSuccess);
                    _this.resultAniumate.animation.play("cuo");
                    _this.playMusic("error", -1);
                    _this.nailao.visible = false;
                    _this.mouseGroup.visible = false;
                    _this.mouseGroup2.visible = false;
                }
                _this.tickling2.animation.play("you");
            }
        });
    };
    //点击连线
    Index.prototype.clickBtnLine = function (e) {
        if (e.target.name != "group") {
            this.playMusic("click_node");
            var minArr = [];
            var minArrLeftX = [];
            var minArrRightX = [];
            var minArrTopY = [];
            var minArrBottomY = [];
            var btnLine = this.clickLineBtn.$children;
            var index = btnLine.indexOf(e.target);
            // console.log(index)
            // if (index != 24) {
            this.clickBtnArr.push(index);
            // console.log(this.clickBtnArr)
            // } else {
            // var mouseArr = this.mouseLineArr.slice(0,-1)
            // console.log(this.clickBtnArr.join("")==mouseArr.join(""))
            // console.log(mouseArr)
            // console.log(this.mouseLineArr)
            // }
            //循环判断方向数组
            for (var i_1 = 0; i_1 < this.btnArr.length; i_1++) {
                this.btnArr[i_1].enabled = false;
                // if (this.clickBtnArr.indexOf(i) == -1) {
                //判断y轴相等的情况下x轴的坐标情况
                if (i_1 != index && this.btnArr[i_1].y == e.target.y) {
                    var x = e.target.x - this.btnArr[i_1].x;
                    if (x > 0) {
                        minArrLeftX.push(this.btnArr[i_1]);
                    }
                    else {
                        minArrRightX.push(this.btnArr[i_1]);
                    }
                    // console.log("-->",x,y)
                    // console.log(Math.sqrt(x*x + y*y))
                    minArr.push(this.btnArr[i_1]);
                    // this.btnArr[i].enabled=true
                }
                //判断x轴相等的情况下y轴的坐标情况
                if (i_1 != index && this.btnArr[i_1].x == e.target.x) {
                    var y = e.target.y - this.btnArr[i_1].y;
                    //判断其他点对于当前点的位置
                    if (y > 0) {
                        minArrTopY.push(this.btnArr[i_1]);
                    }
                    else {
                        minArrBottomY.push(this.btnArr[i_1]);
                    }
                    minArr.push(this.btnArr[i_1]);
                    // this.btnArr[i].enabled=true
                }
                // }
            }
            // console.log(minArr.some(item => item.x - e.target.x < 0))
            // console.log(minArr.some(item => item.x - e.target.x > 0))
            // console.log(minArr.some(item => item.y - e.target.y < 0))
            // console.log(minArr.some(item => item.y - e.target.y > 0))
            //判断那个方向是可以点击的
            var isLeft = minArr.some(function (item) { return item.x - e.target.x < 0; });
            var isRight = minArr.some(function (item) { return item.x - e.target.x > 0; });
            var isTop = minArr.some(function (item) { return item.y - e.target.y < 0; });
            var isBottom = minArr.some(function (item) { return item.y - e.target.y > 0; });
            //排序
            minArrLeftX.sort(function (a, b) {
                return b.x - a.x;
            });
            minArrRightX.sort(function (a, b) {
                return a.x - b.x;
            });
            minArrTopY.sort(function (a, b) {
                return b.y - a.y;
            });
            minArrBottomY.sort(function (a, b) {
                return a.y - b.y;
            });
            // console.log("左", minArrLeftX)
            // console.log("右", minArrRightX)
            // console.log("上", minArrTopY)
            // console.log("下", minArrBottomY)
            if (this.clickBtnArr.join("") == this.mouseLineArr.slice(0, -1).join("")) {
                isRight = false;
            }
            if (index != 24) {
                isLeft ? minArrLeftX[0].enabled = true : "";
                isRight ? minArrRightX[0].enabled = true : "";
                isTop ? minArrTopY[0].enabled = true : "";
                isBottom ? minArrBottomY[0].enabled = true : "";
            }
            else {
                this.submit.enabled = true;
            }
            for (var i = 0; i < this.clickBtnArr.length; i++) {
                this.btnArr[this.clickBtnArr[i]].enabled = false;
            }
            //画线
            var lineX = e.target.x;
            var lineY = e.target.y;
            this.shape.graphics.lineStyle(15, 0xff00ff);
            if (this.isFirstLineTo) {
                this.shape.graphics.clear();
                this.shape.graphics.lineStyle(15, 0xff00ff);
                this.shape.graphics.moveTo(lineX, lineY);
                this.isFirstLineTo = false;
            }
            this.shape.graphics.lineTo(lineX, lineY);
            this.shape.graphics.endFill();
            this.clickLineBtn.addChild(this.shape);
            e.target.enabled = false; //当前点击元素禁止点击
            this.playTweenFun();
        }
    };
    //监听数字函数
    Index.prototype.changNumber = function (e) {
        console.log(e.target.value);
        console.log(this.subNum.value);
    };
    //比赛
    Index.prototype.submitFun = function () {
        console.log("开始比赛");
        this.playMusic("pao", -1);
        this.submit.enabled = false;
        this.mouseDistanceOne = 0;
        this.mouseDistanceTwo = 0;
        this.countOne = 0;
        this.countTwo = 0;
        this.mouseGroup.visible = true;
        this.mouseGroup2.visible = true;
        this.mouse1.visible = false;
        this.mouse2.visible = false;
        //移除桃心动画
        if (this.successTx) {
            if (this.successTx.parent) {
                this.resultGroup.removeChild(this.successTx);
            }
        }
        for (var i = 1; i < this.mouseLineArr.length; i++) {
            var mouseOne1 = this.clickLineBtn.getChildAt(this.mouseLineArr[i]);
            var mouseOne2 = this.clickLineBtn.getChildAt(this.mouseLineArr[i - 1]);
            this.mouseDistanceOne += Math.sqrt(Math.pow((mouseOne2.x - mouseOne1.x), 2) + Math.pow((mouseOne2.y - mouseOne1.y), 2));
        }
        for (var i = 1; i < this.clickBtnArr.length; i++) {
            var mouseTwo1 = this.clickLineBtn.getChildAt(this.clickBtnArr[i]);
            var mouseTwo2 = this.clickLineBtn.getChildAt(this.clickBtnArr[i - 1]);
            this.mouseDistanceTwo += Math.sqrt(Math.pow((mouseTwo2.x - mouseTwo1.x), 2) + Math.pow((mouseTwo2.y - mouseTwo1.y), 2));
        }
        console.log("第一只", this.mouseDistanceOne);
        console.log("第二只", this.mouseDistanceTwo);
        this.mouseAnimateOne();
        this.mouseAnimateTow();
    };
    //动画一播放
    Index.prototype.mouseAnimateOne = function () {
        var _this = this;
        this.mouseGroup.visible = true;
        this.tickling = this.animationFun(this.direction);
        this.tickling.scaleX = 0.7;
        this.tickling.scaleY = 0.7;
        this.tickling.animation.play("you");
        egret.Tween.get(this.mouseGroup).to({ x: 275, y: 390 }, 0).call(function () {
            _this.countOne++;
        });
    };
    //动画二播放
    Index.prototype.mouseAnimateTow = function () {
        var _this = this;
        this.mouseGroup2.visible = true;
        this.tickling2 = this.animationFun(this.direction2);
        this.tickling2.scaleX = 0.7;
        this.tickling2.scaleY = 0.7;
        this.tickling2.animation.play("you");
        egret.Tween.get(this.mouseGroup2).to({ x: 275, y: 390 }, 0).call(function () {
            _this.countTwo++;
        });
    };
    Index.prototype.playTweenFun = function () {
        var btns = this.clickLineBtn.$children;
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].enabled) {
                egret.Tween.get(btns[i], { loop: true }).to({ scaleX: 2, scaleY: 2 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
            }
            else {
                btns[i].scaleX = 1;
                btns[i].scaleY = 1;
                egret.Tween.removeTweens(btns[i]);
            }
        }
    };
    //开始 暂停 背景音乐
    Index.prototype.musicFun = function () {
        if (this.isMusic) {
            this.music_bj.stop();
            this.isMusic = false;
            this.music.source = "music_close_png";
        }
        else {
            this.music_bj = this.bj.play(0, -1);
            this.isMusic = true;
            this.music.source = "music_png";
        }
    };
    //重置
    Index.prototype.resetFun = function () {
        window.location.reload();
        // this.tickling=this.animationFun(this.direction);
        // console.log(this.tickling.animation.play("shang"))
        // console.log(this.tickling.animation.play("zhuan", 1))
    };
    //调用移除上一个音乐 并播放本次音乐
    Index.prototype.playMusic = function (name, count) {
        if (count === void 0) { count = 1; }
        if (this.racTipMusic) {
            this.racTipMusic.stop();
        }
        this.racTipMusic = this[name].play(0, count);
        return this.racTipMusic;
    };
    // 动画
    Index.prototype.animationFun = function (dbObj) {
        var _this = this;
        //进来先移除动画在播放  避免动画叠加
        if (this[dbObj.take]) {
            if (this[dbObj.take].parent) {
                dbObj.dom ? this[dbObj.dom].removeChild(this[dbObj.take]) : this.removeChild(this[dbObj.take]);
            }
        }
        //添加文件
        var dragonbonesData = RES.getRes(dbObj.dragonbonesData);
        var textureData = RES.getRes(dbObj.textureData1);
        var texture = RES.getRes(dbObj.texture1);
        // 创建动画工厂
        var egretFactoryA = new dragonBones.EgretFactory();
        egretFactoryA.parseDragonBonesData(dragonbonesData);
        egretFactoryA.parseTextureAtlasData(textureData, texture);
        //创建动画
        var armature = egretFactoryA.buildArmatureDisplay(dbObj.name);
        //添加到舞台
        dbObj.dom ? this[dbObj.dom].addChild(armature) : this.addChild(armature);
        //播放动画
        armature.animation.gotoAndPlayByFrame(dbObj.animateName ? dbObj.animateName : dbObj.name, 1, dbObj.count);
        //监听帧
        armature.addEventListener(dragonBones.EventObject.FRAME_EVENT, function (e) {
            // console.log(e.frameLabel)
        }, this);
        //动画播放完成
        armature.addEventListener(dragonBones.EventObject.COMPLETE, function () {
            if (armature.parent) {
                dbObj.dom ? _this[dbObj.dom].removeChild(armature) : _this.removeChild(armature);
            }
        }, this);
        return armature;
    };
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index", ["eui.UIComponent", "egret.DisplayObject"]);
