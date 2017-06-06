var sequences_8a = ["ttluboaavu","meqaraaytfaa","lzbbuaeyaryxgs","mykaooaboiaubfab","uamqaetctyziknjhkl","vdygaewdwmcqzagwqawl","apabrzaaeaaahyvatavaaa","fdaxthyjswkaafigekqfjblf","xaaacaaxaqkgapoaymiyukfrma","njlftmbjmscqxbjyghxpialmakbz","uyaacmutkbjngwzvxrpeeadadaweub","abxagaxnoajdjowqzladgprtyfjaazqj","tabjlhwiaxaaejvayodcpyrjadvavlafsg","armarokavaaxjeqxtmttepgtqcldhznqqras","jvwptaaabvvbaabbrunshewaqowdmableftarr","aftrwwcaihjmpaclqbcaexdtuotgwskalgapawuy","flcuvluztaearervtawxvfawtzyyczolzlaketpuda","wzszafvwheaqjafdrairsqauamtyanbzsmtiqatzakxv","avtufazenlarjsuaeaafocoapnwblfalnazwazvtzayidj","ahstogrfqohyaegoannwqioaailmavaaawcgarklkadaatac","kvasyuknmoaadgoxxazfxzbvanraehpewswvoaqacdjoagrurv","aaivexnpsudgfaajaaqpaaxkrxawlzdawbawizuvcghracmorpaa","vagjazqvajeesyvngawaasqdagzxwociqlayeraqhalupgqjjaosak","apkackqsazmqhivpaaaqdokdxzwsxnasciabaadhsergkzahvafyjamg","poibrdozaauadrhphogxmzyusdlzuksofzcvarnaojaaaeuxgacqssplsa","waeqiadupnzytgeypmasangduxamspzadgahozxazoazpbavelsutintdvax","bapavtaaimakajsagvfbkzaboaiudhhtnaxdammvkfakgawaalaauaaqazmwuw","ilsprmjlmfrfhzgaanjzmxvmfyxjurairayoartnakvwqddkaamachaoaaalaaya","aajaewatafiyortdwkzabgaeakanuaeseymaaiacutoaxpgiawwnzbjvaulwllkdmv","acqocentdoanuahadorrumbahvnlqlacgzalrbtfaasfabravhvhaltaazgvawnxavrc"];
var solutions_8a = [2,5,2,4,2,3,12,3,9,2,5,7,8,6,8,7,6,9,11,14,9,14,12,13,10,11,20,16,16,16]
var length_8a = solutions_8a.length;

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

    if (x === solutions_8a[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_8a) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_8a[x];

        var answers = document.getElementById("id_output8a");
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