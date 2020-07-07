const form = document.querySelector('#form');
const continent = document.querySelector('#continent');
const locate = document.querySelector('#location');
const dateOut = document.querySelector('.contOutput')
const timeOut = document.querySelector('.locaOutput')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()
    displayTime()

})

function displayTime() {
    continentValue = continent.value.trim()
    locateValue = locate.value.trim()
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    fetch(`${proxy}http://worldtimeapi.org/api/timezone/${continentValue}/${locateValue}`)
        .then((res) => res.json())
        .then((data) => {
            var parsedDate = new Date(data.datetime.toLocaleString('en-US'));
            var realDate = parsedDate.toLocaleDateString();
            var realTime = parsedDate.toLocaleTimeString();
            console.log(realDate);
            console.log(realTime)
            dateOut.innerHTML = `The date in ${locateValue} is ${realDate}`;
            timeOut.innerHTML = `The time in ${locateValue} is ${realTime}`
        })
        .catch((err) => console.log(err))
}

var checkInput = () => {
    continentValue = continent.value.trim()
    locateValue = locate.value.trim()

    if (continentValue === '') {
        displayError(continent, "continent can't be blank")
    } else {
        displaySuccess(continent)
    }
    if (locateValue === '') {
        displayError(locate, "location can't be blank")
    } else {
        displaySuccess(locate)
    }

}

var displayError = (input, message) => {
    const formControl = input.parentElement
    const small = formControl.querySelector('.small')
    small.innerHTML = message
    formControl.className = 'form-control error'

}

var displaySuccess = (input) => {
    const formControl = input.parentElement
        // const small = formControl.querySelector('.small')
    formControl.className = 'form-control success'
}










// var btn = document.getElementById('btn');

// btn.addEventListener('click', displayTime)


// function displayTime() {
//     fetch('http://worldtimeapi.org/api/timezone/Africa/Lagos')
//         .then((res) => res.json())
//         .then((data) => {
//             var parsedDate = new Date(data.datetime.toLocaleString('en-US'));
//             var realDate = parsedDate.toLocaleDateString();
//             var realTime = parsedDate.toLocaleTimeString();
//             console.log(realDate);
//             console.log(realTime)
//         })
//         .catch((err) => console.log(err))
// }