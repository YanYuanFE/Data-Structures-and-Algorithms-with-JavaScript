function Node(element){
	this.element=element;
	this.next=null;
}
// 单向链表
function LList(){
	this.head=new Node("head");
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
	this.findPrevious=findPrevious;
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
// 查找某节点之前节点
function findPrevious(item){
	var currNode=this.head;
	while(!(currNode.next==null) && (currNode.next.element!=item)){
		currNode=currNode.next;
	}
	return currNode;
}
// 移除某节点
function remove(item){
	var prevNode=this.findPrevious(item);
	if(!(prevNode.next==null)){
		prevNode.next=prevNode.next.next;
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