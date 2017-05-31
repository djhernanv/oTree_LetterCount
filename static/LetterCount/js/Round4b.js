var sequences_4b = ["faarazhkkg","aaydaaaxowgaaa","anjaxwarkirgpoabac","faamjvvaoazpuyakoolaay","iuxadcinzcvldaqgagjmhazqsp","nalapkztvnqawtauxaauaoavnuekax","asvkxazqcoasmzshametfaxevtyamupawg","wtxarcqakydapjduabwaaigfpjzorazcwflybv","qeaijabureturoymaoglwztitacdomaqaraqpegbvj","eiahatnypqoatkrogdkahxamaaaoagbrzaopetuulaivua","umikwfslakoinalkubrasabuiatjqksqejoaakgauwkaasbaba","aaqytaexuhlancmwcaragjaagpfpslqoffdalolamhtwjrxjabjwaw","auauzrrajlagbauaakrveoiachaorqaoayahhhpggapyktvtarhchjvuag","aaatqsagakiiwexwmsuaamuauauadmadejthmmurbwggggagkagaklaoentpfn","wqcjyaathadarqiuapzawfhfazxuxwsrcdoqvqbadimxakicznvbacmwoafhjfaiua","agganslweatmracaabvocrjessiemzlzkhfrxaueovcikzxofdfpbahphzkejwjaitoagf","iibhsrwqkpyijupqhcwybawmkactaluraaatqgietwaanpynadeikscvcaztsahlzfrauaarmh","qiajaammlqkakuuapadaqkeaadqatvbymhaeezuveluyhqagmxnsrakheapabhaaulldfyvdbianva","pqahccaijfvaluuphmnbxtwdajcnnqcfneaujbaayeaadakkwzhudamaagdilnakahbdjmgatlimbqvbaa","hknvaioiryawdqpzmbvostdqyylxkaalscyfrvwrtjnaglancxagwanwdapfuqniypapqafsrpjfoouyadkkac","kqayaxzdkhaqaawaqvlarwmsataakiahbcaylkcnlhkorrrkyoaakafafavyehtasaizoabxvsvlavcgaqacjmjhiu","uykgnqaasabrodhammxjkanatamaugghwumnfqejnqziarljjrculcakuoabwmqncaucaetxdaannbaaftpkakqaebaoah","sgwjaafqwameayfpanedsrlvuyuvsrdyaaebvalauaabprpqirpaaasewvqnabbmilnyfimshqaaxsjhvyagkyllalijaahjqo","upxrlrpuagrjaafjvkstchaxhdarrqgjoanpjaolvaashkkraquxxaaadldeiqpickvqmadmscagikpnfikseyhcalkqmetftxvghp","baamtraavjbpbahhpdxlczmutjjmbkekhkgpzvacaaaamawqbhwoxaicnogsumpgfupabatnvhearvmcxaunebaqsafitaaahkkrerpslp","taaqtdachpameabaqvlzpigmrdgtnlaxayjmtogaeaxlptxogaejcwbqamiipllrdxolazccyromajucrmwqqwdjexmewirpwjfgtoazdluudp","ccundwlgchreeuaudfbbazdwmbhqwktpcurlavuauwqauawxxbcwagaaguagxacnoadkatkcavmqoiybyplahlaygwviahaacgznkmnzmkxkapnaoa","achciawazaaokctxavbnwgnagqaacbpmataiawldpoyccouxqladaaazshenachbanusnaasgskrcaadsdhvbwbaaaalbaxvvdpgyiasajambacprzaqfa","uajrliqvxfnabarajskeanncdftaskaqhaqqwapopckszzavarggaawhaaxzobkpkakivraelojhjgzmorayqcaanzncajqaufzayiaaeugklwlyafolapprsx","yrbebaaxaajbumkmvsaduuaprasapagaauhxatxcavyoaavwaxqwaidxyetwaawatiaqrlxfjbfxaaabetxuuaadxnjtpgaaanscadglssapykcwvnanaiwmkctdaq"]
var solutions_4b = [3,8,5,7,4,9,7,7,7,12,12,12,15,15,13,10,14,19,18,13,23,21,21,16,21,15,22,33,27,34]
var length_4b = solutions_4b.length;

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

    if (x === solutions_4b[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_4b) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_4b[x];

        var answers = document.getElementById("id_output4b");
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