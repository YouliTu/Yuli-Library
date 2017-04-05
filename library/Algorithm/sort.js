class Sort {
    bubbleSort(arr){
        const swap = (originArr, index1, index2) => {
            const num1 = originArr[index1];
            originArr[index1] = originArr[index2];
            originArr[index2] = num1;
        };

        // 外层循环，循环每一个数字
        // 这里为什么不能用 迭代器呢，是因为 最后一项不在比较范围内
        for (let i = 0;i < arr.length - 1;i++){
            // 内层循环，循环比较
            for (let j = 0, stop = arr.length - 1 - i;j < stop; j++ ){
                if (arr[j] > arr[j + 1]){
                    swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    }
}

module.exports = Sort;