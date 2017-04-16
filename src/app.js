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
const Hash = Lodash.Hash;
const hh = new Hash();
// const Dic = new Dic();
// const di =

const lg = (arg) => {
    console.log(arg);
};

const init = () => {
    let numStudents = 10;
    let arrSize = 97;
    let idLen = 9;
    let students = new Array(numStudents);
    hh.getStuData(students);
    students.forEach((item) => {
        console.log(`${item.substring(0,8)}:${item.substring((9))}`);
        hh.put(item)
    });
    hh.showDistro();
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
