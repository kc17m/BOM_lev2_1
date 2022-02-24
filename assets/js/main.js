// lev2_1
// lev 2_1

{/* <div class="message">
        <p>Diese Meldung wird automatisch verschwinden in </p>
        <div id="count">10</div>
    </div> */}

let message = document.getElementsByClassName("message");
let count = document.getElementById("count");
let counter = +count.textContent;

console.log(message[0], count, counter, typeof counter);

// function myLoad() {
//     console.log('is loaded')
//     alert("Welcome this page is loaded")
// }

// window.onload = myLoad()

let interval = setInterval(() => {
    console.log("test");
    if (counter === 0) {
        clearInterval(interval);
        // message[0].style.display = "none";
        message[0].classList.add("fadeOut")
    }
    else {
        counter--;
        console.log(counter);
        count.innerHTML = `${counter}`
    }
}, 1000);

window.onload = interval();



