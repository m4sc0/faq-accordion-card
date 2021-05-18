// function toggle() {
//     if (document.getElementById('question').classList.contains('hide')) {
//         document.getElementById('question').classList.replace('hide', 'show');
//     } else {
//         document.getElementById('question').classList.replace('show', 'hide');
//     }
//     console.log(document.getElementById('question').classList.value);
// }

// function toggle(num) {
//     var object = document.getElementById('q'+num).classList;
//     var objectShow = document.getElementsByClassName('show').classList;
//     for (var i = 0; i < objectShow.length; i++) {
//         objectShow.replace('show', 'hide');
//     }
//     object.replace('hide', 'show');
// }

// function toggle(num) {
//     var currentObject = document.getElementById('q'+num).classList;
//     if (currentObject.contains('hide')) {
//         currentObject.replace('hide','show');
//     } else {
//         currentObject.replace('show','hide');
//     }
// }

function toggle(num) {
    var idArray = new Array('q1','q2','q3','q4','q5');
    for (var i = 0; i < idArray.length; i++) {
        document.getElementById(idArray[i]).classList.replace('show','hide');
    }
    if (document.getElementById('q'+num).classList.contains('hide')) {
        document.getElementById('q'+num).classList.replace('hide','show');
    } else {
        document.getElementById('q'+num).classList.replace('show','hide');
    }
}

function mouse(num) {
    var object = document.getElementById('q'+num);
    object.classList.toggle('yes');
}