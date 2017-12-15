/*
* 随机更换背景
* */
function changeBG() {
        var image = new Array();
        image[0] = "url(../img/contextbg1.jpg)";
        image[1] = "url(../img/contextbg2.jpg)";
        image[2] = "url(../img/contextbg3.jpg)";
        image[3] = "url(../img/contextbg4.jpg)";
        image[3] = "url(../img/contextbg5.jpg)";
        var rand = Math.floor(Math.random() * 5);
        document.getElementById("context").style.backgroundImage = image[rand];
}
/*
* 宣言选择点击
* 行内点击事件，注意获取元素的局部性，要定义为全局获取
* */
var select = document.getElementById("seclg");
function selectLG() {
    if (select.style.display == "none"){
        select.style.display = "block";
    }else {
        select.style.display = "none";
        select.style.zIndex = 0;
    }
}

function selectArea() {
    select.style.display = "none";
    select.style.zIndex = 0;
}



