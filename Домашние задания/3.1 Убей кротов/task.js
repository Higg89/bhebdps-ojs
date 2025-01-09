function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let wins = 0;
let losses = 0;

function updateStats() {
    document.getElementById('dead').textContent = wins;
    document.getElementById('lost').textContent = losses;
}

function resetGame() {
    wins = 0;
    losses = 0;
    updateStats();
    alert("Restart game");
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            wins++;
        } else {
            losses++;
        }

        updateStats();

        if (wins >= 10) {
            alert('Victory! You caught 10 moles!');
            resetGame();
        } else if (losses >= 5) {
            alert('Defeat! You missed five moles.');
            resetGame();
        }
    };
}
