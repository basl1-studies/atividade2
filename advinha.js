const button = document.getElementById ('botao');
const resultadoReal = Math.floor(Math.random()*50) + 1;

    const button = button.addEventListener('click', function(){

        let palpite;

        do {
            numero = parseInt(prompt("Tente adivinhar o número secreto entre 1 e 50:"));


            if(numero > resultadoReal){
                alert("Ah, que pena, o número secreto é menor que esse");
                
            }else if (numero < resultadoReal){
                alert("Ah, que pena, o número secreto é maior que esse");
                
            }

        } while (resultadoReal != numero);

        alert("Parábens, você acertou! E o numero secreto é ("+resultadoReal+")!");

    });


