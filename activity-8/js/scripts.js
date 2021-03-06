//Utility function
function get(element){
    return document.getElementById(element);
}

//Application functions
function openModal(){
    var modal = get('modal-dialog');  //assigns element to variable via the get utility function
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    //clear text
    title.value = '';
    text.value = '';

    //hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var displayContent = get('display-content');

    //create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    //add elements
    newTitle.appendChild(newTitleText);  //add text to text node
    newContent.appendChild(newContentText);
    displayContent.appendChild(newTitle); //add text node (and appended text) to content display container
    displayContent.appendChild(newContent);

    closeModal();
}

//Wire up event handlers
window.addEventListener('load', function(){
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton =  get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});