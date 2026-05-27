const form = document.getElementById('form-contato');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();


  if (nome === '' || email === '' || mensagem === '') {
    feedback.textContent = 'Preencha todos os campos.';
    feedback.style.color = 'red';
  } else if (!email.includes('@') || !email.includes('.')) {
    feedback.textContent = 'Digite um e-mail válido.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Mensagem enviada! Em breve responderemos. ☕';
    feedback.style.color = 'green';
    form.reset(); 
  }

  setTimeout(() => {
    feedback.textContent = '';
  }, 4000);
});

