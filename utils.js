// utils.js

const jsonData = {
    "valeurs": ["Respect", "Engagement", "Apprentissage", "Travaille", "Honnetete"],
    "keys": ["nature", "homme", "harmonie"]
};

// Function to change players in a room
function getValeurs() {
    return jsonData.valeurs;
}

// Function to get keys
function getKeys() {
    return jsonData.keys;
}

// Expose functions globally for browser use
window.utils = { getKeys, getValeurs };
