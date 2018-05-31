

$(document).ready(function () {

    $("<button id='first-button'>Click Me</button>").appendTo("body")
    $("#first-button").insertBefore($("form"))
    function notify() {
        alert('Thank You for Clicking Me!');
    }

    $("#first-button").on("click", notify);



    $("form").submit(function (element) {
        element.preventDefault();
        let value = $('#return-text').val()
        alert(value);
    })

    $('.first-div').css({
        'border': '2px solid black',
        'margin': '1em',
        'height': '10px',
        'width': '100px'
    });


    $(".first-div").mouseover(function () {
        $(".first-div").css(
            { 'background-color': 'lightblue', }
        );
    });

    $(".first-div").mouseout(function () {
        $(".first-div").css("background-color", "white");
    })

    $('p').on('click', function () {
        $('p').css('color', randomColor);
    })

    function randomColor() {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor
    }

    $('#span-button').click(function () {
        var firstName = 'Peter'
        var structure = $(`<span>${firstName}</span>`);
        $('#container').append(structure);

    });

    var goodFriends = ['Paul', 'Sean', 'Aaron', 'Ryan', 'Erik', 'Scott', 'Ivan', 'Hugo', 'Chris', 'Andy']
    $('#friend-button').click(function () {
        for (i = 0; i < goodFriends.length; i++) {
            $('ul').append(
                $('<li>').append(goodFriends[i])
            )
        }
    });
    
})





