function reverse(string){
    let bag="";
    for(let i=string.length;i>=0;i--){
         bag=bag+atring[i];//concatenation
     }
    console.log(bag);
} 
let rev_str=reverse(str);
if(str==rev_str){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}