//Criar um laço para exibir se o numero é impar ou par

let nuemeros = 20

for(let contador = 0; contador<= nuemeros; contador = contador +3)
{
    //mod (modolo) é o resto da divisão
    if(contador % 2 == 0){
        console.log (contador+ "é PAR")
    }else{
        console.log (contador+ "é IMPAR")
    }

}