/*--Initial----------------------------------------------------------------------------------------------------------------------------------------*/
window.oncontextmenu = (e)=>{e.preventDeafult()}
window.onload = initLoad;

const allElements = [
    "Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon",
    "Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium",
    "Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc",
    "Galliumm","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium",
    "Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin",
    "Antimony","Tellerium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium",
    "Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium",
    "Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury",
    "Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium",
    "Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium",
    "Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium",
    "Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"
];
const allElementNames = [
    "Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon",
    "Sodium","Magnesium","Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium",
    "Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc",
    "Galliumm","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium",
    "Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin",
    "Antimony","Tellerium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium",
    "Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium",
    "Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury",
    "Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium",
    "Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium",
    "Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium",
    "Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson"
];

// Add the following inside your initLoad function or directly in your script
document.querySelector("#NFT").onclick = () => {
    window.location.href = "https://getgems.io/collection/EQAEdRMJO6ftCM0tq2sqvYQ2n2Ojx4JdjrBUpTiJMKu3Wpt7";



}


function initLoad(){
    let gameScreen = document.querySelector("#game-screen");
    let playAgain = document.querySelector("#play-again");

    document.querySelector("#play").onclick = ()=>{
        let gameTitle = document.querySelector(".game-title");
        gameTitle.style.top = "calc(50% - min(1vh,1.5vw))";
        playAgain.onclick = ()=>{initGame("READY FOR THE TEST?"); newRound(0,0)}
        
        initGame("READY FOR THE TEST?");
        fadeInElem(gameScreen,"block",()=>{
            setTimeout(()=>{
                gameTitle.style.animation = "moveDown ease-in-out 0.2s";
                gameTitle.onanimationend = ()=>{
                    gameTitle.style.animation = "none";
                    gameTitle.onanimationend = null;

                    gameTitle.style.top = "calc(100% - min(40vh,60vw))";
                    fadeInElem(document.querySelector("#button-holder-1"),"block",null);
                    newRound(0,0);
                }
            },1000);
        });
    }
    document.querySelector("#practice").onclick = ()=>{
        let gameTitle = document.querySelector(".game-title");
        gameTitle.style.top = "calc(50% - min(1vh,1.5vw))";
        playAgain.onclick = ()=>{
            let imgHolder = document.querySelector(".img-holder");
            fadeOutElem(imgHolder.lastChild,()=>{imgHolder.lastChild.remove()});
            fadeOutElem(document.querySelector("#button-holder-2"),null);
            fadeOutElem(document.querySelector("#button-holder-1"),()=>{
                initGame("REPEAT CORRECTLY!");
                gameTitle.style.animation = "moveUp ease-in-out 0.2s";
                gameTitle.onanimationend = ()=>{
                    gameTitle.style.top = "calc(50% - min(1vh,1.5vw))";
                    gameTitle.style.animation = "none";
                    gameTitle.onanimationend = null;
                    setTimeout(()=>{
                        gameTitle.style.animation = "moveDown ease-in-out 0.2s";
                        gameTitle.onanimationend = ()=>{
                            gameTitle.style.animation = "none";
                            gameTitle.onanimationend = null;

                            gameTitle.style.top = "calc(100% - min(40vh,60vw))";
                            practiceAnimation(0);
                            newRound(0,1,0);
                        }
                    },1000);
                }
            }); 
        }

        initGame("REPEAT CORRECTLY!");
        fadeInElem(gameScreen,"block",()=>{
            setTimeout(()=>{
                gameTitle.style.animation = "moveDown ease-in-out 0.2s";
                gameTitle.onanimationend = ()=>{
                    gameTitle.style.animation = "none";
                    gameTitle.onanimationend = null;

                    gameTitle.style.top = "calc(100% - min(40vh,60vw))";
                    practiceAnimation(0);
                    newRound(0,1,0);
                }
            },1000);
        });
    }
    document.querySelector("#back-to-menu").onclick = ()=>{
        document.querySelector(".game-title").style.top = "calc(50% - min(1vh,1.5vw))";
        fadeOutElem(document.querySelector("#button-holder-1"),null);
        fadeOutElem(gameScreen,null);
    }
}
function fadeInElem(elem,display,callback){
    elem.style.animation = "fadeIn ease-in-out 0.2s";
    elem.style.display = display;
    elem.onanimationend = ()=>{
        elem.style.animation = "none";
        elem.onanimationend = null;
        if(callback) callback();
    }
}
function fadeOutElem(elem,callback){
    elem.style.animation = "fadeOut ease-in-out 0.2s";
    elem.onanimationend = ()=>{
        elem.style.animation = "none";
        elem.style.display = "none";
        elem.onanimationend = null;
        if(callback) callback();
    }
}

/*--Game Logic-------------------------------------------------------------------------------------------------------------------------------------*/
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function initGame(text){
    document.querySelector(".game-title").innerHTML = text;
    document.querySelector("#button-holder-2").style.display = "none";
    let imgHolder = document.querySelector(".img-holder");
    while(imgHolder.children.length > 0) imgHolder.removeChild(imgHolder.lastChild);
}
function newRound(currElem,gamemode,endElem){
    let choices = [];
    let rightChoice = random(0,3);
    while(choices.length < 4){
        if(choices.length === rightChoice) choices.push(currElem);
        else{
            let valid = true;
            let currChoice = random(0,allElements.length-1);
            if(currChoice === currElem) valid = false;
            for(let i = 0; i < choices.length; i++){
                if(choices[i] === currChoice){
                    valid = false;
                    break;
                }
            }
            if(valid) choices.push(currChoice);
        }
    }
    let smallButtons = document.querySelectorAll(".small-button");
    for(let i = 0; i < smallButtons.length; i++){
        smallButtons[i].innerHTML = allElements[choices[i]];
        if(!gamemode) smallButtons[i].onclick = ()=>{playChoiceMade(choices[i],currElem)}
        else smallButtons[i].onclick = ()=>{practiceChoiceMade(choices[i],currElem,endElem)}
    }
}
function playChoiceMade(curr,right){
    let imgHolderContainer = document.querySelector(".img-holder-container");
    let imgHolder = document.querySelector(".img-holder");
    let gameTitle = document.querySelector(".game-title");

    if(curr === right){
        gameTitle.innerHTML = "Correct!";
        let newImg = document.createElement("div");
        newImg.className = "img";
        newImg.style.backgroundImage = "url('./images/"+(curr+1)+".png')";

        if(curr === 0){
            newImg.style.width = "100%";
            imgHolder.appendChild(newImg);
        }
        else if(curr === 1){
            imgHolder.children[0].style.animation = "shrink ease-in-out 0.2s";
            imgHolder.children[0].onanimationend = ()=>{
                imgHolder.children[0].style.animation = "none";
                imgHolder.children[0].onanimationend = null;
                imgHolder.children[0].style.width = "30%";
                imgHolder.style.bottom = imgHolderContainer.offsetHeight-imgHolder.offsetHeight+"px";
                imgHolder.appendChild(newImg);
            }
            let elapsedTime = 0;
            let tempInterval = setInterval(()=>{
                imgHolder.style.bottom = imgHolderContainer.offsetHeight-imgHolder.offsetHeight+"px";
                if(elapsedTime >= 200) clearInterval(tempInterval);
                elapsedTime += 16;
            },16);
        }
        else imgHolder.appendChild(newImg);

        curr++;
        if(curr < 118) newRound(curr,0);
        else{
            gameTitle.innerHTML = "You Win!";
            fadeInElem(document.querySelector("#button-holder-2"),"block",null);
        }
        if(curr >= 10) imgHolder.style.bottom = "0px";
        else imgHolder.style.bottom = imgHolderContainer.offsetHeight-imgHolder.offsetHeight+"px";
    }
    else{
        fadeInElem(document.querySelector("#button-holder-2"),"block",null);
        gameTitle.innerHTML = "It's "+allElementNames[right]+"!";
        while(imgHolder.children.length > 0) imgHolder.removeChild(imgHolder.lastChild);
        let newImg = document.createElement("div");
        newImg.style.width = "100%";
        newImg.className = "img";
        newImg.style.backgroundImage = "url('./images/"+(right+1)+".png')";
        imgHolder.style.bottom = "0px";
        imgHolder.appendChild(newImg);
    }
}
function practiceChoiceMade(curr,right,end){
    let imgHolderContainer = document.querySelector(".img-holder-container");
    let imgHolder = document.querySelector(".img-holder");
    let gameTitle = document.querySelector(".game-title");

    if(curr === right){
        gameTitle.innerHTML = "Correct!";
        let newImg = document.createElement("div");
        newImg.className = "img";
        newImg.style.backgroundImage = "url('./images/"+(curr+1)+".png')";

        if(curr === 0){
            newImg.style.width = "100%";
            imgHolder.appendChild(newImg);
        }
        else if(curr === 1){
            imgHolder.children[0].style.animation = "shrink ease-in-out 0.2s";
            imgHolder.children[0].onanimationend = ()=>{
                imgHolder.children[0].style.animation = "none";
                imgHolder.children[0].onanimationend = null;
                imgHolder.children[0].style.width = "30%";
                imgHolder.style.bottom = imgHolderContainer.offsetHeight-imgHolder.offsetHeight+"px";
                imgHolder.appendChild(newImg);
            }
            let elapsedTime = 0;
            let tempInterval = setInterval(()=>{
                imgHolder.style.bottom = imgHolderContainer.offsetHeight-imgHolder.offsetHeight+"px";
                if(elapsedTime >= 200) clearInterval(tempInterval);
                elapsedTime += 16;
            },16);
        }
        else imgHolder.appendChild(newImg);
        //imgHolder.style.bottom = imgHolderContainer.offsetHeight-imgHolder.offsetHeight+"px";

        curr++;
        if(curr < 118){
            if(curr <= end) newRound(curr,1,end);
            else{
                setTimeout(()=>{
                    while(imgHolder.children.length > 0) imgHolder.removeChild(imgHolder.lastChild);
                    imgHolder.style.bottom = "0px";
                    fadeOutElem(document.querySelector("#button-holder-1"),()=>{
                        initGame("");
                        gameTitle.style.top = "calc(50% - min(1vh,1.5vw))";
                        gameTitle.style.animation = "none";
                        gameTitle.onanimationend = null;
                        setTimeout(()=>{
                            gameTitle.style.top = "calc(100% - min(40vh,60vw))";
                            gameTitle.style.animation = "none";
                            gameTitle.onanimationend = null;
                                
                            end++;
                            curr = end-2;
                            if(curr < 0) curr = 0;
                            practiceAnimation(end);
                            newRound(0,1,end);
                        },500);
                    }); 
                },1000);
            }
        }
        else{
            gameTitle.innerHTML = "You Win!";
            fadeInElem(document.querySelector("#button-holder-2"),"block",null);
        }
        if(curr >= 10) imgHolder.style.bottom = "0px";
        else imgHolder.style.bottom = imgHolderContainer.offsetHeight-imgHolder.offsetHeight+"px";
    }
    else{
        fadeInElem(document.querySelector("#button-holder-2"),"block",null);
        gameTitle.innerHTML = "It's "+allElementNames[right]+"!";
        while(imgHolder.children.length > 0) imgHolder.removeChild(imgHolder.lastChild);
        let newImg = document.createElement("div");
        newImg.style.width = "100%";
        newImg.className = "img";
        newImg.style.backgroundImage = "url('./images/"+(right+1)+".png')";
        imgHolder.style.bottom = "0px";
        imgHolder.appendChild(newImg);
    }
}
function practiceAnimation(currElem){
    let imgHolder = document.querySelector(".img-holder");
    for(let i = 0; i <= currElem; i++){
        let letter = document.createElement("div");
        letter.innerHTML = allElements[i];
        letter.className = "letter";
        let time = (1000-(currElem-i)*100);
        if(time < 100) time = 100;
        setTimeout(()=>{
            while(imgHolder.children.length > 0) imgHolder.removeChild(imgHolder.lastChild);
            imgHolder.appendChild(letter);
            if(i === currElem) setTimeout(()=>{
                if(imgHolder.children.length > 0) fadeOutElem(imgHolder.lastChild,()=>{imgHolder.lastChild.remove()},null);
                fadeInElem(document.querySelector("#button-holder-1"),"block",null);
                document.querySelector(".game-title").innerHTML = "REPEAT CORRECTLY!";
            },1000);
        },i*time);
    }
}