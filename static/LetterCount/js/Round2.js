var sequences_2 = ["pcqwugubaa","aansfaaojfac","rcwtataafwikxc","xtwahmwmcjtknfhm","rocfejmjfzaugalcjj","lrataaognvascaraktda","ajdcpeakaargqaacjavlhm","auafzrzvijyworhtxbyvqaaq","aaiajaaoafravuzyagaccpaoau","znafaqysbcugaovaafmucfaauqdh","cavbabkiaabhaigwfaflnuoyizbhcv","hbxunaaqouorrpysnagyjzcaazaaarta","vmqpawamzpimraweqlhujjuffajbqpefga","ygaoymtfcroajphwyoabaadsqavaaasatqxa","afasudlfofboraimxayavvtfjyaaaznpouuatx","aackadbabdbtkbrdssuguoakaldgqgaguausalja","dckaanmvwalyaqekxhqadaajsabekdabjarupnasrq","gaivawmzmyljnhkhkbhsxaraaekmyasowuupvadeltqm","yhzzgmadtapsswazpaqxhzqaaavfbhjjyyebaqnzndnyaa","bdnurmzvoawakpkuewaigelafeakulalwaaauwaujxzuchoa","atujsphearpoasavtwdamhzaarmvzbasmrayaabxnaaalzgwam","zfrzjaataagywabqgzpzfzffybotfmntjraqypnnbafytmwakwue","hmamacaqxaawvfhaoxapqgaacmsmkaairfjrhqivajxxqavmaycawd","aatugllalbfubcovdirafhaeharzwxyaauosfazdbytfvekqdtanbrsw","kttrynapoarbigayjyabzhruvudkoafpwdnbaasvkgaacprncjvtfarcae","zupfwlveaqohauawljenvaayeyruaoaachipefzbiakawkasscjpabpawvaf","kaajdkeaavktxnaaaabesuyafeaawabcyqnsozwrawznsiaadibaaigwraaaxa","aqtdwkjavsffugauwisizakkrgazgzzlgljafmladargaajchbvubnalwwyfisjt","auqqlcrbwecyaamfiadhbawatnafwwvaqtoiogagfzgaaatbwnfenxafuavhajaalg","zlrwdyoaaaranrayakawswgodaqaujuqsgqauuasrbhnpwoyaapwtagajeytxawverfa"];
var solutions_2 = [2,5,3,1,2,7,7,4,11,7,6,9,5,11,9,10,11,7,10,11,15,8,15,10,11,14,21,11,17,17]
var length_2 = solutions_2.length;

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

    if (x === solutions_2[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_2) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_2[x];

        var answers = document.getElementById("id_output2");
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