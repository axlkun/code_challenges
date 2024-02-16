function findNaughtyStep(original, modified) {
    
    let result = '';

    let originalChars = original.split("");
    let modifiedChars = modified.split("");

    for(let i=0;i<modifiedChars.length;i++){

        if(modifiedChars[i] !== originalChars[i]){

            if(modifiedChars.length > originalChars.length){
                result = modifiedChars[i];
            }else{
                result = originalChars[i];
            }
            
            break;
        }
    }

    console.log(result);

    return result;
}

// const original = 'abcd'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''