/**
 * myLodash
 * js数据结构学习
 * @author Yuri
 */

class _ {
    constructor(){
        this.copyArr = (originArr) => {
            return originArr.map((item) => {
                return item;
            });
        };
        // 已存在方法实现
        this.reverse = (arr) => {
            const newArr = [];
            arr.forEach((item) => {
                newArr.unshift(item);
            });
        };

        // 在冒泡排序的最后一位总是会出现正确的数字，每一次的比较中，被置于右侧的数字，都是最大的即能解决这个问题
        this.bubbleSort = (arr) => {

            const swap = (originArr, index1, index2) => {
                const num1 = originArr[index1];
                originArr[index1] = originArr[index2];
                originArr[index2] = num1;
            };

            // 外层循环，循环每一个数字
            // 这里为什么不能用 迭代器呢，是因为 最后一项不在比较范围内
            for (let i = 0;i < arr.length - 1;i++){
                // 内层循环，循环比较
                for (let j = 0, stop = arr.length - 1 - i;j < stop; j++ ){
                    if (arr[j] > arr[j + 1]){
                        swap(arr, j, j + 1);
                    }
                }
            }
            return arr;
        };

        this.selectSort = (arr) => {

        }

        this.createList = () => {
            return class {
                constructor(){
                    super();
                    this.listSize = 0;
                    this.dataStore = [];
                    this.pos = 0;

                    this.front = () => {
                        this.pos = 0;
                    };
                    this.end = () => {
                        this.listSize && (this.pos = this.listSize - 1);
                    };
                    this.prev = () => {
                        this.listSize && (--this.pos);
                    };




                }
                add(newItem){
                    // this.dataStore.push(newItem);
                    this.dataStore[this.listSize++] = newItem;
                }
                remove(item){
                    let at = this.findItemIndex(item);
                    if(at > -1){
                        this.dataStore.splice(at,1);
                        --this.listSize;
                        return true;
                    }
                    return false;
                }
                length(){
                    return this.listSize;
                }
                toString(){
                    return this.dataStore.toString();
                }
                findItemIndex(item){
                    let list = this.dataStore;
                    let index = -1;
                    for (let i=0;i<this.dataStore.length;i++){
                        if(list[i] = item){
                            index = i;
                        }
                    }
                    return index;
                }
                insertAfter(item,after){
                    let at = this.findItemIndex(after);
                    if (at > -1){
                        this.dataStore.splice(at +1,0,item);
                        ++this.listSize;
                        return true;
                    }
                    return false;
                }
                clear(){
                    // delete this.dataStore;
                    // this.dataStore.length = 0;
                    this.dataStore = [];
                    this.listSize = this.pos = 0;
                }
                contains(item){
                    return this.findItemIndex(item) > 0?true:false;
                }

            };
        }
    }
}

module.exports = _;