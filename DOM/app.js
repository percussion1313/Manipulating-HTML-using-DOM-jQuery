document.addEventListener('DOMContentLoaded', function () {

    let div = document.createElement('div');
    let divText = document.createTextNode('');
    div.appendChild(divText);
    document.body.appendChild(div);
    
    
    var button = document.getElementById('submit-button')
    button.addEventListener('click', function(){
        var textName = document.getElementById('text-name')
        alert(textName.value)
    })
   

    let divContainer = document.createElement('div');
    divContainer.style.width = '100px'
    divContainer.style.height = '10px'
    divContainer.style.border = '2px'
    divContainer.style.borderColor = 'black'
    document.body.appendChild(divContainer);

    divContainer.addEventListener('mouseover', function(){
        divContainer.style.backgroundColor = 'yellow';
    })

    divContainer.addEventListener('mouseout', function(){
        divContainer.style.backgroundColor = 'white';
    })

    //Disabled Red Color 
    /*var paragraphColor = document.getElementsByTagName('p')[0];
    paragraphColor.addEventListener('click', function(){
        paragraphColor.style.color = 'red';
    })*/
    function randomColor() {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor
    }

    var paragraphColor = document.getElementsByTagName('p')[0];
    paragraphColor.addEventListener('click', function(){
        paragraphColor.style.color = randomColor();
    })

    let spanButton = document.getElementById('button2');
    spanButton.addEventListener('click', function(){
        let spanDiv = document.getElementById('divSpan');
        let span = document.createElement('span');
        let spanText = document.createTextNode('Peter');
        span.appendChild(spanText);
        spanDiv.appendChild(span);
    }) 

    

    var goodFriends = ['Paul', 'Sean', 'Aaron', 'Ryan', 'Erik', 'Scott', 'Ivan', 'Hugo', 'Chris', 'Andy'] 
    let ul = document.getElementById('list')
    let l = 1;
    function addToList() {
        let li = document.createElement('li');
        ul.appendChild(li);
        let liText = document.createTextNode(goodFriends[l]);
        li.appendChild(liText);
        l = (l + 1)
        return;
    }

    let friendButton = document.getElementById('friend-list');

    friendButton.addEventListener('click', addToList) 

})