function anos(x){
    if(x % 400 == 0){
        return console.log('O ano é bissexto')
    }
    else if(x % 100 == 0){
        return console.log('O ano não é bissexto')
    }
    else if(x % 4 == 0){
        return console.log('O ano é bissexto')
    }
    else 
    return console.log('O ano não é bissexto')
}

anos(400)