
document.getElementById("submit").addEventListener("click",Fibonacci)

function Fibonacci(){
    let list = [1,1]
    let number = parseInt(document.getElementById("number").value);
    for (i= 0; i < number; i++){
        if (list[i] + list[i+1] > number) break
        list.push(list[i] + list[i + 1]);
    
    }
    
    
    document.getElementById("screen").innerHTML = list
}