import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});
player.on('timeupdate', throttle(timeUodate, 1000)
);
function timeUodate(data) {
    sessionStorage.setItem("videoplayer-current-time", JSON.stringify(data));
    console.log(data);
};
const load = key => {
    try {
        const serializedState = sessionStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }

};
const loadData = load("videoplayer-current-time");
if (loadData) {
    player.setCurrentTime(loadData.seconds);
};
