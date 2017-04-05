/**
 * Created by Yuri on 2017/3/28.
 */

const Lodash = require("../library/myLodash");

const _ = require("../library/christina");

const Other = require("../library/Algorithm/other");

const lg = (arg) => {
    console.log(arg)
}

const init = () => {
    const Stack = Lodash.Stack;
    const s = new Stack();
    const _ = new Other();



    lg(_.mulBase(125, 8));

};


const myParseInt = (x) => {

    let str = Math.abs(x).toString();
    let len = str.length;
    if(x < 0){
        return false;
    }
    if(len === 1){
        return true;
    }
    if(len % 2 === 0){
        for(let i = 0;i<= (len/2 - 1);i++){
            if(str[i] !== str[len - 1 -i]){
                return false
            }
        }
    } else {
        for(let i = 0;i<= (Math.floor(len/2) - 1);i++){
            if(str[i] !== str[len - 1 -i]){
                return false
            }
        }
    }
    return true;
};

window.onload = init();
