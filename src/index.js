module.exports = function check(str, bracketsConfig) {
    let array = str.split('');

    let part = [];
    let partStr = [];
    let res = false;
    let partRes = 0;
    let i = 0;

    while (i < bracketsConfig.length) {
        part = bracketsConfig[i].join('');
        i++;
        let j = 0;

        while (j < str.length) {
            partRes = str.indexOf(part);
            j++;
            if (partRes === -1) {
                res = false;
                j++;
                break;
            } else {
                partStr = array.splice(partRes, 2);
                str = array.join('');
                res = true;
                j = 0;
            }
        }


    }
    return res;
}
