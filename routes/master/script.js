// Import the utility functions
const utils = require('../../utils');

// Handle Room Form Submissions
document.getElementById('room1Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const players = [
        document.getElementById('room1Player1').value,
        document.getElementById('room1Player2').value,
        document.getElementById('room1Player3').value,
        document.getElementById('room1Player4').value,
        document.getElementById('room1Player5').value
    ];
    utils.changePlayersRoom1(players);
    alert('Room 1 players updated successfully!');
});

document.getElementById('room2Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const players = [
        document.getElementById('room2Player1').value,
        document.getElementById('room2Player2').value,
        document.getElementById('room2Player3').value,
        document.getElementById('room2Player4').value,
        document.getElementById('room2Player5').value
    ];
    utils.changePlayersRoom2(players);
    alert('Room 2 players updated successfully!');
});

document.getElementById('room3Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const players = [
        document.getElementById('room3Player1').value,
        document.getElementById('room3Player2').value,
        document.getElementById('room3Player3').value,
        document.getElementById('room3Player4').value,
        document.getElementById('room3Player5').value
    ];
    utils.changePlayersRoom3(players);
    alert('Room 3 players updated successfully!');
});

document.getElementById('room4Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const players = [
        document.getElementById('room4Player1').value,
        document.getElementById('room4Player2').value,
        document.getElementById('room4Player3').value,
        document.getElementById('room4Player4').value,
        document.getElementById('room4Player5').value
    ];
    utils.changePlayersRoom4(players);
    alert('Room 4 players updated successfully!');
});

document.getElementById('room5Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const players = [
        document.getElementById('room5Player1').value,
        document.getElementById('room5Player2').value,
        document.getElementById('room5Player3').value,
        document.getElementById('room5Player4').value,
        document.getElementById('room5Player5').value
    ];
    utils.changePlayersRoom5(players);
    alert('Room 5 players updated successfully!');
});

// Handle Key Form Submission
document.getElementById('keysForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const keys = [
        document.getElementById('key1').value,
        document.getElementById('key2').value,
        document.getElementById('key3').value
    ];
    utils.changeKeys(keys);
    alert('Keys updated successfully!');
});
