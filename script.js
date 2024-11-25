// Função para verificar a resposta dos desafios
function checkAnswer(challengeNumber, correctAnswer) {
    const userAnswer = document.getElementById(`answer-${challengeNumber}`).value.trim();
    const feedbackElement = document.getElementById(`feedback-${challengeNumber}`);

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Resposta correta! Prepare-se para o próximo desafio.";
        feedbackElement.style.color = "#4CAF50"; // Verde para correto
        nextChallenge(challengeNumber);
    } else {
        feedbackElement.textContent = "Resposta incorreta. Tente novamente!";
        feedbackElement.style.color = "#f44336"; // Vermelho para incorreto
    }
}

// Função para avançar para o próximo desafio
function nextChallenge(currentChallenge) {
    const currentSection = document.getElementById(`challenge-${currentChallenge}`);
    const nextSection = document.getElementById(`challenge-${currentChallenge + 1}`);

    if (currentSection) currentSection.classList.add('hidden'); // Esconde o desafio atual
    if (nextSection) nextSection.classList.remove('hidden');   // Mostra o próximo desafio
}

// Função para verificar o IP final
function checkFinalIP() {
    const finalIP = document.getElementById('final-ip').value.trim();
    const finalFeedback = document.getElementById('final-feedback');
    const correctIP = '192.168.1.42';

    if (finalIP === correctIP) {
        finalFeedback.textContent = "Parabéns! Você desbloqueou o sistema e revelou o hacker!";
        finalFeedback.style.color = "#4CAF50"; // Verde para sucesso
        setTimeout(() => {
            document.getElementById('hacker-revealed').classList.remove('hidden');
        }, 1000);
    } else {
        finalFeedback.textContent = "IP incorreto. Tente novamente!";
        finalFeedback.style.color = "#f44336"; // Vermelho para erro
    }
}
