class Dictionarys {
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
    }
}


module.exports = Dictionarys;