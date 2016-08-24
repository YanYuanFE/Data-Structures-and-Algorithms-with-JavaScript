//栈的实现
function Stack(){
	this.dataStore=[];
	this.top=0;
	this.push=push;
	this.pop=pop;
	this.peek=peek;
	this.clear=clear;
	this.length=length;
}
//压栈
function push(element){
	this.dataStore[this.top++]=element;
}
// 出栈
function pop(){
	return this.dataStore[--this.top];
}
//返回栈顶元素
function peek(){
	return this.dataStore[this.top-1];
}

function length(){
	return this.top;
}

function clear(){
	this.top=0;
}

var s=new Stack();
s.push("David");
s.push("Raymod");
s.push("Bryan");
console.log("length:"+s.length());
console.log(s.peek());
var popped=s.pop();
console.log("The popped element is:"+popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
// 数制转换
function mulBase(num,base){
	var s=new Stack();
	do{
		s.push(num % base);
		num=Math.floor(num/=base);
	}while(num>0);
	var converted="";
	while(s.length()>0){
		converted+=s.pop();
	}
	return converted;
}

var num=32;
var base=2;
var newNum=mulBase(num,base);
console.log(num+"converted to base"+base+"is "+newNum);
// 回文判断
function isPalindrome(word){
	var s=new Stack();
	for(var i=0;i<word.length;++i){
		s.push(word[i]);
	}
	var rword="";
	while(s.length()>0){
		rword+=s.pop();
	}
	if(word==rword){
		return true;
	}
	else{
		return false;
	}
}

var word="hello";
if(isPalindrome(word)){
	console.log(word+"is a palindrome");
}else{
	console.log(word+"is not a palindrome");
}
word="racecar";
if(isPalindrome(word)){
	console.log(word+"is a palindrome");
}else{
	console.log(word+"is not a palindrome");
}