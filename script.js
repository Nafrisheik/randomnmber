
function random(n){
     if(n.toString().length==8){
        return n;
    } else{
       var a = Math.floor(Math.random()*10)+1;
        return a + random(a*n);
    }
}
var rand=random(18);
console.log(rand);