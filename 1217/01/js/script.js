const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) { 
    console.log("Please write a number");         // string 타입일때 뜨는 메세지
}else if(age < 18){
    console.log("You are too young.");            //Num이고 18보다 작을 때 뜨는 메세지
}else if(age >= 18 && age <= 50){
    console.log("You can drink");                 //Num이고 18세와 같거나 크고, 50세보다 작거나 같을 때
}else if(age > 50 && age <= 80){
    console.log("You should exercise");           //Num이고 50세 이상이며, 80세보다 작거나 같을 때
}else if( age === 100){
    console.log("wow you are wise");              //Num이고 100세 일 때
}else if(age > 80){
    console.log("You can do whatever you want."); //Num이고 80세보다 클 때 (위 else if와 순서가 중요하다!)
}