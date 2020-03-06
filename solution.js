//my solution

const convert = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}
const tens = {2:'twenty', 3:'thirty', 4:'forty', 5:'fifty'}

// Complete the timeInWords function below.
function timeInWords(h, m) {
    let hour
    let min
    if(m <= 30){
        hour = convert[h]
    } else {
        hour = convert[h+1]
    }

    if(m === 0){
        return `${hour} o' clock`
    }else if(m === 15 ){
        return `quarter past ${hour}`
    } else if (m ===30){
        return `half past ${hour}`
    } else if (m === 45){
        return `quarter to ${hour}`
    }else if (m < 20){ 
        const unit = (m===1 ? 'minute' : 'minutes')
        console.log(unit)
        return `${convert[m]} ${unit} past ${hour}`
    } else if (m >= 20 && m < 30){
        let x = m.toString().split('') // ['2', '1']
        min = `${tens[x[0]]} ${convert[x[1]]}`
        return `${min} minutes past ${hour}`
    } else if (m > 30){
        if (60 - m >= 20 && 60 - m < 30){
            let x = (60 - m).toString().split('') // ['2', '1']
            min = `${tens[x[0]]} ${convert[x[1]]}`
        } else{
            min = convert[60 - m]
        }        
        return `${min} minutes to ${hour}`
    }
}
