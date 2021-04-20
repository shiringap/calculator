export const roundNum = (number) => {
    if (Number.isInteger(number)) {
        return number;
    }
    return +number.toFixed(3);
}

export function getButtonsProperties(){
    return [
        {
            func: this.off,
            value:'OFF',
        },
        {
            func: this.sign,
            value:'+/-',
        },
        {
            func: this.radic,
            value: 'RAD',
        },
        {
            func: this.percentage,
            value:'%',
        },
        {
            func: this.memoryClear,
            value:'MRC',
        },
        {
            func: this.mem_minus,
            value:'M-',
        },
        {
            func: this.mem_plus,
            value:'M+',
        },
        {
            func: this.substract,
            value:'-',
        },
        {
            func: this.setNumber,
            value:'7',
            number: '7',
        },
        {
            func: this.setNumber,
            value:'8',
            number: '8',
        },

        {
            func: this.setNumber,
            value:'9',
            number: '9',
        },
        {
            func: this.multiply,
            value:'x',
        },
        {
            func: this.setNumber,
            value:'4',
            number: '4',
        },
        {
            func: this.setNumber,
            value:'5',
            number: '5',
        },
        {
            func: this.setNumber,
            value:'6',
            number: '6',
        },
        {
            func: this.divide,
            value:'/',
        },
        {
            func: this.setNumber,
            value:'1',
            number: '1',
        },
        {
            func: this.setNumber,
            value:'2',
            number: '2',
        },
        {
            func: this.setNumber,
            value:'3',
            number: '3',
        },
        {
            func: this.setNumber,
            value:'0',
            number: '0',
        },
        {
            func: this.decimal,
            value:'.',
        },
        {
            func: this.equal,
            value:'=',
        },

        {
            func: this.add,
            value:'+',
        },
    ]
}
