module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);

    client.user.setActivity(`${client.guilds.cache.size} Server and ${client.users.cache.size} Users`, {type: 'LISTENING'});
};