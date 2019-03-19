var timer = null,
    index = 0,
    pics = document.getElementsByTagName("li");

function slideImg() {
    var banner = document.querySelector('.banner');
    banner.onmouseover = function(){
        stopAutoPlay();
    }
    banner.onmouseout = function(){
        startAutoPlay();
    }
    banner.onmouseout();
}
//开始播放轮播图
function startAutoPlay(){
    timer = setInterval(function(){
        index++;
        if(index>3){
            index = 0;
        }
        changeImg();
    },1500);
}
//暂停播放
function stopAutoPlay(){
    if (timer) {
        clearInterval(timer);
    }
}
//改变轮播图
function changeImg(){
    for(var i=0;i<pics.length;i++){
        pics[i].style.display = "none";
    }
    pics[index].style.display = "block";
}
slideImg();
