document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form-contato');
  const whatsappBtn = document.querySelector('#lead-whatsapp');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Envio do formulário via Google Script
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        redirect: 'follow',
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

  // Botão WhatsApp no formulário
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function () {
      const nome = document.querySelector('input[name="nome"]').value || '';
      const mensagem = encodeURIComponent(`Olá, meu nome é ${nome}. Gostaria de saber mais sobre os serviços de vocês!`);
      window.open(`https://wa.me/5511999999999?text=${mensagem}`, '_blank');
    });
  }

  // Toggle do menu mobile
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
});
