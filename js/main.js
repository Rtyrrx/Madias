$("#btn").click(function(){
    alert("Извените, но в данный момент вы не можете написать мне");
    });

let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light-mode.css") {
        theme.href = "dark-mode.css";
    } else {
        theme.href = "light-mode.css";
    }
}

// $("#switchMode").click(function(){
//     let theme = document.getElementById("theme");

//     if (theme.getAttribute("href") == "light-mode.css") {
//         theme.href = "dark-mode.css";
//     } else {
//         theme.href = "light-mode.css";
//     } 
// });