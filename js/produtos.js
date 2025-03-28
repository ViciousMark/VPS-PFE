let products = [
    { id: 1, name: 'Amos', description: 'Amos bancos', cost: 'R$2,00', price: 'R$10,00' },
    { id: 2, name: 'Feijão', description: 'Feijão preto', cost: 'R$10,00', price: 'R$25,00' }
];

let currentProductId = null;

function loadProducts() {
    const tableBody = document.querySelector('#productsTable tbody');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.cost}</td>
            <td>${product.price}</td>
            <td>
                <button class="btn" onclick="editProduct(${product.id})">Editar</button>
                <button class="btn" onclick="deleteProduct(${product.id})">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function openModal(productId = null) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('productForm');
    
    if (productId) {
        modalTitle.textContent = 'Editar Produto';
        currentProductId = productId;
        const product = products.find(p => p.id === productId);
        
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productCost').value = product.cost;
        document.getElementById('productPrice').value = product.price;
    } else {
        modalTitle.textContent = 'Adicionar Produto';
        currentProductId = null;
        form.reset();
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function saveProduct() {
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const cost = document.getElementById('productCost').value;
    const price = document.getElementById('productPrice').value;
    
    if (!name || !description || !cost || !price) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (currentProductId) {
        const index = products.findIndex(p => p.id === currentProductId);
        products[index] = { id: currentProductId, name, description, cost, price };
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, description, cost, price });
    }
    
    loadProducts();
    closeModal();
}

function editProduct(id) {
    openModal(id);
}

function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        products = products.filter(product => product.id !== id);
        loadProducts();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);