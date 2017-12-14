/*
* 随机更换背景
* */
function changeBG() {
        var image = new Array();
        image[0] = "url(../img/contextbg1.jpg)";
        image[1] = "url(../img/contextbg2.jpg)";
        image[2] = "url(../img/contextbg3.jpg)";
        image[3] = "url(../img/contextbg4.jpg)";
        var rand = Math.floor(Math.random() * 4);
        document.getElementById("context").style.background = image[rand];
}