// Sets the canvas and canvas context
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Predefined Javamon to be picked from for use in battle
let javamon = [
    {name: 'Bulbasaur',
        health: 100,
        type: 'grass',
        sprite: 'src',},
    {name: 'Geodude',
        health: 100,
        type: 'rock',
        sprite: 'src',},
    {name: 'Entei',
        health: 100,
        type: 'fire',
        sprite: 'src',},
    {name: 'Piplup',
        health: 100,
        type: 'water',
        sprite: 'src',},
    {name: 'Nidoran',
        health: 100,
        type: 'poison',
        sprite: 'src',},
    {name: 'Meowth',
        health: 100,
        type: 'normal',
        sprite: 'src',},
    {name: 'Abra',
        health: 100,
        type: 'psychic',
        sprite: 'src',},
    {name: 'Poliwag',
        health: 100,
        type: 'water',
        sprite: 'src',},
    {name: 'Ponyta',
        health: 100,
        type: 'fire',
        sprite: 'src',},
    {name: 'Onyx',
        health: 100,
        type: 'rock',
        sprite: 'src',},
    {name: 'Kangaskhan',
        health: 100,
        type: 'normal',
        sprite: 'src'},
    {name: 'Eevee',
        health: 100,
        type: 'normal',
        sprite: 'src',},
    {name: 'Porygon',
        health: 100,
        type: 'normal',
        sprite: 'src',},
    {name: 'Sudowoodo',
        health: 100,
        type: 'rock',
        sprite: 'src',},
    {name: 'Garchomp',
        health: 100,
        type: 'dragon',
        sprite: 'src',},
]

// Defines array for players to create their own Javamon
let userJavamon= [];

// Defines array for player's Javamon to be stored
let player1Javamon=[];
let player2Javamon = [];

// Defines moves to be chosen from according to type when Javamon are picked
// pp is the amount of times a move may be used, ranges from 4-8 according to amount of power
// Speed determines which move will go first in a turn. The higher the number, the quicker it is
// Range for speed is from 1-5 
let moveSet = [
    {type: 'grass',
        moves: [
            {name: 'Razor Leaf', power: 55, pp: 8, speed: 5},
            {name: 'Leaf Tornado', power: 65, pp: 8, speed: 5},
            {name: 'Frenzy Plant', power: 120, pp: 5, speed: 2},
            {name: 'Leaf Blade', power: 90, pp: 6, speed: 3},
            {name: 'Leaf Storm', power: 110, pp: 5, speed: 2},
            {name: 'Needle Arm', power: 60, pp: 8, speed: 5},
            {name: 'Power Whip', power: 100, pp: 6, speed: 3},
            {name: 'Solar Beam', power: 110, pp: 5, speed: 2},
        ]},
    {type: 'rock',
        moves: [
            {name: 'Rollout', power: 40, pp: 8, speed: 5},
            {name: 'Smack Down', power: 55, pp: 8, speed: 5},
            {name: 'Head Smash', power: 130, pp: 4, speed: 1},
            {name: 'Rock Tomb', power: 70, pp: 7, speed: 4},
            {name: 'Rock Slide', power: 80, pp: 7, speed: 4},
            {name: 'Diamond Storm', power: 110, pp: 5, speed: 2},
            {name: 'Rock Blast', power: 90, pp: 6, speed: 3},
            {name: 'Ancient Power', power: 99, pp: 6, speed: 3},
        ]},
    {type: 'fire',
        moves: [
            {name: 'Blast Burn', power: 130, pp: 4, speed: 1},
            {name: 'Ember', power: 55, pp: 8, speed: 5},
            {name: 'Fire Blast', power: 110, pp: 5, speed: 2},
            {name: 'Fire Punch', power: 80, pp: 7, speed: 4},
            {name: 'Inferno', power: 110, pp: 5, speed: 2},
            {name: 'Mystical Fire', power: 68, pp: 8, speed: 5},
            {name: 'Flamethrower', power: 90, pp: 6, speed: 3},
            {name: 'Incinerate', power: 70, pp: 7, speed: 4},
        ]},
    {type: 'water',
        moves: [
            {name: 'Surf', power: 90, pp: 5, speed: 3},
            {name: 'Water Gun', power: 50, pp: 8, speed: 5},
            {name: 'Waterfall', power: 80, pp: 7, speed: 4},
            {name: 'Dive', power: 90, pp: 6, speed: 3},
            {name: 'Hydro Pump', power: 120, pp: 5, speed: 2},
            {name: 'Brine', power: 100, pp: 6, speed: 3},
            {name: 'Hydro Cannon', power: 130, pp: 4, speed: 1},
            {name: 'Origin Pule', power: 70, pp: 7, speed: 4},
        ]},
    {type: 'poison',
        moves: [
            {name: 'Poison Gas', power: 70, pp: 7, speed: 4},
            {name: 'Poison Sting', power: 80, pp: 7, speed: 4},
            {name: 'Sludge', power: 50, pp: 8, speed: 5},
            {name: 'Poison Fang', power: 110, pp: 5, speed: 2},
            {name: 'Acid', power: 90, pp: 6, speed: 3},
            {name: 'Belch', power: 130, pp: 4, speed: 1},
            {name: 'Acid Spray', power: 80, pp: 7, speed: 4},
            {name: 'Venom Drench', power: 100, pp: 5, speed: 2},
        ]},
    {type: 'normal',
        moves: [
            {name: 'Uproar', power: 90, pp: 6, speed: 3},
            {name: 'Take Down', power: 100, pp: 6, speed: 2},
            {name: 'Tackle', power: 70, pp: 7, speed: 4},
            {name: 'Strength', power: 80, pp: 6, speed: 4},
            {name: 'Slash', power: 60, pp: 8, speed: 5},
            {name: 'Mega Kick', power: 120, pp: 5, speed: 2},
            {name: 'Mega Punch', power: 130, pp: 4, speed: 1},
            {name: 'Fury Swipe', power: 70, pp: 7, speed: 4},
        ]},
    {type: 'psychic',
        moves: [
            {name: 'Zen Headbutt', power: 110, pp: 5, speed: 2},
            {name: 'Psystrike', power: 90, pp: 6, speed: 3},
            {name: 'Pyscho Cut', power: 70, pp: 7, speed: 4},
            {name: 'Psybeam', power: 130, pp: 4, speed: 1},
            {name: 'Extrasensory', power: 80, pp: 7, speed: 4},
            {name: 'Confusion', power: 60, pp: 8, speed: 5},
            {name: 'Dream Eater', power: 90, pp: 6, speed: 3},
            {name: 'Future Sight', power: 120, pp: 5, speed: 2},
        ]},
    {type: 'dragon',
        moves: [
            {name: 'Dragon Breath', power: 70, pp: 7, speed: 4},
            {name: 'Dragon Pulse', power: 90, pp: 6, speed: 3},
            {name: 'Dragon Claw', power: 100, pp: 6, speed: 3},
            {name: 'Dragon Tail', power: 60, pp: 8, speed: 5},
            {name: 'Twister', power: 80, pp: 7, speed: 4},
            {name: 'Roar of Time', power: 130, pp: 4, speed: 1},
            {name: 'Outrage', power: 120, pp: 5, speed: 2},
            {name: 'Draco Meteor', power: 75, pp: 7, speed: 4},
        ]},
]

window.onload = function java(){
    pickJavamon();
    assignMoves();
    currentJavamon();
}
document.getElementById('fight').onclick = function(){
    Fight();
}

function pickJavamon(){
    for (var i=0; i<4; i++){
        player1Javamon.push(javamon[Math.floor(Math.random()*javamon.length)]);
        player2Javamon.push(javamon[Math.floor(Math.random()*javamon.length)]);
        // console.log(player1Javamon[i]);
        // console.log(player2Javamon[i]);
    }
}
function assignMoves(){
    player1Javamon.forEach(function(e){
        moveSet.forEach(function(i){
            if (i.type === e.type){
                e.moves = [];
                
                numR = [];
                numbers = [0,1,2,3,4,5,6,7];
                for (r=0; r<4; r++){
                    for (j=8; j>4; j--){
                        var randomNum =  Math.floor(Math.random()*j)
                    }
                    
                    pushNum = numbers[randomNum];
                    numR.push(pushNum);
                    numbers.splice(randomNum, 1)
                }
                
                // console.log(numR)
                e.moves.push(i.moves[numR[0]], i.moves[numR[1]], i.moves[numR[2]], i.moves[numR[3]])
                console.log(e)
                e.moves.forEach(function(e){
                    console.log(e)
                })
                console.log('')
        }})
    })
    console.log('Second Player\'s Javamon')
    player2Javamon.forEach(function(e){
        moveSet.forEach(function(i){
            if (i.type === e.type){
                e.moves = [];
                
                numR = [];
                numbers = [0,1,2,3,4,5,6,7];
                for (r=0; r<4; r++){
                    for (j=8; j>4; j--){
                        var randomNum =  Math.floor(Math.random()*j)
                    }
                    
                    pushNum = numbers[randomNum];
                    numR.push(pushNum);
                    numbers.splice(randomNum, 1)
                }
                
                // console.log(numR)
                e.moves.push(i.moves[numR[0]], i.moves[numR[1]], i.moves[numR[2]], i.moves[numR[3]])
                console.log(e)
                e.moves.forEach(function(e){
                    console.log(e)
                })
                console.log('')
        }})
    })
}

var current1Javamon;
var current2Javamon;
var randomNum = Math.floor(Math.random()*4)

function currentJavamon(){
    current1Javamon=player1Javamon[randomNum];
    current2Javamon=player2Javamon[randomNum];
}

function Fight(){
    if (current1Javamon)var move1 = current1Javamon.moves[Math.floor(Math.random()*4)];
    if (current2Javamon)var move2 = current2Javamon.moves[Math.floor(Math.random()*4)];
    if (move1) var move1Speed = move1.speed;
    if (move2) var move2Speed = move2.speed
    if (move1Speed > move2Speed){
        current2Javamon.health -= move1.power/3;
        current1Javamon.health -= move2.power/3;
    // } else if(move1Speed < move2Speed) {
    //     current1Javamon.health -= move2.power/3;
    //     current2Javamon.health -= move1.power/3;
    } else {
        current1Javamon.health -= move2.power/3;
        current2Javamon.health -= move1.power/3;
    }
    if (current1Javamon.health <= 0){
        console.log(current1Javamon.name + ' has fainted!');
        player1Javamon.splice(player1Javamon.indexOf(current1Javamon), 1);
        // console.log(player1Javamon[Math.floor(Math.random()*player1Javamon.length)])
        current1Javamon = player1Javamon[Math.floor(Math.random()*player1Javamon.length)];
        if (player1Javamon.length!=0){
            console.log(current1Javamon.name + ' to the rescue!');
        }
    }
    if (current2Javamon.health <= 0){
        console.log(current2Javamon.name + ' has fainted!');
        player2Javamon.splice(player2Javamon.indexOf(current2Javamon), 1);
        current2Javamon = player2Javamon[Math.floor(Math.random()*player2Javamon.length)];
        if (player2Javamon.length!=0){
            console.log(current2Javamon.name + ' to the rescue!');  
        }
    }
    if (player1Javamon.length === 0){
        console.log('Player 1 has no more Javamon!')
    }
    if (player2Javamon.length === 0){
        console.log('Player 2 has no more Javamon!')
    }
    if (player1Javamon.length != 0){
        console.log('Player 1\'s health reduced to ' + current1Javamon.health);
    }
    if (player2Javamon.length != 0){
        console.log('Player 2\'s health reduced to ' + current2Javamon.health);
    }
    console.log('')
}