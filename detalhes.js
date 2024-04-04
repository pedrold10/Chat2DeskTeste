function getIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  function loadItemDetails() {
    const itemId = getIdFromUrl();
    const apiUrl = `https://fakestoreapi.com/products/${itemId}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os detalhes do item');
        }
        return response.json();
      })
      .then(data => {
        // Exibindo os detalhes do item na página
        displayItemDetails(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  
  // Função para exibir os detalhes do item na página
  function displayItemDetails(item) {
    const detalhesDiv = document.getElementById('detalhes');
  
    // Exibindo os detalhes do item na página
    detalhesDiv.innerHTML = `
    <div class='cardFull'>
        <h2>ID: ${item.id}</h2>
        <img class='imgFull' src='${item.image}'>
        <h1>Preço: $${item.price.toFixed(2)}</h1>
        <p>Item: ${item.title}</p>
        <p>Descrição: ${item.description}</p>
        <p>Avaliação: <i class="fa-solid fa-star star-style"></i> ${item.rating ? item.rating.rate : 'Sem avaliação'}</p>
    </div>
    `;
  }
  
  // Chama a função para carregar os detalhes do item quando a página carregar
  window.onload = loadItemDetails;