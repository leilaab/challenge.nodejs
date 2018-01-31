var Reset = "\x1b[0m";
var Bright = "\x1b[1m";
var Dim = "\x1b[2m";
var Underscore = "\x1b[4m";
var Blink = "\x1b[5m";
var Reverse = "\x1b[7m";
var Hidden = "\x1b[8m";

var FgBlack = "\x1b[30m";
var FgRed = "\x1b[31m";
var FgGreen = "\x1b[32m";
var FgYellow = "\x1b[33m";
var FgBlue = "\x1b[34m";
var FgMagenta = "\x1b[35m";
var FgCyan = "\x1b[36m";
var FgWhite = "\x1b[37m";

var BgBlack = "\x1b[40m";
var BgRed = "\x1b[41m";
var BgGreen = "\x1b[42m";
var BgYellow = "\x1b[43m";
var BgBlue = "\x1b[44m";
var BgMagenta = "\x1b[45m";
var BgCyan = "\x1b[46m";
var BgWhite = "\x1b[47m";
var myfontcolor="red";
var mybackcolor= "yellow";
var prefix = '\x1b['
var Table =require('./lib/index.js');
var _progress = require('./main');

//process.stdout.write("text1" + "\x1b[41m" + "\x1b[34m"+ "text2" + "\x1b[0m");

//the function for print in terminal
function print  (_text) {
    //process.stdout.write('\x1b[60;70H' + myfontcolor + mybackcolor + _text +"\x1b[33m" + "\x1b[0m");  
    process.stdout.write(mybackcolor + myfontcolor + _text + "\x1b[0m");
}  



function SetFontColor(_color) {
    _color = _color.toLowerCase();
    if (_color == "red") {
        myfontcolor = FgRed;
    }
    else if (_color == "black") {

        myfontcolor = FgBlack;
    }
    else if (_color == "green") {
        myfontcolor = FgGreen;
    }
    else if (_color == "yellow") {
        myfontcolor = FgYellow;
    }
    else if (_color == "blue") {
        myfontcolor = FgBlue;
    }
    else if (_color == "magenta") {
        myfontcolor = FgMagenta;
    }
    else if (_color == "cyan") {
        myfontcolor = FgCyan;
    }
    else if (_color == "white") {
        myfontcolor = FgWhite;
    }
    else myfontcolor = FgWhite;

}


function SetBackColor(_color) {
    _color = _color.toLowerCase();

    if (_color == "red") {
        mybackcolor = BgRed;
    }
    else if (_color == "black") {
        mybackcolor = BgBlack;
    }
    else if (_color == "green") {
        mybackcolor = BgGreen;
    }
    else if (_color == "yellow") {
        mybackcolor = BgYellow;
    }
    else if (_color == "blue") {
        mybackcolor = BgBlue;
    }
    else if (_color == "magenta") {
        mybackcolor = BgMagenta;
    }
    else if (_color == "cyan") {
        mybackcolor = BgCyan;
    }
    else if (_color == "white") {
        mybackcolor = BgWhite;
    }

    else mybackcolor = BgBlack;
}


function goto(x, y) {
    return process.stdout.write(prefix + y + ';' + x + 'H');
}
function printTable(){
	
	var table = new Table({
  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
});
 
table.push(
    ['a', 'b', 'c']
  , ['d', 'e', 'f']
);
//console.log(table.toString());
    goto(0, 0);
    print(table.toString());
    goto(0, 6);
}

function printProgressbar(){
	  console.log('\n Stop the Bar');
	  var b3 = new _progress.Bar({
        stopOnComplete: true,
        clearOnComplete: true
    });
    b3.start(200, 0);

    // the bar value - will be linear incremented
    var value = 0;

    // 20ms update rate
    var timer = setInterval(function(){
        // increment value
        value++;

        // update the bar value
        b3.update(value);

        // set limit
        if (value >= b3.getTotal()){
            // stop timer
            clearInterval(timer);

            // run complete callback
           // onComplete.apply(this);
        }
    }, 20);
	
}




 

 



 module.exports = {
    SetFontColor: function(_color){
    SetFontColor(_color)
    }
    ,
    SetBackColor: function (_color) {
        SetBackColor(_color)
    }
    ,
    goto: function (x, y) {
        goto(x, y)
    }
   
    ,
    print: function(_text) {
        print(_text);
    }
    ,
   
    printTable: function() {
        printTable();
    }
    ,
    printProgressbar: function() {
        printProgressbar();
    }

 };