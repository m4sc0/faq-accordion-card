// function toggle() {
//     if (document.getElementById('question').classList.contains('hide')) {
//         document.getElementById('question').classList.replace('hide', 'show');
//     } else {
//         document.getElementById('question').classList.replace('show', 'hide');
//     }
//     console.log(document.getElementById('question').classList.value);
// }

function toggle(num) {
    var object = document.getElementById('q'+num).classList;
    var classArray = document.getElementsByClassName('question');
    for (var i = 0; i < classArray.length; i++) {
        if (classArray[i].classList.contains('show')) {
            object.replace('show', 'hide');
        }
    }
    object.replace('hide', 'show');
}

// function toggle(num) {
//     var currentObject = document.getElementById('q'+num).classList;
//     if (currentObject.contains('hide')) {
//         currentObject.replace('hide','show');
//     } else {
//         currentObject.replace('show','hide');
//     }
// }