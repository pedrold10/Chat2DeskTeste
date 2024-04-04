const apiUrl = 'https://fakestoreapi.com/products';


function fetchApiData() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        return response.json();
      })
      .then(data => {
        displayData(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  function displayData(data) {
    const dadosDiv = document.getElementById('dados');
  
  
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      const title = document.createElement('h4');
      title.textContent = item.title;
      const showRate = document.createElement('div');
      showRate.classList.add('line');

      const price = document.createElement('h1');
      price.textContent = `$${item.price.toFixed(2)}`;

      const starIcon = document.createElement('i')
      starIcon.classList.add('fa-solid')
      starIcon.classList.add('fa-star')
      starIcon.classList.add('star-style')

      const rate = document.createElement('p')
      rate.textContent = item.rating ? item.rating.rate.toFixed(1) : 'Sem avaliação';

      const image = document.createElement('img')
      image.src = item.image 

      const button = document.createElement('button');
      button.classList.add('card-button');
      button.textContent = 'Ver detalhes';
      button.addEventListener('click', () => {
        window.location.href = `detalhes.html?id=${item.id}`; 
      });

      showRate.appendChild(starIcon);
      showRate.appendChild(rate);
  
      card.appendChild(title);
      card.appendChild(image);
      card.appendChild(showRate);
      card.appendChild(price);
      card.appendChild(button);
  
      dadosDiv.appendChild(card);
    });

  }
  
  window.onload = fetchApiData;