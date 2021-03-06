//Array to store messages
var messages = [];

//Message type lookup object. Similar to enum.
var messageType = {
    out:        'out-message',
    in:         'in-message',
    unknown:    'unknown-message'
};

//Seed Data
var data = [
    {
        type:       messageType.out,
        user:       'David',
        message:    'Hey, you have lunch plans?'
    },
    {
        type:       messageType.in,
        user:       'Myron',
        message:    'Yo.  Not yet, Sushi?'
    },
    {
        type:       messageType.out,
        user:       'David',
        message:    'Sounds good.'
    }
];

//Message Constructor function
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return an element for the supplied message.
function createMessageElement(message){
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type
    messageEl.className = message.type;

    return messageEl;
}

//Button click event handler to add a new message.
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    //Determine message type and set message variables accordingly.
    switch (event.target.id) {
        case 'send-button':
            user = 'David';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Myron';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //Create new message.
    if (messageInput.value != ''){
        //Construct a message and add it to the array.
        var message = new Message(type, user, messageInput.value)
        messages.push(message);

        //Create a message element
        var el = createMessageElement(message);

        //Add the message element on the DOM
        messageContainerEl.appendChild(el);
        
        //Reset input.
        messageInput.value = '';
    }
}

//Load seed data from data array.
function loadSeedData() {
    for(var i = 0; i<data.length; i++) {
        var item = data[i];
        var message = new Message(item.type, item.user, item.message);

        messages.push(message);
    }

    //Load view with pre-loaded messages
    var messageContainerEl = document.getElementById('message-container');

    for (var i = 0; i<messages.length; i++){
        var el = createMessageElement(messages[i]);

        messageContainerEl.appendChild(el);
    }
}

var init = function(){
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //Load seed data from data array
    loadSeedData();
};

init();
