function decode(message) {
    const stack = [];
    let result = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        console.log('Char actual: ' + char);

        if (char === '(') {
            console.log('Parentesis de apertura')
            // Si encontramos un paréntesis de apertura, lo agregamos a la pila
            stack.push(result);
            result = '';

            console.log('Stack: ' + stack);
            console.log('Result: ' + result);

        } else if (char === ')') {
            // Si encontramos un paréntesis de cierre, invertimos el contenido de la pila y lo agregamos al resultado actual

            console.log('Parentesis de cierre')

            const reversed = result.split('').reverse().join('');

            console.log('Reversed: ' + reversed);
            result = stack.pop() + reversed;

            console.log('Stack: ' + stack);
            console.log('Result: ' + result);
        } else {
            // Si es un caracter normal, lo añadimos al resultado actual
            result += char;

            console.log('Char normal');
            console.log('Stack: ' + stack);
            console.log('Result: ' + result);


        }
    }

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