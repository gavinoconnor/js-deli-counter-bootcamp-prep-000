// takeANumber adds customer to line
var takeANumber = function(katzDeliLine, newCustomer) {
  for (i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(`Welcome, ${newCustomer[i]}. You are number ${katzDeliLine.length + 1} in line.`)
  }  
}
// nowServing announces customer, removes them from array, returns message if empty


// currentLine accepts current line of people and returns string
