// Função para verificar a resposta dos desafios
function checkAnswer(challengeNumber, correctAnswer) {
    const userAnswer = document.getElementById(`answer-${challengeNumber}`).value.trim();
    const feedbackElement = document.getElementById(`feedback-${challengeNumber}`);
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Resposta correta! Prepare-se para o próximo desafio.";
        feedbackElement.style.color = "#4CAF50"; // Verde para resposta certa
        nextChallenge(challengeNumber);
    } else {
        feedbackElement.textContent = "Resposta incorreta. Tente novamente!";
    }
}

// Função para avançar para o próximo desafio
function nextChallenge(currentChallenge) {
    if (currentChallenge === 1) {
        document.getElementById('challenge-1').classList.add('hidden');
        document.getElementById('challenge-2').classList.remove('hidden');
    } else if (currentChallenge === 2) {
        document.getElementById('challenge-2').classList.add('hidden');
        document.getElementById('final-section').classList.remove('hidden');
    }
}

// Função para verificar o IP final
function checkFinalIP() {
    const finalIP = document.getElementById('final-ip').value.trim();
    const finalFeedback = document.getElementById('final-feedback');
    
    const correctIP = '192.168.1.42';  // Coloque o IP correto aqui

    if (finalIP === correctIP) {
        finalFeedback.textContent = "Parabéns! Você desbloqueou o sistema e revelou o hacker!";
        finalFeedback.style.color = "#4CAF50"; // Verde para sucesso
        finalFeedback.style.fontSize = '20px';
        // Exiba a identidade do hacker
        setTimeout(function() {
            alert("O hacker revelado é: Hacker X!");
        }, 1000);
    } else {
        finalFeedback.textContent = "IP incorreto. Tente novamente!";
    }
}
