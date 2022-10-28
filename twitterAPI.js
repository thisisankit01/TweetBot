import 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
import command from './index2.js'
import twit from 'twit';
import {msg} from './discordAPI.js'
import { config } from 'dotenv';

//verifying credentials
const credentials = new twit({
    consumer_key: process.env.API_KEY,
    consumer_secret:process.env.API_SECRET ,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

  
  //Tweeter Function 
 const tweet  = () => {
    let tweetPosted = false;

    //Checking errors
    const onFinish = (err, success) => {
      if (err) {
        console.log("Error: ", err.msg);
        msg.reply('Error:  Status is a duplicate');
      } else{
        console.log(
        `Success
         Tweet: ${success.text}
         Username: ${success.user.name}
         Created at: ${success.created_at}`);
         tweetPosted = true;
         msg.reply('Done! please check your twitter');
      }
    }
    
    //Removing the command from actual tweet
      const userInput = msg.content.split(command)[1]; 
      
    //This tweets the msg
       credentials.post("statuses/update", { status: userInput },onFinish);

       return tweetPosted;
      
    };


    export default tweet;
 