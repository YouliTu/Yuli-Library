/**
 * Created by Yuri on 2017/3/28.
 */

const Lodash = require("../library/myLodash");
const Sort = require("../library/Algorithm/sort");
const _ = require("../library/christina");
const Dynamic = require("../library/Algorithm/dynamic");
const da = new Dynamic();
// const Other = require("../library/Algorithm/other");

const Stack = Lodash.Stack;
const s = new Stack();
const Queue = Lodash.Queue;
const q = new Queue();
// const o = new Other();
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
let gra = new Gra(5);
const sort = new Sort();
const lg = (arg) => {
    console.log(arg);
};

const init = () => {
   //  let arr =[23, 38, 22, 45, 23, 67, 31, 15, 41];
   //  sort.Qsort(arr)
   lg(da.lcs("abc","abcd"));
};


window.onload = init();
