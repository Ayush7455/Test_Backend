const express=require("express")
const router=express.Router();
const cron = require('node-cron');


router.post("/schedule", (req, res) => {
    const { date, message } = req.body;

  const cronExpression = new Date(date).toISOString();

  const scheduledTask = cron.schedule(cronExpression, () => {
    console.log('Sending notification:', message);
  });

  res.status(200).json({ message: 'Notification scheduled successfully' });
});
  
  module.exports=router