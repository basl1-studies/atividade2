const numero = document.getElementById ('numeroN');
const button = document.getElementById ('botao');
const resultadoReal = Math.floor(Math.random()*50) + 1;

    const button = button.addEventListener('click', function(){
        
        const palpite = document.getElementById('palpite');
        let palpite;

        do {
            palpite = parseInt(prompt("Tente adivinhar o número secreto entre 1 e 50:"));


            if(palpite > resultadoReal){
                alert("Ah, que pena, o número secreto é maior que esse");
                
            }else (palpite < resultadoReal){
                alert("Ah, que pena, o número secreto é menor que esse");
                
            }

        } while (resultadoReal != palpite);

        alert("Parábens, você acertou! E o numero secreto é ("+resultadoReal+")!");

    });


