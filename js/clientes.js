// Dados iniciais
let clients = [
    { id: 1, name: 'João Pedro', email: '111.111.111-11', phone: 'joaopedro@email.com', address: 'Rua Oracio' },
    { id: 2, name: 'Pedro Zero', email: '222.222.222-22', phone: 'pedrozero@email.com', address: 'Rua Oracio de cima' }
];

let currentClientId = null;

function loadClients() {
    const tableBody = document.querySelector('#clientsTable tbody');
    tableBody.innerHTML = '';

    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.address}</td>
            <td>
                <button class="btn" onclick="editClient(${client.id})">Editar</button>
                <button class="btn" onclick="deleteClient(${client.id})">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function openModal(clientId = null) {
    const modal = document.getElementById('clientModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('clientForm');
    
    if (clientId) {
        modalTitle.textContent = 'Editar Cliente';
        currentClientId = clientId;
        const client = clients.find(c => c.id === clientId);
        
        document.getElementById('clientId').value = client.id;
        document.getElementById('clientName').value = client.name;
        document.getElementById('clientEmail').value = client.email;
        document.getElementById('clientPhone').value = client.phone;
        document.getElementById('clientAddress').value = client.address;
    } else {
        modalTitle.textContent = 'Adicionar Cliente';
        currentClientId = null;
        form.reset();
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('clientModal').style.display = 'none';
}

function saveClient() {
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const phone = document.getElementById('clientPhone').value;
    const address = document.getElementById('clientAddress').value;
    
    if (!name || !email || !phone || !address) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (currentClientId) {
        const index = clients.findIndex(c => c.id === currentClientId);
        clients[index] = { id: currentClientId, name, email, phone, address };
    } else {
        const newId = clients.length > 0 ? Math.max(...clients.map(c => c.id)) + 1 : 1;
        clients.push({ id: newId, name, email, phone, address });
    }
    
    loadClients();
    closeModal();
}

function editClient(id) {
    openModal(id);
}

function deleteClient(id) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
        clients = clients.filter(client => client.id !== id);
        loadClients();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('clientModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', loadClients);