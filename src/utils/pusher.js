import Pusher from 'pusher-js';

const pusher = new Pusher('831b0d6aebed3c727f01', {
  cluster: 'ap1',
  forceTLS: true,
});

export const commentChannel = pusher.subscribe('COMMENT_CHANNEL');

export const betNotificationChannel = pusher.subscribe('BET_RESULT_CHANNEL');
