let a = prompt("Hey whats your age ")
a = Number . parseInt(a)// Convert to string to number
if (a>0){
    alert("This is a valid age ")
}
else if (a<9) {
    alert(" You are kid and you connot even think of deriving")
}
else if (a<18 && a>=9){
    alert("You are a kid and you  can think  even  think of deriving 18")
}
else{
    alert("You can now drive as you are above 18")
}