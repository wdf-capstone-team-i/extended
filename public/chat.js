// const socket = io.connect('http://localhost:8080/');
//
// const chatForm = document.querySelector('#chat-form');
// const messages = document.querySelector('#chat-messages');
//
//
// chatForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     socket.emit('msg:send', e.target.message.value);
// })
//
//
//
// socket.on('msg:receive', data => {
//     const newMessage = document.createElement('div');
//     newMessage.innerHTML = `<p>${data}</p>`;
//     newMessage.className = 'chat-msg';
//
//     messages.appendChild(newMessage);
//     messages.scrollTop = messages.scrollHeight;
// });
