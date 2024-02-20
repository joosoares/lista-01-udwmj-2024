function generateFile() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
  
    let fileContent = '';
    formData.forEach((value, key) => {
      fileContent += `${key}: ${value}\n`;
    });
  
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_formulario.txt';
    link.click();
  }
  
