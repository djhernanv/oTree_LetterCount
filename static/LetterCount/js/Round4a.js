var sequences_4a = ["axyadbhitu","lavnxstyonau","ovpvsmfjalaaak","iyiswlakcyamxpwh","aubacsqqzhitbugyzb","dgegeaccpppartamloat","aodufqhcatqowavariarqe","zaavhekaauqaedaltffkypav","xaaxvomamueagnhzjbaalaafwa","xaobutgdjraetbjaljlasnbfsacb","iizflbuyafmzcmbnraaukdczoaaacb","ardgehfaioceomaaqeahaxdjaelujlea","xmoqajabwspkggvzyfazajlvvsshifzavc","gkukiajaamswknanaofadyzidazwanxaaavj","vsurhiarqzbwfcqxawazhjiaaacakulitzyjmg","ximxsaysivzmzahaiaeqbkovhmsdyvaawaaoeaig","ozujfifaaseogrllguuarajvutzsdagbnxuccvxqui","agsfxjrsqczsgodmaufirtmmaaaacnhuiwihvlltarla","idriaahrajjzagxjivaakhkbzatsantgxasibeitobpuhz","ydloigbonqjqzyadrmarzmdaaegiixbeblstexjvanocgmaq","xaaaakaowwabzaavazawjsmnhysadevqifyasolgyahafaweda","bgnkkauayixggajfhajcgznalzaaafadqpcwxcacqbeaagpmipfb","zjxkgazaadtdvabukwasemylsnkkbgljqqqhaaasgsvqnwzzarzaxm","dyrpkaeqqyjjunfbvaujtymliifgaapxzrqahzklrrmqytpaawxhaain","aaeuaablgqizakygnyllxaebirgdanaarnadmvaauzfhaovvaanzipbaya","vyaaqaaegzaybvzuqohloxacahavhaxhaljcoadlkwamyhmvgnftlnqtyvaa","aqnjaaxbwifmbqadbnjfazaxaaiajenmzajbpzaogaabjaippxrsdoalmahnol","baryaatmranbzopfaaqokvluubytgivslakvkxpffapjiyrkavmlcehwqavpafbd","vatznqoyvmehfvwtzazqbsocculuafatnzxaprnvnhrtekgnpvagwarfyoqerwgfuo","acagzaakgtpclfajahbakrreghaqxuiyalawataaakoqrtamvxptlzpaasaasecwnbay"];
var solutions_4a = [2,2,4,2,2,4,5,7,9,5,6,8,5,11,7,9,5,8,9,6,16,12,10,9,17,14,16,11,7,20]
var length_4a = solutions_4a.length;

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

    if (x === solutions_4a[index]) {
        me.makeguess(index+1);
    } else {
        me.makeguess(index);
    }
}

me.makeguess = function(x) {

    if (x >= length_4a) {
        alert("Error");
    } else {
        index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_4a[x];

        var answers = document.getElementById("id_output4a");
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