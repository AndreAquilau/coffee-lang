import fs from 'fs';
const directory = './src/';



const sintaxe = [
    {
        from: /^stin/,
        to: 'let'
    },
    {
        from: /\\*sys*/,
        to: 'console'
    },
    {
        from: /\\*print*/,
        to: 'log'
    },
    {
        from: /^:=/,
        to: '='
    },
]



fs.readdir('./src', (err, files) => {
    files.filter((file) =>{
        fs.readFile('./src/'+ file, {encoding: 'utf-8'}, (err, data) => {

            let newSintaxe = data
            .split(' ')
            .map((md) => {
                md.replace(/\n/g, '');

                sintaxe.map(stx => {
                    
                    //console.log(md,stx.from,stx.from.test(md));

                    md = md.replace(stx.from, stx.to);
                
                });

                
                return md;
            })
            .join(' ');
            fs.writeFile('./build/index.ts', newSintaxe, () => {});
        });
    });
    
});
