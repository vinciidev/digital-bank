function switchContent() {
    var h2Element = document.querySelector('.accountMid');
  
    // Verifica o texto atual do elemento h2
    if (h2Element.textContent === 'R$ 592.245,10') {
      // Muda o texto e a imagem
      h2Element.textContent = 'R$ ****';
      botao.style.backgroundImage = "url('C:\Users\VINCI\Desktop\VINCI\DEV\Bank-app\assets\eye-slash.svg')";
      // Altere a imagem conforme necessário
    } else {
      // Reverte para o texto e imagem originais
      h2Element.textContent = 'R$ 592.245,10';
      botao.style.backgroundImage = "url('C:\Users\VINCI\Desktop\VINCI\DEV\Bank-app\assets\eye.svg')";
      // Reverta a imagem conforme necessário
    }
  }
  