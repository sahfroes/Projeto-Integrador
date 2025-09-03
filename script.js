
function openAddModal() {
  document.getElementById('addModal').style.display = 'flex';
}

function closeAddModal() {
  document.getElementById('addModal').style.display = 'none';
}

function addEvent() {
  const imageInput = document.getElementById('imageInput');
  const descInput = document.getElementById('descInput');

  if (!imageInput.files[0] || !descInput.value.trim()) {
    alert("Preencha todos os campos.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const container = document.getElementById('eventContainer');

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = e.target.result;

    const desc = document.createElement('p');
    desc.textContent = descInput.value;

    card.appendChild(img);
    card.appendChild(desc);
    container.appendChild(card);

    closeAddModal();
    imageInput.value = '';
    descInput.value = '';
  };

  reader.readAsDataURL(imageInput.files[0]);
}

function searchContent() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  const elements = document.querySelectorAll('.card p');

  elements.forEach(el => {
    const content = el.textContent.toLowerCase();
    if (content.includes(term)) {
      el.classList.add('highlight');
    } else {
      el.classList.remove('highlight');
    }
  });
}

function openAddModal() {
  document.getElementById('addModal').style.display = 'flex';
}

function closeAddModal() {
  document.getElementById('addModal').style.display = 'none';
}

function addEvent() {
  const imageInput = document.getElementById('imageInput');
  const descInput = document.getElementById('descInput');

  if (!imageInput.files[0] || !descInput.value.trim()) {
    alert("Preencha todos os campos.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const container = document.getElementById('eventContainer');

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = e.target.result;

    const desc = document.createElement('p');
    desc.textContent = descInput.value;

    card.appendChild(img);
    card.appendChild(desc);
    container.appendChild(card);

    closeAddModal();
    imageInput.value = '';
    descInput.value = '';
  };

  reader.readAsDataURL(imageInput.files[0]);
}

function searchContent() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  const elements = document.querySelectorAll('.card p');

  elements.forEach(el => {
    const content = el.textContent.toLowerCase();
    if (content.includes(term)) {
      el.classList.add('highlight');
    } else {
      el.classList.remove('highlight');
    }
  });
}

