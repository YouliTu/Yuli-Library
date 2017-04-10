/**
 * Created by Yuri on 2017/3/28.
 */

const Lodash = require("../library/myLodash");

const _ = require("../library/christina");

const Other = require("../library/Algorithm/other");

const Stack = Lodash.Stack;
const s = new Stack();
const Queue = Lodash.Queue;
const q = new Queue();
const o = new Other();
const LList = Lodash.LList;
const ll = new LList();
const Dou = Lodash.Dou;
const dl = new Dou();
const lg = (arg) => {
    console.log(arg);
};

const init = () => {
    dl.insertAfter("the one","head");
    dl.insertAfter("the two", "the one");
    dl.insertAfter("the the", "the two");
    dl.display();
    dl.remove("the two")
    // dl.display()
    dl.dispReverse();

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
