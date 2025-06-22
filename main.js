document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form-contato');
  const whatsappBtn = document.querySelector('#lead-whatsapp');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      fetch('https://script.google.com/macros/s/AKfycbxCFjonTPYaDO5t7eloNdx5dimh8fCdGzq_OdS4gJwLJ2I6UmK5Od_9BDXz8yVzgieefg/exec', {
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

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function () {
      const nome = document.querySelector('input[name="nome"]').value || '';
      const telefone = document.querySelector('input[name="telefone"]').value || '';
      const mensagem = encodeURIComponent(`Olá, meu nome é ${nome}. Gostaria de saber mais sobre os serviços de vocês!`);
      const url = `https://wa.me/5511999999999?text=${mensagem}`;
      window.open(url, '_blank');
    });
  }
});


