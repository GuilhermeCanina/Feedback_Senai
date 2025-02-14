const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const dataValor = cadastro.data.value;
    const data = new Date(dataValor);
    
    const dataFormatada = data.toLocaleDateString('pt-BR');
    const corpo = {
        data: dataFormatada,
        nome: cadastro.nome.value,
        email: cadastro.email.value,
        feedback: cadastro.feedback.value
    };

    fetch('http://localhost:4000/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                alert('Feedback cadastrado com sucesso');
                window.location.reload();
            } else {
                alert('Erro ao cadastrar feedback');
            }
        });
});

fetch('http://localhost:4000/feedback')
    .then(response => response.json())
    .then(feedback => {
        const tabela = document.getElementById('feedback');
        feedback.forEach((feedback) => {
            const linha = document.createElement('tr');
            const dataFormatada = new Date(feedback.data).toLocaleDateString('pt-BR');
            linha.innerHTML = `
            <td>${dataFormatada}</td>
            <td>${feedback.nome}</td>
            <td>${feedback.email}</td>
            <td>${feedback.feedback}</td>
            <td><button onclick="excluir(${feedback.feedback_id})">Deletar</button></td>
        `;
            tabela.appendChild(linha);
        });
    });

function excluir(feedback_id) {
    fetch(`http://localhost:4000/feedback/${feedback_id}`, {
        method: 'DELETE'
    })
        .then(response => response.status)
        .then(status => {
            if (status === 204) {
                alert('Erro ao excluir feedback');
            } else {
                alert('Feedback excluído com sucesso');
                window.location.reload();
            }
        });
}
