let employees = [
    { id: 1, name: 'João', position: '000.000.000-00', department: 'joão@gmail.com', salary: '(19)19999999-999' },
    { id: 2, name: 'João', position: '000.000.000-00', department: 'joão@gmail.com', salary: '(19)19999999-999' }
];

let currentEmployeeId = null;

function loadEmployees() {
    const tableBody = document.querySelector('#employeesTable tbody');
    tableBody.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>
                <button class="btn" onclick="editEmployee(${employee.id})">Editar</button>
                <button class="btn" onclick="deleteEmployee(${employee.id})">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function openModal(employeeId = null) {
    const modal = document.getElementById('employeeModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('employeeForm');
    
    if (employeeId) {
        modalTitle.textContent = 'Editar Funcionário';
        currentEmployeeId = employeeId;
        const employee = employees.find(e => e.id === employeeId);
        
        document.getElementById('employeeId').value = employee.id;
        document.getElementById('employeeName').value = employee.name;
        document.getElementById('employeePosition').value = employee.position;
        document.getElementById('employeeDepartment').value = employee.department;
        document.getElementById('employeeSalary').value = employee.salary;
    } else {
        modalTitle.textContent = 'Adicionar Funcionário';
        currentEmployeeId = null;
        form.reset();
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('employeeModal').style.display = 'none';
}

function saveEmployee() {
    const name = document.getElementById('employeeName').value;
    const position = document.getElementById('employeePosition').value;
    const department = document.getElementById('employeeDepartment').value;
    const salary = document.getElementById('employeeSalary').value;
    
    if (!name || !position || !department || !salary) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (currentEmployeeId) {
        const index = employees.findIndex(e => e.id === currentEmployeeId);
        employees[index] = { id: currentEmployeeId, name, position, department, salary };
    } else {
        const newId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;
        employees.push({ id: newId, name, position, department, salary });
    }
    
    loadEmployees();
    closeModal();
}

function editEmployee(id) {
    openModal(id);
}

function deleteEmployee(id) {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
        employees = employees.filter(employee => employee.id !== id);
        loadEmployees();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('employeeModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', loadEmployees);