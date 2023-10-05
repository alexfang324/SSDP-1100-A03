// You can assume the outer wrapping div of the featured profile will have a class name "featured-profile"
// and each of the regular profile having a class name "profile". I have imported this file into our-team.html
// so you only have to implement the script here.

// To be able to correctly reach into each profile and swap the content, you need to communicate closely
// with Joshan to learn he is is structuring each profile in html.


  // Function to randomize profile order
  function randomizeProfileOrder() {
    // Select all featured-profile and profile elements
    const people = document.querySelectorAll('.person');
    //select the featured profile
    const featuredPerson = document.querySelector(".featured-profile");
    // randomize picking a number between 0 and 4
    let length = people.length;
    var choice = Math.floor(Math.random() * length);
    // select a random person's profile
    var randomPerson = people[choice];
    // commence the swapping
    const placeholder = featuredPerson.innerHTML;
    featuredPerson.innerHTML = randomPerson.innerHTML;
    randomPerson.innerHTML = placeholder;
  }
// simply call the function because it gets executed everytime the page loads, since the script is attached at the bottom of the html document
randomizeProfileOrder();
  