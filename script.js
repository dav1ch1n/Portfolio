function mostrarTexto(idBoton, idTexto) {
    let button2 = document.getElementById(idBoton);
    let texto2 = document.getElementById(idTexto)
    if (texto2.style.display === "none" || texto2.style.display === "") {
        texto2.style.display = "block";
        button2.textContent = "Ver menos"
    }
    else {
        texto2.style.display = "none";
        button2.textContent = "Ver más";
    }
}
// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function () {
//         if (texto[i].style.display === "none") {
//             texto[i].style.display = "block";
//             button[i].textContent = " Ver menos";
//         } else {
//             texto[i].style.display = "none";
//             button[i].textContent = "Ver más";
//         }
//     });
// }
// button[0].addEventListener("click", function () {
//     if (texto.style.display === "none") {
//         texto.style.display = "block";
//         button[0].textContent = " Ver menos";
//     } else {
//         texto.style.display = "none";
//         button[0].textContent = "Ver más";
//     }
// });

