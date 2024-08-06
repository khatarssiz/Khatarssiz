function scrollToComments() {
    document.querySelector('.comments-section').scrollIntoView({ behavior: 'smooth' });
}

function showCommentForm() {
    document.getElementById('comment-form').style.display = 'block';
}

document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const comment = document.getElementById('comment').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    
    const newComment = document.createElement('div');
    newComment.className = 'comment-box';
    newComment.innerHTML = `
        <p>${comment} - <span class="name">${name}</span> <span class="role">${role}</span></p>
        <div class="stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
    `;
    
    document.querySelector('.comments-section').appendChild(newComment);
    document.getElementById('comment-form').style.display = 'none';

    setTimeout(() => {
        newComment.remove();
    }, 600000); // El comentario desaparecerá después de 10 minutos (600000 milisegundos)
});
