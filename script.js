const majorArcana = loadCards();

var pastNumber;
var presentNumber;
var futureNumber;

function draw(card) {
    switch (card) {
        case "past": {
            //generazione carta con controllo
            let error;
            do {
                pastNumber = randomNumber(0, 21);
                error = (pastNumber == presentNumber || pastNumber == futureNumber) ? true : false;
            } while (error);

            const pastCard = majorArcana[pastNumber];
            const pastReversed = (randomNumber(0, 1)) ? true : false;

            //variabili
            let cardElement = document.getElementById(card + 'Card');
            let cardOverlay = document.getElementById(card + 'Overlay')

            cardElement.onclick = null;
            cardElement.style.backgroundImage = `url(${pastCard.image})`; //sfondo
            
            //ruota sfondo se necessario
            if (pastReversed) {
                cardElement.style.transform = 'rotate(180deg)';
                cardOverlay.style.transform = 'rotate(180deg)';
            } else {
                cardElement.style.transform = 'rotate(0deg)';
                cardOverlay.style.transform = 'rotate(0deg)';
            }

            //dati overlay
            let meaning = (pastReversed) ? pastCard.reversed : pastCard.upright;
            let name = (pastReversed) ? pastCard.name + " (reversed)" : pastCard.name;

            cardOverlay.innerHTML += ('<div class="row number"><div class="col">' + pastCard.number + '</div></div>');
            cardOverlay.innerHTML += ('<div class="row description"><div class="col">' + meaning + '</div></div>');
            cardOverlay.innerHTML += ('<div class="row name"><div class="col">' + name + '</div></div>');

            //scopri carta
            cardElement.classList.remove("folded");
            cardElement.classList.add("unfolded");
            break;
        }
        case "present": {
            //generazione carta con controllo
            let error;
            do {
                presentNumber = randomNumber(0, 21);
                error = (presentNumber == pastNumber || presentNumber == futureNumber) ? true : false;
            } while (error);

            const presentCard = majorArcana[presentNumber];
            const presentReversed = (randomNumber(0, 1)) ? true : false;

            //variabili
            let cardElement = document.getElementById(card + 'Card');
            let cardOverlay = document.getElementById(card + 'Overlay')

            cardElement.onclick = null;
            cardElement.style.backgroundImage = `url(${presentCard.image})`; //sfondo
            
            //ruota sfondo se necessario
            if (presentReversed) {
                cardElement.style.transform = 'rotate(180deg)';
                cardOverlay.style.transform = 'rotate(180deg)';
            } else {
                cardElement.style.transform = 'rotate(0deg)';
                cardOverlay.style.transform = 'rotate(0deg)';
            }

            //dati overlay
            let meaning = (presentReversed) ? presentCard.reversed : presentCard.upright;
            let name = (presentReversed) ? presentCard.name + " (reversed)" : presentCard.name;

            cardOverlay.innerHTML += ('<div class="row number"><div class="col">' + presentCard.number + '</div></div>');
            cardOverlay.innerHTML += ('<div class="row description"><div class="col">' + meaning + '</div></div>');
            cardOverlay.innerHTML += ('<div class="row name"><div class="col">' + name + '</div></div>');

            //scopri carta
            cardElement.classList.remove("folded");
            cardElement.classList.add("unfolded");
            break;
        }
        case "future": {
            //generazione carta con controllo
            let error;
            do {
                futureNumber = randomNumber(0, 21);
                error = (futureNumber == pastNumber || futureNumber == presentNumber) ? true : false;
            } while (error);

            const futureCard = majorArcana[futureNumber];
            const futureReversed = (randomNumber(0, 1)) ? true : false;

            //variabili
            let cardElement = document.getElementById(card + 'Card');
            let cardOverlay = document.getElementById(card + 'Overlay')

            cardElement.onclick = null;
            cardElement.style.backgroundImage = `url(${futureCard.image})`; //sfondo
            
            //ruota sfondo se necessario
            if (futureReversed) {
                cardElement.style.transform = 'rotate(180deg)';
                cardOverlay.style.transform = 'rotate(180deg)';
            } else {
                cardElement.style.transform = 'rotate(0deg)';
                cardOverlay.style.transform = 'rotate(0deg)';
            }

            //dati overlay
            let meaning = (futureReversed) ? futureCard.reversed : futureCard.upright;
            let name = (futureReversed) ? futureCard.name + " (reversed)" : futureCard.name;

            cardOverlay.innerHTML += ('<div class="row number"><div class="col">' + futureCard.number + '</div></div>');
            cardOverlay.innerHTML += ('<div class="row description"><div class="col">' + meaning + '</div></div>');
            cardOverlay.innerHTML += ('<div class="row name"><div class="col">' + name + '</div></div>');
        
            //scopri carta
            cardElement.classList.remove("folded");
            cardElement.classList.add("unfolded");
            break;
        }
    }
}

function reset() {

    location.reload();

    //#region reset-manuale
    /*pastNumber = null;
    presentNumber = null;
    futureNumber = null;

    let pastCard = document.getElementById('pastCard');
    let presentCard = document.getElementById('presentCard');
    let futureCard = document.getElementById('futureCard');

    pastCard.onclick = () => draw('past');
    presentCard.onclick = () => draw('present');
    futureCard.onclick = () => draw('future');

    pastCard.classList.add("folded");
    presentCard.classList.add("folded");
    futureCard.classList.add("folded");

    pastCard.classList.remove("unfolded");
    presentCard.classList.remove("unfolded");
    futureCard.classList.remove("unfolded");

    pastCard.style.backgroundImage = 'url(media/back.png)';
    presentCard.style.backgroundImage = 'url(media/back.png)';
    futureCard.style.backgroundImage = 'url(media/back.png)';

    let pastMeaning = document.getElementById('pastMeaning');
    let presentMeaning = document.getElementById('presentMeaning');
    let futureMeaning = document.getElementById('futureMeaning');

    pastMeaning.innerText = "";
    presentMeaning.innerText = "";
    futureMeaning.innerText = "";*/
    //#endregion
}

function randomNumber(min, max) { // min <= rand <= max
    let rand;
    rand = (Math.random() * (max - min + 1)) + min;

    return Math.floor(rand);
}

function loadCards() {
    let majorArcana = [
        {
            name: "The Fool",
            number: 0,
            upright: "New beginnings, optimism, trust in life",
            reversed: "Recklessness, taken advantage of, inconsideration",
            image: "media/the_fool.png"
        },
        {
            name: "The Magician",
            number: 1,
            upright: "Action, the power to manifest",
            reversed: "Manipulation, poor planning, untapped talents",
            image: "media/the_magician.png"
        },
        {
            name: "The High Priestess",
            number: 2,
            upright: "Inaction, going within, the mystical",
            reversed: "Lack of center, lost inner voice, repressed feelings",
            image: "media/the_high_priestess.png"
        },
        {
            name: "The Empress",
            number: 3,
            upright: "Abundance, nurturing, fertility, life in bloom!",
            reversed: "Smothering, emptiness, nosiness",
            image: "media/the_empress.png"
        },
        {
            name: "The Emperor",
            number: 4,
            upright: "Structure, stability, rules and power",
            reversed: "Tyranny, rigidity, coldness",
            image: "media/the_emperor.png"
        },
        {
            name: "The Hierophant",
            number: 5,
            upright: "Institutions, tradition, society and its rules",
            reversed: "Rebellion, subversiveness, new approaches",
            image: "media/the_hierophant.png"
        },
        {
            name: "The Lovers",
            number: 6,
            upright: "Sexuality, passion, choice, uniting",
            reversed: "Loss of balance, one-sidedness, disharmony",
            image: "media/the_lovers.png"
        },
        {
            name: "The Chariot",
            number: 7,
            upright: "Movement, progress, integration",
            reversed: "Lack of control, lack of direction, aggression",
            image: "media/the_chariot.png"
        },
        {
            name: "Strength",
            number: 8,
            upright: "Courage, subtle power, integration of animal self",
            reversed: "Self-doubt, weakness, insecurity",
            image: "media/strength.png"
        },
        {
            name: "The Hermit",
            number: 9,
            upright: "Meditation, solitude, consciousness",
            reversed: "Isolation, loneliness, withdrawal",
            image: "media/the_hermit.png"
        },
        {
            name: "Wheel of Fortune",
            number: 10,
            upright: "Cycles, change, ups and downs",
            reversed: "No control, clinging to control, bad luck",
            image: "media/wheel_of_fortune.png"
        },
        {
            name: "Justice",
            number: 11,
            upright: "Fairness, equality, balance",
            reversed: "Dishonesty, unaccountability, unfairness",
            image: "media/justice.png"
        },
        {
            name: "The Hanged Man",
            number: 12,
            upright: "Surrender, new perspective, enlightenment",
            reversed: "Stalling, needless sacrifice, fear of sacrifice",
            image: "media/the_hanged_man.png"
        },
        {
            name: "Death",
            number: 13,
            upright: "The end of something, change, the impermeability of all things",
            reversed: "Fear of change, holding on, stagnation",
            image: "media/death.png"
        },
        {
            name: "Temperance",
            number: 14,
            upright: "Balance, moderation, being sensible",
            reversed: "Extremes, excess, lack of balance",
            image: "media/temperance.png"
        },
        {
            name: "The Devil",
            number: 15,
            upright: "Destructive patterns, addiction, giving away your power",
            reversed: "Breaking free, power reclaimed",
            image: "media/the_devil.png"
        },
        {
            name: "The Tower",
            number: 16,
            upright: "Collapse of stable structures, release, sudden insight",
            reversed: "Disaster avoided, delayed disaster, fear of suffering",
            image: "media/the_tower.png"
        },
        {
            name: "The Star",
            number: 17,
            upright: "Hope, calm, a good omen!",
            reversed: "Insecurity, discouragement, faithlessness",
            image: "media/the_star.png"
        },
        {
            name: "The Moon",
            number: 18,
            upright: "Mystery, the subconscious, dreams",
            reversed: "Confusion, fear, misinterpretation",
            image: "media/the_moon.png"
        },
        {
            name: "The Sun",
            number: 19,
            upright: "Success, happiness, all will be well",
            reversed: "Negativity, depression, sadness",
            image: "media/the_sun.png"
        },
        {
            name: "Judgement",
            number: 20,
            upright: "Rebirth, a new phase, inner calling",
            reversed: "Self-doubt, lack of self-awareness, failure to learn lessons",
            image: "media/judgement.png"
        },
        {
            name: "The World",
            number: 21,
            upright: "Completion, wholeness, attainment, celebration of life",
            reversed: "Lack of completion, lack of closure",
            image: "media/the_world.png"
        }
    ];

    return majorArcana;
}