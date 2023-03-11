export function getMonth(month){
    if (month < 1 || month > 12)
        return('Number out of range');
    else if (month == 12)
       return  'December';
    else if (month == 1)
        return 'January';
    else if (month == 2)
        return 'February';
    else if (month == 3)
        return 'March';
    else if (month == 4)
        return 'April';
    else if (month == 5)
        return 'May';
    else if (month == 6)
        return 'June';
    else if (month == 7)
        return 'July';
    else if (month == 8)
        return 'August';
    else if (month == 9)
        return 'September';
    else if (month == 10)
        return 'October';
    else if (month == 11)
        return 'November';
    else if (typeof(month) != Number)
        return 'Error. There must be a number';
}

export const repeatWord = (word = 'test', count = 3) => {
    let result = '';
    for (let i = 0; i < count; i++)
    {
        result += `${word}${i + 1}`
        if (i + 1 != count) {
            result += ', '
        }
    }
    return result;
}

export function countDown(n=3){
    let result = ''
    if (n > 0) {
        for (let i = n; i > 0 ; i--){
            result += `${i} `    
           }
    }else return 'Data is incorrect';

    return result.slice(0, -1);
}
