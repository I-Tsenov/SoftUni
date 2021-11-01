(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        let testStart = this.split(' ')[0] + ' ';
        if (testStart === str) {
            return '' + this;
        }
        return str + this
    }
    String.prototype.ensureEnd = function (str) {
        let testEnd = ` ${this.split(' ').pop()}`;
        if (testEnd === str) {
            return '' + this;
        }
        return this + str
    }
    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    }
    String.prototype.truncate = function (n) {
        let afterTrunc = this.substring(0, n)
        let finish = '...';
        if (this.length <= n) {      // няма условие, ако са равни! Не дава разлика в резултата
            return '' + this;
        }
        else if (this.length > n) {
            if (n < 4) {
                return '.'.repeat(n)
            }
            if (this.includes(' ')) {
                let firstPart = afterTrunc.substring(0, afterTrunc.lastIndexOf(' '));
                while ((firstPart.length + finish.length) > n) {
                    while (firstPart[firstPart.length - 1] !== ' ') {
                        firstPart = firstPart.substring(0, firstPart.length - 1);
                    }
                }
                firstPart = firstPart.trim()
                return firstPart + finish;
            } else if (!this.includes(' ')) {
                let firstPart = this.substring(0, n - 3 + 1);
                return firstPart + finish
            }
        }
    }

    String.format = function (string, ...params) {
        let pattern = /{\w+}/g
        let placeholders = pattern.exec(string)

        while (placeholders !== null) {

            let replacer = params.shift();

            if (replacer === undefined) {
                break;
            }

            string = string.replace(placeholders[0], replacer)
            placeholders = pattern.exec(string)
        }

        return string
    }
})();

let str = 'quickbrown';
console.log(str = str.truncate(8));
// console.log(str = String.format('The {0} {1} fox',
//     'quick', 'brown'));
// console.log(str = String.format('jumps {0} {1}',
//     'dog'));
