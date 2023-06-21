const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
app.use(express.json());

// Endpoint to schedule a notification
app.post('/schedule', (req, res) => {
  const { message, schedule } = req.body;

  // Schedule the notification
  cron.schedule(schedule, () => {
    sendNotification(message);
  });

  res.json({ message: 'Notification scheduled successfully' });
});

// Function to send the notification
function sendNotification(message) {
  const notificationData = {
    appId: 8654,
    appToken: 'fMWwfTqp5f8AsJgasvG4Xc',
    title: 'Push title here as a string',
    body: 'Push message here as a string',
    dateSent: '6-20-2023 3:01PM',
    pushData: { yourProperty: 'yourPropertyValue' },
    bigPictureURL: 'Big picture URL as a string'
  };

  axios
    .post('https://app.nativenotify.com/api/notification', notificationData)
    .then(response => {
      console.log('Notification sent:', response.data);
    })
    .catch(error => {
      console.error('Failed to send notification:', error.message);
    });
}

// Start the server
app.listen(3000, () => {
  console.log('Notification API server is running on http://localhost:3000');
});
