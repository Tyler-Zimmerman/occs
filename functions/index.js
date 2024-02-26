const { default: axios } = require("axios");
const functions = require("firebase-functions")

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");


exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
    console.log("create", user);

    axios.post(
        "https://api.chatengine.io/users/",
        {
            username: user.email,
            secret: user.uid,
            email: user.email,
            first_name: user.displayName,
        },
        { headers: { "Private-Key": "6589579d-b609-43fe-9e4e-29801907b2df" } }
    );
  });
  
  exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
    console.log("delete", user);

    axios.delete("https://api.chatengine.io/users/me/"),
    {
        headers: {
            "Project-ID": "5802ced2-e1b2-45e7-8ecc-4d2d05800ec2",
            "User-Name": user.email,
            "User-Secret": user.uid,
        },
    }
    
  });