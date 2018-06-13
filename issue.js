// function fetchIssues (){
//     var issues = JSON.parse(localStorage.getItem('Issues'));
//     var issuesListe = document.getElementById('IssuesList');

//     issuesList.innerHTML = '';

//     for (var i = 0; i < issues.length; i++){
//         var id =issues[i].id;
//         var Description = issues[i].Description;
//         var Severity = issues[i].Severity;
//         var AssignedTo = issues[i].AssignedTo;
//         var status = issues[i].status;
//     }
// }
/*
var dbSentence=[
    "My Dad is the most gentle man on earth",
    "My Mom is the most beautiful woman and understanding too",
    "My brother is my nigga",
    "My Sisters are my jewels",
    "Mehn I can kill for their sake",
    "Dont joke with them",
    "God bless you all"
]
function mysentence (val){

}

dbSentence.forEach(function(value, index, array){
    let str = value.split(' ');
    str.reverse();
    alert(str);
    let correct = document.getElementById(words);
   // let correct = document.getElementById(btn);
    // // check.addEventListener("click", show);
    // // function show(){
    // //     if(correct = dbSentence){
    // //         alert("you are very correct")
    // //     } else{
    // //         alert("you are incorrect")
    // //     }
    // }
}
)

// <!DOCTYPE HTML>

// <html>

//     <head>

//         <title>Strings</title>

//     </head>

//     <body>

//         <script>

                 function checkIf(answer,array){

                        if(answer === array.join(" ")){

                        result +=countUp;

                        let passMsg = ("You are correct");

                            msg = passMsg;

                        }else if(answer !== array.join(" ")){

                        countUp = 0;

                        countDown = -10;

                        result = countUp + countDown;

                        let failMsg = ("You are wrong");

                         msg = failMsg;

                        }

                    alert(`${msg}. \n You have ${result} points.`);

                    }



                let arrays =[ 

                ['Yesterday', 'I', 'was', 'clever'],

                ['I', 'will', 'change', 'the', 'world'],

                ['The', 'world', 'does', 'not', 'reward', 'perfectionists'],

                ['Risk', 'everything', 'to', 'win', 'everything']];

                let msg;

                let result = 0;

                let countUp = 20;

                let countDown = -10;



                function checkWord(array){              

                let wordslice0 = array.slice(0,1);

                let wordslice1 = array.slice(1,2);

                let wordslice2 = array.slice(2,3);

                let wordslice3 = array.slice(3,4);

                let wordslice4 = array.slice(4,5);

                let wordslice5 = array.slice(5,6);

                let wordslice6 = array.slice(6,7);

                let wordslice7 = array.slice(7,8);

                let wordslice8 = array.slice(8,9);

                let wordslice9 = array.slice(9,10);

                let wordslice10 = array.slice(10,11);

                let wordslice11 = array.slice(11,12);

                let wordslice12= array.slice(12,13);

                let wordslice13 = array.slice(13,14);

                



                let oddWord = (`${wordslice3} ${wordslice13} ${wordslice0} ${wordslice4} ${wordslice2} ${wordslice1} ${wordslice5} ${wordslice12} ${wordslice8} ${wordslice6} ${wordslice9} ${wordslice11} ${wordslice7} ${wordslice10}`);



                   

                let answer = prompt(`CORRECT THE SENTENCE:\n ${oddWord}`,  `your answer`);

                    checkIf(answer,array);    

                }

            
// ++


//         </script>

       

//     </body>
*/
// document.querySelector('#btn').addEventListener('click', function(e){
//     e.target.textContent = 'Lacababa'
// })