const { version } = require("../package.json");

module.exports = (client) => {
    console.log(`${client.user.username} is up and running!`);
    
    client.user.setPresence({
        activites: [{
            name: `you. | v${version}`,
            type: "WATCHING"
        }]
    });
};
