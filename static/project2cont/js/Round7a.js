var sequences_7a = ["ahgjwsjkck","aahmatgdyowd","fooajbufogfaaa","bazxgaryapcgxzaa","ndqkxasamzddavajdk","ilfcamngfapoaptcayga","scyaabygacsejvalqdnclu","tcatrykuaaxgiziiiampfsla","ngygwafaeneyuvanetztaynbaw","tfkcbaorhcvdzyaaatyqzjggdbax","angcgasabloawtagbodiaarncrkplv","irrdvvuwjaxbxspectbayiaqfehahaid","tqelvjnaavuarmsdkahogapbjbahvomfxg","ohxrihmtzbcaqqikelapaocwaaenxsajaawc","fxmxnakawejagiansttailoqnarncrqvdgskhl","sgpaycibcyacgapljayodxntaqjbqegmhppaawan","laaaanrgkrryaehomcpvamceisaokznasnxdoaaoma","bjsgafyvtjehqolzouzdchuuxgaakafnzaniavxcmslx","kyaabkasfmpozaabwsbahnxvhdhsmamhaaryaxsavbzewe","lytaafnjlgaamlabaecdtmekzfvajeznfdanjapedaakaxvf","cejahygwfayhnnudfafjnwugzignedjemzrufvsrooxbavsqaa","qccakauulvafmfvaamfxfkkaxgmcfeiagucaataegaznckwaesea","kkatzramvczaqvaabpsahiapteftcataaviafaazaaoaaokfinafre","fcgbasodxstvmimglyixbaatovciaxowuhedxalaedpimvmojajjwnwh","newfatszeqeqiatnaeradanyjaaqdahqfxeapdjpdnxlrcsraapayeaimw","yodsvjpuaeemoxafdtwgxaapfsmaqkaxwpjtjrafaavabarejmonjcafhxfa","lccjbqadxalztmdxnpoegthdcgazvmuevwntsnaajgamcbrasiveaubbefscna","cmwtnuzealnerhxhpaqajoazdcywtiwzatlmswaravvziaaixmscumgeypqapvjh","abddbibawcnsuoaypgfutdglytmacagvxhaugxarwzcgakguydkmawnnkgudrtsfco","fztmvofawampyvraklkaldgaahwaowapmaxqmzknuibpaszvdqiilakaadauqxhsqfic"];
var solutions_7a = [1,3,4,5,4,5,4,5,5,5,7,5,6,8,6,8,11,6,11,12,6,13,18,7,13,13,9,10,9,14 ]
var length_7a = solutions_7a.length;

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

    if (x === solutions_7a[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_7a) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_7a[x];

        var answers = document.getElementById("id_output7a");
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