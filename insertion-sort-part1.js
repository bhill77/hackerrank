function processData(input) {
    var n = parseInt(input.split('\n')[0]);
    var arr = input.split('\n')[1].split(' ');
    arr = arr.map(function(val){ return parseInt(val); });
    
    var res = [];
    var e = arr[n-1];
    for(i=arr.length - 2; i>=0; i--){
        if(arr[i] > e)
            arr[i+1] = arr[i];
        else{
            arr[i+1] = e;
            console.log(arr.join(' '));
            break;
        }
        console.log(arr.join(' '));
    }
    if(arr[0] > e){
        arr[0] = e;
        console.log(arr.join(' '));
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
