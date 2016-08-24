function Node(element){
	this.element=element;
	this.next=null;
	this.previous=null;
}
// 单向链表
function LList(){
	this.head=new Node("head");
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	this.findLast=findLast;
	this.dispReverse=dispReverse;
}
// 查找节点
function find(item){
	var currNode=this.head;
	while(currNode.element!=item){
		currNode=currNode.next;
	}
	return currNode;
}
// 在某节点后插入新节点
function insert(newElement,item){
	var newNode=new Node(newElement);
	var current=this.find(item);
	newNode.next=current.next;
	newNode.previous=current;
	current.next=newNode;
}
// 显示所有节点
function display(){
	var currNode=this.head;
	while(!(currNode.next==null)){
		console.log(currNode.next.element);
		currNode=currNode.next;
	}
}
// 反序显示节点
function dispReverse(){
	var currNode=this.head;
	currNode=this.findLast();
	while(!(currNode.previous==null)){
		console.log(currNode.element);
		currNode=currNode.previous;
	}
}
// 查找最后一个节点
function findLast(){
	var currNode=this.head;
	while(!(currNode.next==null) ){
		currNode=currNode.next;
	}
	return currNode;
}
// 移除某节点
function remove(item){
	var currNode=this.find(item);
	if(!(currNode.next==null)){
		currNode.previous.next=currNode.next;
		currNode.next.previous=currNode.previous;
		currNode.next=null;
		currNode.previous=null;
	}
}

var cities=new LList();
cities.insert("Conway","head");
cities.insert("Russellville","Conway");
cities.insert("Carlisle","Russellville");
cities.insert("Alma","Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
cities.dispReverse();