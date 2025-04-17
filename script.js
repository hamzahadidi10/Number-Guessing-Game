const maxNum =100
const minNum =1
const result = Math.floor(Math.random()*(maxNum-minNum+1))

let valid = true
let attempts = 0;
while(valid){

    answer=window.prompt(`Choose a number between ${minNum} and ${maxNum}`)
    answer=Number(answer)

    if(isNaN(answer)){
        window.alert("Enter a valid number")
    }
    else if(answer>maxNum || answer<minNum){
        window.alert("Enter a valid number")
    }
    else{
        attempts++
        if(answer > result){
            window.alert("TOO BIG try again")
    }
    else if(answer < result){
        window.alert("TOO SMALL try again")
    }
    else if(answer == result){
        window.alert(`CORRECT! Congratulations it took you ${attempts} attempts `);
        valid=false
}}}

