// Controle dos desafios
let currentChallenge = 1;

// Verificar resposta dos desafios
function checkAnswer(challenge, correctAnswer) {
    const input = document.getElementById(`answer-${challenge}`).value.trim();
    const feedback = document.getElementById(`feedback-${challenge}`);
    
    if (input === correctAnswer) {
        feedback.textContent = "Resposta correta! Próximo desafio liberado.";
        feedback.style.color = "lightgreen";
        
        // Liberar o próximo desafio
        const nextChallenge = document.getElementById(`challenge-${challenge + 1}`);
        if (nextChallenge) {
            nextChallenge.classList.remove("hidden");
        } else {
            document.getElementById("final-section").classList.remove("hidden");
        }
    } else {
        feedback.textContent = "Resposta incorreta. Tente novamente.";
        feedback.style.color = "red";
    }
}

// Verificar o IP final
function checkFinalIP() {
    const correctIP = "192.168.65.65";
    const input = document.getElementById("final-ip").value.trim();
    const feedback = document.getElementById("final-feedback");

    if (input === correctIP) {
        feedback.textContent = "🎉 Parabéns! Você desvendou o hacker!";
        feedback.style.color = "lightgreen";
    } else {
        feedback.textContent = "❌ IP incorreto. Tente novamente.";
        feedback.style.color = "red";
    }
}
