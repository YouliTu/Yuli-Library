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
        // 01背包问题
        this.max = (a,b) => {
            return (a > b)? a :b;
        }
        this.kabang = (capacity,size,value) => {
            let n = size.length;
            // 建立二维数组
            let kaban = [];
            // 为啥外层是n？ 01背包，每个物体只有一次放入机会，
            // 否则就会造成直接多次选择最大夏普值物体
            for(let i = 0; i < n + 1;i++){
                kaban[i] = [];
                let sizeAmount = 0;
                for(let j = 0; j < capacity +1;j++){
                    if( i === 0 || j === 0){
                        kaban[i][j] = 0;
                        // 状态转移方程
                        // i:物体序号
                        // j: 背包容量
                        // size[i] 物体重量
                        // value[i] 物体价值
                        // kaban[i][j] 重量为j时，放入第i个的物体的总价值

                        // 动态状态下的背包容量，是否能装下目前的物体
                        // 此处书上有误，j >= size[i - 1] 这样成只要小于最大都能装了
                    // } else if (j >= ( sizeAmount + size[i - 1] ) ){
                    } else if (j >= size[i - 1]){
                        // 对每个物体进行放入实验，测试最大value
                        kaban[i][j] = this.max(
                            // 以前包里有的价值 + 新价值
                            kaban[i - 1][j] + value[i - 1],
                            kaban[i - 1][j]
                        )
                    } else {
                        kaban[i][j] = kaban[i - 1][j];
                    }
                }
            }
            console.log(n,capacity,kaban)
            return kaban[n][capacity];
        }
    }
}

module.exports = Dynamic;

