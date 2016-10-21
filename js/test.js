// function foo(){
// 	console.log(a);
// }

// function bar(){
// 	var a=3;
// 	foo();
// 	console.log(a);
// }

// var a=2;
// bar();
// 
// 
// var obj={
// 	id:"awesome",
// 	cool:function coolFn(){
// 		console.log(this.id);
// 	}
// };

// var id="not awesome";

// obj.cool();//awesome

// setTimeout(obj.cool,100);//not awesome

// var obj={
// 	count:0,
// 	cool:function coolFn(){
// 		var self=this;
// 		if(self.count<1){
// 			setTimeout(function timer(){
// 				self.count++;
// 				// console.log(this);
// 				console.log("awesome?");
// 			},100);
// 		}
// 	}
// };

// obj.cool();

// var obj={
// 	count:0,
// 	cool:function coolFn(){
// 		if(this.count<1){
// 			setTimeout(()=>{
// 				this.count++;
// 				console.log("awesome");
// 			},100);
// 		}
// 	}
// };

// obj.cool();


// var obj={
// 	count:0,
// 	cool:function coolFn(){
// 		if(this.count<1){
// 			setTimeout(function timer(){
// 				this.count++;
// 				console.log("more awesome");
// 			}.bind(this),100);
// 		}
// 	}
// };

// obj.cool();

function baz(){
	console.log("baz");
	bar();
}

function bar(){
	console.log("bar");
	foo();
}

function foo(){
	console.log("foo");
}

baz();


