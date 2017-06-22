/*特卖倒计时*/
function countdown(){
		function displayTime() {
			var hourtime = "24:00:00";
			if(parseInt(leftTime) < 0) {
				document.getElementById('hour').innerHTML = "Over";
			}else{
				var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);
				var now = new Date();

				var leftTime = endTime.getTime() - now.getTime();
				var ms = parseInt(leftTime % 1000).toString();
				leftTime = parseInt(leftTime / 1000);
				var o = Math.floor(leftTime / 3600);
				var d = Math.floor(o / 24);
				var m = Math.floor(leftTime / 60 % 60);
				var s = leftTime % 60;

				/*elt.innerHTML =o + ":" + m + ":" + s + ":" + ms.charAt(0);*/
				function checkTime(i){
					if(i<10){
						i="0"+i;
					}
					return i;
				}
				o = checkTime(o);
				m = checkTime(m);
				s = checkTime(s);
				document.getElementById('hour').innerHTML=o;
				document.getElementById('minute').innerHTML=m;
				document.getElementById('second').innerHTML=s;
				document.getElementById('msecond').innerHTML=ms.charAt(0);
				setTimeout(displayTime, 100);
				}
			}
			displayTime();
		}
//轮播图
function banner(){
	var content = document.getElementById('banner-content');
    var list = document.getElementById('banner-list');
    var prev = document.getElementById('banner-prev');
    var next = document.getElementById('banner-next');
	var infos = document.getElementById('banner-info').getElementsByTagName('a');
 	var index = 1;
	
	for(var i=0;i<infos.length;i++){
		infos.onhover=function(){
			
			}
		}
	
	function animate(offset){
		var newleft = parseInt(list.style.left) + offset;
		list.style.left = newleft +"px";
		if(newleft > -955){
			list.style.left = -5730 +"px";
			}
		if(newleft < -5730){
			list.style.left = -955 +"px";
			}
		}
		
    var change = next.onclick=function(){
    	animate(-955);
    }
	prev.onclick=function(){
    	animate(955);
    }
    setInterval(change,4000);
	}
// 清除明日预告文本框value
function cleatInput(){
	var inputText = document.getElementsByClassName("input-text");
		for(var i=0;i<inputText.length;i++){
		inputText[i].onfocus=function(){
				this.value="";
				}
		inputText[i].onblur=function(){
			if(this.value == ""){
				this.value="请输入邮箱或手机号码";
				}
			}
		}
	}
window.onload=function(){
	countdown();//特卖倒计时
	banner();//轮播图
	cleatInput();// 清除明日预告文本框value

/*	var t = document.documentElement.scrollTop || document.body.scrollTop;
	alert(t);
	var height = document.body.scrollHeight;//当前页面的高度
	*/
}
window.onscroll = function(){
	function leftnav(){
		var leftnav = document.getElementById("leftnav");
		var t = document.documentElement.scrollTop || document.body.scrollTop; 
		if(t > 660){
			leftnav.style.position="fixed";
			leftnav.style.top="100px";
			if(window.innerWidth >= 1600){
				leftnav.style.left="80px";
				}else{
					leftnav.style.left="60px";
					}
			}else{
				leftnav.style.position="absolute";
				leftnav.style.top="750px";
			}
		}
		leftnav();

function leftnavChange(){
	var leftnav = document.getElementById("leftnav");
	var leftnavList = leftnav.getElementsByTagName("a");
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var womenTop = document.getElementById("index-women").offsetTop-100; 
	var shosebagTop = document.getElementById("index-shosebag").offsetTop-100;
	var menTop = document.getElementById("index-men").offsetTop-150;
	var sportTop = document.getElementById("index-sport").offsetTop-200;
	var jewelryTop = document.getElementById("index-jewelry").offsetTop-250;
	var beautyTop = document.getElementById("index-beauty").offsetTop-300;
	var babyTop = document.getElementById("index-baby").offsetTop-320;
	var homeTop = document.getElementById("index-home").offsetTop-350;
	var internationlTop = document.getElementById("index-internationl").offsetTop-380;
	var lifeTop = document.getElementById("index-life").offsetTop-400;
	var tomorrowTop = document.getElementById("index-tomorrow").offsetTop-420;
	/*alert(womenTop);*/
	for(var i = 0;i<leftnavList.length;i++){
		if(t <  womenTop){
			leftnavList[i].className="";
			leftnavList[0].className="left-nav-active";
		}else if(t < shosebagTop){
			leftnavList[i].className="";
			leftnavList[1].className="left-nav-active";
		}else if(t < menTop){
			leftnavList[i].className="";
			leftnavList[2].className="left-nav-active";
		}else if(t < sportTop){
			leftnavList[i].className="";
			leftnavList[3].className="left-nav-active";
		}else if(t < jewelryTop){
			leftnavList[i].className="";
			leftnavList[4].className="left-nav-active";
		}else if(t < beautyTop){
			leftnavList[i].className="";
			leftnavList[5].className="left-nav-active";
		}else if(t <  babyTop){
			leftnavList[i].className="";
			leftnavList[6].className="left-nav-active";
		}else if(t < homeTop){
			leftnavList[i].className="";
			leftnavList[7].className="left-nav-active";
		}else if(t < internationlTop){
			leftnavList[i].className="";
			leftnavList[8].className="left-nav-active";
		}else if(t < lifeTop){
			leftnavList[i].className="";
			leftnavList[9].className="left-nav-active";
		}else if(t < tomorrowTop){
			leftnavList[i].className="";
			leftnavList[10].className="left-nav-active";
		}else{
			leftnavList[i].className="";
			leftnavList[11].className="left-nav-active";
			}
		}
	}
	leftnavChange()
	}