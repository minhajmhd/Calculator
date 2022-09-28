// 1. Display number in text box
function displayNumber(num) {
    result.value+=num;
}

// 2. Clear text box
function clearbox(){
    result.value='';
}

// 3. Evaluate expression
function evaluateExpression() {
    expression=result.value;
    output=eval(expression);
    result.value=output;
}

// 3. Remove last item from text box
function removeLastItem() {
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}