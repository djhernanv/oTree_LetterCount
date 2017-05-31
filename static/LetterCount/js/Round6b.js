var sequences_6b = ["uiwpagfjla","lckatarhaaaqaa","hjaaivawakhtzmdlws","vaqllwdmkcqqafvaaeyaaa","xpzarwadanewjfkairziagiqtp","qtapvafhmnraqrhwfcratyloaxalru","uanfahrobjreafrwpoakfagaaajqyweaai","lbgaiypalzhjanbdnljmbvmpwdxssnflilaiap","ajkugeokaujqdaxfaashfaxazjapapgljuhjnjraia","faenmbmyaisalxaphgpraalrenayratmaagasgewjiagha","zvdznihaowkzwpglcaaqdahevbhahaofaiancalcrfabacwpjg","naezhrpsrqfszhkomhdwebbghnsstwardmffytbfhvizloqsbzwufn","xasbaaaaihaammxfaahwxfybjadavaaaianemeagmtaxaqaavsaklgifwp","itupcxvaawfutaqnapkabjvlzvqyaxeakxaakwgvohjarzuavaarmnilqhoiah","dpaoaahblvupwgzagcksybtaiwoxjajwobyuaauwjjkajsamdmwhyajhgbamasosat","mvjalarhxydaahjvzaodwuaalyfprafdyjatdaagitwxdaspzxfewgdaknaadahqinaaab","wftawausuedrahvkzaaueoiuorphbvtdajuomsjmxajppjblxkjaualmbmsanagmdnalvuasri","nqzsaozozulabqaskmiaadaxlcqwapwhsqmzawjogazbvahxtajgosgvyyarvjeabfnbiauaytabff","aaaapzwtbnguzconafatoemlbyvadanaaaveapognsayoavlfsaaabxilaayaeizawllcpektxmcaradga","eyaxhavxcizyaaamgjhpaaanzruavaaatakweajwakxllaaaxaiqoetgyarwgufrqgtlaofjkzcnfamapfdvfc","acnoamraaacsvdgraovdsuaaaikwuaamtuaxaartkypixffcabybzanasarwxrovaaksyuajiaqsiasykjawyeakaa","aoaybagnamjyzrmaaczitmuxdyzxtytmexuzakgogtahazyftaewpobwjauntpwaxawafqgajqrbejtabaiiibkulkjava","anofeomvqavlerqvoilgzafaailsakqyhfuknkpaoscrmaobhqmuaxaakriguajaiayakraavzecstnwayyicbahqwnpudavak","zaompghlajjiaarcyuaseaighjafauovhtzaasauiaynjsiqtqzjujyqvpwvkaaawtebvmibazafagjfapikgpkfqsmkyfarqfypao","pdumysapedcaewaqdgigfafaaymiszjapaeyqqkbpktnnrytrtkaawmavpzbirraxdguaazahiarasysockaaauarlbuuaayajxddgueou","mtragbdzryheqrfzadkoadrugsfthafctrusrszzwafxazmialdldqsxuwvakborinenftuhunfhagaayxamvcvpaakgednsabaaganagfvlsv","whlqsgdatsfakjsaraaiqaabawhaiyjmavyaanvlvqbiktyavaprbqansxakhrmywdabupepfoagabxcdzmftaabrlzauauavhdqaymzayhaxzucru","dawlzzhfafalkavaleupojmlgxhiazaaxzaeoaagwahajuoaaaqejxadxaifgjrxsgnmyhzaaiwduiaadarvqveoinnkkagbhepjsoetqvqnzlnfsrakpu","ajyuarmbnkzprndaerajwalcnuepkosegaajaazraaaavarrebealareljobimfaivewedjwlkahxfaalzgaataiuemyxsalkokaeagcauwiagazrgavaaveoa","aasbqraaaxbzhuzozvxkguapexnbmsqaytiuraiwjwbuplntncazadbghugkrvaxaqnkehllnkywajmxaymwhpaqfzpahfisujaalsheegtrhbzcaaecuosgsrtsgr"]
var solutions_6b = [2,7,4,7,5,6,10,5,11,13,11,2,21,14,14,19,13,16,24,23,27,19,21,21,24,19,27,25,33,20]
var length_6b = solutions_6b.length;

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

    if (x === solutions_6b[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_6b) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_6b[x];

        var answers = document.getElementById("id_output6b");
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