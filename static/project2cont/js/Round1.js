var sequences_1 = ["vbnjyxbaqd","tzjqzdyfiljyag","raeuwlbauaiwayayoa","ayathtvafanqaafvauaafa","aatoaqaaauapknagalbhcassnq","zzahaejpibveybaaqazaeazaduqtsa","xvuvafwuprnnowmtfdayeebulehijcnxnu","nyjamaifweilgywxevdmaybzaayalajavdtyoj","ylavjtfqnoqnzaemokigtaetkjzazaeagrbluurana","uiiublpwmvacyjaaxmuefakalvwmhzatxkaztvgapprfaa","omnglxuzajbaaaalyufkanuuippaawnbcaxuaqdnqzpvjzmxfv","aasmwtaxualrdacntsapizaaeyreuyasfxwbiqwdaaliuaaajijysa","acamdpcjpqctcanayqedbwtpdaagklisujapzqacwaqzvprpauqwhvbomy","zaaevksgamlvcaovcagahzgcgixqktazaexwauavttfrapjqjpkakadatajehw","shaqaazcebbfwarmioqrjxxtsadhxaarajdizxijoakfaanwajlbccyzyehpacynaa","sehscjeaanaskbojwjdlrecyiecmeaaawvktvxfdhrtlkyacdgiaxpaoycnjaaaqaxreok","aarrwklxwqiaaqkcbigbbcaacebraacdjyaowfbdgxceptpnaaeadkpyqaxuaacbbjnhgekppa","sakgharthapyliaaauofbasaxfagrkmixokayaaarnjppthapbnbegcawiugayozpuzaosratbeodj","iqtapxazbbakiyootkdioknsvhgoeylieaxryhprfaapaitalesclyctmwsyzifqddaklabaevuzfathbc","lppzaphuakialikxcnhaunaogddxxlgwxtdkawxnadarjbhzpunaajauwzaqavhdaafsaktmgipjaamwaaaoaz","bugasnaxiabqnsatnaatjrsmagdkajanofqavvvpvaaadlxpsmqspxfaahzzanzwuaflkurdtyfuwisnhhvzoyjaqx","bonksjtarlagnsrjazeykeaztavaaonnajxnzaaaedaakxjblbdaauzaqbayhvaiaixowiryaxjqjmyadanjrowaaagtaa","zazpanwfazwwvuacymdacaayzpvehazratpnajnucflljntaraaawbyyzysevkanfnkdjxpwplarmoaccbpnhaubiwaajcaeau","axvcdiparaaacntalafautdpnkcetmwmaamhdxoaaahmamedkgvjwpwzfamkddecchqxayqaplnzfbknafaowmaamknzpauhuunkev","wayaaajquaarraxmajorataakreqcoasbmaiaacwaawuakcvnpkazxiudburpxfkmgzsaxearqmpanrjvappyabbaajxrszifawrbhdhga","jbaajbuyoavfftgntmbwiizcaltuubfezdmmmgnviqydsausuufzcdfaaanzatjkbmouafkzwaiarsaawicarasagbdcsknpaaietuzjumxfaa","ecdaveavuasiiczleezmzcrzdieipncwohhasayxbjzhkjtaczaasspawmoolyamynaipvjkcabwnajraytsdbbeapumlodufckasbapaealiaadao","adaaacqaqswpjgeamospazizysaniasupxaaeticavwiqavlrodfruaimnayaabciaadvmaahazalxdehblduxdzcawupeafzoldoraaerehaiqakcoxtq","umaaanfadmacztxdqziyxxhpwhrgoaawlspabmyusqmaelmvzgqpjapevfoavjaaotidajrafvvzfkxmkuuyhjkaxwauwahmaubynyhjfinauacazdmytyazuj","tkaaywasncafuprfisaeztaassaiurhfzazdawrvwhtvsopaqqzjxbpaciavmapyjaypaaavacaaalvopsarjwvffaqfaaghsiauamlmjaaajcyidmuzjbjbcrpojw"]
var solutions_1 = [1,1,6,10,10,9,2,8,8,10,10,15,10,15,15,13,16,18,12,22,18,27,22,22,28,21,22,29,23,31]
var length_1 = solutions_1.length;

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

    if (x === solutions_1[me.index]) {
        me.makeguess(me.index+1);
    } else {
        me.makeguess(me.index);
    }
}

me.makeguess = function(x) {
    if (x >= length_1) {
        alert("Error");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_1[x];

        var answers = document.getElementById("id_output1");
        answers.value = me.index;

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
                    return false;
                }
            });
        })

         $(document).ready(function(){
            $(document).keypress(function(event){
                if(event.keyCode === 13) {
                    event.preventDefault();
                    return false;
                }
            });
        })
    }
}

document.getElementById("Switch_button").addEventListener("click", function() {
    document.write("You are now in the switch mode.")
})

window.onload = function(){
    me.makeguess(0);
    me.settime();
}