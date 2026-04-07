function arryMinMax(arr: number[]): { min: number, max: number } {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

console.log(arryMinMax([3, 7, 2, 99, 1]));   
console.log(arryMinMax([100]));              
console.log(arryMinMax([-5, -2, -10, -1]));  