document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');
    const guestbook = document.querySelector('#guestbook tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 입력된 정보 가져오기
        const name = form.querySelector('input[name="name"]').value;
        const password = form.querySelector('input[name="password"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        // 새로운 행 생성
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${message}</td>
        `;

        // 방명록에 새로운 행 추가
        guestbook.appendChild(newRow);

        // 입력 필드 초기화
        form.reset();
    });
});
