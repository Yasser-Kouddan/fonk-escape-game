// utils.js

const jsonData = {
    "room1": ["oumaima", "zyad", "badr eddine", "imane", "salma"],
    "room2": ["player1", "player2", "player3", "player4", "player5"],
    "room3": ["player1", "player2", "player3", "player4", "player5"],
    "room4": ["player1", "player2", "player3", "player4", "player5"],
    "room5": ["player1", "player2", "player3", "player4", "player5"],
    "keys": ["nature", "homme", "harmonie"]
};

// Function to change players in a room
function changePlayersRoom1(players) {
    jsonData.room1 = players;
}

function changePlayersRoom2(players) {
    jsonData.room2 = players;
}

function changePlayersRoom3(players) {
    jsonData.room3 = players;
}

function changePlayersRoom4(players) {
    jsonData.room4 = players;
}

function changePlayersRoom5(players) {
    jsonData.room5 = players;
}

// Function to get players in a room
function getPlayersRoom1() {
    return jsonData.room1;
}

function getPlayersRoom2() {
    return jsonData.room2;
}

function getPlayersRoom3() {
    return jsonData.room3;
}

function getPlayersRoom4() {
    return jsonData.room4;
}

function getPlayersRoom5() {
    return jsonData.room5;
}

// Function to get keys
function getKeys() {
    return jsonData.keys;
}

// Export the functions for use in other files
module.exports = {
    changePlayersRoom1,
    changePlayersRoom2,
    changePlayersRoom3,
    changePlayersRoom4,
    changePlayersRoom5,
    getPlayersRoom1,
    getPlayersRoom2,
    getPlayersRoom3,
    getPlayersRoom4,
    getPlayersRoom5,
    getKeys
};
