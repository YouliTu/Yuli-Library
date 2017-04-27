

class Vertex {
    constructor(label,wasVisited){
        this.label = label;
        this.wasVisited = wasVisited;
    }
}

// 邻接表 邻接表数组
// 边存储为 由顶点的相邻的 顶点列表构成的数组，此顶点为索引

// 临界矩阵

class Graph {
    constructor(v){
        // 顶点
        this.vertices = v;
        this.edges = 0;
        this.createAdj = (length) => {
            let rs = [];
            for(let i = 0;i < length;i++){
                rs[i] = [];
                rs[i].push(undefined);
            }
            return rs;
        }
        this.adj = this.createAdj(this.vertices);
        this.createMarker = (length) => {
            let rs = [];
            for(let i = 0;i < length; i++){
                rs[i] = false;
            }
            return rs;
        }
        this.marked = this.createMarker(this.vertices);
        this.addEdge = (v,w) => {
            this.adj[v].push(w);
            this.adj[w].push(v);
            this.edges++;
        };
        this.showGraph = () => {
            for(let i = 0;i< this.vertices;i++){
                console.log(`${i} -> `);
                for(let j = 0; j < this.vertices;j++){
                    if(this.adj[i][j] !== undefined){
                        console.log(`${this.adj[i][j]}`)
                    }
                }
            }
        }
        // 深度优先搜索示例
        this.dfs = (v) => {
            this.marked[v] = true;
            console.log("visited",v);
            for(let w in this.adj[v]){
                if(!this.marked[w]){
                    this.dfs(w);
                }
            }
        }
        this.bfs = (s) => {
            let queue = [];
            this.marked[s] = true;
            queue.push(s);
            while(queue.length > 0){
                let v = queue.shift();//检查完成，从队首移出
                if(this.adj[v] != undefined){
                    console.log("visited",v);
                }
                for(let w in this.adj[v]){
                    if(!this.marked[w]){
                        this.marked[w] = true;
                        queue.push(w);
                    }
                }
            }
        }
        // 拓扑排序
        // 优先级约束调度 - 类似深度优先算法
        this.topologySorting = () => {
            // 设置排序进程，显示排序好的顶点列表
            let stack = [];
            let visited = [];
            for(let i = 0; i < this.vertices;i++){
                visited[i] = false;
            }
            for(let i = 0;i < this.vertices;i++){
                if(visited[i] === false){
                    this.topSortHelper(i,visited,stack);
                }
            }
            for( let i = 0; i < stack.length; i++){
                if(stack[i] !== undefined && stack[i] == false){
                    console.log(this.vertices[stack[i]])
                }
            }
        }
        // 将当前顶点表一为方位，递归访问相邻顶点
        this.topSortHelper = (v,visited,stack) => {
            visited[v] = true;
            for(let w in this.adj[v]){
                if(!visited[w]){
                    this.topSortHelper(visited[w],visited,stack);
                }
            }
            stack.push(v);
        }

    }
}
class BreathFirst extends Graph{
    constructor(){
        super();
        this.edgeTo = [];
        this.bfs = (s) => {
            let queue = [];
            this.marked[s] = true;
            queue.push(s);
            while(queue.length > 0){
                let v = queue.shift();
                if(v == undefined){
                    console.log("visited",v);
                }
                for(let w in this.adj[v]){
                    if(!this.marked[w]){
                        this.edgeTo[w] = v;
                        this.marked[w] = true;
                        queue.push(w)
                    }
                }
            }
        }
        this.pathTo = (v) => {
            let source = 0;
            if(!this.hasPathTo(v)){
                return undefined;
            }
            let path = [];
            for( let i = v;i != source;i = this.edgeTo[i]){
                path.push(i)
            }
            path.push(source);
            return path;
        }
        this.hasPathTo = (v) => {
            return this.marked[v];
        }
    }
}

module.exports = Graph;