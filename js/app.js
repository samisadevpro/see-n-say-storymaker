// Arrays of words for story components
const nouns = ["dog", "cat", "bird", "car", "house"];
const verbs = ["runs", "jumps", "flies", "drives", "sings"];
const adjectives = ["big", "small", "fast", "slow", "loud"];
const objects = ["ball", "tree", "cloud", "river", "mountain"];
const places = ["park", "forest", "beach", "city", "village"];

// Object to store parts of the story
let storyParts = { noun: "", verb: "", adjective: "", object: "", place: "" };

/**
 * Selects a random element from an array.
 * @param {Array} arr - The array to pick a random element from.
 * @returns {string} - The randomly selected element.
 */
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Event listeners for each button to select a word and update the story
document.getElementById('nounBtn').onclick = function() {
    storyParts.noun = getRandomElement(nouns);  // Pick a random noun
    updateStory();  // Update the story text
};

document.getElementById('verbBtn').onclick = function() {
    storyParts.verb = getRandomElement(verbs);  // Pick a random verb
    updateStory();  // Update the story text
};

document.getElementById('adjBtn').onclick = function() {
    storyParts.adjective = getRandomElement(adjectives);  // Pick a random adjective
    updateStory();  // Update the story text
};

document.getElementById('noun2Btn').onclick = function() {
    storyParts.object = getRandomElement(objects);  // Pick a random object
    updateStory();  // Update the story text
};

document.getElementById('placeBtn').onclick = function() {
    storyParts.place = getRandomElement(places);  // Pick a random place
    updateStory();  // Update the story text
};

/**
 * Updates the story text on the page.
 * Constructs a sentence using the selected story parts and displays it.
 * Displays a message if all parts are empty.
 */
function updateStory() {
    if (storyParts.noun || storyParts.verb || storyParts.adjective || storyParts.object || storyParts.place) {
        // Create a story sentence using a template for better grammar
        const story = `The ${storyParts.adjective} ${storyParts.noun} ${storyParts.verb} over the ${storyParts.object} in the ${storyParts.place}.`;
        // Display the story in the HTML element with id 'storyOutput'
        document.getElementById('storyOutput').innerText = story;
    } else {
        document.getElementById('storyOutput').innerText = "Story has been reset.";
    }
}

// Event listener for the 'Speak' button
document.getElementById('speakBtn').onclick = function() {
    const textToSpeak = document.getElementById('storyOutput').innerText;  // Get the story text
    if (textToSpeak.trim() !== "" && textToSpeak !== "Story has been reset.") { // Check if there is any text to speak
        speakNow(textToSpeak);  // Invoke the TextToSpeech function
    } else {
        alert("The story is empty. Please generate a story first.");
    }
};

/**
 * Uses the browser's SpeechSynthesis API to speak a given text.
 * @param {string} text - The text to be spoken.
 */
function speakNow(text) {
    const speech = new SpeechSynthesisUtterance(text);  // Create a new speech synthesis object
    window.speechSynthesis.speak(speech);  // Speak the text
}

// Event listener for the 'Generate Random Story' button
document.getElementById('randomStoryBtn').onclick = function() {
    // Randomly select a word from each category and update the story parts
    storyParts.noun = getRandomElement(nouns);
    storyParts.verb = getRandomElement(verbs);
    storyParts.adjective = getRandomElement(adjectives);
    storyParts.object = getRandomElement(objects);
    storyParts.place = getRandomElement(places);
    updateStory();  // Update the story text
};

// Event listener for the 'Reset' button
document.getElementById('resetBtn').onclick = function() {
    // Reset all story parts to empty strings
    storyParts = { noun: "", verb: "", adjective: "", object: "", place: "" };
    updateStory();  // Clear the displayed story text
};
