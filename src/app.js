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
const Gra = Lodash.Graph;
// const gra = new Gra();

const lg = (arg) => {
    console.log(arg);
};

const init = () => {
    let gra = new Gra(5);
    gra.addEdge(0,1)
    gra.addEdge(0,2)
    gra.addEdge(1,3)
    gra.addEdge(2,4)
    gra.showGraph();
    // bs.toString();
};


window.onload = init();
