function checkIP() {
  const ipInput = document.getElementById("ipInput").value.trim();
  const result = document.getElementById("result");

  // IP correto
  const correctIP = "192.168.0.1";

  if (ipInput === correctIP) {
    document.body.style.background = "linear-gradient(to bottom, #83a4d4, #b6fbff)";
    result.innerHTML = `
      <div class="success" style="animation: fadeIn 2s ease-in-out;">
        🎉 Parabéns! Você acertou o IP! <br>
        <strong>Bem-vindo, Hacker X!</strong> 
        <p style="font-size: 1.2em;">O mundo te aguarda... 🕶️</p>
      </div>`;
  } else {
    result.innerHTML = "❌ IP incorreto. Tente novamente!";
    document.body.style.background = "#0d1117"; // Volta ao fundo original
  }
}
