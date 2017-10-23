/**
 * Created by Yuri on 17/9/17.
 */


'use strict'

let plus = (num) => {
    let add = () => {
        let _argv = []
        let _add = () =>{
            [].push.apply(_argv,[].slice.call(arguments))
        }
        _add.toString = () => {
            _argv.reduce((a,b) =>{
                return a + b
            })
        }
        return _add
    }
    return add()(num)

}


function plus2(num) {
    var adder = function () {
        var _args = [];
        var _adder = function _adder() {
            Array.prototype.push.apply(_args, [].slice.call(arguments));
            // _args.push(Array.prototype.slice.call(arguments)[0])
            return _adder;
        };

        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                console.log(a)
                return a + b;
            });
        }

        return _adder;
    }
    return adder()(num);
}



console.log(plus2(1)(2) == 3)