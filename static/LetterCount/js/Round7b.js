var sequences_7b = ["hdaabhwaas","zawabeaefcfaaa","bfawepnjadgcearmsd","kfspbkiahaasateprudcam","bmfryizfalsfrwrnacargniwed","ptwqgjabkmczvatdxbwafwsojgaouf","uwwphraeyrrmyhoyjrweaaraddabcqapcb","oidnwlfvuxbdaqlkaldnqvimaalmzwarftccja","wxztanjozaaayaktppuzaataqysaijqasaztwwlboe","oaaikxqbmayeuhhbiaatgxaxggglmwaaqhrpqtaviikzkm","vkftwqxizflbuydfaobcaaauiupesgauswhfwaavuwvekmwtfn","mwkqaasaanayaykgkaekauqzweunmwtokzpsaalasazaarajewhnjz","jxahdgytrzyhaeoraauvaxpcqalfyaigjzgottclharckhbxkrfuarfirb","exrfdxcaaaadrnxljradfqldidaaaqvelthoylcpngepkkmwegzmabiumlpkaz","lvbopoazdvqdkstrvmkomauaveavaagislykhsajicaaawaambfthiiarnsfiymelq","tsxopatydaeoenauzgrlupageiaazpaaarvadwelzyugpfaakrxniawdxoauuazxfybnha","jxaluaraapfisjqsndbgihkkwwahnnhiaiasyecqaqaadavaatjbiydkbnopjfgaaxraayapfl","xwualiuavhtogbifaxyiycfaacadbjncyqnrpcaadqxawdavhenllalaatmtsyatmpzzdyveataaaa","apradusccanaqgaanuheooatmnjddaaiewjfhhtajohahdxhnajynqmagjcabqwvtimiqdcbaiasswnjqr","abduoashekbgerapxjktugkvjzbvaajdbkvaaaaufnazayajraapabacitjllaagarfaoaxtrjbacymxkircje","aaefqmacvadafdxgiamajlizldhkdmewacrxdvtwmaauaaoaczatbenezkkrtadrakflbyvazaawattwidkawzezia","owyffcasdtjmpcrihaalqabbafkzltgaolavnhsmaoatgaopchybayguiozabtivadbnabraaanmcaacaryuvrfjfapiqa","ravhgdmnaqawhmailbsbofjkjrcrcynzaedzzjwbottaetmaasxmdaubaakyidynfeznaxsyrjiapkcahleulzbxwronzuzhba","dumadvcaavgapanxhaababbahazanatxtsagcfcaapswtjaaixkoznhhpoahmafaubgayaoynhafaayaaashaafajaahvefwuqoapu","aawyxoxfldasxnvoqyaaacxolidnoathvaaujxdncprslbbakasabfopyvucsamazpzqdrmaowjxsezavwarmqabaatqkmyveaixajzaso","wapsooassaoasablkzwaifajcaqibhpafanrdkqamarrapuaavdihjorhmaavvmmnhiaulxaytycogiankakiffxdicmaolesmglywlipnprua","utaoikzhlkqnjabkmclywftmuavzganauixiaaawqjzaazqggifatlkaadadafakqqawyawrnjdqasoaigyzumszfacdqjtzkniahmmlvutotkalaf","zswbitvpskttpzovfaxyadhmhukaglqfaaancbneaxuurajhaagkqdvaunizyafjlnaaxbncreaqamnazajpsjoasojaaiaintrzqvguknakoaajyoavqk","lfgaatzsetmafcmyaavikkvasbszofeslaejjhifzbamrsbnvitioamvqymczqwhazzhrixqpahqaapodwarathdnpavyimpzoyfepdaaaarwnkllnozjkbtmz","adcjrmaqaakamtkbxyjbrvzbaatzsydiamaobvhaxexagmvaaabeahoqtqacajzqaqamzozepfeaoayamfyaiaxoapjlckaevutaaazuadnaieahgnovoanvaalama"]
var solutions_7b = [4,6,3,5,3,4,6,6,11,9,7,15,9,10,13,16,18,19,16,22,22,22,15,34,23,23,24,26,20,37]
var length_7b = solutions_7b.length;

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

    if (x === solutions_7b[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_7b) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_7b[x];

        var answers = document.getElementById("id_group7b");
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