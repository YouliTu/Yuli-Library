class Sort {
    constructor(){
        this.swap = (originArr, index1, index2) => {
            const num1 = originArr[index1];
            originArr[index1] = originArr[index2];
            originArr[index2] = num1;
        };
    }
    // 三种只有数学价值的排序
    // 冒泡排序
    bubbleSort(arr){
        // 外层循环，循环每一个数字
        // 这里为什么不能用 迭代器呢，是因为 最后一项不在比较范围内
        // i最大到倒数第二位，所以 length - 1，因为j会拿到最后一位进行比较 每当增大，
        // j的比较范围就少一点
        for(let i = 0; i < arr.length -1;i++){
            for(let j = 0; j < arr.length - 1 - i;i++){
                if(arr[j] > arr[j + 1]){
                    this.swap()
                }
            }
        }
    }
    // 选择排序
    // 一轮比较完毕，找到最小值，放到对应文职，其他不变
    selectionSort(arr){
        let len = arr.length,
            min;
        for(let i = 0;i< len;i++){
            min = i;
            for(let j = i+1;j < len;j++){
                if(arr[j] < arr[min]){
                    min = j;
                }
            }
            if(min !== i){
                this.swap(arr,i,min);
            }
        }
        return arr;
    }
    // 插入排序
    // 分为 已排序-未排序部分
    insertionSort(arr){
        let len = arr.length,
            value,
            i,
            j;
        // 外部循环为排序部分
        for(i = 0;i < len;i++){
            value = arr[i];
            // 内部循环已排序部分
            // 已排序最右侧为第一比较位置，逐步向内部比较，
            // 每次小于都把目前位置的数字换位，准备给前面插入一位挪位置
            for(j = i -1;j > -1 && arr[i] > value;j--){
                arr[j+1] = arr[j]
            }
            arr[j+1] = value;
        }
    }
    // 实际使用的排序
    // 合并排序
    mergeSort(arr){
        const merge = (left, right) => {
            let result = [],
                il = 0,
                ir = 0;
            while (il < left.length && ir < right.length){
                if(left[il] < right[ir]){
                    result.push(left[il++]);
                } else {
                    result.push(right[ir++])
                }
            }
            return result.concat(left.slice(il)).concat(right.slice(ir));
        }
        if(arr.length < 2){
            return arr;
        }
        let middle = Math.floor(arr.length /2),
            left = arr.slice(0, middle),
            right = arr.slice(middle);
        return merge(mergeSort(left),mergeSort(right));
    }
    partition(myArray, left, right){
        // let pivot = myArray[Math.floor(right + left) / 2],
        //     i = left,
        //     j = right;
        // while(i <= j){
        //     while(myArray[i] < pivot){
        //         i++;
        //     };
        //     while(myArray[j] > pivot){
        //         j--;
        //     };
        //     if(i <= j){
        //         this.swap(myArray, i, j);
        //         i++;
        //         j--;
        //     };
        // }
        // 保存定位点
        let temp = myArray[left]
        while (left < right){
            // 交换
            while(left < right && myArray[right] >= temp)--right;
            myArray[left] = myArray[right];
            while(left < right && myArray[left] <= temp)++left;
            myArray[right] = myArray[left];
        }
        // 还原
        myArray[left] = temp;
        return left;
    }
    Qsort(
        arr = [],
        left = 0,
        right = arr.length - 1,
    ){
        if(left >= right) return;
        let index = this.partition(arr, left, right);
        // debugger
        // 排除中间位
        // if(left < index - 1){
            this.Qsort(arr, left, index - 1);
        // }
        // if(index < right){
            this.Qsort(arr, index +1, right);
        // }
        return arr;
    }
}

module.exports = Sort;