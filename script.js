const categoryStyles = {
  "Reaction": {
    backgroundColor: "hsl(0, 100%, 67%, 5%)",
    textColor: "hsl(0, 100%, 67%)"
  },
  "Memory": {
    backgroundColor: "hsl(39, 100%, 56%, 5%)",
    textColor: "hsl(39, 100%, 56%)"
  },
  "Verbal": {
    backgroundColor: "hsl(166, 100%, 37%, 5%)",
    textColor: "hsl(166, 100%, 37%)"
  },
  "Visual": {
    backgroundColor: "hsl(234, 85%, 45%, 5%)",
    textColor: "hsl(234, 85%, 45%)"
  }
};


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const cardRight = document.getElementById('cardRight');

    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('numeric')

      const styles = categoryStyles[item.category] || {
        backgroundColor: 'hsl(0, 0, 0, 0.1)',
        textColor: 'black'
      };

      div.style.backgroundColor = styles.backgroundColor;
      div.style.color = styles.textColor;

      div.innerHTML =
        `
        <div class="numeric-left">
          <img src="${item.icon}" alt="${item.category}">
          <span>${item.category}</span>
        </div>
        <span class="item-score">${item.score} / <span class="one-hundred">100</span></span>
      `;
      cardRight.append(div);
    });
  })
  .catch(error => console.error('Veri alınırken hata oluştu:', error));