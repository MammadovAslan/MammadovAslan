function calc(){
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let hypotenuse = Math.sqrt(x**2 + y**2)
    return document.getElementById('result').innerHTML = hypotenuse.toFixed(4)
}


