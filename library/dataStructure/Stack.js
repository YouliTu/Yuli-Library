

class Stack {
    constructor(){
        this.dataStore = [];
        // 记录栈顶位置
        this.top = 0;

        this.push = (element) => {
            return this.dataStore[this.top++] = element;
        };
        // 移出第一个元素
        this.pop = () => {
            return this.dataStore[--this.top];
        };
        // 返回第一个元素
        this.peek = () => {
            return this.dataStore[this.top - 1];
        };
    }
    length() {
        return this.top;
    }
    clear() {
        this.top = 0;
    }

}

module.exports = Stack;