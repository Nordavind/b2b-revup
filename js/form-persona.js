document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formPersonaEntity');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // campos
      const name = document.getElementById('form-nombre').value.trim();
      const email = document.getElementById('form-correo').value.trim();
      const phone = document.getElementById('form-telefono').value.trim();
      const linkedin = document.getElementById('form-linke').value.trim();
      const origen = document.getElementById('form-origen').value.trim();
      const mensaje = document.getElementById('form-mensaje').value;
  
      // validacion
      if (!name || !email || !phone || !linkedin || !origen || !mensaje) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      // webhook
      fetch('https://hook.us2.make.com/047c4pt1wn2smig08kryvdaw9b3qmfg2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la respuesta del servidor: ${response.status}`);
          }
          console.log('Formulario enviado exitosamente');
        //   window.location.href = 'mensaje-enviado.html';
        })
        .catch(error => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un problema al enviar el formulario. Por favor, intente nuevamente.');
            });
        });
    });