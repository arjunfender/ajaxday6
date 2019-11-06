// function loadDoc(){

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){

//         if(this.readyState ==4 && this.status == 200){

//             document.getElementById("demo").innerHTML = this.responseText;

//         }
//     };

//     xhttp.open("GET", "ajax_info.txt", true);
//     xhttp.send();
// }

//-----json parsing object to string-----//
// function loadDoc(){

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){

//         if(this.readyState ==4 && this.status == 200){

           
//             var myObj = JSON.parse(this.responseText);
//             var mylist = myObj.text_out;
//             document.getElementById("demo").innerHTML = mylist;


//         }
//     };

//     xhttp.open("GET", "https://www.randomtext.me/api/lorem/ul-5/5-15", true);
//     xhttp.send();
// }



// varconsole.log (numbers); numbers = [45, 4, 9, 16, 25];
// var sum = numbers.reduce(myFunction);


// document.getElementById("demo").innerHTML = "The sum is " + sum;


// function myFunction(total, value, index, array) {
   
//   return total + value;
     
// }
// console.log (numbers);


//==========promise function===============//

// var promise1 = new Promise(function(resolve, reject){

//     const x =10;
//     const y =10;
//     if(x===y){
//         resolve();
//     }   else{
//                 reject();
//             }

// });

// promise1.
//         then(function(){
//             console.log('equal')
//         },

//             function(){
//                 console.log('Not equal')
//             }
//         );

//=============then & catch in Promise function=============//
// var promise1 = new Promise(function(resolve, reject){

//         const x =10;
//         const y =10;
//         if(x===y){
//             resolve("Success");
//         }   else{
//                     reject("Failed");
//                 }
    
//     });
//     promise1.
//         then(function(msg){
//             console.log(msg)
//         }).

//             catch(function(msg){
//                 console.log(msg)
//             });

//========promise with async and catch===========////

async function f(){

    let promise = new Promise((resolve, reject) => {

            var x = 4;
            var y = 2; 
         setTimeout(() => {

            if(x==y){
                    resolve("Done");
            }
            else{ reject("rejected")   }
         }, 1000)   

    }

);

    await promise.
        then(function(msg){
            console.log(msg);
        }).
        catch(function(err){
            console.log(err);
        })
}
f();