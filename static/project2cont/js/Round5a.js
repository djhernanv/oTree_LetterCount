var sequences_5a = ["pawtnlatau","fncmzacicvvi","cxsaakspvtsmmd","rxyaauehknhakaja","xvaawyjofkovcxxlra","aefogadqvjmxaariaael","bnazjakurdgbcmaatvxdra","cazfsghmmtagkzadqdyihrzl","hcaaezuygwpqzvzkaaauibucav","ndjrgofnaiamjmqlzybmhzqcvgwf","gaquxeaaptkacaduueazxsrajwabdj","uonoafpaaakanaudkteyranvtjalkaba","akawbfxlmbashaazfauazfvgikamazazva","lvyqavnofqmneyraythkaaxmtnalfakaaaid","yqiagamirwbomkiacrarqeubgxulqbcaavyllj","abbyoakokayydoazuprbjhamacavagyipmktaulc","tarrodrbkmcnjouzaaaevbznnageajiuhmihpfhbkf","oaamvuajjvafrpatfdaacnjdawxtrcxasqiayvpkhpdq","apaawrycwfxzaslpuqahfovyzpxhpynyvvqkavafafgiaa","iawaaejiwuupoyzkascqmyvortsbaakraaaxajcweyxqxfaa","anucoafaoaaaaaazgupqmfyxkeemkpvrjxegadxjsomkcnsbva","aijxsyvdvwlmvhtkzxlvuhmvalgcakzlauqvvahzannahaubpovx","aeovxqaaxlaxhfgarbfrfevxajdgtoaiaagyajafiyeyotanlagaxy","adalzpwgariapmopngaaqzgxkbtecpwtfbwkpdkarhaxcawlaumahnna","asradaupuwzacbxdckzupapqpaqqkadaakehamadangianrjmxgvalkaaq","dllhzqakashjtlqvhefacmudwabdlcdwobugaleuuafkrzaauahvsuaaudpd","aajkpahrrlfmpxaloojvlqrjaeylxtcvvqnnaanpcuafxzgaakfrlasazclxub","akmawyjqoawsypxerqaauwaaazhzpwnmalniaacknafpakeqraakrfnagrcejlua","suksyvugzxbozupjyaapbbafmaidamhdwadluteoacafdxetcamarcpaipraavzjza","samdjasmythxagpdetaafvhjvlkozlvxwlaaammnusvbaabglwliiykkadmsjhqcqwpc"];
var solutions_5a = [3,1,2,5,3,6,5,3,6,2,8,10,11,9,6,9,6,10,10,12,11,8,14,12,16,11,12,17,14,11]
var length_5a = solutions_5a.length;

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

    if (x === solutions_5a[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_5a) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_5a[x];

        var answers = document.getElementById("id_output5a");
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