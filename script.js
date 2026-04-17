document.addEventListener("DOMContentLoaded", () => {
    // Busca o arquivo JSON
    fetch('magias.json')
        .then(response => response.json())
        .then(magias => {
            const container = document.getElementById('container-magias');
            
            // Para cada magia no JSON, cria um cartão
            magias.forEach(magia => {
                const card = document.createElement('div');
                card.className = 'card-magia';
                
                // Monta o HTML interno do cartão. 
                // Usamos template strings (crases) para injetar as variáveis
                card.innerHTML = `
                    <div class="card-header">
                        <h3>${magia.nome}</h3>
                        <span class="escola">${magia.nivel_escola}</span>
                    </div>
                    <div class="card-atributos">
                        <p><strong>Tempo:</strong> ${magia.tempo_conjuracao}</p>
                        <p><strong>Alcance:</strong> ${magia.alcance}</p>
                        <p><strong>Componentes:</strong> ${magia.componentes}</p>
                        <p><strong>Duração:</strong> ${magia.duracao}</p>
                    </div>
                    ${magia.material ? `<p class="material"><strong>Material:</strong> ${magia.material}</p>` : ''}
                    <div class="card-descricao">
                        <p>${magia.descricao}</p>
                    </div>
                `;
                
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar as magias:', error));
});