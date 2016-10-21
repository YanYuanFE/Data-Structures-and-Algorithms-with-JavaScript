function HashTable(){
	this.table=new Array(137);
	this.simpleHash=simpleHash;
	this.betterHash=betterHash;
	this.showDistro=showDistro;
	this.put=put;
	this.get=get;
	this.buildChains=buildChains;
}

function buildChains(){
	for(var i=0;i<this.table.length;++i){
		this.table[i]=new Array();
	}
}
function simpleHash(data){
	var total=0;
	for(var i=0;i<data.length;++i){
		total+=data.charCodeAt(i);//charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
	}
	console.log("Hash value:"+data+"->"+total);
	return total % this.table.length;
}

function betterHash(string){
	const H=37;
	var total=0;
	for(var i=0;i<string.length;++i){
		total+=H*total+string.charCodeAt(i);
	}
	total=total % this.table.length;
	if(total<0){
		total+=this.table.length-1;
	}
	console.log("Hash value:"+string+"->"+total);
	return parseInt(total);
}
//存储数据
function put(key,data){
	var pos=this.betterHash(key);
	var index=0;
	if(this.table[pos][index]==undefined){
		this.table[pos][index+1]=data;
	}
	
	else{
		while(this.table[pos][index]!=undefined){
			++index;
		}
		this.table[pos][index+1]=data
	}
	
}
// 读取散列表数据
function get(key){
	return this.table[this.betterHash(key)];
}
function showDistro(){
	var n=0;
	for(var i=0;i<this.table.length;++i){
		if(this.table[i][0]!=undefined){
			console.log(i+":"+this.table[i]);
		}
	}
}

function getRandomInt(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}

function getStuData(arr){
	for(var i=0;i<arr.length;i++){
		var num="";
		for(var j=1;j<=9;j++){
			num+=Math.floor(Math.random()*10);
		}
		num+=getRandomInt(50,100);
		arr[i]=num;
	}
}
var someNames=["David","jennifer","Donnie","Raymond","Cynthia","Mike","Clayton","Danny","Jonathan"];
var hTable=new HashTable();
hTable.buildChains();
for(var i=0;i<someNames.length;++i){
	hTable.put(someNames[i],someNames[i]);
}
hTable.showDistro();

// var numStudents=10;
// var arrSize=97;
// var idLen=9;
// var students=new Array(numStudents);
// getStuData(students);
// console.log("Student data: \n");
// for(var i=0;i<students.length;++i){
// 	console.log(students[i].substring(0,8)+" "+students[i].substring(9));
// }
// console.log("\n\nData distribution:\n");
// var hTable=new HashTable();
// for(var i=0;i<students.length;++i){
// 	hTable.put(students[i]);
// }
// hTable.showDistro();

