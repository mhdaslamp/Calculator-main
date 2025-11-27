function buttonclick(value)
{
    document.getElementById("outputscreen").value=document.getElementById("outputscreen").value+value
    

}

function clearscreen(){
    document.getElementById("outputscreen").value=""
}


    var number1
    var number1=document.getElementById("outputscreen").value
    console.log(number1)    
    document.getElementById("outputscreen").value=""
    



function equalclick()
{
    var text=document.getElementById("outputscreen").value
    var result=eval(text)
    document.getElementById("outputscreen").value=result

     
    
}

