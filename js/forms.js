document.addEventListener('DOMContentLoaded', function () {
  // Funcion que maneja formularios
  const handleFormSubmit = (form, fields, webhookUrl) => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Vallidacion campos
      const formData = {};
      let isValid = true;

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const value = input.value.trim();
        formData[field.name] = value;

        if (!value) {
          isValid = false;
        }
      });

      if (!isValid) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }

      // Envio Webhook
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la respuesta del servidor: ${response.status}`);
          }
          console.log('Formulario enviado exitosamente');
          // window.location.href = 'mensaje-enviado.html';
        })
        .catch(error => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un problema al enviar el formulario. Por favor, intente nuevamente.');
        });
    });
  };

  // Config form Persona
  handleFormSubmit(
    document.getElementById('formPersonaEntity'),
    [
      { id: 'form-nombre', name: 'namePersona' },
      { id: 'form-correo', name: 'emailPersona' },
      { id: 'form-telefono', name: 'phonePersona' },
      { id: 'form-linke', name: 'linkedinPersona' },
      { id: 'form-origen', name: 'origenPersona' },
      { id: 'form-mensaje', name: 'mensajePersona' },
    ],
    'https://hook.us2.make.com/047c4pt1wn2smig08kryvdaw9b3qmfg2'
  );

  // Config form Empresa
  handleFormSubmit(
    document.getElementById('formEmpresaEntity'),
    [
      { id: 'form-nombre-e', name: 'nameEmpresa' },
      { id: 'form-correo-e', name: 'emailEmpresa' },
      { id: 'form-telefono-e', name: 'phoneEmpresa' },
      { id: 'form-linke-e', name: 'linkedinEmpresa' },
      { id: 'form-company-e', name: 'companyEmpresa' },
      { id: 'form-cargo-e', name: 'cargoEmpresa' },
      { id: 'form-web-e', name: 'webEmpresa' },
      { id: 'form-industria-e', name: 'industriaEmpresa' },
      { id: 'form-ventas-e', name: 'ventaEmpresa' },
      { id: 'form-empleados-e', name: 'empleadosEmpresa' },
      { id: 'form-pais-e', name: 'paisEmpresa' },
      { id: 'form-origen-e', name: 'origenEmpresa' },
      { id: 'form-mensaje-e', name: 'mensajeEmpresa' },
    ],
    'https://hook.us2.make.com/1ifi4tl15uqknjuxdmwawji5pi3om28d'
  );
});