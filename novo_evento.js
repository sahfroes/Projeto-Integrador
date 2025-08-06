const fotoInput = document.getElementById('foto');
const fotoUploadDiv = document.querySelector('.foto-upload');

fotoInput.addEventListener('change', () => {
  if (fotoInput.files.length > 0) {
    // Mostrar nome do arquivo no lugar do "+"
    fotoUploadDiv.textContent = fotoInput.files[0].name;
  } else {
    fotoUploadDiv.textContent = "+";
  }
});
