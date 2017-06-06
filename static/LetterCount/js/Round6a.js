var sequences_6a = ["zvfwtnvafj","qpjopbudfnia","lqmnxdoelaautg","aoajuekfvhqagnba","avrxawmaaacysrqqks","xgazeqeaipdtsnaxioia","pdqpeilpmxdrahapkaxmcj","raapcabezjqqaqeuxavwaofa","wesakujadbvrlvppmymteryhol","aftalegvunaqihjjqaaabagfcawn","wjjmpnwatcqqfaiadyallvhiitaeig","egtnaaaaayaogbjvaersmdaflaadqtda","piwcfagdsjoppzcdhehbanazrjictqmhql","arzacavmvaraopeauvmbaxeevmalpoatatqd","vyaisrlwyxarxjapiozgycnaamufkipwsadwmk","zedorwtahfaygoxcadnwwtaxbyzqokolnjapdwew","iapcvawzrsgtzwxxamdnqicbwznnwogrnarkuyfytl","lyitrleadajakhgtdncmddgpoxadaydhjozauaewpdra","vgxuxsppnplirsjdsacuauyaosmayqmczpavneaxtdacor","dqoaasdatlfaipzoruvyvsvxormaasahquswvgboeaeyzrjn","agtgawshffaaqvaxuakadbalaaravehgmdaaafhnjaataxahab","lqpsttxdhxajefzeaonaabhsuasewlxaxbwgadolvbatbeotgaoa","eiaptmfayetqhpjuaohlotkdkbytqvfpoanawalnaabcsucvatsmah","bdahxoegtupjepaufgblscpeiaqafaadapbbwvaavxjacyjieadawbgh","maaahtwalaaipovvrjawutadccfsijvvuratoeaaplyqafgqhaplakzilf","evrftwzghkoaabyedkhzhcvilxcefauphdaqxasxluvalsekspoaasranxha","dazilhklwmzbqdumtiozuaeocvgafuaxrhmiharinofaamxxiqavmvqaafpdwg","eznmtdiwmkqfapaaxrtuagbyasafbxlhaoxjgrlajwqaadeuaiivakhoahbogulf","jvfusauxiedzaaclquleamwftgatnvbmmagaakwzekdsoapayaawaxcescexaavzdb","ababpxamkacaqxlaacrjtfzoqlgamahtcbsujaxbctyattfafsqtzseaaclazytaykrn"];
var solutions_6a = [1,1,2,4,5,4,3,7,2,8,5,11,3,10,6,5,4,8,7,8,19,10,10,12,14,10,10,13,15,16]
var length_6a = solutions_6a.length;

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
        el.name = "t60" + (me.index+1);
    } else{
        el.name = "t6" + (me.index+1);
    }
    el.value = document.getElementById("min").innerHTML + ":" + document.getElementById("sec").innerHTML;
    el.id = el.name

    var answers = document.getElementById("id_output6");
    answers.appendChild(el);

    if (x === solutions_6a[me.index]) {
        me.makeguess(me.index+1);
        me.resettime();
    } else {
        me.makeguess(me.index);
    }
}

me.makeguess = function(x) {
    if (x >= length_6a) {
        alert("Error");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_6a[x];

        document.getElementById("id_output6").setAttribute("value",me.index);
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

document.getElementById("Switch_button").addEventListener("click", function() {
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