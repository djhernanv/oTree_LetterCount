var sequences_0 = ["wgaaojlbenndnlfajaqqyv","wyafzlgacvagidwjzzayaharrwgxaxnhelvaoxizrlfsgafcoalxybaamnbfgxcptwopadajajnagkazzagzalamuj","hvkpjipslkuo","yaaqxjjhazaptaknryqkimguquqnerodxlqajizaybbadjvkarhc","awgfxamulbeayoaafvyieabkwldpuiadrk"];
var solutions_0 = [4,20,0,9,7];

var length_0 = solutions_0.length;

var me = me || {};
me.index = null;
me.guess = null;
me.timer = null;
me.pad = null;
me.settime = null;
me.resettime = null;
me.check = null;
me.makeguess = null;


// This function adds an addtional "0" left to single digit numbers for formatting reasons, not for functionality
// is called repeatedly from within settime and resettime functions
// seems harmless, but is not fundamental
me.pad = function(val) {
    return val > 9 ? val : "0" + val;
}



// This function first sets the time to zero and then increments the counter every 1000ms by 1. Minutes (sec modulo 60) and seconds separately
// only called once at window.onload
me.settime = function() {
    me.sec = 0;
    me.timer = setInterval(function () {
        document.getElementById("sec").innerHTML = me.pad(++me.sec % 60);
        document.getElementById("min").innerHTML = me.pad(parseInt(me.sec / 60, 10));
    }, 1000) // 1000 ms
}

// This function stops the active timer and sets the display to 00:00. Subsequently, the timer is restarted.
// is called by function makeguess on keydown event xxx -> potentially contributing to our problem, removed for testing
me.resettime = function(){
    clearInterval(me.timer);
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";

    me.sec = 0;
    me.timer = setInterval(function () {
        document.getElementById("sec").innerHTML = me.pad(++me.sec % 60);
        document.getElementById("min").innerHTML = me.pad(parseInt(me.sec / 60, 10));
        }, 1000)
}


// This function checks whether the correct number of "a"s was provided
// resets the input text field to empty
me.check = function(x) {
    document.getElementById("player_guess").value = "";

    var el = document.createElement("input")
    el.type = "hidden";
    if (me.index+1 < 10){
        el.name = "t00" + (me.index+1);
    } else{
        el.name = "t0" + (me.index+1);
    }
    el.value = document.getElementById("min").innerHTML + ":" + document.getElementById("sec").innerHTML;
    el.id = el.name

    var answers = document.getElementById("id_output0");
    answers.appendChild(el);

    if (x === solutions_0[me.index]) {
        me.makeguess(me.index+1);
        me.resettime();
    } else {
        me.makeguess(me.index);
    }
}

// This function loads and displays the next string
me.makeguess = function(x) {
    if (x >= length_0) {
        me.index = x;
        document.getElementById("id_output0").setAttribute("value",me.index);

        var pattern = document.getElementsByClassName("jumbotron")[0];
        pattern.classList.add("hidden");
        var next = document.getElementsByClassName("next-button");
        next[0].classList.remove("hidden");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_0[x];

        document.getElementById("id_output0").setAttribute("value",me.index);
    }
}


// This function is called by the keydown event handler
// it resets the time and triggers the checking function
function keyDownTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
    var wert = document.getElementById("player_guess").value;
    me.guess = parseInt(wert);
    me.check(me.guess);
    }
}


// This function is called by the keyup event handler and only blocks the enter button
function keyUpTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}


// This function is called by the keypress event handler and only blocks the enter button
function keyPressTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}


// This function loads and displays the next string
me.makeguess = function(x) {
    if (x >= length_0) {
        alert("Error");
    } else {
        me.index = x;
        var string = document.getElementById("string");
        string.innerHTML = sequences_0[x];
        var answers = document.getElementById("id_output0");
        answers.value = me.index;
    }
}


// displays the first string and starts the counter
// Importantly, the event handlers are only called here once!!!
window.onload = function(){
    me.makeguess(0);
    me.settime();
    document.addEventListener("keydown", keyDownTextField, false);
    document.addEventListener("keyup", keyUpTextField, false);
    document.addEventListener("keypress", keyPressTextField, false);
    var next = document.getElementsByClassName("next-button");
    next[0].classList.add("hidden");
}
