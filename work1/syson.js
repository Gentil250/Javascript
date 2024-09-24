var a, b;
a=5, b=7;
if (a>b)
{
    console.log(a);
}
else if (a<b)
{
    console.log(b);
}
else
{
    console.log("exit number");
}


var day=7;
switch (day) {


case 1: 
    console.log("monday");
    break;

    case 2 :
    
        console.log("tuesday");
        break;

        case 3:
            console.log("wednesday");
            break;
            default:

        
            console.log("exit");
            break;
}
            
            //function call
        
            function addNumbers(number1,number2)
            {
                return number1 + number2;
                }

                //function call

                let result = addNumbers(5, 3);
                console.log(result);

               // ternal operator

                var a;
                a=4;
                const k=(a>2) ? console.log("nuber is odd"):
                console.log("number is even");

                var sale;
                sale=true;
                sale=false;
                const f=(sale)? console.log("time to wait"):
                console.log("time to wait sale");

                const h=4;
                   //comparison operator
                
                const t=(h===6)? console.log("number is 6"):
                console.log("number is not 6");


                var vote;
                vote=19;
                const l=(vote>=18)? console.log("eligible to vote"):
                console.log("is not eligible to vote");
                //

                var age=30, degree="a0";
                if (age>=30 && degree==="a0"){
                    console.log("this person are eligible");}
                else {
                console.log("the person are not allowed");}
                //
                var degree="software";
                if(degree==="it" || degree==="computer science"){
                    console.log("welcome");
                }
                else {
                    console.log("not allowed");
                }

                //

                var student="gentil";
                if (!(student==="hello")) {
                    console.log("this guy are not serious");
                
                }
else{
    console.log("this is a student");
}


// function


    function name()
    

{
    console.log("welcome");

}
name()




function x(name="gentil")
{
    console.log(` hello ${name}`)
}

x("aime")
//
function d(name,product)
{
    console.log ("thank you " +[name] ,"purchasing "  +[product])
}
 d("gentil", "shoes");

 //
 function s(length,widith)
 {
console.log(length * widith )
 }
 s(50,10)
 //
 function N(name)
 {
    console.log(`conguratulation ${name}`)
 }
 N("Alice");
 //

 function g(item="milk",item1="bread")  //  default parameter
 {
    console.log("remember to buy " + [item], "and " +[item1])
 }
 
 
 //
function rectarea(w,l)
{
 var area= w*l
 
 return area
 }
 console.log(rectarea(3,4))

 function info(item3="emai", item4="age")
 
{
    var enter="allowed"
if (item3==="email" && item4==="age"){
    return enter
}


    return "person are not allowed"

}
 
 console.log (info())

 //

 function ss(product="sugar" , product2="ice")
 {
    console.log("remember to buy " + [product] , "and " + [product2]);

 }
 
 ss()
 //

 function info(item3="emai", item4="age")
 
 {
     var enter="allowed"
 if (item3==="email" && item4==="age"){
     return enter
 }
 
 
     return "person are not allowed"
 
 }
  
  console.log (info())  //

function gg(n1=10, n2=8, n3=5)
{

 if(n1>n2 && n2>n3){
        return n1
}
else if (n2>n1 && n1>n2){
    return n2
}
else {
   
 } return n3
}
console.log(gg())
//console.log(g(10))


  









 


















            

        
    

