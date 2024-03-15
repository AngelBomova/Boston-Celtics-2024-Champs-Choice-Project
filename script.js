function shakeMagic8Ball() {
    const messages = [
        "Yes",
        "duhhhhhh",
        "Celtics in 4",
        "🏆🏆🏆",
        "Of Course!",
        "Without a doubt",
        "100%",
        "Yes, definitely",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const answerElement = document.getElementById("answer");
    const whiteSectionElement = document.querySelector(".white-section");
    const windowElement = document.querySelector(".window");
    const containerElement = document.querySelector(".container");

    containerElement.classList.add("deciding");
    windowElement.classList.add("shake-animation");

    setTimeout(() => {
        answerElement.textContent = messages[randomIndex];
        
        
        answerElement.style.top = `${whiteSectionElement.offsetTop}px`;
        answerElement.style.left = `${whiteSectionElement.offsetLeft}px`;

        windowElement.classList.remove("shake-animation");
        containerElement.classList.remove("deciding");
    }, 500);
}
