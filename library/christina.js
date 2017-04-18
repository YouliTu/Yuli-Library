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
// 对已有的项目进行结构复制，将第一个参数有的字段值 复制到 第二个参数
_.copyDataFromObject = (origin, newParam) => {
    for (const key in origin){
        const value = origin[key];
        if (typeof value === "object"){
            _.copyDataFromObject(value, newParam[key]);
        } else {
            newParam[key] = value;
        }
    }
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
// 根据数值正负返回对应颜色值
_.judgeColor = (data) => {
    const num = parseFloat(data);
    // 负数、正数、0
    // const list = ["#5BBF7", "#FC5858", "#fff"];
    let rs = 2;
    if (num > 0){
        rs = 1;
    } else if (num === 0) {
        rs = 0;
    }
    return rs;
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

_.raf = () => {
    return window.requestAnimationFrame ||
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

module.exports = _;