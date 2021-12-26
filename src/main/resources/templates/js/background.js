function run() {
    //设置画布
    var canvas = $("#canvas");
    var cxt = canvas[0].getContext('2d');
    var w = canvas[0].width = $(document.body).outerWidth(true);
    var h = canvas[0].height = $(document.body).outerHeight(true);
    $(window).resize(function () {
        canvas[0].width = $(document.body).outerWidth(true);
        canvas[0].height = $(document.body).outerHeight(true);
        w = canvas[0].width;
        h = canvas[0].height;
    });
    //设置鼠标
    //x:鼠标横坐标，y:鼠标纵坐标，max:距离小于此数值线条开始靠近鼠标
    var mouse = {x:null,y:null,max:6000};
    window.onmousemove = function (e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    };
    window.onmouseout = function () {
        mouse.x = null;
        mouse.y = null;
    };

    //设置粒子
    //grains存储粒子的数组
    var grains = [];
    for (let i = 0; i < Math.floor(document.body.clientWidth*$("body").innerHeight()*0.0008); i++) {
        //x:粒子水平位置，y:粒子垂直位置，mx:粒子水平移动速度
        //my:粒子垂直移动速度,max:小于此值粒子连线
        var x = Math.random()*w;
        var y = Math.random()*h;
        var mx = Math.random()*(w*0.001)-Math.random();
        var my = Math.random()*(h*0.001)-Math.random();

        grains.push({x,y,mx,my,max:6000});
    }

    //描述粒子运动方式
    function moveGrain() {
        cxt.clearRect(0,0,w,h);
        //添加鼠标数组到粒子数组中
        var nGrains = [mouse].concat(grains);

        //移动粒子 遍历数组，改变粒子水平垂直坐标
        grains.forEach(function (grain) {
            grain.x += grain.mx;
            grain.y += grain.my;

            //到达边界反弹
            grain.mx *= (grain.x>w||grain.x<0)?-1:1;
            grain.my *= (grain.y>h||grain.y<0)?-1:1;

            //绘制粒子
            cxt.fillRect(grain.x,grain.y,1,1);

            //连线
            for (let i = 0; i < nGrains.length; i++) {
                var g = nGrains[i];
                if (g == grain) continue;

                //判断粒子距离
                var dx = grain.x-g.x;
                var dy = grain.y-g.y;
                var distance = dx*dx+dy*dy;
                if (distance < g.max){
                    //判断取出来的对象是不是鼠标
                    if(g == mouse && distance > g.max/2 && mouse.x+mouse.y !=0){
                        //改变粒子位置
                        grain.x -= dx*0.04;
                        grain.y -= dy*0.04;
                    }

                    //绘制线条
                    cxt.beginPath();
                    cxt.lineWidth = 0.3; //画笔宽度
                    cxt.strokeStyle = "aqua"; //画笔颜色
                    cxt.moveTo(grain.x,grain.y);
                    cxt.lineTo(g.x,g.y);
                    cxt.stroke();
                    cxt.closePath();
                }
            }

            //删除已操作的粒子
            nGrains.splice(nGrains.indexOf(grain),1);
        });
        //递归调用
        setTimeout(moveGrain,50);
    }
    //调用粒子运动方法
    moveGrain();
};
//避免动态生成页面，画布长宽不等于body
setTimeout(run,100);