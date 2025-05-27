/*
1. Skapa objekt för varje förolämpning
*/

    function randomInsult() {
        let random = Math.floor(Math.random() * listOfInsults.length)
                return listOfInsults[random];
}

const buttonElem = document.querySelector("#generate-an-insult")
const outputElem = document.querySelector("#message")

const listOfInsults = [];

    const insultOne = {
        insult: "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
        play: "Macbeth"
    }
    const insultTwo = {
        insult:"Never hung poison on a fouler toad",
        play:"Richard III",
    }
    const insultThree = {
        insult:"He thinks too much: such men are dangerous.",
        play:"Julius Ceasar",
    }
    const insultFour = {
        insult:"Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.",
        play:"The Merchant of Venice",
    }
    const insultFive = {
        insult:"Give me your hand...I can tell your fortune. You are a fool.",
        play:" The Two Noble Kinsmen",
    }
    const insultSix = {
        insult:"He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
        play:"The Tempest",
    }
    const insultSeven = {
        insult:"It is a tale Told by an idiot, full of sound and fury, Signifying nothing",
        play:"Macbeth",
    }
    const insultEight = {
        insult:"Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.",
        play:"Titus Andronicus",
    }
    const insultNine = {
        insult:"He hath eaten me out of house and home; he hath put all substance into that fat belly of his. ",
        play:"Henry IV, Part 2",
    }
    const insultTen = {
        insult:"Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
        play:"Romeo and Juliet",
    }

    listOfInsults.push(insultOne);
    listOfInsults.push(insultTwo);
    listOfInsults.push(insultThree);
    listOfInsults.push(insultFour);
    listOfInsults.push(insultFive);
    listOfInsults.push(insultSix);
    listOfInsults.push(insultSeven);
    listOfInsults.push(insultEight);
    listOfInsults.push(insultNine);
    listOfInsults.push(insultTen);

    console.log(listOfInsults);


buttonElem.addEventListener("click", function() {
    let insult = randomInsult();
    
    outputElem.textContent = "The insult of the day is: " + insult.insult + " From the play: " + insult.play
});