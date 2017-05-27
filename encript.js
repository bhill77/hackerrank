process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s = readLine();
    var l = s.length;
    var row = Math.floor( Math.sqrt(l) );
    var col = Math.ceil( Math.sqrt(l) );

    var res = [];
    for(i=0; i<col; i++){
        
        var w = s[i];
        for(x=0;x<row;x++){
            if( s[i+((x+1)*col)] != undefined ) 
                w = w + s[i+((x+1)*col)];
        }
        res.push(w);
    }

    console.log(res.toString().split(',').join(' '));
    
}