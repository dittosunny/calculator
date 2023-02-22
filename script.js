
 //dispaly number in textbox
 function displaynumber(num) 
 {
 display.value+=num
 console.log(num);
 }

 
 //clear text box
function clearbox()
{
display.value=""
}


 //evaluate expression     
function evaluateexpression() 
{
exp = display.value;
output = eval(exp);
display.value = output;
}


//remove last item
function removelastitem() {
    currentexp = display.value
    display.value=currentexp.slice(0,-1)
}

    
