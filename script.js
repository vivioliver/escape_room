function checkAnswer(challengeNumber, correctAnswer) {
    var userAnswer = document.getElementById('answer-' + challengeNumber).value;
    var feedback = document.getElementById('feedback-' + challengeNumber);

    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Resposta correta!';
        feedback.style.color = 'green';
        
        // Mostrar o próximo desafio
        if (challengeNumber === 1) {
            document.getElementById('challenge-2').classList.remove('hidden');
        } else if (challengeNumber === 2) {
            document.getElementById('final-section').classList.remove('hidden');
        }
    } else {
        feedback.textContent = 'Resposta errada, tente novamente.';
        feedback.style.color = 'red';
    }
}

function checkFinalIP() {
    var finalIP = document.getElementById('final-ip').value;
    var finalFeedback = document.getElementById('final-feedback');

    if (finalIP === '192.168.1.65') {  // Substitua pelo IP correto
        finalFeedback.textContent = 'IP correto! Desbloqueando o sistema...';
        finalFeedback.style.color = 'green';

        // Revelação do hacker
        document.getElementById('hacker-revealed').classList.remove('hidden');
    } else {
        finalFeedback.textContent = 'IP incorreto, tente novamente.';
        finalFeedback.style.color = 'red';
    }
}
