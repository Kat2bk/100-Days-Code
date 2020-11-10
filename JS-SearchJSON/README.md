# Exercise 6: AJAX

Date: 11/10/2020


Goal: Using the endpoint provided, fetch the JSON data and filter through it to return a match to the user.
Display it on the browser by creating a form, input text field and an unordered list.

# Things Learned:

The **fetch** method, I had learned axios first. However, you must convert fetch to json, axios does that automatically.

It is better to use the spread operator to pass data, otherwise don't set your empty array to a const.

I could have destructured the parameters of the filter function, getting rid of place.city or place.state.

I learned about the **new RegExp** method and the usefulness of match, replace and includes. RegExp must have a value and a character to search through the value. The \g (global), and \i (lowercase, or uppercase) will be the most useful. Followed by \s, \d, \w.

ABout .join() for an array of data.

Remembering .textContent and .innerHTML and how useful they are for changing data displayed on the browser.

I could have called the displayMatches function within the eventListener for searchInput: searchInput.addEventListener('keyup', (e) => displayMatches(searchInput));


Must remember this function: `const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');`

# Steps to Remember

1. Creating variables for the endpoint, the input element and the unordered list.
2. The Fetch method returns a promise with a response object. Convert it into JSON and push to our array.
3. We added query selectors for input search element and unordered list. ANd then attached event listeners to the input, awaiting for 'change' and 'keyup'. We don't need the 'change' one.
4. Defining a function for finding matches between input text and the data from the endpoint. 
    - function has two parameters, inputted text and the data
    - we filter through the array, creating a regex to match through
    - the function can be much more simplified: const findCities = (wordToMatch, cities) => cities.filter(({city, state}) => (
          city.match(new RegExp(wordToMatch, 'gi')) || state.match(new RegExp(wordToMatch, 'gi'))
      ));
    - Match the input with city or state properties of the response
5. we declare another regex variable, and map through our filter function, calling two more variables for city and state and setting our regex as a parameter inside along with a span element. Using interpolation to call the value of our search input.
6. we return within the map function an li element for our unordered list, calling the two variables we created for city and state inside a span class. we set the innerHTML to our map, attaching it to the unordered list using one of the querySelectors. this will highlight any text we type.
