const userName = "ענבר המדהימה";
let index = 0;

window.addEventListener("DOMContentLoaded",()=>{
    const allCards = document.getElementsByClassName("card");
    for(j=0;j<allCards.length;j++){
        switchClassTo(allCards[j],"hideCard",j!=0);
    }


    document.getElementById("FirstNameInput").addEventListener("keydown",(event)=>{
        if (event.keyCode !== 8){
            event.preventDefault();
            document.getElementById("FirstNameInput").value += userName.charAt(document.getElementById("FirstNameInput").value.length); 
            document.getElementById("LonInNext").disabled = document.getElementById("FirstNameInput").value.length<userName.length; 
        }
        else{
            document.getElementById("LonInNext").disabled = document.getElementById("FirstNameInput").value.length-1<userName.length;
        }
       
    })

    const allNextButton = document.getElementsByClassName("next");
    for(i=0;i<allNextButton.length;i++){
        let tempI=i;
        allNextButton[i].addEventListener('click',(element)=>{
            const allCards = document.getElementsByClassName("card");
            for(j=0;j<allCards.length;j++){
                switchClassTo(allCards[j],"hideCard",j!=tempI+1);
            }
        })
    }
});


function switchClassTo(myElement, myClass, willAdd) {
    /*בדיקה האם צריך להוסיף את הקלאס או להוריד*/
    if (willAdd) {
        /*בדקיה האם לא הקלאס לא קיים*/
        if (myElement.classList.contains(myClass) == false) {
            myElement.classList.add(myClass);
        }
    }
    else {
        /*בדקיה האם לא הקלאס קיים*/
        if (myElement.classList.contains(myClass)) {
            myElement.classList.remove(myClass);
        }
    }

}