function countVowels(str: string): number {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello"));     
console.log(countVowels("TYPESCRIPT")); 
console.log(countVowels("aeiou"));      
console.log(countVowels("xyz"));        