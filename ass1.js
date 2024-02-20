
//ass1
/*-->lire gauch!!
لديك Array تحتوي على أرقام
قم بعمل ال Destructuring Assignment 
لتحصل على النتيجة المطلوبة في النهاية داخل 
ال Console*/

let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
[a,,,,e]=myNumbers

console.log(a * e); // 5

console.log("---------------------------------------------"); 
//ass2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
[a,b,c,[d,e,[f,g]]]=mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

console.log("-----------------------------------------------------"); 
//ASS3
/*
لديك أكثر من Array تحتوي على أسماء أصدقائك
يمكنك عمل ما تريد وإستخدام ما تعلمته لتهيء البيانات لعملية ال Destructuring
قم بعمل ال Destructuring Assignment لتحصل على النتيجة المطلوبة في النهاية داخل ال Console
ي*/



let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let arr4=["Haytham", "Shady", "Mahmoud",["Ahmed", "Sameh", "Sayed"]];
//let arr4=[arr3,[arr1]];
  [,a,b,[c]]=arr4;
// Write Your Destructuring Assignment Here

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed


console.log("-----------------------------------------------------"); 

//ASS4
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here
   const {age:a4,working:w, country:c4, hobbies:[h1,,h3]} = member;
  
  console.log(`My Age Is ${a4} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${c4}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

  console.log("-----------------------------------------------------");


  
//ASS5
  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
     "Oath In Felghana": ["USA", "Japan"],
     "Ark Of Napishtim": { US: "20 USD", JAP: "10 USD",},
      Origin: "30 USD",
    },
  };
  
  // Write Your Destructuring Assignment/s Here
  const{title:t,developer:d5,releases:r}=game;
  const[o,a5]=Object.keys(r);
  const{"Oath In Felghana":[u,j], "Ark Of Napishtim":{US:u_price,JAP:j_price}, Origin:or }= r;
  //, a5:{u_price,j_price},or}}=game;
  //,a5{u_price,j_price}}
  console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
  
  console.log(`And I Love ${d5} Games`);
  // And I Love Falcom Games
  
  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
  
  console.log(`Although I Love ${a5}`);
  // Although I Love Ark Of Napishtim
  
  console.log(`${a5} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${a} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
  
  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD

  



  /*
  //challenge
let chosen= 3;
//let stat,stat2,stat3;
let myfriend=[
{title:"osama",age:39,av:true,skills:["html","css"]},
{title:"o",age:40,av:false,skills:["python","django"]},
{title:"s",age:50,av:true,skills:["php","laravel"]},
];

 if (chosen ==1){
    
 let [{title,age,av, skills: [,b]}]  = myfriend ;
 if ( av== true){
   stat="avalaibel"
 }else{
    stat=" not ava"
 }
 console.log(`${title}--${age}--${stat}--${b}`)
 }
 
 else if (chosen ==2){
    
    let [{},{title:t2,age:a2,av:av2, skills: [,d]},{}]  = myfriend ;
    if ( av2 == true){
       stat2="avalaibe2"
    }else{
      stat2=" not ava2"
    }
    console.log(`${t2}--${a2}--${stat2}--${d}`)
    }

    
    else if(chosen ==3){
    
        let [{},{},{title:t3,age:a3,av:av3, skills: [,l]}]  = myfriend ;
        if ( av3== true){
           stat3="avalaibe3";
        }else{
           stat3=" not ava3";
        }
        console.log(`${t3}--${a3}--${stat3}--${l}`);
        }
        else{
            console.log("not exist")
        }
*/