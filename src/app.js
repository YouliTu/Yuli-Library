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
const BST = Lodash.BST;
const bs = new BST();

const lg = (arg) => {
    console.log(arg);
};

const init = () => {
    bs.add(23)
    bs.add(45)
    bs.add(16)
    bs.add(37)
    bs.add(3)
    bs.add(99)
    bs.add(22)
    console.log(bs.toArray());
    // bs.toString();
};


window.onload = init();
