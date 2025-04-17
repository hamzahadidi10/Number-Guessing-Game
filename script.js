const maxNum =100
const minNum =1
const result = Math.floor(Math.random()*(maxNum-minNum+1))

console.log(result)
let valid = true
let attempts = 0;
answer=window.prompt(`Choose a number between ${minNum} and ${maxNum}`)

if(isNaN(answer)){
    window.alert("Enter a valid number")
    answer=window.prompt(`Choose a number between ${minNum} and ${maxNum}`)
}
else if(answer>maxNum || answer<minNum){
    window.alert("Enter a valid number")
    answer=window.prompt(`Choose a number between ${minNum} and ${maxNum}`)
}
while(valid)
if(answer > result){
    window.alert("TOO BIG try again")
    answer=window.prompt(`Choose a number between ${minNum} and ${maxNum}`)
    attempts++
}
else if(answer < result){
    window.alert("TOO SMALL try again")
    answer=window.prompt(`Choose a number between ${minNum} and ${maxNum}`)
    attempts++
}
else if(answer == result){
    window.alert(`CORRECT! Congratulations it took you ${attempts} attempts `)
    attempts++
    valid=false
}

