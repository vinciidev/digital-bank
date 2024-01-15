function switchContent() {
    var h2Element = document.querySelector('.accountMid');
  
    if (h2Element.textContent === 'R$ 592.245,10') {
      h2Element.textContent = 'R$ ****';
      
    } else {
      h2Element.textContent = 'R$ 592.245,10';
    }
  }
  