process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let result = '';
    let row = '';
    
    for(i=0; i<a; i++) {
        row += '*';
    }
    
    for(i=0; i<b; i++) {
        result = result + row + '\n';
    }
    
    console.log(result);
});