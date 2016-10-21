// 字典
function Dictionary(){
	this.datastore=new Array();
	this.add=add;
	this.find=find;
	this.remove=remove;
	this.showAll=showAll;
	this.count=count;
	this.clear=clear;
}
// 添加键值对
function add(key,value){
	this.datastore[key]=value;
}
// 查找键
function find(key){
	return this.datastore[key];
}
// 移除键
function remove(key){
	delete this.datastore[key];
}
// 显示所有数据
function showAll(){
	Object.keys(this.datastore).forEach(function(key){
		// var key in Object.keys(this.datastore)
		console.log(key+"->"+this.datastore[key]);
	},this)
}

// function showAll(){
// 	var datakeys=Array.prototype.slice.call(Object.keys(this.datastore));
// 	for(var key in datakeys){
// 		console.log(datakeys[key]+"->"+this.datastore[datakeys[key]]);
// 	}
// }
// 计算元素个数
function count(){
	var n=0;
	Object.keys(this.datastore).forEach(function(key){
		++n;
	},this);
	return n;
}
// 清空字典
function clear(){
	Object.keys(this.datastore).forEach(function(key){
		delete this.datastore[key];
	},this);
}
var pbook=new Dictionary();
pbook.add("Mike","123");
pbook.add("David","345");
pbook.add("Cynthia","456");
console.log("David's extension:"+pbook.find("David"));
pbook.remove("David");
pbook.showAll();
console.log(pbook.count());
pbook.clear();
console.log(pbook.count());

