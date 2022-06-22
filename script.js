
function dis(val)
{
document.getElementById("Put_value").value+=val
 }

function solve()
{
let x = document.getElementById("Put_value").value
let y = eval(x)
document.getElementById("Put_value").value = y
}

function clr()
{
document.getElementById("Put_value").value = ""
}

function del()
{
    Put_value.value = Put_value.value.substr(0,Put_value.value.length-1)
}