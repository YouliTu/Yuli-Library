class Queue {
    constructor(){
        this.dataStore = [];
        this.enqueue = (ele) => {
            this.dataStore.push(ele);
        };
        this.dequeue = () => {
            this.dataStore.shift();
        };
        this.front = () => {
            return this.dataStore[0];
        };
        this.end = () => {
            return this.dataStore[this.dataStore.length - 1];
        };
        this.toString = () => {
            let rs = "";
            this.dataStore.forEach((item) => {
                rs += (item + "\n");
            });
            return rs;
        };
        this.isEmpty = () => {
            return !this.dataStore.length;
        };
    }
}
// 优先队列
class Priority extends Queue{
    constructor(){
        super();
        // lev越小等级越高
        this.basicObj = {
            name:"name",
            lev:"lev"
        };
        this.dequeue = () => {
            let entry = 0;
            this.dataStore.forEach((item, index) => {
                const maxLev = this.dataStore[entry].lev;
                const curLev = this.dataStore[index].lev;
                if (max > curLev){
                    entry = i;
                }
            });
            return this.dataStore.splice(entry, 1);
        };
        this.toString = () => {
            let rs = "";
            this.dataStore.forEach((item) => {
                rs += `${item.name}:${item.lev}`;
            });
        };
    }
}
// 双向队列
class twoWay extends Queue {
    constructor(){
        super();
        this.pop = () => {
            this.dataStore.pop();
        };
        this.unshift = () => {
            this.dataStore.unshift();
        };
    }
}
class Fn {
    // 基数排序
    baseSort(){
        // 对数位进行分发
        const dsitribute = (nums, queues, n, digit) => {
            // 书上只有1，10的处理方式，我觉得写的不好，遂改为任意位数

            for ( let i = 0;i < n; i++){
                if (digit === 1) {
                    queues[nums[i] % 10].enqueue(nums[i]);
                } else {
                    queues[Math.floor(nums[i] / digit)].enqueue(nums[i]);
                }
            }
        };
        const collect = (queues, nums) => {
            let i = 0;
            for (let digit = 0;digit < 10;++digit){
                while (!queues[digit].empty()){
                    nums[i++] = queues[digit].dequeue();
                }
            }
        };
        const disArry = (arr) => {
            arr.forEach((item) => {
                console.log(arr[i]);
            });
        };
    }
}

module.exports = Queue;