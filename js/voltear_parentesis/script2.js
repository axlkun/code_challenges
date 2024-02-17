function decode(message){

     let stack = [];
     let result = '';

    for(let i=0; i<message.length; i++){

        char = message[i];

        console.log('Letra: ' + char);

        if(char === "("){
            console.log('Parentesis apertura');

            stack.push(result);
            result = '';

            console.log('Stack: ' + stack);
            console.log('Result: ' + result);

        }
        else if(char === ")"){
            console.log('Parentesis cierre');

            reverseResult = result.split('').reverse().join('');
            result = stack.pop() + reverseResult;
            
            console.log('Reverse: ' + reverseResult);
            console.log('Stack: ' + stack);
            console.log('Result: ' + result);

        }
        else{
            console.log('Letra normal');
            result += char;
            console.log('Stack: ' + stack);
            console.log('Result: ' + result);

        }
    }

    console.log(result);

    return result;
}

//   const a = decode('hola (odnum)')
//   console.log(a) // hola mundo
  
const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

//   const c = decode('sa(u(cla)atn)s')
//   console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus