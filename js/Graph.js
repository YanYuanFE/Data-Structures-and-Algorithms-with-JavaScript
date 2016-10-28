// 顶点
function Vertex(label,wasVisited){
	this.label=label;
	this.wasVisited=wasVisited;
}
// 图类
function Graph(v){
	this.vertices=v;//顶点
	this.edges=0;
	this.adj=[];//存储相邻顶点
	this.addEdge=addEdge;
	this.showGraph=showGraph;
	this.toString=toString;
	this.marked=[];//已访问过
	this.dfs=dfs;
	this.bfs=bfs;
	for(var i=0;i<this.vertices;i++){
		this.adj[i]=[];
		this.marked[i]=false;
		// this.adj[i].push("");
	}

}
// 添加边
function addEdge(v,w){
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}
// 显示图
function showGraph(){
	for(var i=0;i<this.vertices;++i){
		
		for(var j=0;j<this.vertices;++j){
			if(this.adj[i][j]!=undefined){
				console.log(i+"->"+this.adj[i][j]+" ");
			}
		}
	}
}
// 深度优先搜索算法
function dfs(v){
	this.marked[v]=true;
	if(this.adj[v]!=undefined)
		console.log("Visited vertex:"+v);
	var self=this;
	this.adj[v].forEach(function(w){
		if(!self.marked[w]){
			self.dfs(w);
		}
	});
	
}

//广度优先搜索算法
function bfs(s){
	var queue=[];
	this.marked[s]=true;
	queue.push(s);
	while(queue.length>0){
		var v=queue.shift();
		if(this.adj[v]!=undefined){
			console.log("Visited vertex:"+v);
		}
		var self=this;
		this.adj[v].forEach(function(w){
			if(!self.marked[w]){
				self.marked[w]=true;
				queue.push(w);
			}
		});
	}
}

var g=new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
// g.dfs(0);
g.bfs(0);