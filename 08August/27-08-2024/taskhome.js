const names = ["Vaibhavi", "Kshirsagar"];
let currentIndex = 0;

// Using setInterval to toggle between the names
setInterval(() => {
    currentIndex = (currentIndex + 1) % names.length;
    document.querySelector(".name").textContent = names[currentIndex];
}, 2000);


