

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
        this.adj = this.vertices.map((item, index) => {
            return "";
        });
        this.addEdge = (v,w) => {
            this.adj[v].push(w);
            this.adj[w].push(v);
            this.edges++;
        };
        this.showGraph = () => {
            this.vertices.forEach((item, index) => {
                console.log(`${index} -> `);
                for(let i = 0;i < this.vertices.length;i++){
                    if(this.adj[index][i] !== undefined){
                        console.log(`${index} -> ${this.vertices[index][i]}`);
                    }
                }
            })
        }

    }
}

module.exports = Graph;