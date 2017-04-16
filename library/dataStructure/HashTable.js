class HashTable {
    constructor(){
        // 质数为了减少0的散列值 从而减少碰撞
        this.table = new Array(137);
        // data是键值，为一个string
        // 散列函数，规定 键值转key的规则
        this.simpleHash = (data) => {
            let total = 0;
            for(let i = 0;i < data.length;++i){
                // 拿到每个字符的unicode码
                total += data.charCodeAt(i);
            }
            return total % this.table.length;
        }
        // 将数据存入散列表
        this.put = (data) => {
            let pos = this.betterHash(data);
            this.table[pos] = data;
        }
        this.get = (key) => {
            return this.table[this.betterHash(key)]
        }
        // 显示散列中的数据
        this.showDistro = () => {
            for(let i = 0;i < this.table.length;++i){
                if(this.table[i] !== undefined){
                    console.log(`${i}:${this.table[i]}`);
                }
            }
        }
        this.betterHash = (string) => {
            // 一个系数，一般是质数
            const H = 37;
            let total = 0;
            for( let i = 0; i < string.length; ++i){
                total += H * total + string.charCodeAt(i);
            }
            total = total % this.table.length;
            return parseInt(total);
        }
        // 碰撞处理
        // 开链法
        this.buildChains = () => {
            this.table.forEach((item) => {
                item = new Array();
            })
        }
        this.showChainsDistro = () => {
            this.table.forEach((item,index) => {
                if(item[0] !== undefined){
                    item.forEach((child,childIndex) => {
                        console.log(`${index}:${childIndex} : ${child}`)
                    })

                }
            });

        }
        this.chainsPut = (key, data) => {
            let pos = this.betterHash(key);
            let index = 0;
            if(this.table[pos][index] === undefined){
                this.table[pos][index] = data;
                index++
            }else {
                while(this.table[pos][index] !== undefined){
                    index++;
                }
                this.table[pos][index] = data;
            }
        }
        this.chainsGet = (keys) => {
            let index = 0;
            let pos = this.betterHash(keys);
            if(this.table[pos][index]!== undefined){
                return this.table[pos];
            }
            return undefined;
        }
    }
    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min +1)) + min
    }
    getStuData(arr){
        for(let i =0;i<arr.length;i++){
            let num = "";
            for( let j = 0; j < 9; j++){
                num += Math.floor(Math.random() * 10);
            }
            num += this.getRandomInt(50, 100);
            arr[i] = num;
        }
    }
}


module.exports = HashTable;