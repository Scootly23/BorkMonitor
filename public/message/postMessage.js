const form  = document.getElementById('message_form');
console.log("yes")
form.addEventListener('submit', async (event) => {
    let message = document.getElementById('messageInput').value
    if(!message)
    {
      message = "Penny has been barking and sounds distressed!"
    }
    let xhr = new XMLHttpRequest();

    let json = JSON.stringify({
    message: message,
    });

    xhr.open("POST", 'https://tranquil-plateau-31149.herokuapp.com/Messages')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Access-Control-Allow-Origin','*')

    await xhr.send(json);
});