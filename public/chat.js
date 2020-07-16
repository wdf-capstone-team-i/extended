const socket = io.connect('https://extended-chat.herokuapp.com/');

socket.on('msg:receive', data => {
    const chatHistory = JSON.parse(window.localStorage.getItem('chat-history'));
    const {message, user} = data;

    chatHistory.push({message, user});
    window.localStorage.setItem('chat-history', JSON.stringify(chatHistory));

});
