var sequences_6a = ["zvfwtnvafj","qpjopbudfnia","lqmnxdoelaautg","aoajuekfvhqagnba","avrxawmaaacysrqqks","xgazeqeaipdtsnaxioia","pdqpeilpmxdrahapkaxmcj","raapcabezjqqaqeuxavwaofa","wesakujadbvrlvppmymteryhol","aftalegvunaqihjjqaaabagfcawn","wjjmpnwatcqqfaiadyallvhiitaeig","egtnaaaaayaogbjvaersmdaflaadqtda","piwcfagdsjoppzcdhehbanazrjictqmhql","arzacavmvaraopeauvmbaxeevmalpoatatqd","vyaisrlwyxarxjapiozgycnaamufkipwsadwmk","zedorwtahfaygoxcadnwwtaxbyzqokolnjapdwew","iapcvawzrsgtzwxxamdnqicbwznnwogrnarkuyfytl","lyitrleadajakhgtdncmddgpoxadaydhjozauaewpdra","vgxuxsppnplirsjdsacuauyaosmayqmczpavneaxtdacor","dqoaasdatlfaipzoruvyvsvxormaasahquswvgboeaeyzrjn","agtgawshffaaqvaxuakadbalaaravehgmdaaafhnjaataxahab","lqpsttxdhxajefzeaonaabhsuasewlxaxbwgadolvbatbeotgaoa","eiaptmfayetqhpjuaohlotkdkbytqvfpoanawalnaabcsucvatsmah","bdahxoegtupjepaufgblscpeiaqafaadapbbwvaavxjacyjieadawbgh","maaahtwalaaipovvrjawutadccfsijvvuratoeaaplyqafgqhaplakzilf","evrftwzghkoaabyedkhzhcvilxcefauphdaqxasxluvalsekspoaasranxha","dazilhklwmzbqdumtiozuaeocvgafuaxrhmiharinofaamxxiqavmvqaafpdwg","eznmtdiwmkqfapaaxrtuagbyasafbxlhaoxjgrlajwqaadeuaiivakhoahbogulf","jvfusauxiedzaaclquleamwftgatnvbmmagaakwzekdsoapayaawaxcescexaavzdb","ababpxamkacaqxlaacrjtfzoqlgamahtcbsujaxbctyattfafsqtzseaaclazytaykrn"];
var solutions_6a = [1,1,2,4,5,4,3,7,2,8,5,11,3,10,6,5,4,8,7,8,19,10,10,12,14,10,10,13,15,16]
var length_6a = solutions_6a.length;

var me = me || {};
index = null;
me.guess = null;
me.pad = null;
me.settime = null;
me.resettime = null;
me.check = null;
me.makeguess = null;
me.timer = null;

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
    /*if (rm.choice+1 < 10)
        el.name = "c0" + (rm.choice+1);
    else
        el.name = "c" + (rm.choice+1);*/
    el.name = "a";
    /*el.value = parseInt(x);*/
    el.value = 6;
    el.id = el.name

    var answers = document.getElementById("answers");
    answers.appendChild(el);

    if (x === solutions_6a[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_6a) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_6a[x];

        var answers = document.getElementById("id_output6a");
        answers.innerHTML = index;

        $(document).ready(function(){
            $(document).keydown(function(event){
                if(event.keyCode === 13) {
                    event.preventDefault();
                    me.resettime();
                    var wert = document.getElementById("player_guess").value;
                    me.guess = parseInt(wert);
                    me.check(me.guess);
                }
            });
        })

        $(document).ready(function(){
            $(document).keyup(function(event){
                if(event.keyCode === 13) {
                    event.preventDefault();
                    me.resettime();
                }
            });
        })

         $(document).ready(function(){
            $(document).keypress(function(event){
                if(event.keyCode === 13) {
                    event.preventDefault();
                    me.resettime();
                }
            });
        })
    }
}

window.onload = function(){
    me.makeguess(0);
    me.settime();
}