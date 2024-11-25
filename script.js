function checkIP() {
  const ipInput = document.getElementById("ipInput").value;
  const result = document.getElementById("result");

  // IP correto definido diretamente no JavaScript
  const correctIP = "192.168.0.1";

  if (ipInput === correctIP) {
    result.innerHTML = `<div class="success">🎉 Parabéns! Você acertou o IP! <br> <strong>Você é o lendário Hacker X!</strong> 🎉</div>`;
    document.body.style.backgroundColor = "#00ffab";
  } else {
    result.innerText = "❌ IP incorreto. Tente novamente!";
  }
}
