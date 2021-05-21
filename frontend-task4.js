//FRONTEND TASK 4a

function convertFahrToCelsius(inp) {
    let C;

    if (typeof(Number(inp)) == "number" && typeof(Number(inp)) != "object") {
        C = (((Number(inp)) - 32) * (5/9)).toFixed(4);
    }

    if (Array.isArray(inp) == true) {
        C = `[${inp}] is not a valid number but a/an array.`
    } 

    if (typeof(inp) == "object" && Array.isArray(inp) == false) {
        C = `${JSON.stringify(inp)} is not a valid number but a/an object.`
    }
    return C;
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));

//FRONTEND TASK 4b

function checkYuGiOh (n) {
    if (isNaN(n)){
        return `invalid parameter: \"${n}\"`; 
    } else {
        const arr = [];

        for (let i = 1; i <= n; i++){
            let output = "";
            if(i % 2 == 0){
                output += "yu";
                if(output.length >= 2) output += "-";
            }
            if(i % 3 == 0){
                output += "gi";
            if(output.length >= 2) output += "-";
            }
            if(i % 5 == 0){ 
                output += "oh";
            if(output.length >= 2) output += "-";
            }
            if (output.charAt(output.length-1) == "-"){ 
                output = output.slice(0, output.length-1);
            }
            arr.push(output || i);
        }
        return arr;
    }
}

console.log(checkYuGiOh(10)); //should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
console.log(checkYuGiOh("5")); //should return [1, "yu", "gi", "yu", "oh"]
console.log(checkYuGiOh("fizzbuzz is meh")); //should return `invalid parameter: "fizzbuzz is meh"`