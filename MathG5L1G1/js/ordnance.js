/**
 * Created by liudong9 on 2018/9/6.
 */
//
var Ordnance = {
    //定义变量
    mode:'self', //模式 默认单人
    diff:'elementary', //难度 默认初级
    time:7,         //难度
    timer:'',       //定时器1
    timerDb:'',     // 定时器2
    life:3,         //生命 默认3条
    lifeDb:3,       //双人
    game:false,     //游戏
    subjectCount:1, //单人
    subjectDbCount:1, //双人
    resultCount:0,      //答对题目数
    resultDbCount:0,         //
    result:false,   //结果
    startTimer:0,
    endTimer:0,
    endTimerDb:0,
    bjMusic:'',
    paoDan:'',
    paoDan2:'',
    anNiu:'',
    anNiu2:'',
    baoZha:'',
    baoZha2:'',
    douDong:'',
    douDong2:'',
    qingZhu:'',

    start(){
        var thiss=this;
        thiss.bjMusic = document.getElementById('bjMusic');
        thiss.paoDan = document.getElementById('dapao');
        thiss.paoDan2 = document.getElementById('dapao2');
        thiss.anNiu = document.getElementById('anniu');
        thiss.anNiu2 = document.getElementById('anniu2');
        thiss.baoZha = document.getElementById('baozha');
        thiss.baoZha2 = document.getElementById('baozha2');
        thiss.douDong = document.getElementById('doudong');
        thiss.douDong2 = document.getElementById('doudong2');
        thiss.qingZhu = document.getElementById('qingzhu');

        $('.mode').on('click',function(){
            thiss.changeType($(this))
        });
        $('.mode .change').on('click','img',function(){
            var mode =$(this).attr('data-mode');
            thiss.mode=mode;
            console.log(thiss.mode);
            thiss.gameState();
        });
        $('.diff .change').on('click','img',function(){
            var diff =$(this).attr('data-diff');
            thiss.diff=diff;
            thiss.gameState()
        });
        $('.diff').on('click',function(){
            thiss.changeType($(this))
        });
        ////分数
        //$('.result-title').on('click',function(){
        //    var state=$(this).next().attr('data-switch');
        //    if(state=='show'){
        //        $(this).next('.fraction').css('height','561px');
        //        $(this).next().attr('data-switch','hide');
        //    }else{
        //        $(this).next('.fraction').css('height','0px');
        //        $(this).next().attr('data-switch','show');
        //    }
        //
        //});
        //
        $('.reset img').on('click',function(){
            thiss.game=false;
            thiss.result=false;
            //thiss.gameState();
            window.location.reload();
            //thiss.bjMusic.pause()

        })
        $('.startBtn img').on('click',function(){
            //音乐文件
            if(thiss.bjMusic.paused){
                thiss.bjMusic.play();
                thiss.bjMusic.volume=0.3;
            }
            thiss.game=true;
            thiss.result=false;
            thiss.gameState();
        })

        if(!this.IsPC()) {
            $('.ordnance-bj').css({'transform':'rotate(90deg) translate(0,-100%)'});
            $('#ordnance-bj').css({'display':'block'});
        }else{
            $('.ordnance-bj').css({'transform':''});
            $('#ordnance-bj').css({'display':'none'});
        }
    },
    //模式点击处理函数
    changeType(self){
        var state =self.attr('data-switch');
        var translateX = 130;
        var imgList = self.children('.change').find('img');
        if(state=='false') {
            imgList.map((item)=> {
                let translateY = ((item - 1) * 120);
                switch (item) {
                    case 0:
                        $(imgList[item]).css('transform', `translate(${translateX}px,${translateY}px)`);
                        break;
                    case 1:
                        $(imgList[item]).css('transform', `translate(${translateX + 30}px,${translateY}px)`);
                        break;
                    case 2:
                        $(imgList[item]).css('transform', `translate(${translateX}px,${translateY}px)`);
                        break;
                }
            })
            self.attr('data-switch','true')
        }else{
            imgList.css('transform','translate(0px,0px)');
            self.attr('data-switch','false')
        }
    },
    IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
    //启动游戏
    gameState(){

        clearInterval(this.timer) //清除定时器
        clearInterval(this.timerDb) //清除定时器
        this.startTimer=new Date().getTime();
        if(this.game){
            $('.start').css('display','none');
            $(`.life img`).css('opacity',1);
            //$(`.life-double img`).css('opacity',1);
            this.subjectCount=1;
            this.subjectDbCount=1;
            this.life=3;
            this.lifeDb=3;
            this.resultCount=0;
            this.resultDbCount=0;
            if(this.mode=='self'){
                $('.ordnance-bj').css('backgroundImage','url(img/bg1.png)');
                $('#ship').attr('src','./img/ship.png');
                $('.is-self').css('display','flex');
                $('.is-double').css('display','none');
                this.gameAnimatioDeoxidize();
                this.gameSelf()
            }else{
                $('.ordnance-bj').css('backgroundImage','url(img/bg2.png)');
                $('#ship').attr('src','./img/ship-double.png');
                $('.is-self').css('display','none');
                $('.is-double').css('display','flex');
                this.gameAnimatioDeoxidize();
                this.gameDouble()
            }
        }else{
            if(this.result){
                $('.start').css('display','flex');
                $('.startBtn').css('display','none');
                $('.faceplate').css('display','block');
            }else{
                $('.start').css('display','flex');
                $('.startBtn').css('display','block');
                $('.faceplate').css('display','none');
            }

        }

    },
    gameSelf(){
        this.gameDiff();
        this.gameSubjectSelf();
        this.countDown('self');
        this.clickKey()
    },
    gameDouble(){
        this.gameDiff();
        this.gameSubjectDouble();
        this.countDown('left');
        this.countDown('right');
        this.clickKey(); //点击答案
    },
    //游戏难度
    gameDiff(){
        switch(this.diff){
            case 'elementary':
                this.time =7;
                break;
            case 'intermediate':
                this.time=5;
                break;
            case 'senior':
                this.time =3;
                break;
        }
    },
    //游戏动画
    gameSubjectSelf(){
        $('.self-key').addClass('ordnance-opacity');
        $('.subject-self1').addClass('subjectAnimation');

    },
    gameSubjectDouble(){
        $('.double-one').addClass('ordnance-opacity');
        $('.double-tow').addClass('ordnance-opacity');
        $('.subject-double1').addClass('subjectAnimation');
        $('.subject-double2').addClass('subjectAnimation');

    },
    //动画还原
    gameAnimatioDeoxidize(){
        $(".subject-self1,.subject-double1,.subject-double2").each(function () {
            $(this)[0].addEventListener("animationend", function () {
                $(this).removeClass('subjectAnimation').css('marginTop','25%');
            });
        });
        //$(".subject-self1,.subject-double1,.subject-double2").each(function () {
        //    $(this)[0].addEventListener("animationend", function () {
        //        $(this).removeClass('subjectError');
        //    });
        //});
        $(".self-key,.double-one,.double-tow").each(function () {
            $(this)[0].addEventListener("animationend", function () {
                $(this).removeClass('ordnance-opacity');
            });
        });

        $(".quick-fry").each(function () {
            $(this)[0].addEventListener("animationend", function () {
                $(this).removeClass('quick-fry-animate');
            });
        });
        //回答错误
        $(".ship").each(function () {
            $(this)[0].addEventListener("animationend", function () {
                $(this).removeClass('shipError');
            });
        });
        //回答错误
        $(".quick-fry-self ,.quick-fry-1,.quick-fry-2").each(function () {
            $(this)[0].addEventListener("animationend", function () {
                $(this).removeClass('ordnanceQuickFry');
            });
        });
    },

    //倒计时
    countDown(type){
        console.log('进入',type);
        if(type == 'self' || type == 'left'){
            let time = this.time;
            this.timer = setInterval(()=>{
                if(time>=0){
                    $('.result span').html('00:0'+time);
                    $('.result-double span:first-child').html('00:0'+time);
                    time-=1;
                }else{
                    this.isGameOver(type)
                }
            },1000);
        }else if(type=='right'){
            let timeDb =this.time;
            this.timerDb = setInterval(()=>{
                if(timeDb>=0){
                    $('.result-double span:last-child').html('00:0'+timeDb);
                    timeDb-=1;
                }else{
                    this.isGameOver(type)
                }
            },1000);
        }
    }
    ,

    clickKey(){
        let thiss= this;
        if(this.mode=='self'){
            console.log('单人模式');
            $('.self-key').unbind('click').on('click','img',function(){
                thiss.musicPlayed(thiss.anNiu);
                var url=$(this).attr('src').split('-');
                var key=url[url.length-1].substr(0,1);
                var result=thiss.judgeKey();
                if(key==result){
                    //alert('回答正确');
                    thiss.resultCount+=1;
                    thiss.clickKeyAnimation('self',thiss.subjectCount,'.ordnance-self1','.subject-self1','.self-key','self','.quick-fry-self')
                }else{
                    thiss.isGameOver('self')
                }

            })
        }else{
            console.log('双人模式');
            $('.double-one').unbind('click').on('click','img',function(){
                thiss.musicPlayed(thiss.anNiu);
                var url=$(this).attr('src').split('-');
                var key=url[url.length-1].substr(0,1);
                var result=thiss.judgeDbKey();
                if(key==result){
                    //alert('回答正确');
                    thiss.resultCount+=1;
                    thiss.clickKeyAnimation('double',thiss.subjectCount,'.ordnance-double1','.subject-double1','.double-one','left','.quick-fry-1')
                }else{
                    thiss.isGameOver('left');
                }

            });
            $('.double-tow').unbind('click').on('click','img',function(){
                thiss.musicPlayed(thiss.anNiu2);
                var url=$(this).attr('src').split('-');
                var key=url[url.length-1].substr(0,1);
                var result=thiss.judgeKey();

                if(key==result){
                    //alert('回答正确');
                    thiss.resultDbCount+=1;
                    thiss.clickKeyAnimation('double2',thiss.subjectDbCount,'.ordnance-double2','.subject-double2','.double-tow','right','.quick-fry-2')
                }else{
                    thiss.isGameOver('right');
                }

            })
        }

    },
    clickKeyAnimation(mode,subjectCount,ordnanceClass,subjectClass,keyClass,type,quickFryClass){
        if(type=='self' || type=='left'){
            clearInterval(this.timer);
            subjectCount=++this.subjectCount;
            this.musicPlayed(this.paoDan);

        }else{
            clearInterval(this.timerDb);
            subjectCount=++this.subjectDbCount;
            this.musicPlayed(this.paoDan2);
        }
        var subUrl = `url(./img/${mode}/subject${subjectCount}.png)`;
        var keyurl =[
            `./img/${mode}/key-${subjectCount}-a.png`,
            `./img/${mode}/key-${subjectCount}-b.png`,
            `./img/${mode}/key-${subjectCount}-c.png`
        ];
        $(ordnanceClass+' .quick-fry').addClass('quick-fry-animate');
        if(subjectCount>=11){
            setTimeout(()=>{
                $(`${quickFryClass}`).addClass('ordnanceQuickFry');
                $(subjectClass).css('opacity',0)
            },500);
            setTimeout(()=>{
                $(subjectClass).css('opacity',1)
                //alert('恭喜通关');
                this.endTimer = new Date().getTime();
                let totalTime = parseInt((this.endTimer-this.startTimer)/1000);
                this.gameResult(type,totalTime);
                if((this.subjectCount>=11 && this.subjectDbCount>=11) || type=='self'){
                    $('.is-over1').css('right','100%');
                    $('.is-over2').css('left','100%');
                    this.result=true;
                    this.game=false;
                    this.gameState();
                }else if(type=='left'){
                    $('.is-over1').css('right','50%');
                }else if(type=='right'){
                    $('.is-over2').css('left','50%');
                }
            },1000)
        }else{
            setTimeout(()=>{
                $(`${quickFryClass}`).addClass('ordnanceQuickFry');
                $(subjectClass).css('opacity',0);
                if(type='right'){
                    this.musicPlayed(this.baoZha2);
                }else{
                    this.musicPlayed(this.baoZha);
                }
            },500);
            setTimeout(()=>{

                $(subjectClass).css('opacity',1)
                $(subjectClass).css({'background':subUrl,'marginTop':'-10%'}).addClass('subjectAnimation');
                $(keyClass+' img').map((item)=>{
                    $($(keyClass+' img')[item]).attr('src',keyurl[item]);
                });
                $(keyClass).addClass('ordnance-opacity');
            },1000,this.countDown(type))
        }


    },

    clickKeyError(mode,subjectCount,subjectClass,keyClass,lifeClass,type){
        if(type=='self' || type=='left'){
            clearInterval(this.timer);
            subjectCount=++this.subjectCount;
            this.musicPlayed(this.douDong);
        }else{
            clearInterval(this.timerDb);
            subjectCount=++this.subjectDbCount;
            this.musicPlayed(this.douDong2);
        }
        var subUrl = `url(./img/${mode}/subject${subjectCount}.png)`;
        var keyurl =[
            `./img/${mode}/key-${subjectCount}-a.png`,
            `./img/${mode}/key-${subjectCount}-b.png`,
            `./img/${mode}/key-${subjectCount}-c.png`
        ];
        $('.ship').addClass('shipError');

        //if(lifeClass=='.life-double2'){
        //    $(`${lifeClass} img:nth-child(${this.lifeDb+1})`).css('opacity',0);
        //}else{
            $(`${lifeClass} img:nth-child(${this.life+1})`).css('opacity',0);
        //}
        if(subjectCount>=11){
            setTimeout(()=>{
                //alert('恭喜通关');
                this.endTimer = new Date().getTime();
                let totalTime = parseInt((this.endTimer-this.startTimer)/1000);
                this.gameResult(type,totalTime);
               if((this.subjectCount>=11 && this.subjectDbCount>=11) || type=='self'){
                   $('.is-over1').css('right','100%');
                   $('.is-over2').css('left','100%');
                    this.result=true;
                    this.game=false;
                    this.gameState();
                }else if(type=='left'){
                    $('.is-over1').css('right','50%');
                }else if(type=='right'){
                   $('.is-over2').css('left','50%');
                }
            },500)
        }else {
            setTimeout(()=> {
                $(subjectClass).css({'background': subUrl, 'marginTop': '-10%'}).addClass('subjectAnimation');
                $(keyClass + ' img').map((item)=> {
                    $($(keyClass + ' img')[item]).attr('src', keyurl[item]);
                });
                $(keyClass).addClass('ordnance-opacity');
            }, 500, this.countDown(type))
        }
    },

    judgeKey(){
        switch(this.subjectCount){
            case 1:
                return 'b';
                break;
            case 2:
                return 'c';
                break;
            case 3:
                return 'c';
                break;
            case 4:
                return 'b';
                break;
            case 5:
                return 'b';
                break;
            case 6:
                return 'a';
                break;
            case 7:
                return 'a';
                break;
            case 8:
                return 'b';
                break;
            case 9:
                return 'c';
                break;
            case 10:
                return 'a';
                break;
        }
    },
    judgeDbKey(){
        switch(this.subjectCount){
            case 1:
                return 'c';
                break;
            case 2:
                return 'b';
                break;
            case 3:
                return 'b';
                break;
            case 4:
                return 'b';
                break;
            case 5:
                return 'b';
                break;
            case 6:
                return 'a';
                break;
            case 7:
                return 'a';
                break;
            case 8:
                return 'c';
                break;
            case 9:
                return 'a';
                break;
            case 10:
                return 'c';
                break;
        }
    },

    isGameOver(doubleType){
        //console.log(this.life);
        //console.log(this.lifeDb);

        if(doubleType=='left'){  //双人左面
            //if(this.life>0){
            //    this.life-=1;
                this.clickKeyError('double',this.subjectCount,'.subject-double1','.double-one','.life-double1',doubleType)
            //}else{
            //    alert('游戏结束left');
            //    this.endTimer = new Date().getTime();
            //    let totalTime = parseInt((this.endTimer-this.startTimer)/1000);
            //    console.log('双人A:'+totalTime+'秒');
            //    clearInterval(this.timer);
            //    if(this.life==0 && this.lifeDb==0){
            //        $('.is-over2').css('left','100%');
            //        $('.is-over1').css('right','100%');
            //        this.game=false;
            //        this.gameState();
            //    }else{
            //        $('.is-over1').css('right','50%');
            //    }
            //
            //}
        }else if(doubleType=='right'){  //双人右面
            //if(this.lifeDb>0){
            //    this.lifeDb-=1;
                this.clickKeyError('double2',this.subjectDbCount,'.subject-double2','.double-tow','.life-double2',doubleType);
            //}else{
            //    alert('游戏结束right');
            //    this.endTimer = new Date().getTime();
            //    let totalTime = parseInt((this.endTimer-this.startTimer)/1000);
            //    console.log('双人B:'+totalTime+'秒');
            //    clearInterval(this.timerDb);
            //    if(this.life==0 && this.lifeDb==0){
            //        $('.is-over2').css('left','100%');
            //        $('.is-over1').css('right','100%');
            //        this.game=false;
            //        this.gameState();
            //    }else{
            //        $('.is-over2').css('left','50%');
            //    }
            //
            //}
        }else{                  //单人
            if(this.life>1){
                this.life-=1;
                this.clickKeyError('self',this.subjectCount,'.subject-self1','.self-key','.life',doubleType)
            }else{
                $(`.life img:nth-child(${this.life})`).css('opacity',0);
                //alert('游戏结束');
                this.endTimer = new Date().getTime();
                let totalTime = parseInt((this.endTimer-this.startTimer)/1000);
                clearInterval(this.timer);
                this.gameResult(doubleType,totalTime);
                this.result=true;
                this.game=false;
                this.gameState()
            }
        }
    },
    gameResult(type,time){
        var leftTime=0;
        var rightTime=0;
        //time=time>=10?time:'0'+time;
        //this.resultCount=this.resultCount>=10?this.resultCount:'0'+this.resultCount;
        //this.resultDbCount=this.resultDbCount>=10?this.resultDbCount:'0'+this.resultDbCount;
        console.log(time);
        this.musicPlayed(this.qingZhu);
        if(type=='self'){
            $('.is-self .subjectCount').html(this.resultCount);
            $('.is-self .subjectTime').html(time);
        }else if(type=='left'){
            leftTime=time;
            $('.is-double .subjectCount1').html(this.resultCount);
            $('.is-double .subjectTime1').html(time);
        }else if(type=='right'){
            rightTime=time;
            $('.is-double .subjectCount2').html(this.resultDbCount);
            $('.is-double .subjectTime2').html(time);
        }
        if(this.resultCount>this.resultDbCount){
            $('.is-double .subjectResult').html('蓝');
        }else if(this.resultCount==this.resultDbCount){
            if(leftTime>rightTime){
                $('.is-double .subjectResult').html('蓝');
            }else if(leftTime==rightTime){
                $('.is-double .subjectResult').html('平局');
            }else{
                $('.is-double .subjectResult').html('红');
            }
        }else{
            $('.is-double .subjectResult').html('红');
        }
    },
    musicPlayed(item){
        if(item.paused){
            item.play()
        }else{
            item.pause();
            item.currentTime = 0.0;
        }
    }
};
Ordnance.start();













