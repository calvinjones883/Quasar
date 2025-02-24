function changeText() {
    const phrases = [
        "Dynamic magic in action!",
        "Every click reveals a new possibility.",
        "JavaScript makes the world brighter!"
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById('dynamicText').innerText = phrases[randomIndex];
}
