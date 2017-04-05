const Stack = require("../dataStructure/Stack");

class Other {
    constructor(){

    }
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
}

module.exports = Other;