import Player from '@vimeo/player';

import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
let currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
populateLOCALSTORAGE_KEY();
const trackingTime = function ({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
};
player.on('timeupdate', throttle(trackingTime, 1000));
player.setCurrentTime(currentTime);

function populateLOCALSTORAGE_KEY() {
  if (!currentTime) {
    currentTime = 0;
  }
}

// player
//   .setCurrentTime(currentTime)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });

// localStorage.setItem('myData', 'sdasdsa');
// console.log(localStorage.getItem('myData'));
// const savedData = localStorage.getItem('myData');
// const parcedData = JSON.parse(savedData);
