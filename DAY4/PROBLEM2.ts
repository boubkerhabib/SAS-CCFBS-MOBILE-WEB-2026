function reverseName(index: string): string {
    let reversed: string = ""; 
    for (let i = index.length - 1; i >= 0; i--) {

        reversed += index[i]; 
    }
    return reversed;
}


console.log(reverseName("hello"));     
console.log(reverseName("TypeScript")); 
console.log(reverseName("abcde"));      