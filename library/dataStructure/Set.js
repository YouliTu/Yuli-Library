/**
 * Created by renren on 2017/4/17.
 */
// ES6中已经实现了集合结构
class Set {
    constructor(array){
        this.dataStore = array || [];
        this.add = (data) => {
            if(this.dataStore.indexOf(data) < 0){
                this.dataStore.push(data);
                return true;
            }
            return false;
        }
        this.remove = (data) => {
            let pos = this.dataStore.indexOf(data);
            if(pos > -1){
                this.dataStore.splice(pos,1)
                return true
            }
            return false;
        }
        this.show = () => {
            this.dataStore.forEach((item) => {
                console.log(item)
            })
        }
        // 连接两个数组
        this.union = (set) => {
            let temp = new Set();
            this.dataStore.forEach((item) => {
                if(!set.dataStore.includes(item)){
                    temp.dataStore.push(item);
                }
            })
            return temp.dataStore.concat(this.dataStore);
        }
        // 求交集
        this.intersect = (set) => {
            let temp = new Set();
            this.dataStore.forEach((item) => {
                if(set.dataStore.includes(item)){
                    temp.add(item)
                }
            })
            return temp;
        }
        this.size = () => {
            return this.dataStore.length;
        }
        this.isSubset = (set) => {
            if(this.size() > set.size()){
                return false;
            } else {
                set.forEach((item) => {
                    if(!this.dataStore.includes(item)){
                        return false;
                    }
                })
                return true;
            }
        }
        this.difference = (set) => {
            let temp = new Set();
            set.forEach((item) => {
                if(!this.dataStore.includes(item)){
                    temp.add(item)
                }
            })
        }
    }
}