class Dynamic {
    constructor(){
        this.badFib = (n) => {
            if(n < 2){
                return n;
            }
            return this.badFib(n - 1) + this.badFib(n - 2);
        }
        this.dynFib = (n) => {
            let val = [];
            for( let i=0;i <= n;i++){
                val[i] = 0;
            }
            if(n === 1){
                return 1;
            }
            val[1] = 1;
            val[2] = 2;
            for(let i = 3;i<=n;i++){
                val[i] = val[i-1] + vali - [i-2]
            }
            return val[n-1];
        }
    }
    // 寻找公共子串

}