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
        // 暴力算法即是遍历a子串与b子串进行
        // 寻找公共子串
        this.lcs = (word1, word2) => {
            let max = 0;
            let index = 0;
            let index2 = 0;
            // 这里原书出了错，网上各种博文也就直接一抄我也是醉了
            // 用了<= 之后又 +1 等于给标记数组length+2 是完全没有必要的

            let lcsarr = new Array(word1.length +1);
            // 建立二维数组
            for( let i= 0; i < word1.length + 1;i++){
                lcsarr[i] = new Array(word2.length + 1);
                for (let j = 0;j < word2.length + 1; j++){
                    lcsarr[i][j] = 0;
                }
            }
            console.log(lcsarr)
            // 用于保存字符匹配记录的表
            for( let i =0; i < word1.length + 1;i++){
                for(let j = 0; j < word2.length + 1; j++){
                    if(i === 0 || j === 0){
                        lcsarr[i][j] = 0;

                        // 下面的遍历是i-1 也就是给遍历前面加了一波新数组，而标记数据所有对应项目后移
                        // 那么，真正重复的数数据其实是 （i -1， j-1） 所对应其对应字符串，那么，
                        // 书上写的<=的遍历方式虽然结果一样但是的思路其实不一样的
                    } else if(word1[i -1] === word2[j-1]){
                        lcsarr[i][j] = lcsarr[i -1][j-1] + 1
                        console.log(i,j)
                        // console.log(lcsarr[i -1][j-1],lcsarr[i][j])
                    } else {
                        lcsarr[i][j] = 0;
                    }
                    if(lcsarr[i][j] > max){
                        max = lcsarr[i][j];
                        index = i;
                        index2 = j;
                    }
                }
            }
            // 那到的i是word1的最后一个字母
            // word2.substr(index2-max,max)
            return word1.substr(index - max,max)
        }

    }



}

module.exports = Dynamic;

