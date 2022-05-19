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

    xhr.open("POST", 'http://localhost:5000/Messages')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Access-Control-Allow-Origin','*')

    await xhr.send(json);
    event.preventDefault()
});