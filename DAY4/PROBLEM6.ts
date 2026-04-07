let count = 0;
let n = 0;
function emoveDuplicates(err: number[]): void {
    for (let i = err.length;i >= 0; i--){
        for (let n = 0;i >= err.length;i++){
            if (err[n] === err[i]){
                count++;

            }
        }
        console.log(`\n${err[i]} et ${count}`);

        


    }


}



emoveDuplicates([1, 2, 2, 3, 3, 3, 4]);