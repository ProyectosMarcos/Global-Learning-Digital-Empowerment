window.addEventListener("DOMContentLoaded", () => {
    const count = document.getElementById("timer");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < numbers.length; i++) {
        setTimeout(() => {
            count.innerHTML = numbers[i];
        }, i * 1000);
    }
});

/*  si declaro con var la variable iteradora del for me refleja en pantalla undefined
 porque var tiene alcance global y se escapa del bucle for, let tiene alcance de bloque
entonces con cada vuelta del bucle for la variable "i" se actualiza constantemente
 */
