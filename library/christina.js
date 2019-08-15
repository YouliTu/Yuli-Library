/**
 * Created by Yuri on 16/7/4.
 */

/** 牧濑红莉栖:ヽ(*ﾟдﾟ)ノｶｲﾊﾞｰ **/

const _ = {};


_.type = function (obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, "");
};

_.isArray = function (list) {
    return _.type(list) === "Array";
};

_.isString = function (list) {
    return _.type(list) === "String";
};

_.isObject = function (list) {
    return _.type(list) === "Object";
};

_.isFunction = function (list) {
    return _.type(list) === "Function";
};

_.isNullString = (data) => {
    return data.replace(/(^\s*)|(\s*$)/g, "").length ? false : true;
};

_.deleteEmptyProperty = (object) => {
    for (const i in object) {
        const value = object[i];
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                if (value.length === 0) {
                    delete object[i];
                    continue;
                }
            }
            _.deleteEmptyProperty(value);
            if (_.isEmpty(value)) {
                delete object[i];
            }
        } else if (value === "" || value === null || value === undefined) {
            delete object[i];

        }
    }
};
_.isEmptyObject = (object) => {
    for (const name in object) {
        return false;
    }
    return true;
};

_.copyArr = (arr) => {
    const newArr = [];
    arr.forEach((item) => {
        newArr.push(item);
    });
    return newArr;
};

_.objToArr = (obj) => {
    const ar = [];
    for (const key in obj){
        ar.push(obj[key]);
    }
    return ar;
};



_.setStatePromise = (that, newState) => {
    return new Promise((resolve) => {
        that.setState(newState, () => {
            resolve();
        });
    });
};


// 判断字符串有多少个字节
_.strByteLength = (data) => {
    let len = 0;
    for (let i = 0;i < data.length;i++){
        // 全角
        if (data [i].match(/[^x00-xff]/ig) !== null){
            len += 2;
        } else {
            len += 1;
        }
    }
    return len;
};

_.isIE = (version) => {
    const b = document.createElement("b");
    b.innerHTML = `<!--[if IE ${version} ]><i></i><![endif]-->`;
    return b.getElementsByTagName("i").length === 1;
};


/**
 * 生成一组平滑的随机数，根据数量，将随机数均匀的分布
 * @param {String} count 需要生成几个数据
 * @param {Number} bits 需要保留几位小数
 * @returns {Array} 对应的数组
 */
_.smoothRandom = (count, bits) => {
    let num = parseInt(count);
    const rs = [];
    if ( isNaN(num) || (typeof num !== "number")){
        num = 1;
    }
    const step = 1 / num ;
    let i = 1;
    while (i <= num){
        const number = Math.random() * step * i;
        const flag = number > (step * (i - 1)) && number < (step * (i + 1));
        if (flag){
            rs.push(+number.toFixed(bits));
            i++;
        }
    }
    return rs;
};

/**
 * Hex转RGBA
 * @param {String} color Hex颜色值
 * @param {Number} alpha 值 默认为1
 * @returns {object} {rbg:{String},toString:{function} } RGB颜色值
 */
_.hexToRgba = (color, alpha) => {
    let newColor = color.replace("#", "");
    const a = parseFloat(alpha) || 1;
    if (newColor.length === 3) {
        newColor = newColor.split("").map(item => parseInt(`0x${item}${item}`));
    } else {
        newColor = newColor.split("").map((item, index) => {
            if (index % 2 === 0) {
                return parseInt(`0x${item}${newColor[index + 1]}`);
            }
            return "";
        }).filter(item => item !== "");
    }
    const result = {
        rgb: newColor
    };
    result.toString = () => `RGBA(${newColor.join(",")},${a})`;

    return result;
};

/**
 * RGB转Hex
 * @param {Array} color R、G、B三个值
 * @returns {string} Hex值
 */
_.rgbToHex = (...color) => {
    const newColor = color.map(item => {
        return Number(item).toString(16).length < 2 ?
            `0${Number(item).toString(16)}` :
            Number(item).toString(16);
    }).join("");

    return `#${newColor}`;
};

/**
 * 函数防抖
 * @type {{}}
 */

_.debounce = (fn, delay) => {
    let timer = 0;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

/**
 * 取url中的参数
 * 调用方法_.getUrlParam("参数名")
 * @param {string} name The url param key name.
 * @returns {*} The value with the key in the url search.
 */
_.getUrlParam = function (name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i"),
        stringStart = 1;
    const r = window.location.href.substr(stringStart).match(reg);
    if (r !== null) {
        const valueIndex = 2;

        return decodeURIComponent(r[valueIndex]);
    }

    return null;
};


// 勾股定理计算 参数必须为number类型
_.pythagoras = (side1,side2,hypotenuse) => {
    let rs;
    if(!hypotenuse){
        rs = Math.sqrt(  Math.pow(+side1,2) + Math.pow(+side2,2)  );
    }else {
        const s1 = +side1 || 0;
        const s2 = +side1 || 0;
        rs = Math.sqrt(  Math.pow(+hypotenuse,2) - Math.pow(s1,2) - Math.pow(s2,2)  );
    }
    return  rs;
};
// 获得一个区间的整数随机数 不指定则为 [0- 100] 闭区间
_.intRandom = (max = 100,min = 0) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

_.raf = (callback) => {
    window.ranf =  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||

        function (callback) {
            let start,
                finish;
            const self = {};
            window.setTimeout(() => {
                start = +new Date();
                callback(start);
                finish = +new Date();

                self.timeout = 1000 / 60 - (finish - start);

            }, self.timeout);
        };
    return window.ranf(callback);
};
/**
 * 数字映射
 * @param {number} origin 提供数据
 * @param {number} oriStart 数据起点
 * @param {number} oriEnd 数据重点
 * @param {number} tarStart 映射数据起点
 * @param {number} tarEnd 映射数据终点
 * @returns {number} 映射数据
 */
_.analogy = (origin,oriStart,oriEnd,tarStart,tarEnd) => {
    return ((tarEnd - tarStart) * ((origin - oriStart) / (oriEnd - oriStart))) + tarStart;
}

module.exports = _;
