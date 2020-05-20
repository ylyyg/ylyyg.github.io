function time(){
	var today=new Date();
	var year=today.getFullYear();	//年
	var month=today.getMonth()+1;	//月
	var date=today.getDate();	//日
	var day=today.getDay();	//星期
	
	var hh=today.getHours();	//小时
	var mm=today.getMinutes();	//分钟
	var ss=today.getSeconds();	//秒钟
	var d;
	if(hh>=12 && hh<24){
		d="PM";
	}else{
		d="AM";
	}
	if(hh>=12){
		hh-=12;
	}
	var flag;
	switch(day){
		case 1:
			flag="星期一 / 月曜日";
			break;
		case 2:
			flag="星期二 / 火曜日";
			break;
		case 3:
			flag="星期三 / 水曜日";
			break;
		case 4:
			flag="星期四 / 木曜日";
			break;
		case 5:
			flag="星期五 / 金曜日";
			break;
		case 6:
			flag="星期六 / 土曜日";
			break;
		case 0:
			flag="星期日 / 日曜日";
			break;
	}
	document.getElementById("chilk").innerHTML=year+"年"+month+"月"+date+"日"+"&nbsp;"+hh+":"+mm+":"+ss+"&nbsp;"+d+"&nbsp;"+flag;
}
setInterval("time()",1000);
