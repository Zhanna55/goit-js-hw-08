import Player from '@vimeo/player';
const playerEl = document.querySelector('#vimeo-player');
const player = new Player(playerEl);

player.on('timeupdate', function (timeupdate) {
  console.log(timeupdate);
  return localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify({ timeupdate })
  );
});
const currentTime = localStorage.getItem('videoplayer-current-time');
const parseCurrentTime = JSON.parse(currentTime);
const seconds = parseCurrentTime.timeupdate.seconds;
player
  .setCurrentTime(seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
