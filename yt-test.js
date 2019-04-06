let ytIcons;
let myDiv = document.createElement('div');
myDiv.id = 'my-div';
myDiv.style.width = '40px';
myDiv.style.border = '2px solid black';

myDiv.addEventListener('click', () => {
  chrome.runtime.sendMessage({});
})

let loadCheck = function() {
  setTimeout(() => {
    ytIcons = document.getElementById('top-level-buttons');
    if (!ytIcons) {
      console.log('not found');
      loadCheck();
    }
    else {
      console.log('found');
      ytIcons.appendChild(myDiv);
    }
  }, 1000);
}

loadCheck();

