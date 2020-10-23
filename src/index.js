const hundred = 'hundred';

const dg = ['zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'];

const tn =
    ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];

const tw = ['twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    let result = '';

    let hundreds = parseInt(number / 100);

    result += (dg[hundreds] === 'zero') ? '' : dg[hundreds] + ' ' + hundred + ' ';

    let dozens = number % 100;

    if (dozens < 10) {
        if (dozens === 0 && result === '') {
            result += dg[dozens];
        } else if (dozens !== 0) {
            result += dg[dozens];
        }
    } else if (dozens < 20) {
        result += tn[parseInt(dozens % 10)];
    } else {
        result += tw[parseInt(dozens / 10) - 2];
        result += (dozens % 10 === 0) ? '' : ' ' + dg[parseInt(dozens % 10)];
    }

    console.log(result);

    return result.trim();
};
