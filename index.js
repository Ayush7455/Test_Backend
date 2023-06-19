const express = require('express');
const cron = require('node-cron');
const app = express();

app.use(express.json());

app.post('/schedule-notification', (req, res) => {
  const { date, message } = req.body;

  const cronExpression = new Date(date).toISOString();

  const scheduledTask = cron.schedule(cronExpression, () => {
    console.log('Sending notification:', message);
  });

  res.status(200).json({ message: 'Notification scheduled successfully' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
