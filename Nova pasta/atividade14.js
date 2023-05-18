var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})


leitor.question('Digite sua quantidade de dolares: ', function(dol){
    dol = parseFloat(dol);

    rea = dol*5;
    eur = dol*0.91;
    ine = dol*134.54;
    mex = dol*17.87;
    aus = dol*1.50;

        console.log("você tem:");
		console.log("R$"+rea+" Reais");
		console.log("$"+eur+" euros");
		console.log("$"+ine+" ienes");
		console.log("$"+mex+" pesos mexicanos");
		console.log("$"+aus+" dolares australianos");
		
        leitor.close();   
})
