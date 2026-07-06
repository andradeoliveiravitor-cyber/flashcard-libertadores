// script.js

// Seleciona todos os flashcards da página
const flashcards = document.querySelectorAll(".flashcard");

// Adiciona o evento de clique
flashcards.forEach((flashcard) => {
    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flip");
    });
});

// Função para virar todos os cartões
function virarTodos() {
    flashcards.forEach((flashcard) => {
        flashcard.classList.add("flip");
    });
}

// Função para desvirar todos os cartões
function desvirarTodos() {
    flashcards.forEach((flashcard) => {
        flashcard.classList.remove("flip");
    });
}

// Embaralha a ordem dos flashcards
function embaralharFlashcards() {
    const container = document.querySelector(".container");

    if (!container) return;

    const cards = [...container.children];

    cards.sort(() => Math.random() - 0.5);

    cards.forEach((card) => container.appendChild(card));
}
