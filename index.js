// takeANumber adds customer to line
var takeANumber = function(katzDeliLine, newCustomer) {
    katzDeliLine.push(newCustomer)
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}
// nowServing announces customer, removes them from array, returns message if empty


// currentLine accepts current line of people and returns string
