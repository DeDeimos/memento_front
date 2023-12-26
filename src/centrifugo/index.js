import { Centrifuge } from 'centrifuge';

// Создайте экземпляр Centrifuge с параметрами подключения.
const centrifuge = new Centrifuge('ws://185.204.2.233:8111/connection/websocket');

// Подключитесь к серверу Centrifugo.
centrifuge.connect();

// Определите функцию для отправки уведомления о лайке.
const sendLikeNotification = (userId, momentId, recipientUserId) => {
  const channelName = `like_channel_${recipientUserId}`;
  const data = {
    event: 'like',
    user_id: userId,
    moment_id: momentId,
  };
  centrifuge.publish(channelName, JSON.stringify(data));
};

// Определите функцию для отправки уведомления о подписке.
const sendSubscriptionNotification = (followerId, followingId) => {
  const channelName = `subscription_channel_${followingId}`;
  const data = {
    event: 'subscription',
    follower_id: followerId,
    following_id: followingId,
  };
  centrifuge.publish(channelName, JSON.stringify(data));
};

// Используйте эти функции при необходимости в вашем коде.
