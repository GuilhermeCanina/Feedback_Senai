fetch('http://localhost:4000/feedback')
.then(response => response.json())
.then(feedbacks => {
    console.log(feedbacks);
    const tabela = document.getElementById('feedback');
    
    feedbacks.forEach(feedback => {
        console.log(feedback);
        const linha = document.createElement('tr');
        const data = feedback.data.split("T")[0];
        const [ano, mes, dia] = data.split('-');
        const dataFormatada = `${dia}/${mes}/${ano}`;

        // Criação da linha e adição do botão de delete
        linha.innerHTML = `
            <td>${feedback.feedback_id}</td>
            <td>${dataFormatada}</td>
            <td>${feedback.nome}</td>
            <td>${feedback.email}</td>
            <td>${feedback.feedback}</td>
            <td><button class="delete-btn" data-id="${feedback.feedback_id}">Deletar</button></td>
        `;
        
        // Adiciona a linha na tabela
        tabela.querySelector('tbody').appendChild(linha);
    });

    // Agora, adiciona o evento de clique aos botões de delete
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const feedbackId = event.target.getAttribute('data-id');
            deletarFeedback(feedbackId); // Passa o ID correto para deletar
        });
    });

})
.catch(error => console.error('Erro ao buscar feedbacks:', error));

// Função para deletar feedback
function deletarFeedback(id) {
    fetch(`http://localhost:4000/feedback/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 200) {
            alert('Feedback deletado com sucesso');
            window.location.reload(); // Recarrega a página após o delete
        } else {
            alert('Erro ao deletar feedback');
        }
    })
    .catch(error => console.error('Erro ao deletar feedback:', error));
}
