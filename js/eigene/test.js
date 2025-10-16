const { exec } = require('child_process');

let i = 1;

function writesh() {
    const fs = require('fs');

    fs.writeFile('a.sh', '#!/bin/bash\nfirefox')

}

while (i == 1) {
    exec('touch a.sh');
    exec('chmod +x ./a.sh');
    exec('./a.sh');
    writesh();
    i = 2;
}