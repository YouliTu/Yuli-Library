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

class Fn {
    // 基数排序
    baseSort(){
        // 对数位进行分发
        const dsitribute = (nums, queues, n, digit) => {
            // 书上只有1，10的处理方式，我觉得写的不好，遂改为任意位数
           for ( let i = 0;i < n; i ++){
                if (digit === 1) {
                    queues[nums[i]%10].enqueue(nums[i]);
                } else {
                    queues[Math.floor(nums[i] / digit)].enqueue(nums[i]);
                }
           }
        };
        const collect = (queues, nums) => {

        }
    }
}

module.exports = Queue;