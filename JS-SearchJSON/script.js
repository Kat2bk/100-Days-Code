const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(response => response.json())
    // spread operator
    .then(data => cities.push(...data))

function findCities(wordToMatch, cities) {
    return cities.filter(place => {
        // we filter through the array of the city property
        // we need to match what we search
        // so we will use regex
        // we cannot put wordToMatch inside, we must
        //create a regular expression outside
        const regex = new RegExp(wordToMatch, 'gi');
        // check for city or state
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches() {
    const matchData = findCities(this.value, cities)
    // we want to display our data in the unordered list
    const text = matchData.map((place) => {
        return `
            <li>
            <span class="names">${place.city}, ${place.state}</span>
            <span class="population">Pop: ${place.population}</span>
            </li>
        `
    }).join('') // turns it from an array into string
    matches.innerHTML = text;
}

const searchInput = document.querySelector('.search-bar');

const matches = document.querySelector('.filter');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// regex is short for regular expression:
// A regular expression is a sequence of characters 
// that define a search pattern. Usually such patterns
// are used by string-searching algorithms for "find" 
// or "find and replace" operations on strings, or for input validation.