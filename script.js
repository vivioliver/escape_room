// Função para verificar a resposta dos desafios
function checkAnswer(challengeNumber, correctAnswer) {
    // Captura a resposta do usuário
    const userAnswer = document.getElementById(`answer-${challengeNumber}`).value.trim();
    const feedbackElement = document.getElementById(`feedback-${challengeNumber}`);
    
    // Verifica se a resposta está correta
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Resposta correta! Prepare-se para o próximo desafio.";
        feedbackElement.style.color = "#4CAF50"; // Cor verde para resposta certa
        nextChallenge(challengeNumber);
    } else {
        feedbackElement.textContent = "Resposta incorreta. Tente novamente!";
        feedbackElement.style.color = "#f44336"; // Cor vermelha para resposta errada
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
    
    const correctIP = '192.168.1.42'; // IP correto para o desafio final

    if (finalIP === correctIP) {
        finalFeedback.textContent = "Parabéns! Você desbloqueou o sistema e revelou o hacker!";
        finalFeedback.style.color = "#4CAF50"; // Verde para sucesso
        finalFeedback.style.fontSize = '20px';
        
        // Exibe a identidade do hacker após 1 segundo
        setTimeout(() => {
            alert("O hacker revelado é: Hacker X!");
        }, 1000);
    } else {
        finalFeedback.textContent = "IP incorreto. Tente novamente!";
        finalFeedback.style.color = "#f44336"; // Vermelho para erro
    }
}
