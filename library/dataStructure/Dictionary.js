 class Dictionary {
     constructor(){
         this.datastore = new Array();
         this.add = (key, value) => {
             this.datastore[key] = value;
         }
         this.remove = (key) => {
             delete this.datastore[key];
         }
         this.showAll = () => {
             for(let key in this.datastore){
                 console.log(`${key} -> ${this.datastore[key]}`)
             }
         }
         this.length = () => {
             // 原书作者这里用了一个特别复杂的方法，故不采纳
             return Object.keys(this.datastore).length
         }
         this.clear = () => {
             Object.keys(this.datastore).map((item) => {
                 delete this.datastore[item]
             })
         }
         this.sortShow = () => {
             Object.keys(this.datastore).sort().map((item) => {
                 console.log(`${item} -> ${this.datastore[key]}`);
             })
         }
     }
 }


 module.exports = Dictionarys;
