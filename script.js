<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcards Interativos - Copa Libertadores</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f4f1;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            color: #004b23; /* Verde Libertadores */
            margin-bottom: 10px;
            text-align: center;
        }

        p {
            color: #555;
            margin-bottom: 30px;
            text-align: center;
        }

        /* Container que organiza em linhas e colunas */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            width: 100%;
            max-width: 1000px;
        }

        /* Estrutura 3D do Flashcard */
        .flashcard-container {
            perspective: 1000px;
            cursor: pointer;
            height: 180px;
        }

        .flashcard {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 12px;
        }

        /* Classe que o JavaScript vai ativar no clique */
        .flashcard.virado {
            transform: rotateY(180deg);
        }

        /* Frente e Verso do Card */
        .face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 12px;
            text-align: center;
            font-size: 1.1em;
        }

        /* Estilo da Frente (Pergunta) */
        .frente {
            background-color: #ffffff;
            color: #222;
            font-weight: bold;
            border: 2px solid #004b23;
        }

        /* Estilo do Verso (Resposta) */
        .verso {
            background-color: #004b23;
            color: #ffffff;
            transform: rotateY(180deg);
            border: 2px solid #004b23;
        }
    </style>
</head>
<body>

    <h1>🏆 Flashcards: Copa Libertadores 🏆</h1>
    <p>Clique no card para ver a resposta!</p>

    <div class="grid-container">
        
        <div class="flashcard-container">
            <div class="flashcard">
                <div class="face frente">Quem é o maior campeão da história da Libertadores?</div>
                <div class="face verso">Independiente (Argentina), com 7 títulos.</div>
            </div>
        </div>

        <div class="flashcard-container">
            <div class="flashcard">
                <div class="face frente">Em que ano foi disputada a primeira edição do torneio?</div>
                <div class="face verso">Em 1960 (vencida pelo Peñarol).</div>
            </div>
        </div>

        <div class="flashcard-container">
            <div class="flashcard">
                <div class="face frente">Qual clube brasileiro tem mais títulos da Libertadores?</div>
                <div class="face verso">São Paulo, Palmeiras, Santos, Grêmio e Flamengo (empatados com 3 títulos cada).</div>
            </div>
        </div>

        <div class="flashcard-container">
            <div class="flashcard">
                <div class="face frente">Quem é o maior artilheiro de todos os tempos da competição?</div>
                <div class="face verso">Alberto Spencer (equatoriano), com 54 gols.</div>
            </div>
        </div>

        <div class="flashcard-container">
            <div class="flashcard">
                <div class="face frente">Qual foi a primeira final única em campo neutro?</div>
                <div class="face verso">Em 2019, em Lima (Peru), entre Flamengo e River Plate.</div>
            </div>
        </div>

        <div class="flashcard-container">
            <div class="flashcard">
                <div class="face frente">O campeão da Libertadores garante vaga em quais torneios?</div>
                <div class="face verso">Mundial de Clubes da FIFA e Recopa Sul-Americana.</div>
            </div>
        </div>

    </div>

    <script>
        // 1. Seleciona todos os elementos com a classe 'flashcard'
        const cards = document.querySelectorAll('.flashcard');

        // 2. Adiciona o evento de clique para cada um deles
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // O 'toggle' adiciona a classe se ela não existir, e remove se já existir
                card.classList.toggle('virado');
            });
        });
    </script>

</body>
</html>
