function calc(){
    let x = document.getElementById('x').value;
    let num = Math.floor(Math.random()*10)
    let res = 0
    if(x == num){
        res = 'You Win!'
    }else if(x<num){
        res = 'Pick higher Number'
    }else if(x>num){
        res = 'Pick smaller number'
    }

    return document.getElementById('result').innerHTML = res
}



