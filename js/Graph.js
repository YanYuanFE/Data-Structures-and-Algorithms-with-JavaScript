// 顶点
function Vertex(label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
}
// 图类
function Graph(v) {
    this.vertices = v; //顶点
    this.vertextList=[];
    this.edges = 0;
    this.adj = []; //存储相邻顶点
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.toString = toString;
    this.marked = []; //已访问过
    this.dfs = dfs;
    this.bfs = bfs;
    this.edgTo = []; //一个顶点到下一个顶点的所有边
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.topSort=topSort;
    this.topSortHelper=topSortHelper;
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.marked[i] = false;
        // this.adj[i].push("");
    }

}
// 添加边
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
// 显示图
function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {

        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                console.log(i + "->" + this.adj[i][j] + " ");
            }
        }
    }
}
// 深度优先搜索算法
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined)
        console.log("Visited vertex:" + v);
    var self = this;
    this.adj[v].forEach(function(w) {
        if (!self.marked[w]) {
            self.dfs(w);
        }
    });

}

//广度优先搜索算法
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (this.adj[v] != undefined) {
            console.log("Visited vertex:" + v);
        }
        var self = this;
        this.adj[v].forEach(function(w) {
            if (!self.marked[w]) {
                self.edgTo[w] = v;
                self.marked[w] = true;
                queue.push(w);
            }
        });
    }
}
//返回与指定顶点有共同边的所有顶点的栈
function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    console.log(visited);
    for (var i = 0; i <= stack.length; i++) {

        if (visited[i] == false) {
        	
            this.topSortHelper(i, visited, stack);
        }
    }
    console.log(stack);
    for (var i = 0; i < stack.length; i++) {

        if (stack[i] != undefined && stack[i] != false) {
            console.log(this.vertextList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    var self = this;
    this.adj[v].forEach(function(w) {
        if (!visited[w]) {

            self.topSortHelper(w,visited,stack);
        }
    });
    stack.push(v);
    console.log(stack);
}

var g = new Graph(5);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
// g.dfs(0);
g.bfs(0);
// 
var vertex = 4;
var paths = g.pathTo(vertex);
console.log(paths);
while (paths.length > 0) {
    if (paths.length > 1) {
        console.log(paths.pop() + '-');
    } else {
        console.log(paths.pop());
    }
}

var g1=new Graph(6);

g1.addEdge(1,2);
g1.addEdge(2,5);
g1.addEdge(1,3);
g1.addEdge(1,4);
g1.addEdge(0,1);
g1.vertextList=["CS1","CS2","Data Structures","Assembly Language","Operating Systems","Algorithms"];
g1.showGraph();
g1.topSort();

