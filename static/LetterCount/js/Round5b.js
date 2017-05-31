var sequences_5b = ["auxiyhahvc","nhrwsvzwptimxa","hfpaeavkpaaaodvmhd","yufihagaahgsrwhfaaasbb","nnoabnvtadamwtamonzaatpeas","odffaaaoivkmldwkaynvufyxavaxpr","ftekuaktscshclpasxbtudltuvggabvhun","mnaqanualpmaxsaeynaaaracaaaplllzavifed","axjdaqazaryyaxuqbscabmevxaaeeufasumhcozeqw","abcaifwevkzgtajediatqtaahoqhsumhrgstaadhxqtauu","nwulrchgdsjryxvaqanuajaaalabgaoalaoeoakjalgjmaajiv","pgckraugfnacwmsyaaftsrvvmpqoajavvsooujppaapfianjaptauc","lepaiabcacybabpakazxivahjoyqacgnnaaaavljahocamaibxplancdjq","rjwafgoqvppalkczhwznakkcyaaehajunaiazdqxhacavaeaawjtafzczochxa","qaabqeaadlwgpqaqaceasjcwmcofjlfqnaqmdhewvyksaaeziqkuaddafabagafnwi","cstrmdalazzavsarwqkayamquiaysdaaoiclunjbelacaavvjafaaatnatsabdiqppralv","maataaiajamgxbampewvaoamcspkwyglticatzjabarcouriwczawquoavjjijbawpnanaobak","capaamaapnbaqeaajaassasuqgfbpahhhcxsyiheabdvbvwsaqauravqshsfsiatmmaaoaslkzffdl","rfvwdpiumnjexhieaarmatvwjytdejfaqofxmpjcauaaejauabsbutavtlfrhpyvekbaaljdiuaiaeqmkm","anqeblelubwlvmaqasaahralhgyrzcaawsallkhaayjaanapvyeqaalioanbatfuhaawemtyaotrfikrhzaowy","cdhewflhasdmjpazrxozalshroauagaalfsasvjsyamkisvlphiaamslyglswpakabtwsyzumvenxizxwdaemmjmfl","awhqcerslyatazaaljshlawatafaktavibwlwqkyjalpaylaaoaatmmblaabunwfrrzaowazaotasahehaycmxlauhyvdn","hcinoaaxtvarwgwuapzafazcnabbibbbzqanmrtufqwcaoaaqjwdxnmpyuaqjtrpxabhdgahkrbexafadaabahaskefaajigma","dsoacafojxnmhsalvzcnajtxsvnpvalufkfseanqzsabvyhpmljaayfduzwnearkaaavanthmqwotjizaaafrluadbwzavnaazdaau","zaamwatwkdxarbeaaxtatjaanromohpxpgaipirsuahisagctuizgabytamtmajtyakkqacmnmjaamaiemcmtcvqjuoanxhiheafujtfap","johmeuauuzafreclaedppkmhguwkcaobbahphmoicavaznaajaabfxpcamuraayqmyohqoadvcvzbcuxavwtnitdiphnweyyjpzejewonwryra","abajxqxdnlhcaaqakhkauitaofbmnpauadbnrnsfrjtfavawaijwiecrajayqvaaampppaovyaqaokuknefandawodvjfcittkapeatafagwraanki","apmwyhunxahrlaggfmakuqllayczqxfspahaoxwlaeigoanqhsynfalhxajbjpdsibpamwacfuccadauaegaxkyggasoapdaaguakstrdpaarhaayqkkam","alugdazaaahgkgagkqhkdaaalvalcakauhrybulduaantydjqnatahanoharhcpfaaowelfnhxipknytmilhqaqsalcgwxmeajfadzaaonoqvpqaabaayiodap","acyiutpyhfewvjaoptxjakxaaivvfwxaazlmydciauuhcomosqdbapapjlejagvjpnfoapaeauvilspfalnjcmuahugznluqdxteaabdcrazaskiyxadcqfmcyxaua"]
var solutions_5b = [2,1,5,6,7,6,3,13,9,9,14,11,16,15,15,19,18,20,14,22,14,25,23,23,23,17,28,27,31,23]
var length_5b = solutions_5b.length;

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

    if (x === solutions_5b[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_5b) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_5b[x];

        var answers = document.getElementById("id_output5b");
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