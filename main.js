var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

let storyText = 'It was 94 fahrenheit outside, so :insertxx: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

  }

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray (insertZ);

  newStory = newStory.replace(':insertX:', xItem);
newStory = newStory.replace(':insertY:', yItem);
newStory = newStory.replace(':insertZ:', zItem);
newStory = newStory.replace(':insertX:', xItem);



  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300* 0.07142867) + 'stone';
    var temperature =  Math.round((94-32)* 5/9) + 'centigrade';

  newStory = newStory.replace('94 fahrenheight', temperature);
  newStory = newStory.replace('300 pounds', weight);

  }

  story.textContent = newStory;

  story.style.visibility = 'visible';
}
