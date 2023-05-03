import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUdete, 1000));

function timeUdete(e) {
  const currentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}

let timeReload = Number(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(timeReload)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
