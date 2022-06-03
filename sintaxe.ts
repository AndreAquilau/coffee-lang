import fs from 'fs';
const directory = './src/';

const sintaxe = [
    {
        from : 'stin',
        to: 'let'
    },
    {
        from : 'sys.print',
        to: 'console.log'
    },
]

fs.readdir(directory, (err, files) => {
    const filesName = [];

    files.forEach(file => {
        filesName.push(file);
        //console.log(file);
    });

    //console.log(filesName);

    let code = fs.readFileSync( `./src/${filesName[0]}`, 'utf8');
    let newCode = ''

    sintaxe.map(sint => {

        if(newCode === '') {
            newCode = code.replace(sint.from, sint.to);
        } else {
            newCode = newCode.replace(sint.from, sint.to);
        }

    });

    //console.log(newCode);

    fs.writeFileSync( `./build/${filesName[0].split('.')[0]}.ts`, newCode);

});