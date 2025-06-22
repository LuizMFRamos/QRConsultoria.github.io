document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form-contato');
  const whatsappBtn = document.querySelector('#lead-whatsapp');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro. Tente novamente.');
      });
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function () {
      const nome = document.querySelector('input[name="nome"]').value || '';
      const mensagem = encodeURIComponent(`Olá, meu nome é ${nome}. Gostaria de saber mais sobre os serviços de vocês!`);
      window.open(`https://wa.me/5511999999999?text=${mensagem}`, '_blank');
    });
  }

  // Menu mobile
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});
