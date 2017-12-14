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
/*function changeColor() {
    document.getElementById("text-nav").style.color = "#4F82F9";
}
function changeColor2() {
    document.getElementById("text-nav2").style.color = "#4F82F9";
}*/


