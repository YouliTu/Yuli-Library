

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

class Fn {
    // 使用栈进行进制切换
    mulBase(number, base){
        let num = number;
        const s = new Stack();
        do {
            // 末尾数
            s.push( num % base);
            // 进位数
            num = Math.floor( num /= base);
        } while ( num > 0 );
        let rs = "";
        while (s.length() > 0){
            rs += s.pop();
        }
        return rs;
    }
    // 栈模拟递归 类阶乘
    fn(n){
        const s = new Stack();
        while (n > 0){
            s.push(n --);
        }
        let rs = 1;
        while (s.length() > 0){
            rs *= s.pop();
        }
        return rs;
    }

}

module.exports = Stack;