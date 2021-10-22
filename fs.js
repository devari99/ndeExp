const {readFile,writeFile,readFileSync, writeFileSync}  =  require('fs')


const first =  readFileSync('./content/first.txt', 'utf-8')
const second =  readFileSync('./content/subfolder/text.txt', 'utf-8')

//console.log(first,'\n', second);

//const writeInFirstFile = writeFileSync(
 //   './content/result-sync.txt',//if not exist create it
 //    `This new text write with writeInFirstFile: ${first}`,
     //{flag: 'a'} without this it overwrite existing
 //    );

readFile('./content/result-sync.txt' ,'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    
     writeFile('./content/result-sync.txt', `Write :${res}`, 'utf-8', (er, res) =>{
         console.log("okay gd");
     })  
})
