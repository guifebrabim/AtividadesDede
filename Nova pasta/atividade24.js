n1 = [0];

n1.push(3)
n1.push(3)
n1.push(4)

soma = null;

    for(i = 1; i <= 3; i++){

        console.log(i + "ª posição " + n1[i])
        n2 = n1[i]
        soma = (soma + n1[i])
}

  console.log('A soma De '+n1+' É: '+ soma)