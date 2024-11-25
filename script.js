async function checkIP() {
  const ipInput = document.getElementById("ipInput").value;
  const result = document.getElementById("result");

  try {
    const response = await fetch("http://127.0.0.1:5000/check-ip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip: ipInput })
    });

    const data = await response.json();

    if (data.success) {
      result.innerHTML = `<div class="success">🎉 Parabéns! Você acertou o IP! <br> <strong>${data.message}</strong> 🎉</div>`;
      document.body.style.backgroundColor = "#00ffab";
    } else {
      result.innerText = "❌ IP incorreto. Tente novamente!";
    }
  } catch (error) {
    console.error(error);
    result.innerText = "Erro ao verificar o IP.";
  }
}
