// 二叉查找树


// 二叉树节点
function Node(data,left,right){
	this.data=data;
	this.left=left;
	this.right=right;
	this.show=show;
}

function show(){
	return this.data;
}

// 二叉树类
function BST(){
	this.root=null;
	this.insert=insert;
	this.inOrder=inOrder;
	this.preOrder=preOrder;
	this.postOrder=postOrder;
}

// 插入节点
function insert(data){
	var n=new Node(data,null,null);
	if(this.root==null){
		this.root=n;
	}else{
		var current=this.root;
		var parent;
		while(true){
			parent=current;
			if(data<current.data){
				current=current.left;
				if(current==null){
					parent.left=n;
					break;
				}
			}else{
				current=current.right;
				if(current==null){
					parent.right=n;
					break;
				}
			}
		}
	}
}

// 中序遍历
function inOrder(node){
	if(!(node==null)){
		inOrder(node.left);
		console.log(node.show()+" ");
		inOrder(node.right);
	}
}

// 先序遍历
function preOrder(node){
	if(!(node==null)){
		console.log(node.show()+" ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node){
	if(!(node==null)){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show()+" ");
	}
}


var nums=new BST();
nums.insert(5);
nums.insert(10);
nums.insert(8);
nums.insert(7);
nums.insert(21);
nums.insert(45);
nums.insert(14);
nums.insert(9);
inOrder(nums.root);
preOrder(nums.root);
postOrder(nums.root);