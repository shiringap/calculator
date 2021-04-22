export const roundUp = (number) => {
    if (Number.isInteger(number)) {
        return number;
    }
    return +number.toFixed(3);
}

export function getButtonsOptions(){
    return [
        {
            action: this.onOff,
            value: 'OFF',
        },
        {
            action: this.sign,
            value: '+/-',
        },
        {
            action: this.sqrt,
            value: '√',
        },
        {
            action: this.percent,
            value: '%',
        },
        {
            action: this.mrc,
            value: 'MRC',
        },
        {
            action: this.m_minus,
            value: 'M-'
        },
        {
            action: this.m_plus,
            value: 'M+',
        },
        {
            //--------------------------
            action: this.subtract,
            value: '-',
        },
        {
            action: this.append,
            value: '7',
            number: '7',
        },
        {
            action: this.append,
            value: '8',
            number: '8',
        },
        {
            action: this.append,
            value: '9',
            number: '9',
        },
        {
            action: this.multiply,
            value: 'x',
        },
        {
            action: this.append,
            value: '4',
            number: '4',
        },
        {
            action: this.append,
            value: '5',
            number: '5',
        },
        {
            action: this.append,
            value: '6',
            number: '6',
        },
        {
            action: this.divide,
            value: '/',
        },
        {
            action: this.append,
            value: '1',
            number: '1',
        },
        {
            action: this.append,
            value: '2',
            number: '2',
        },
        {
            action: this.append,
            value: '3',
            number: '3',
        },
        {
            action: this.append,
            value: '0',
            number: '0',
        },
        {
            action: this.decimal,
            value: '.',
        },
        {
            action: this.equal,
            value: '=',
        },
        {
            action: this.add,
            additionalClass: "button_wrapper--plus ",
            value: '+',
        },
    ]
}