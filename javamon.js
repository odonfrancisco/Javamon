// Sets the canvas, canvas context and body element
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let body = document.getElementsByTagName('body')[0];
let afterCanvas = document.getElementById('after-canvas')
let columnDiv = document.getElementById('column-div');
let column1 = document.getElementById('column1');
let column2 = document.getElementById('column2');
let player1Scene = document.getElementById('player1');
let player2Scene = document.getElementById('player2');
let health1 = document.getElementById('health1');
let health2 = document.getElementById('health2');
let columns = document.getElementsByClassName('column1')[0];
let columns2 = document.getElementsByClassName('column2')[0];
let player1Div = document.getElementsByClassName('player1')[0]
let player2Div = document.getElementsByClassName('player2')[0]
let player1Name = document.getElementById('player1-name');
let player2Name = document.getElementById('player2-name');


// Array to automatically store all javamon
var javamon = [];

// Function which will automatically store any Javamon made into array
function pushJavamon(all){
    javamon.push(all)
}

var Javamon = function(name, type, sprite1, sprite2) {
    this.name = name;
    this.health = 100;
    this.type = type;
    this.sprite1 = sprite1;
    this.sprite2 = sprite2
    pushJavamon(this);
}

// var gastly = new Javamon('Gastly', "ghost", "src" );
var bulbasaur = new Javamon('Bulbasaur', 'grass', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/bulbasaur.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/bulbasaur.gif');
var geodude = new Javamon('Geodude', 'rock', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/geodude.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/geodude.gif');
var entei = new Javamon('Entei', 'fire', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/entei.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/entei.gif');
var piplup = new Javamon('Piplup', 'water', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/piplup.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/piplup.gif');
var nidoran = new Javamon('Nidoran', 'poison', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/nidoran-m.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif');
var meowth = new Javamon('Meowth', 'normal', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/meowth.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/meowth.gif');
var abra = new Javamon('Abra', 'psychic', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/abra.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/abra.gif');
var poliwag = new Javamon('Poliwag', 'water', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/poliwag.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/poliwag.gif');
var ponyta = new Javamon('Ponyta', 'fire', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/ponyta.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif');
var onix = new Javamon('Onix', 'rock', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/onix.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/onix.gif');
var kangaskhan = new Javamon('Kangaskhan', 'normal', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/kangaskhan.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/kangaskhan.gif');
var eevee = new Javamon('Eevee', 'normal', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/eevee.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/eevee.gif');
var porygon = new Javamon('Porygon', 'normal', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/porygon.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif');
var sudowoodo = new Javamon('Sudowoodo', 'rock', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/sudowoodo-f.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/sudowoodo-f.gif');
var garchomp = new Javamon('Garchomp', 'dragon', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/garchomp.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif');

// var lopunny = new Javamon('Lopunny', 'fighting', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/lopunny.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/lopunny.gif');
// var dusclop = new Javamon('Dusclop', 'ghost', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/dusclops.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/dusclops.gif');
var wailord = new Javamon('Wailord', 'water', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/wailord.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/wailord.gif');  
var milotic = new Javamon('Milotic', 'water', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/milotic-f.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/milotic-f.gif'); 
// var dialga = new Javamon('Dialga', 'steel', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/dialga.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/dialga.gif'); 
// var darkrai = new Javamon('Darkrai', 'dark', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/darkrai.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/darkrai.gif'); 
// var gliscor = new Javamon('Gliscor', 'ground', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/gliscor.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/gliscor.gif'); 
// var rotom = new Javamon('Rotom', 'electric', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/rotom.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/rotom.gif');
// var glalie = new Javamon('Glalie', 'ice', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/glalie.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/glalie.gif'); 
var palkia = new Javamon('Palkia', 'dragon', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/palkia.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/palkia.gif'); 
// var giratina = new Javamon('Giratina', 'ghost', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/giratina-origin.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/giratina-origin.gif');
var mew = new Javamon('Mew', 'psychic', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/mew.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif'); 
// var houndoom = new Javamon('Houndoom', 'dark', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/houndoom.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom.gif'); 
// var shedinja = new Javamon('Shedinja', 'bug', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/shedinja.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/shedinja.gif'); 
// var bronzong = new Javamon('Bronzong', 'steel', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/bronzong.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/bronzong.gif'); 
var gardevoir = new Javamon('Gardevoir', 'psychic', 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/gardevoir.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif'); 
var ditto = new Javamon('Ditto', 'normal', 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/ditto.gif', 'https://img.pokemondb.net/sprites/black-white/anim/shiny/ditto.gif');



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

let background = [];

function Background(name, src, floor){
    this.name = name;
    this.src = src;
    this.floor = floor;
}

let greens = new Background('greens', '/images/greens.jpg', '/images/greens-floor.png')


window.onload = function java(){
    // pickJavamon();
    // assignMoves();
    // currentJavamon();
    playerPickCreate();
    playerPick(1);
    createButton();
    clickEm();
    // randomPick();
    // next.click();
}

function randomPick(){
    for (var i=0; i<4; i++){
        player1Javamon.push(javamon[Math.floor(Math.random()*javamon.length)]);
        player2Javamon.push(javamon[Math.floor(Math.random()*javamon.length)])
    }
}

// document.getElementById('play').onclick = function(){
//     createButton();
//     clickEm();
// }

document.getElementById('fight').onclick = function(){
    if ((player1Move && player2Move) || (current1 && player2Move) || (player1Move && current2) || (current1 && current2)){
        Fight();
    }
}

// Assigns players' Javamon random moves and sets the Javamon they're going 
// to start with randomly
document.getElementById('next').onclick = function(){
    if (player1Javamon.length === 4 && player2Javamon.length === 4){
    currentJavamon();
    assignMoves();
    fightScreen();
    deleteNext('');
    battleRound();
    createNext(1, '');
    pickEm();
    showJavamon(current1Javamon, current2Javamon);
    changeHealth();
    deleteInfo();
    insertFloor();
    setBackground();
    playerChoose();
    }
}

i = 0;
e = 0;
function playerChoose(){
    document.onkeydown = function(event){
        // console.log(event.keyCode)
        // Keyboard clicks for Arrow Keys
        if (document.getElementsByClassName('p2-button')[0].className == 'p2-button' || document.getElementsByClassName('p2-button')[0].className == 'p2-button active'){
            switch (event.keyCode){
                case 38: console.log(event.key, event.keyCode); chooseP2(0).click(); break;
                case 39: console.log(event.key, event.keyCode); chooseP2(1).click(); break;
                case 40: console.log(event.key, event.keyCode); chooseP2(3).click(); break;
                case 37: console.log(event.key, event.keyCode); chooseP2(0).click(); break;
                case 13: next1.click(); break;
            }
            // Keyboard clicks for WASD
            switch (event.keyCode){
                case 87: console.log(event.key, event.keyCode); chooseP1(0).click(); break;
                case 68: console.log(event.key, event.keyCode); chooseP1(1).click(); break;
                case 83: console.log(event.key, event.keyCode); chooseP1(3).click(); break;
                case 65: console.log(event.key, event.keyCode); chooseP1(0).click(); break;
                case 13: next1.click(); break;
            }
            function chooseP1(nu){
                if (nu == 1){
                    if (e<2){
                        e++;
                    }
                    else {
                        e=0;
                    }
                }
                if (nu == 0){
                    if (e>0){
                        e--;
                    }
                    else {
                        e=2;
                    }
                }
                if (nu ==3){
                    e = 2;
                }
                return document.getElementsByClassName('p1-button')[e];
            }
            function chooseP2(nu){
                if (nu == 1){
                    if (i<2){
                        i++;
                    }
                    else {
                        i=0;
                    }
                }
                if (nu == 0){
                    if (i>0){
                        i--;
                    }
                    else {
                        i=2;
                    }
                }
                if (nu == 3){
                    i = 2;
                }
                return document.getElementsByClassName('p2-button')[i];
            }
        }
        if (document.getElementsByClassName('p2-button').length > 3){
            switch (event.keyCode){
                case 38: console.log(event.key, event.keyCode); chooseP2(0).click(); break;
                case 39: console.log(event.key, event.keyCode); chooseP2(1).click(); break;
                case 40: console.log(event.key, event.keyCode); chooseP2(3).click(); break;
                case 37: console.log(event.key, event.keyCode); chooseP2(0).click(); break;
                case 13: fight.click(); break;
            }
            // Keyboard clicks for WASD
            switch (event.keyCode){
                case 87: console.log(event.key, event.keyCode); chooseP1(0).click(); break;
                case 68: console.log(event.key, event.keyCode); chooseP1(1).click(); break;
                case 83: console.log(event.key, event.keyCode); chooseP1(3).click(); break;
                case 65: console.log(event.key, event.keyCode); chooseP1(0).click(); break;
                case 13: fight.click(); break;
            }
            function chooseP1(nu){
                if (nu == 1){
                    if (e<3){
                        e++;
                    }
                    else {
                        e=0;
                    }
                }
                if (nu == 0){
                    if (e>0){
                        e--;
                    }
                    else {
                        e=3;
                    }
                }
                if (nu == 3){
                    e = 3;
                }
                return move1[e];
            }
            function chooseP2(nu){
                if (nu == 1){
                    if (i<3){
                        i++;
                    }
                    else {
                        i=0;
                    }
                }
                if (nu == 0){
                    if (i>0){
                        i--;
                    }
                    else {
                        i=3;
                    }
                }
                if (nu == 3){
                    i = 3;
                }
                return move2[i];
            }
        }
    }
}

function setBackground(){
    url = 'url(' + greens.src + ')';
    document.getElementById('fight-scene').style.backgroundImage = url;
}

function insertFloor(num){
    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.id = 'floor1';
    image1.src = greens.floor;
    image2.id = 'floor2';
    image2.src = greens.floor;
    player1Div.insertBefore(image1, player1Scene);
    player2Div.insertBefore(image2, player2Scene);
}

// This function displays current Javamon on screen
function showJavamon(current1, current2){
    player1Scene.src = current1.sprite1;
    player2Scene.src = current2.sprite2;
    setTimeout(playerMargin, 100);
}

function javamonPosition(){
    x = columns.clientWidth/2 - player1Scene.width/2 + 'px';
    x1 = 15 - player1Scene.width*15/100 + 'vw';
    player1Scene.style.left = x;
    player2Scene.style.left = x1;
}

// This function displays whose turn it is to pick their Javamon
function playerPickCreate(){
    this.h1 = document.createElement('h1');
    // h1.style.margin = '30px 0 50px 25vw';
    body.insertBefore(h1, afterCanvas);
}

function playerPick(num){
    h1.innerHTML = 'Player '+num+', pick your Javamon!';
}

// This functions creates a button and displays it for each Javamon
function createButton(){
    javamonDiv = document.getElementById('javamon-div');
    javamon.forEach(function(e, i){
        newButton = document.createElement('button');
        newButton.id = e.name;
        newButton.className = 'javamon-button';
        newButton.innerHTML = e.name;
        javamonDiv.appendChild(newButton);
        console.log(document.getElementsByTagName('button')[i]);
    })
    // document.getElementById('play').className = 'display-none';
    // document.getElementsByTagName('h1')[0].className = 'display-none';
    // document.getElementsByTagName('p')[0].className = 'display-none';
    // document.getElementById('next').className = '';
}

// Adds Javamon to each players' array (P1 first then P2)
let javamonButton = document.getElementsByClassName('javamon-button');

// Declares when Javamon button gets clicked, it gets pushed to respective player's party
function clickEm(){
    for (var i = 0; i< javamonButton.length; i++){
        let button = javamonButton[i];
        button.onclick = function(){
        pickJavamon(button);
        }
    }
}

// Function which ensures P1 goes first in choosing Javamon and then P2
function pickJavamon(e){
    if (player1Javamon.length < 4){
        javamon.forEach(function(i){
            if (e.id === i.name){
                player1Javamon.push(i)
                // console.log(player1Javamon)
                e.className = 'javamon-button active'
            }
        })
        if (player1Javamon.length == 4){
            playerPick(2);
            for (var i=0; i<4; i++){
                e.parentNode.getElementsByClassName('javamon-button active')[0].className = 'javamon-button';
            }
        }
    } else if(player2Javamon.length < 4) {
        javamon.forEach(function(i){
            if (e.id === i.name){
                player2Javamon.push(i)
                // console.log(player2Javamon)
                e.className = 'javamon-button active'
            }
        })
        if (player2Javamon.length == 4){
            for (var i=0; i<4; i++){
                e.parentNode.getElementsByClassName('javamon-button active')[0].className = 'javamon-button';
            }
            h1.innerHTML = 'Ready!';
            body.style.backgroundColor = 'orange';
            setTimeout(function(){body.style.backgroundColor = '#252525';}, 500)
        }
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
    this.chooseMove1 = document.createElement('button');
    this.switchJavamon1 = document.createElement('button');
    this.runAway1 = document.createElement('button');

    this.chooseMove2 = document.createElement('button');
    this.switchJavamon2 = document.createElement('button');
    this.runAway2 = document.createElement('button');

    // Creates Player 1's buttons
    column1.appendChild(chooseMove1);
    column1.appendChild(switchJavamon1);
    column1.appendChild(runAway1);
    chooseMove1.id = 'move1';
    chooseMove1.innerHTML = 'Fight!';
    chooseMove1.className = 'p1-button';
    // chooseMove1.style.width = columns.clientWidth/2 - 40 + 'px';
    switchJavamon1.id = 'switch1';
    switchJavamon1.innerHTML = 'Switch Javamon';
    switchJavamon1.className = 'p1-button';
    // switchJavamon1.style.width = columns.clientWidth/2 - 20 + 'px';
    // switchJavamon1.style.width = columns.width + 'px';
    runAway1.id = 'run1';
    runAway1.innerHTML = 'Run!';
    runAway1.className = 'p1-button';
    // runAway1.style.width = columns.clientWidth/2 - 40 + 'px';

    // Creates Player 2's buttons
    column2.appendChild(chooseMove2);
    column2.appendChild(switchJavamon2);
    column2.appendChild(runAway2);
    chooseMove2.id = 'move2';
    chooseMove2.innerHTML = 'Fight!';
    chooseMove2.className = 'p2-button';
    switchJavamon2.id = 'switch2';
    switchJavamon2.innerHTML = 'Switch Javamon';
    switchJavamon2.className = 'p2-button';
    runAway2.id = 'run2'
    runAway2.innerHTML = 'Run!';
    runAway2.className = 'p2-button';

    // Displays Canvas
    // canvas.className = ''
    health1.className = '';
    health2.className = '';
}

function deleteNext(num){
    let next = document.getElementById('next' + num);
    next.className = 'display-none';
}

// Creates 'Next' button for following screen
function createNext(num, before){
    div = document.createElement('div');
    next = document.createElement('button');
    next.id = 'next' + num;
    next.innerHTML = 'Play!';
    div.appendChild(next);
    body.insertBefore(div, document.getElementById('next' + before).parentNode);
}

// Create an if statement with OR which makes sure both players
// Click their respective button before displaying what's next
// I'm fucking loving this game so far, lets grind tomorrow
// let clickMove1 = chooseMove1.onclick

p1Click = [];
p2Click = [];

// Function which waits for both players to pick their action
function battleRound(){
    chooseAction1();
    chooseAction2();
}

// Funcion for Player one to choose what they're going to do
function chooseAction1(){
    chooseMove1.onclick = function(e){
        if(p1Click.length === 0){
            p1Click.push(e.path[0].attributes[0].value);
            console.log(p1Click)
        }
        else {
            p1Click.pop();
            p1Click.push(e.path[0].attributes[0].value);
            console.log(p1Click);
        }
        for (var i=0; i<document.getElementsByClassName('p1-button active').length; i++){
            document.getElementsByClassName('p1-button active')[0].className = 'p1-button';
        }
        e.path[0].className = 'p1-button active';
    }
    switchJavamon1.onclick = function(e){
        if(p1Click.length === 0){
            p1Click.push(e.path[0].attributes[0].value);
            console.log(p1Click)
        }
        else {
            p1Click.pop();
            p1Click.push(e.path[0].attributes[0].value);
            console.log(p1Click);
        }
        for (var i=0; i<document.getElementsByClassName('p1-button active').length; i++){
            document.getElementsByClassName('p1-button active')[0].className = 'p1-button';
        }
        e.path[0].className = 'p1-button active';
    }
    runAway1.onclick = function(e){
        if(p1Click.length === 0){
            p1Click.push(e.path[0].attributes[0].value);
            console.log(p1Click)
        }
        else {
            p1Click.pop();
            p1Click.push(e.path[0].attributes[0].value);
            console.log(p1Click);
        }
        for (var i=0; i<document.getElementsByClassName('p1-button active').length; i++){
            document.getElementsByClassName('p1-button active')[0].className = 'p1-button';
        }
        e.path[0].className = 'p1-button active';
    }
}

// Function for Player 2 to pick their action
function chooseAction2(){
    chooseMove2.onclick = function(e){
        if(p2Click.length === 0){
            p2Click.push(e.path[0].attributes[0].value);
            console.log(p2Click)
        }
        else {
            p2Click.pop();
            p2Click.push(e.path[0].attributes[0].value);
            console.log(p2Click);
        }
        for (var i=0; i<document.getElementsByClassName('p2-button active').length; i++){
            document.getElementsByClassName('p2-button active')[0].className = 'p2-button';
        }
        e.path[0].className = 'p2-button active';
    }
    switchJavamon2.onclick = function(e){
        if(p2Click.length === 0){
            p2Click.push(e.path[0].attributes[0].value);
            console.log(p2Click)
        }
        else {
            p2Click.pop();
            p2Click.push(e.path[0].attributes[0].value);
            console.log(p2Click);
        }
        for (var i=0; i<document.getElementsByClassName('p2-button active').length; i++){
            document.getElementsByClassName('p2-button active')[0].className = 'p2-button';
        }
        e.path[0].className = 'p2-button active';
    }
    runAway2.onclick = function(e){
        if(p2Click.length === 0){
            p2Click.push(e.path[0].attributes[0].value);
            console.log(p2Click)
        }
        else {
            p2Click.pop();
            p2Click.push(e.path[0].attributes[0].value);
            console.log(p2Click);
        }
        for (var i=0; i<document.getElementsByClassName('p2-button active').length; i++){
            document.getElementsByClassName('p2-button active')[0].className = 'p2-button';
        }
        e.path[0].className = 'p2-button active';
    }
}

// Function for when Next is clicked on the 'fight switch run' screen
function pickEm(){
    document.getElementById('next1').onclick = function(){
        if (p1Click.length ===1 && p2Click.length === 1){
            deleteOptions();
            deleteNext(1);
            // createNext(2, 1);
            displayFightButton();
            pickedInput();
            // resetPlayerMargin();
            // playerMargin();
        }
    }
}

function resetPlayerMargin(){
    x = player1.height;
    y = player2.height;
    player1Margin = '';
    player2Margin = '';
    player1.style.margin = player1Margin;
    player2.style.margin = player2Margin;

}

function playerMargin(){
    // x = player1.height;
    // y = player2.height;
    // player1Margin = 3200/x + 'px' + ' 0 0';
    // player2Margin = 3200/y + 'px' + ' 0 0';
    // player1.style.margin = player1Margin;
    // player2.style.margin = player2Margin;

    if (player1Scene.width > 0){
    player1Right = 125 - player1Scene.width/2 + 'px';
    player1Scene.style.left = player1Right;}

    if (player2Scene.width > 0){
	player2Right = 195 - player2Scene.width/2 + 'px';
    player2Scene.style.left = player2Right;}
}

// Function deletes player pick info
function deleteInfo(){
    h1.className = 'display-none';
}

// Deletes 'Fight Switch Run' and 'Next' buttons once next is clicked
function deleteOptions(){
    p1Buttons = document.getElementsByClassName('p1-button');
    p2Buttons = document.getElementsByClassName('p2-button');
    next = document.getElementById('next1');
    for (var i=0; i<p1Buttons.length; i++){
        p1Buttons[i].className = 'p1-button display-none';
        p2Buttons[i].className = 'p2-button display-none';
        // console.log(p1Buttons[i])
    }
}

// Determines which button is clicked for each player and then displays respective screen
// according to what player picks
function pickedInput(){
    if (p1Click.length === 1 && p2Click.length === 1){
        switch (p1Click[0]){
            case 'move1': pickFight(current1Javamon, 1); break;
            case 'switch1': switchJavamon(player1Javamon, 1); break;
            case 'run1': runAway('player1'); break;
        };
        switch (p2Click[0]){
            case 'move2': pickFight(current2Javamon, 2); break;
            case 'switch2': switchJavamon(player2Javamon, 2); break;
            case 'run2': runAway('player2'); break;
        }
    }
}

let move1 = document.getElementsByClassName('move1');
let move2 = document.getElementsByClassName('move2');

// Function for when a player clicks on Fight! button
function pickFight(currentJavamon, num){
    createMoveButtons(currentJavamon, num);
    pickMove(move1, 1);
    pickMove(move2, 2);
    // clearMoves();
}

//Function for when player clicks on 'Switch Javamon'
function switchJavamon(party, num){
    displayParty(party, num);
    pickCurrent(party1, 1);
    pickCurrent(party2, 2);
}

// Function which creates the new buttons when Fight! is clicked
function createMoveButtons(current, num){
    for (i=0; i<current.moves.length; i++){
        // console.log(current.moves[i])
        let button = document.createElement('button');
        let move = current.moves[i].name;
        button.innerHTML =  move + '<br>' + 'Power: ' + current.moves[i].power;
        button.id = move;
        switch (num){
            case 1: button.className = 'p1-button move1'; column1.appendChild(button); break;
            case 2: button.className = 'p2-button move2'; column2.appendChild(button); break;
        }
        // console.log(move)
    }
}

// Function which identifies what button was pressed for battle
function pickMove(move, num){
    for (var i = 0; i< move.length; i++){
        let button = move[i];
        let current;
        switch (num){
            case 1: current = current1Javamon; break;
            case 2: current = current2Javamon; break;
        }
        // Pushes move pressed into variable which will be used for fight
        button.onclick = function(e){
            if (num == 1){
                for (var i=0; i< move1.length; i++){
                    move1[i].className = 'p1-button move1';
                }
            }
            if (num == 2){
                for (var i=0; i< move2.length; i++){
                    move2[i].className = 'p2-button move2';
                }
            }
            
            current.moves.forEach(function(i){
                if (e.path[0].id === i.name && e.path[0].className === 'p1-button move1'){
                    player1Move = i;
                    e.path[0].className = 'p1-button move1 active';
                    // console.log(i)
                }
                else if (e.path[0].id === i.name && e.path[0].className === 'p2-button move2'){
                    player2Move = i;
                    e.path[0].className = 'p2-button move2 active';
                }
            })
            // console.log(current.moves)
        // console.log(e.path[0].className);
        }
    }
}

// Function will clear current move after each fight
function clearMoves(){
    player1Move = null;
    player2Move = null;
}

// Function which displays party's Javamon when click 'Switch Javamon'
function displayParty(party, num){
    for (i=0; i<party.length; i++){
        // console.log(party.moves[i])
        let button = document.createElement('button');
        let name = party[i].name;
        button.innerHTML = name + '<br>' + 'Health: ' + party[i].health;
        button.id = name;
        switch (num){
            case 1: button.className = 'p1-button party1'; column1.appendChild(button); break;
            case 2: button.className = 'p2-button party2'; column2.appendChild(button); break;
        }
        console.log(name)
    }
}

party1 = document.getElementsByClassName('party1');
party2 = document.getElementsByClassName('party2');

let current1;
let current2;

// Function which determines which Javamon in party was chosen
function pickCurrent(pickedJavamon, num){
    for (var i = 0; i< pickedJavamon.length; i++){
        let button = pickedJavamon[i];
        let player;
        // this.current1;
        // this.current2;
        switch (num){
            case 1: player = player1Javamon; break;
            case 2: player = player2Javamon; break;
        }
        // Pushes move pressed into variable which will be used for fight
        button.onclick = function(e){
            player.forEach(function(i){
                if (e.path[0].id === i.name && e.path[0].className === 'p1-button party1'){
                    current1 = i;
                    // console.log(i)
                }
                else if (e.path[0].id === i.name && e.path[0].className === 'p2-button party2'){
                    current2 = i;
                }
            })
        //     console.log(current.moves)
        // console.log(e.path[0].id);
        }
    }
}


// Variable where the current Javamon will be stored during each battle
var current1Javamon;
var current2Javamon;
var randomNum = Math.floor(Math.random()*4)
var player1Move;
var player2Move;

// Assigns an initial current Javamon to each player
function currentJavamon(){
    current1Javamon=player1Javamon[randomNum];
    current2Javamon=player2Javamon[randomNum];
}

function displayFightButton(){
    document.getElementById('fight').className = '';
}

// Lol
function Fight(){
    Fight.called = true;
    var move1 = player1Move;
    var move2 = player2Move;
    // if (current1Javamon)var move1 = current1Javamon.moves[Math.floor(Math.random()*4)];
    // if (current2Javamon)var move2 = current2Javamon.moves[Math.floor(Math.random()*4)];
    if (move1) var move1Speed = move1.speed;
    if (move2) var move2Speed = move2.speed
    if (move1 && move2){
        if (move1Speed > move2Speed){
            // Player one's move goes first and hits player 2's Javamon
            current2Javamon.health -= Math.floor(move1.power/3);
            animatePlayer(1);
            console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
            console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
            console.log('');
            updateHealth(2);
            // Makes sure second player can't hit if their health is 0 or less
            if (current2Javamon.health > 0){
                setTimeout(function(){
                    current1Javamon.health -= Math.floor(move2.power/3);
                    animatePlayer(2);
                    console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
                    console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
                    updateHealth(1);
                    if (current1Javamon.health <= 0){
                        current1Dead();
                    }
                }, 1000)
            } else if (current2Javamon.health <= 0){
                // updateHealth(4);
                current2Dead();
            }
            // console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
            // console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
            // console.log('')
            // console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
            // console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
        // } else if(move1Speed < move2Speed) {
        //     current1Javamon.health -= Math.floor(move2.power/3);
        //     current2Javamon.health -= Math.floor(move1.power/3);
        } 
        // Player 2's move goes first
        else {
            current1Javamon.health -= Math.floor(move2.power/3);
            animatePlayer(2);
            console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
            console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
            console.log('')
            updateHealth(1);
            if (current1Javamon.health > 0){
                setTimeout(function(){
                    current2Javamon.health -= Math.floor(move1.power/3);
                    animatePlayer(1);
                    console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
                    console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
                    updateHealth(2);
                    if (current2Javamon.health <= 0){
                        current2Dead();
                    }
                }, 1000)
            } else if (current1Javamon.health <= 0){
                current1Dead();
            }
        }

        function current1Dead(){
            console.log(current1Javamon.name + ' has fainted!');
            player1Javamon.splice(player1Javamon.indexOf(current1Javamon), 1);
            // console.log(player1Javamon[Math.floor(Math.random()*player1Javamon.length)])
            current1Javamon = player1Javamon[Math.floor(Math.random()*player1Javamon.length)];
            showJavamon(current1Javamon, current2Javamon);
            updateHealth(1);
            if (player1Javamon.length!=0){
                console.log(current1Javamon.name + ' to the rescue!');
                console.log('')
            }
        }
            
        function current2Dead(){
            console.log(current2Javamon.name + ' has fainted!');
            player2Javamon.splice(player2Javamon.indexOf(current2Javamon), 1);
            // console.log(player2Javamon[Math.floor(Math.random()*player2Javamon.length)])
            current2Javamon = player2Javamon[Math.floor(Math.random()*player2Javamon.length)];
            showJavamon(current1Javamon, current2Javamon);
            updateHealth(2);
            if (player2Javamon.length!=0){
                console.log(current2Javamon.name + ' to the rescue!');
                console.log('')
            }
        }
            
            // console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
            // console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
            // console.log('')
            // console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
            // console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
        } 
    if (move2 === null && move1){
        current2Javamon.health -= Math.floor(move1.power/3);
        animatePlayer(1);
            console.log('Player1\'s ' + current1Javamon.name + ' used ' + move1.name + ' on ' + current2Javamon.name + '!');
            console.log('Player2\'s ' + current2Javamon.name + '\'s health has been reduced to ' + current2Javamon.health);
            console.log('');
        if (current2Javamon.health <= 0){
            current2Dead();
        }
        showJavamon(current1Javamon, current2Javamon);
    }
    if (move1 === null && move2){
        current1Javamon.health -= Math.floor(move2.power/3);
        animatePlayer(2);
            console.log('Player2\'s ' + current2Javamon.name + ' used ' + move2.name + ' on ' + current1Javamon.name + '!');
            console.log('Player1\'s ' + current1Javamon.name + '\'s health has been reduced to ' + current1Javamon.health);
            console.log('')
        if (current1Javamon.health <= 0){
            current1Dead();
        }
        showJavamon(current1Javamon, current2Javamon);
    }
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
    // console.log('')
    resetOptions();
    deleteMoves();
    if (current1)current1Javamon = current1;
    if (current2)current2Javamon = current2;
    if (player1Move) player1Move = null;
    if (player2Move) player2Move = null;
    showJavamon(current1Javamon, current2Javamon);
    changeHealth();
}

// This will put options back into place, hide fight button and show next button
function resetOptions(){
    let options = document.getElementsByClassName('p1-button display-none');
    let options2 = document.getElementsByClassName('p2-button display-none');
    for (var i=0; i<3; i++){
        options[0].className = 'p1-button';
        options2[0].className = 'p2-button';
    }
    document.getElementById('fight').className = 'display-none';
    document.getElementById('next1').className = '';
    p1Click = [];
    p2Click = [];
}

// This will delete the moves from screen
function deleteMoves(){
    for (var i=0; i<4; i++){
        if (move1.length > 0)move1[0].parentNode.removeChild(move1[0]);
        if (move2.length > 0)move2[0].parentNode.removeChild(move2[0]);
        if (party1.length > 0)party1[0].parentNode.removeChild(party1[0]);
        if (party2.length > 0)party2[0].parentNode.removeChild(party2[0]);
    }
}

function changeHealth(){
    health1.style.width = 44.6*current1Javamon.health/100 + 'vw';
    health2.style.width = 44.6*current2Javamon.health/100+'vw';

    player1Name.firstChild.innerHTML = current1Javamon.name + '  HP: ' + current1Javamon.health;
    player2Name.firstChild.innerHTML = current2Javamon.name + '  HP: ' + current2Javamon.health;
    player1Name.firstChild.className = '';
    player2Name.firstChild.className = '';
}

function updateHealth(num){
    switch (num){
        case 1: health1.style.width = 44.6*current1Javamon.health/100 + 'vw';
        case 2: health2.style.width = 44.6*current2Javamon.health/100+'vw';
        // case 3: health1.style.width = '0vw';
        // case 4: health2.style.width = '0vw';
    }

    player1Name.firstChild.innerHTML = current1Javamon.name + '  HP: ' + current1Javamon.health;
    player2Name.firstChild.innerHTML = current2Javamon.name + '  HP: ' + current2Javamon.health;
    player1Name.firstChild.className = '';
    player2Name.firstChild.className = '';
}

function animatePlayer(num){
    switch (num){
        case 1: player1Scene.style.animationName = 'player1-animate'; break;
        case 2: player2Scene.style.animationName = 'player2-animate'; break;
    }
    setTimeout(function(){
        switch (num){
            case 1: player1Scene.style.animationName = ''; break;
            case 2: player2Scene.style.animationName = ''; break;
        }
    }, 3000)
}

// document.addEventListener('keydown', (event) => {
//     this.keyName = event.keyCode;
//     // console.log(keyName + event.keyCode);
// })

// document.onkeydown = function(event){
//     console.log(event.keyCode);
//     // event
// }