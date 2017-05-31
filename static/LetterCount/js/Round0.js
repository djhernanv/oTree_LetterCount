var sequences_0 = ["atdpsiwrar","dyshafudak","yavaksvnsm","vhgqgqakwf","dmjlazjena","aimrodkuap","rssgragaza","dakhzwxpgo","tnrabmcfob","rtqonabnva","laaaaxzpcx","fawykauoyp","wxsrcqaaqa","abankaqaeb","dptxbeivua","iranbgtadl","uxcyvabfro","hjanyeqphq","nierfauala","paqzfwdran","alsiaauhkh","patpaizgnj","allsfdhogg","apanslapij","afvaepchfp","htuaqaatai","vaxvyhafpa","vqaobwyfan","wtjaaekysg","qaaghrzbhu"];
var solutions_0 = [2,2,2,1,2,2,3,1,1,2,4,2,3,4,1,2,1,1,3,2,3,2,1,3,2,4,3,2,2,2];
var length_0 = solutions_0.length;

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

    if (x === solutions_0[me.index]) {
        me.makeguess(me.index+1);
    } else {
        me.makeguess(me.index);
    }
}

me.makeguess = function(x) {
    if (x >= length_0) {
        alert("Error");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_0[x];

        var answers = document.getElementById("id_output0");
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

window.onload = function(){
    me.makeguess(0);
    me.settime();
}