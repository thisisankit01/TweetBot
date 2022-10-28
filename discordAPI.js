import 'discord.js';
import Discord from 'discord.js';
const client = new Discord.Client();
import tweet from './twitterAPI.js'
import command from './index2.js'

//Global variable fror exporting
let msg ; // used to export message

const input = () =>{
    client.on ('message', (message) => {

        //assigning msg to message
        msg = message;

        //Checking the twitter tweet length criteria 
        if (message.content.startsWith(command) && message.content.split(command)[1].length <= 280){
            tweet(); // Calling the function to tweet the message
        }
        if(message.content.startsWith(command) && message.content.split(command)[1].length > 280){
          message.reply('Sorry, but twitter allows only 280 characters');
        }

      });
}

//Discord bot token
client.login(process.env.DISCORD_TOKEN);

export {input, msg};
