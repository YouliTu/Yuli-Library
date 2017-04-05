class List{
    constructor(){
        this.listSize = 0;
        this.dataStore = [];
        this.pos = 0;

        this.front = () => {
            this.pos = 0;
        };
        this.end = () => {
            this.listSize && (this.pos = this.listSize - 1);
        };
        this.prev = () => {
            this.listSize && (--this.pos);
        };
        this.next = () => {
            (this.pos < this.listSize) && ++this.pos;
        };
        this.currPos = () => {
            return this.pos;
        };
        this.moveTo = (index) => {
            this.pos = index;
            (index < 0) && (this.pos = 0);
            if ( index > this.listSize ){
                this.pos = this.listSize;
            }
        };
        this.getElement = () => {
            return this.dataStore[this.pos];
        };
        this.hasNext = () => {
            return this.pos < this.listSize;
        };
        this.hasPrev = () => {
            return this.pos >= 0;
        };
    }
    add(newItem){
        // this.dataStore.push(newItem);
        this.dataStore[this.listSize++] = newItem;
    }
    remove(item){
        const at = this.findItemIndex(item);
        if (at > -1){
            this.dataStore.splice(at, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    length(){
        return this.listSize;
    }
    toString(){
        return this.dataStore.toString();
    }
    findItemIndex(item){
        const list = this.dataStore;
        let index = -1;
        for (let i = 0;i < this.dataStore.length;i++){
            if (list[i] = item){
                index = i;
            }
        }
        return index;
    }
    insertAfter(item, after){
        const at = this.findItemIndex(after);
        if (at > -1){
            this.dataStore.splice(at + 1, 0, item);
            ++this.listSize;
            return true;
        }
        return false;
    }
    clear(){
        // delete this.dataStore;
        // this.dataStore.length = 0;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    contains(item){
        return this.findItemIndex(item) > 0 ? true : false;
    }
    // 迭代器
    // 正序迭代
    forEach(fn){
        for ( this.front();this.hasNext();this.next()){
            fn();
        }
    }
    aniForEach(fn){
        for (this.end();this.hasPrev();this.prev()){
            fn();
        }
    }
}

module.exports = List;