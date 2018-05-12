// Sets the canvas, canvas context and body element
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let body = document.getElementsByTagName('body')[0];

// Array to automatically store all javamon
var javamon = [];

// Function which will automatically store any Javamon made into array
function pushJavamon(all){
    javamon.push(all)
}

var Javamon = function(name, type, sprite) {
    this.name = name;
    this.health = 100;
    this.type = type;
    this.sprite = sprite;
    pushJavamon(this);
}

// var gastly = new Javamon('Gastly', "ghost", "src" );
var bulbasaur = new Javamon('Bulbasaur', 'grass', 'src');
var geodude = new Javamon('Geodude', 'rock', 'src');
var entei = new Javamon('Entei', 'fire', 'src');
var piplup = new Javamon('Piplup', 'water', 'src');
var nidoran = new Javamon('Nidoran', 'poison', 'src');
var meowth = new Javamon('Meowth', 'normal', 'src');
var abra = new Javamon('Abra', 'psychic', 'src');
var poliwag = new Javamon('Poliwag', 'water', 'src');
var ponyta = new Javamon('Ponyta', 'fire', 'src');
var onyx = new Javamon('Onyx', 'rock', 'src');
var kangaskhan = new Javamon('Kangaskhan', 'normal', 'src');
var eevee = new Javamon('Eevee', 'normal', 'src');
var porygon = new Javamon('Porygon', 'normal', 'src');
var sudowoodo = new Javamon('Sudowoodo', 'rock', 'src');
var garchomp = new Javamon('Garchomp', 'dragon', 'src');
// var chreast = new Javamon('Chreast', 'normal', 'src');
// var gengar = new Javamon('Gengar', 'ghost', 'src');


// Defines array for players to create their own Javamon
let userJavamon= [];

// Defines array for player's Javamon to be stored
let player1Javamon=[];
let player2Javamon = [];


// This array will store all the moves
var moves = []

function moveMoves(all){
    moves.push(all)
}

function Moveset(type){
    this.type = type;
    this.moves = [];
    moveMoves(this);
}

function Move(name, power, pp, speed){
    this.name = name;
    this.power = power;
    this.pp = pp;
    this.speed = speed;
}

// Each of these create a new 
var grass = new Moveset('grass');
grass.moves.push(new Move('Razor Leaf', 55, 8, 5));
grass.moves.push(new Move('Leaf Tornado', 65, 8, 5));
grass.moves.push(new Move('Frenzy Plant', 120, 5, 2));
grass.moves.push(new Move('Leaf Blade', 90, 6, 3));
grass.moves.push(new Move('Leaf Storm', 110, 5, 2));
grass.moves.push(new Move('Needle Arm', 60, 8, 5));
grass.moves.push(new Move('Power Whip', 100, 6, 3));
grass.moves.push(new Move('Solar Beam', 110, 5, 2));

var rock = new Moveset('rock');
rock.moves.push(new Move('Rollout', 40, 8, 5));
rock.moves.push(new Move('Smack Down', 55, 8, 5));
rock.moves.push(new Move('Head Smash', 130, 4, 1));
rock.moves.push(new Move('Rock Tomb', 70, 7, 4));
rock.moves.push(new Move('Rock Slide', 80, 7, 4));
rock.moves.push(new Move('Diamond Storm', 110, 5, 2));
rock.moves.push(new Move('Rock Blast', 90, 6, 3));
rock.moves.push(new Move('Ancient Power', 99, 6, 3));

var fire = new Moveset('fire');
fire.moves.push(new Move('Blast Burn', 130, 4, 1));
fire.moves.push(new Move('Ember', 55, 8, 5));
fire.moves.push(new Move('Fire Blast', 110, 5, 2));
fire.moves.push(new Move('Fire Punch', 80, 7, 4));
fire.moves.push(new Move('Inferno', 110, 5, 2));
fire.moves.push(new Move('Mystical Fire', 68, 8, 5));
fire.moves.push(new Move('Flamethrower', 90, 6, 3));
fire.moves.push(new Move('Incinerate', 70, 7, 4));

var water = new Moveset('water');
water.moves.push(new Move('Surf', 90, 5, 3));
water.moves.push(new Move('Water Gun', 50, 8, 5));
water.moves.push(new Move('Waterfall', 80, 7, 4));
water.moves.push(new Move('Dive', 90, 6, 3));
water.moves.push(new Move('Hydro Pump', 120, 5, 2));
water.moves.push(new Move('Brine', 100, 6, 3));
water.moves.push(new Move('Hydro Cannon', 130, 4, 1));
water.moves.push(new Move('Origin Pulse', 70, 7, 4));

var poison = new Moveset('poison');
poison.moves.push(new Move('Poison Gas', 70, 7, 4));
poison.moves.push(new Move('Poison Sting', 80, 7, 4));
poison.moves.push(new Move('Sludge', 50, 8, 5));
poison.moves.push(new Move('Poison Fang', 110, 5, 4));
poison.moves.push(new Move('Acid', 90, 6, 3));
poison.moves.push(new Move('Belch', 130, 4, 1));
poison.moves.push(new Move('Acid Spray', 80, 7, 4));
poison.moves.push(new Move('Venom Drench', 100, 5, 2));


var normal = new Moveset('normal');
normal.moves.push(new Move('Uproar', 90, 6, 3));
normal.moves.push(new Move('Take Down', 100, 6, 2));
normal.moves.push(new Move('Tackle', 70, 7, 4));
normal.moves.push(new Move('Strength', 80, 6, 4));
normal.moves.push(new Move('Slash', 60, 8, 5));
normal.moves.push(new Move('Mega Kick', 120, 5, 2));
normal.moves.push(new Move('Mega Punch', 130, 4, 1));
normal.moves.push(new Move('Fury Swipe', 70, 7, 4));

var psychic = new Moveset('psychic');
psychic.moves.push(new Move('Zen Headbutt', 110, 5, 2));
psychic.moves.push(new Move('Psytrike', 90, 6, 3));
psychic.moves.push(new Move('Psycho Cut', 70, 7, 4));
psychic.moves.push(new Move('Psybeam', 130, 4, 1));
psychic.moves.push(new Move('Extrasensory', 80, 7, 4));
psychic.moves.push(new Move('Confusion', 60, 8, 5));
psychic.moves.push(new Move('Dream Eater', 90, 6, 3));
psychic.moves.push(new Move('Future Sight', 120, 5, 2));

var dragon = new Moveset('dragon');
dragon.moves.push(new Move('Dragon Breath', 70, 7, 4));
dragon.moves.push(new Move('Dragon Pulse', 90, 7, 4));
dragon.moves.push(new Move('Dragon Claw', 100, 6, 3));
dragon.moves.push(new Move('Dragon Tail', 60, 8, 5));
dragon.moves.push(new Move('Twister', 80, 7, 4));
dragon.moves.push(new Move('Roar of Time', 130, 4, 1));
dragon.moves.push(new Move('Outrage', 120, 5, 2));
dragon.moves.push(new Move('Draco Meteor', 75, 7, 4));

window.onload = function java(){
    // pickJavamon();
    // assignMoves();
    // currentJavamon();
    createButton();
    clickEm();
}

document.getElementById('fight').onclick = function(){
    Fight();
}

// Assigns players' Javamon random moves and sets the Javamon they're going 
// to start with randomly
document.getElementById('next').onclick = function(){
    currentJavamon();
    assignMoves();
    fightScreen();
}

// This functions creates a button and displays it for each Javamon
function createButton(){
    javamon.forEach(function(e, i){
        newButton = document.createElement('button');
        newButton.id = e.name;
        newButton.className = 'javamon-button';
        newButton.innerHTML = e.name;
        body.insertBefore(newButton, canvas);
        console.log(document.getElementsByTagName('button')[i]);
    })
}

// Adds Javamon to each players' array (P1 first then P2)
let javamonButton = document.getElementsByClassName('javamon-button');

function clickEm(){
    for (var i = 0; i< javamonButton.length; i++){
        let button = javamonButton[i];
        button.onclick = function(){
        pickJavamon(button.id);
        }
    }
}

// Function which ensures P1 goes first in choosing Javamon and then P2
function pickJavamon(e){
    if (player1Javamon.length < 4){
        javamon.forEach(function(i){
            if (e === i.name){
                player1Javamon.push(i)
                console.log(player1Javamon)
            }
        })
    } else if(player2Javamon.length < 4) {
        javamon.forEach(function(i){
            if (e === i.name){
                player2Javamon.push(i)
                console.log(player2Javamon)
            }
        })
    }
}

// Randomly assigns Javamon to each party
// function pickJavamon(){
//     for (var i=0; i<4; i++){
//         player1Javamon.push(javamon[Math.floor(Math.random()*javamon.length)]);
//         player2Javamon.push(javamon[Math.floor(Math.random()*javamon.length)]);
//         // console.log(player1Javamon[i]);
//         // console.log(player2Javamon[i]);
//     }
// }

// Randomly assigns respective moves to each Javamon
function assignMoves(){
    player1Javamon.forEach(function(e){
        moves.forEach(function(i){
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
        moves.forEach(function(i){
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

// Clears screen when press 'next' button and displays fight scene
function fightScreen(){
    for (var i = 0; i< javamonButton.length; i++){
        javamonButton[i].className = 'javamon-button display-none';
    }
    let chooseMove1 = document.createElement('button');
    let switchJavamon1 = document.createElement('button');
    let runAway1 = document.createElement('button');

    let chooseMove2 = document.createElement('button');
    let switchJavamon2 = document.createElement('button');
    let runAway2 = document.createElement('button');

    if (player1Javamon.length === 4 ){
        body.insertBefore(chooseMove1, canvas);
        body.insertBefore(switchJavamon1, canvas);
        body.insertBefore(runAway1, canvas);
        chooseMove1.id = 'move1';
        chooseMove1.innerHTML = 'Fight!';
        chooseMove1.className = 'p1-button';
        switchJavamon1.id = 'switch1';
        switchJavamon1.innerHTML = 'Switch Javamon';
        switchJavamon1.className = 'p1-button';
        runAway1.id = 'run1';
        runAway1.innerHTML = 'Run!';
        runAway1.className = 'p1-button';
        console.log(chooseMove1)
    }
    if (player1Javamon.length === 4){
        body.insertBefore(chooseMove2, canvas);
        body.insertBefore(switchJavamon2, canvas);
        body.insertBefore(runAway2, canvas);
        chooseMove2.id = 'move2';
        chooseMove2.innerHTML = 'Fight!';
        chooseMove2.className = 'p2-button';
        switchJavamon2.id = 'switch2';
        switchJavamon2.innerHTML = 'Switch Javamon';
        switchJavamon2.className = 'p2-button';
        runAway2.id = 'run2'
        runAway2.innerHTML = 'Run!';
        runAway2.className = 'p2-button';
        console.log(chooseMove2)
    }
}

// Create an if statement with OR which makes sure both players
// Click their respective button before displaying what's next
// I'm fucking loving this game so far, lets grind tomorrow

// Variable where the current Javamon will be stored during each battle
var current1Javamon;
var current2Javamon;
var randomNum = Math.floor(Math.random()*4)

// Assigns an initial current Javamon to each player
function currentJavamon(){
    current1Javamon=player1Javamon[randomNum];
    current2Javamon=player2Javamon[randomNum];
}

// Lol
function Fight(){
    if (current1Javamon)var move1 = current1Javamon.moves[Math.floor(Math.random()*4)];
    if (current2Javamon)var move2 = current2Javamon.moves[Math.floor(Math.random()*4)];
    if (move1) var move1Speed = move1.speed;
    if (move2) var move2Speed = move2.speed
    if (current1Javamon && current2Javamon){
    if (move1Speed > move2Speed){
        current2Javamon.health -= move1.power/3;
        console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
        console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
        console.log('');
        if (current2Javamon.health > 0){
        current1Javamon.health -= move2.power/3;
        console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
        console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
        } else {
            console.log(current2Javamon.name = ' has fainted!')
        }
        // console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
        // console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
        // console.log('')
        // console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
        // console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
    // } else if(move1Speed < move2Speed) {
    //     current1Javamon.health -= move2.power/3;
    //     current2Javamon.health -= move1.power/3;
    } else {
        current1Javamon.health -= move2.power/3;
        console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
        console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
        console.log('')
        if (current1Javamon.health > 0){
        current2Javamon.health -= move1.power/3;
        console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
        console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
        } else{
            console.log(current1Javamon.name + ' has fainted!')
        }
        // console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
        // console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
        // console.log('')
        // console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
        // console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
    }
    if (current1Javamon.health <= 0){
        // console.log(current1Javamon.name + ' has fainted!');
        player1Javamon.splice(player1Javamon.indexOf(current1Javamon), 1);
        // console.log(player1Javamon[Math.floor(Math.random()*player1Javamon.length)])
        current1Javamon = player1Javamon[Math.floor(Math.random()*player1Javamon.length)];
        if (player1Javamon.length!=0){
            console.log(current1Javamon.name + ' to the rescue!');
            console.log('')
        }
    }
    if (current2Javamon.health <= 0){
        // console.log(current2Javamon.name + ' has fainted!');
        player2Javamon.splice(player2Javamon.indexOf(current2Javamon), 1);
        current2Javamon = player2Javamon[Math.floor(Math.random()*player2Javamon.length)];
        if (player2Javamon.length!=0){
            console.log(current2Javamon.name + ' to the rescue!');  
        }
    }}
    if (player1Javamon.length === 0){
        console.log('Player 1 has no more Javamon!')
        console.log('Player 2 has won!')
    }
    if (player2Javamon.length === 0){
        console.log('Player 2 has no more Javamon!')
        console.log('Player 1 has won!')
    }
    // if (player1Javamon.length != 0){
    //     console.log('Player 1\'s ' + current1Javamon.name + ' health reduced to ' + current1Javamon.health);
    //     console.log(move1)
    // }
    // if (player2Javamon.length != 0){
    //     console.log('Player 2\'s ' + current2Javamon.name + ' health reduced to ' + current2Javamon.health);
    // }
    console.log('')
}