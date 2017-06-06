var sequences_8b = ["gsmqkaybnh","pivwaaghotvaxt","adgnadaairaloaghla","yaasaiuofilzlmzcntwkaa","hladacaaspgugwmqmbayeyuryk","dbayauavravdjsawvafrcxdfdaevfn","avasxzlaegykwvawsfavrnjtnstqwaazrk","ymjvjhcldscykaatcpvatcutazatlscilaaawa","oykanhamoclwhlasmcaybvelqaxaqjxemldsulaaaa","aamcfvevjvvcvjwxenaakpmptaaklbyihajjpaqmhubaua","atralaxrzrwgmvajbalaaepdagaahbbgrfoqhtazfeklbzviag","wckhjaabuxowtecqavayahztyhxaaahaptaoqranxanazvgcaxkmji","cdrgkjntcuehjauszwznhdhalauaacxadyzbenauzcugafaakacazqssap","soaocohoxatiagvaaecnanmhmaxejkajfoxcuagakastlkxawyumlrazatsahi","funcwtchifraerkqkaaagoaavqfkpraaxzuxldafficrshlaoagavmejdarxarnacv","ykmaamaayacfxxwefhpaueyapfaawatufaqdhuafcgaoerxmwebchxehdfpvbxajohhkac","xwpqwlykynvvaaaqeafeaofyasuyxafisityaaqlalraesjhaaadaizacadszaqagasiyapaya","ahilktuqwjjzrtauvaowakmsbdxrauiastylftwtsrlntndpvjpqibabdmepudgaaxddailagaxzta","gvxcpeayazjipiiyaadaibokpgvwcvsjmqaapafjzrtzcfblnabazdeyzvjdirzsaoazquefgmzajgmpaa","clfacwryvjewsjajldekjajdapsmuvtaviajditbqzktkaaznpaiiasaadywnaawaasonzjpapumxakzrbwtst","aodtbuaasolodbaggaazaxapbtfunnjsjacvoavxbpatlaqocalabauvtllruathqiywcbaacdrqedntxalaaaaavb","dsnvyavrahaaaaqwahjcjylqhamivayararjuxareapaufydfqamquttuabvaadasjgasalqyyaxatyaxbjhavzdawugfr","dwaaezakizldpiwmgaxeuuhpyugyknomyptdkxrktoopkkzsaixsayoqmpavgaewukqguankykeeghbeathrbagkaqteadunmb","kpkahyfemaeavaukrwpterpshvwajahcbtamafalnecmawgdylpxikafwcinfnyatxkzecahjtkvahaacmaznxyascaxklbofnyjzg","adrfqougadaafxavqjasasvomkaphzxdhuefsarwjgkpraanaliklkagabatzadkojqmgfkdcijtkgweoaajqaapcaunzaoatazaafaljt","egojtatqypawtajsoziguhgaapshxighaabafkavauizwnpgaehdaphflsctoaadaqaabaskvvgncywvfoorsenaxlaiigkwdlmazuakaymaag","hswvligacupknazaanqzmapauaanlygdiabguprlwiigaualkahmxucacxavasmyayrasdnoozjdavtjdaaacuummsbakhaawanjasebjacennggta","safddezadgukuormaavokjalkimknalauaaossjfagfwaaabavtnvccaagaczgakniuaxnyaqacnxamgmiuauktmmdeplpdavazanaaoreyoazvnghaatt","pnfoakagaaagtaaydhojyaizpaarwcsavihsoqfaujamzgaahnaaawgehpoipaaakatsvaciyezgayhgcawoooeoouzotypaaxsnlrtjhshxamaeicjuaebark","aaziarecdafaafabarvugbagaeauxcvktjwvsgmrbzckdewuovltagsoagxanwfafcayacaixasagqgqadafjlpavnoaagaawabqajpcivuyqgbtaacwuaafkklbkp"]
var solutions_8b = [1,3,7,5,5,7,7,9,10,10,12,14,13,15,15,15,23,13,15,18,24,26,13,19,27,25,28,31,31,33]
var length_8b = solutions_8b.length;

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
        el.name = "t80" + (me.index+1);
    } else{
        el.name = "t8" + (me.index+1);
    }
    el.value = document.getElementById("min").innerHTML + ":" + document.getElementById("sec").innerHTML;
    el.id = el.name

    var answers = document.getElementById("id_output8");
    answers.appendChild(el);

    if (x === solutions_8b[me.index]) {
        me.makeguess(me.index+1);
        me.resettime();
    } else {
        me.makeguess(me.index);
    }
}

me.makeguess = function(x) {
    if (x >= length_8b) {
        alert("Error");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_8b[x];

        document.getElementById("id_output8").setAttribute("value",me.index);
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