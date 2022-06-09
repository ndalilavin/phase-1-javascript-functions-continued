// code your solution here
const mondayWork = (function(mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`
})

function saturdayFun (satudayActivity = "roller-skate"){
    return `This Saturday, I want to ${satudayActivity}!`
}

const wrapAdjective = function(symbol = "*"){
    return function(adjective = "special"){
        return `You are ${symbol}${adjective}${symbol}!`
    }
}