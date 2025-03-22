function calculateLove() {
    let name1 = document.getElementById("name1").value.toLowerCase();
    let name2 = document.getElementById("name2").value.toLowerCase();
    let result = Math.floor(Math.random() * 100) + 1;

    if ((name1 === "mariam" && name2 === "atef") || (name1 === "atef" && name2 === "mariam") || (name1 === "ahmed" && name2 === "mariam"))  {
        result = 100;
        showSpecialMessage();
    }

    document.getElementById("result").innerText = `Calculating... ⏳`;

    setTimeout(() => {
        document.getElementById("result").innerText = `Love Percentage: ${result}% ❤️`;
        document.getElementById("result").style.opacity = "1";
        playSound();
        if (result > 80) showHearts();
        showQuote();
    }, 2000);
}

function resetFields() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("quote").innerText = "";
    document.body.style.background = "";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function playSound() {
    let audio = new Audio("love-sound.mp3");
    audio.play();
}

function showHearts() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = "30px";
    heart.style.opacity = "0.7";
    document.body.appendChild(heart);
    setTimeout(() => document.body.removeChild(heart), 2000);
}

function showQuote() {
    let quotes = [
        "Love is not finding someone to live with, it's finding someone you can't live without.",
        "In dreams and in love, there are no impossibilities.",
        "Love is like the wind, you can't see it but you can feel it.",
        "You are my today and all of my tomorrows.",
        "When love is real, it finds a way."
    ];
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = `"${randomQuote}"`;
}

function showSpecialMessage() {
    setTimeout(() => {
        alert("🔥 MARIAM ❤️ ATEF = TRUE LOVE FOREVER! 🔥");
    }, 1500);
}
