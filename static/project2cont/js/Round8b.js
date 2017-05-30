var sequences_8b = ["gsmqkaybnh","pivwaaghotvaxt","adgnadaairaloaghla","yaasaiuofilzlmzcntwkaa","hladacaaspgugwmqmbayeyuryk","dbayauavravdjsawvafrcxdfdaevfn","avasxzlaegykwvawsfavrnjtnstqwaazrk","ymjvjhcldscykaatcpvatcutazatlscilaaawa","oykanhamoclwhlasmcaybvelqaxaqjxemldsulaaaa","aamcfvevjvvcvjwxenaakpmptaaklbyihajjpaqmhubaua","atralaxrzrwgmvajbalaaepdagaahbbgrfoqhtazfeklbzviag","wckhjaabuxowtecqavayahztyhxaaahaptaoqranxanazvgcaxkmji","cdrgkjntcuehjauszwznhdhalauaacxadyzbenauzcugafaakacazqssap","soaocohoxatiagvaaecnanmhmaxejkajfoxcuagakastlkxawyumlrazatsahi","funcwtchifraerkqkaaagoaavqfkpraaxzuxldafficrshlaoagavmejdarxarnacv","ykmaamaayacfxxwefhpaueyapfaawatufaqdhuafcgaoerxmwebchxehdfpvbxajohhkac","xwpqwlykynvvaaaqeafeaofyasuyxafisityaaqlalraesjhaaadaizacadszaqagasiyapaya","ahilktuqwjjzrtauvaowakmsbdxrauiastylftwtsrlntndpvjpqibabdmepudgaaxddailagaxzta","gvxcpeayazjipiiyaadaibokpgvwcvsjmqaapafjzrtzcfblnabazdeyzvjdirzsaoazquefgmzajgmpaa","clfacwryvjewsjajldekjajdapsmuvtaviajditbqzktkaaznpaiiasaadywnaawaasonzjpapumxakzrbwtst","aodtbuaasolodbaggaazaxapbtfunnjsjacvoavxbpatlaqocalabauvtllruathqiywcbaacdrqedntxalaaaaavb","dsnvyavrahaaaaqwahjcjylqhamivayararjuxareapaufydfqamquttuabvaadasjgasalqyyaxatyaxbjhavzdawugfr","dwaaezakizldpiwmgaxeuuhpyugyknomyptdkxrktoopkkzsaixsayoqmpavgaewukqguankykeeghbeathrbagkaqteadunmb","kpkahyfemaeavaukrwpterpshvwajahcbtamafalnecmawgdylpxikafwcinfnyatxkzecahjtkvahaacmaznxyascaxklbofnyjzg","adrfqougadaafxavqjasasvomkaphzxdhuefsarwjgkpraanaliklkagabatzadkojqmgfkdcijtkgweoaajqaapcaunzaoatazaafaljt","egojtatqypawtajsoziguhgaapshxighaabafkavauizwnpgaehdaphflsctoaadaqaabaskvvgncywvfoorsenaxlaiigkwdlmazuakaymaag","hswvligacupknazaanqzmapauaanlygdiabguprlwiigaualkahmxucacxavasmyayrasdnoozjdavtjdaaacuummsbakhaawanjasebjacennggta","safddezadgukuormaavokjalkimknalauaaossjfagfwaaabavtnvccaagaczgakniuaxnyaqacnxamgmiuauktmmdeplpdavazanaaoreyoazvnghaatt","pnfoakagaaagtaaydhojyaizpaarwcsavihsoqfaujamzgaahnaaawgehpoipaaakatsvaciyezgayhgcawoooeoouzotypaaxsnlrtjhshxamaeicjuaebark","aaziarecdafaafabarvugbagaeauxcvktjwvsgmrbzckdewuovltagsoagxanwfafcayacaixasagqgqadafjlpavnoaagaawabqajpcivuyqgbtaacwuaafkklbkp"]
var solutions_8b = [1,3,7,5,5,7,7,9,10,10,12,14,13,15,15,15,23,13,15,18,24,26,13,19,27,25,28,31,31,33]
var length_8b = solutions_8b.length;

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

    if (x === solutions_8b[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_8b) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_8b[x];

        var answers = document.getElementById("id_output8b");
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