let player={name: "kushagra",
           chips: 200}; 
let cards=[]
let sum =0;
let hasBlackJack= false;
let firstcard=getRandomCard();
let secondcard=getRandomCard();
let isAlive = false ;
let message=" ";
let card=[firstcard,secondcard];
let messageEl=document.getElementById("message-el");
let sumEL=document.getElementById("sum");
let cardEl=document.getElementById("card");
let playerEl = document.getElementById("player-el");

    playerEl.textContent= "Name:"+player.name + "   " + "CHIPS:  $" + player.chips;

function startGame(){

    isAlive=true;
    renderGame();
    
}


function renderGame(){

    cardEl.textContent="Your cards are : ";

    // console.log(cardEl.textContent);

    for(let i = 0 ; i<card.length;i++){



    cardEl.textContent+= card[i] + " " ;

    sum+=card[i];

    
     }



if(sum<21){

   message = "your are still in game do you want to draw a new card";

   
   

}
else
if(sum === 21){

    message = "you have won the game";

}
else
{
   message = "All your money is gone by now";
   isAlive=false;
}


 messageEl.textContent = message;
 sumEL.textContent= "Sum:" + sum;
 console.log(messageEl.textContent);
 sum=0;

}


let message_new=messageEl.textContent;



function newCard(){

    if(isAlive=== true && sum < 22){

       let newCard = getRandomCard() ;

       card.push(newCard);

    //    sum +=newCard;

       renderGame();

    }

}

    function getRandomCard(){

        let k = Math.floor(Math.random() * 13) + 1 ;

        return k;



    }
                               
    // function rollDice(){
                                                                                                                                                                                                           


    //     let diceValue= Math.floor(Math.random() * 6) + 1;WD  s1  q2`1    `ity0  

    //     return diceValue ;


    // }





