var sequences_2 = ["pcqwugubaa","aansfaaojfac","rcwtataafwikxc","xtwahmwmcjtknfhm","rocfejmjfzaugalcjj","lrataaognvascaraktda","ajdcpeakaargqaacjavlhm","auafzrzvijyworhtxbyvqaaq","aaiajaaoafravuzyagaccpaoau","znafaqysbcugaovaafmucfaauqdh","cavbabkiaabhaigwfaflnuoyizbhcv","hbxunaaqouorrpysnagyjzcaazaaarta","vmqpawamzpimraweqlhujjuffajbqpefga","ygaoymtfcroajphwyoabaadsqavaaasatqxa","afasudlfofboraimxayavvtfjyaaaznpouuatx","aackadbabdbtkbrdssuguoakaldgqgaguausalja","dckaanmvwalyaqekxhqadaajsabekdabjarupnasrq","gaivawmzmyljnhkhkbhsxaraaekmyasowuupvadeltqm","yhzzgmadtapsswazpaqxhzqaaavfbhjjyyebaqnzndnyaa","bdnurmzvoawakpkuewaigelafeakulalwaaauwaujxzuchoa","atujsphearpoasavtwdamhzaarmvzbasmrayaabxnaaalzgwam","zfrzjaataagywabqgzpzfzffybotfmntjraqypnnbafytmwakwue","hmamacaqxaawvfhaoxapqgaacmsmkaairfjrhqivajxxqavmaycawd","aatugllalbfubcovdirafhaeharzwxyaauosfazdbytfvekqdtanbrsw","kttrynapoarbigayjyabzhruvudkoafpwdnbaasvkgaacprncjvtfarcae","zupfwlveaqohauawljenvaayeyruaoaachipefzbiakawkasscjpabpawvaf","kaajdkeaavktxnaaaabesuyafeaawabcyqnsozwrawznsiaadibaaigwraaaxa","aqtdwkjavsffugauwisizakkrgazgzzlgljafmladargaajchbvubnalwwyfisjt","auqqlcrbwecyaamfiadhbawatnafwwvaqtoiogagfzgaaatbwnfenxafuavhajaalg","zlrwdyoaaaranrayakawswgodaqaujuqsgqauuasrbhnpwoyaapwtagajeytxawverfa"];
var solutions_2 = [2,5,3,1,2,7,7,4,11,7,6,9,5,11,9,10,11,7,10,11,15,8,15,10,11,14,21,11,17,17]
var length_2 = solutions_2.length;

var me = me || {};
me.index = null;
me.guess = null;
me.timer = null;
me.pad = null;
me.settime = null;
me.resettime = null;
me.check = null;
me.makeguess = null;

me.pad = function(val) {
    return val > 9 ? val : "0" + val;
}

me.settime = function() {
    me.sec = 0;
    me.timer = setInterval(function () {
        document.getElementById("sec").innerHTML = me.pad(++me.sec % 60);
        document.getElementById("min").innerHTML = me.pad(parseInt(me.sec / 60, 10));
        }, 1000)
}

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

me.check = function(x) {
    document.getElementById("player_guess").value = "";

    var el = document.createElement("input")
    el.type = "hidden";
    if (me.index+1 < 10){
        el.name = "t20" + (me.index+1);
    } else{
        el.name = "t2" + (me.index+1);
    }
    el.value = me.sec;
    el.id = el.name

    var answers = document.getElementById("id_output2");
    answers.appendChild(el);

    if (x === solutions_2[me.index]) {
        me.makeguess(me.index+1);
        me.resettime();
    } else {
        me.makeguess(me.index);
    }
}

me.makeguess = function(x) {
    if (x >= length_2) {
        alert("Error");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_2[x];

        document.getElementById("id_output2").setAttribute("value",me.index);
    }
}

function keyDownTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
    var wert = document.getElementById("player_guess").value;
    me.guess = parseInt(wert);
    me.check(me.guess);
    }
}

function keyUpTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}

function keyPressTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}

document.getElementById("Switch_button").addEventListener("click", function(event) {
    event.preventDefault();
    var pattern = document.getElementsByClassName("jumbotron")[0];
        pattern.classList.add("hidden");
    var switchmode = document.getElementsByClassName("Switch_mode");
        switchmode[0].classList.remove("hidden");
})

window.onload = function(){
    me.makeguess(0);
    me.settime();
    var switchmode = document.getElementsByClassName("Switch_mode");
    switchmode[0].classList.add("hidden");
    document.addEventListener("keydown", keyDownTextField, false);
    document.addEventListener("keyup", keyUpTextField, false);
    document.addEventListener("keypress", keyPressTextField, false);
}