import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');

const player = new Player(playerEl);

function setTimeupdate(timeupdate) {
  return localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify({ timeupdate })
  );
}
player.on('timeupdate', throttle(setTimeupdate, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
const parseCurrentTime = JSON.parse(currentTime);
const seconds = parseCurrentTime.timeupdate.seconds;
player.setCurrentTime(seconds).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});
