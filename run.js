
let abstractOut = "";
let monyOut = "";
let incomeOut = "";
var eachNum = 3;
var fs = require("fs");

//摘要
var writeAbstract = function(){
	fs.exists('./摘要.txt', function(e){
		if(e){
			fs.readFile('./摘要.txt', 'utf8', function(err, data){
			    // var s = data.
			    let string = data.toString();
				string=string.replace(/\r\n/g,"<br>");
				let arr = string.split('<br>');
				// console.log(data)
				arr.forEach(function(v){
					for(let i = 0;i<eachNum;i++){
						abstractOut+=v+"\n";
					};
				});
			    // console.log(abstractOut);
				fs.writeFile('./out-摘要.txt', abstractOut, function (error) {
				  if (error) {
				    console.log('摘要写入失败')
				  } else {
				    console.log('摘要写入成功了')
				  }
				});
			});
		}
	});
};

//应收账款
var writeReceivable = function(){
	fs.exists('./应收.txt', function(e){
		if(e){
			fs.readFile('./应收.txt', 'utf8', function(err, data){
			    // var s = data.
			    let string = data.toString();
				string=string.replace(/\r\n/g,"<br>");
				let arr = string.split('<br>');
				arr.forEach(function(v){
					//for(let i = 0;i<eachNum;i++){
						monyOut+=v+"\n"+"\n"+"\n";
					//};
				});
			    // console.log(abstractOut);
				fs.writeFile('./out-应收.txt', monyOut, function (error) {
				  if (error) {
				    console.log('应收写入失败')
				  } else {
				    console.log('应收写入成功了')
				  }
				});
			});
		}
	});
};

//收入
var writeIncome = function(){
	fs.exists('./收入.txt', function(e){
		if(e){
			fs.readFile('./收入.txt', 'utf8', function(err, data){
			    // var s = data.
			    let string = data.toString();
			    string=string.replace(/\t/g," ");
			    string=string.replace(/\n/g,"<br>");  
				string=string.replace(/\r\n/g,"<br>");
				
				let arr = string.split('<br>');
				// console.log(arr);
				arr.forEach(function(v){
					let iArr = v.split(" ");
					incomeOut+="\n"+"\n"+iArr[0]+"\n"+iArr[1];
				});
			    // console.log(abstractOut);
				fs.writeFile('./out-收入.txt', incomeOut, function (error) {
				  if (error) {
				    console.log('收入写入失败')
				  } else {
				    console.log('收入写入成功了')
				  }
				});
			});
		}
	});
};

writeAbstract();
writeReceivable();
writeIncome();