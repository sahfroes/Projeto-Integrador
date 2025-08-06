const fotoInput = document.getElementById('foto');
const fotoUploadDiv = document.querySelector('.foto-upload');

fotoInput.addEventListener('change', () => {
  if (fotoInput.files.length > 0) {

    // Mostrar imagem do arquivo selecionado
    const reader = new FileReader();
    reader.onload = function(e) {
    fotoUploadDiv.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 100%; border-radius: 8px;">`;
};
reader.readAsDataURL(fotoInput.files[0]);
  } else {
    fotoUploadDiv.textContent = "+";
  }
});
