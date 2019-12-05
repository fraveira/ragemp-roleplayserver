var Utility = require('./utility');

mp.events.addCommand('getpos', (player, fullText) => { // we will get the player position
    player.outputChatBox(`${player.position}`);
});

mp.events.addCommand('tp', (player, fullText, x, y, z) => { // we create the command 
    if (x == undefined || y == undefined || z == undefined) {
        player.outputChatBox('/tp [x] [y] [z]'); // if x y and z are not defined, we output this.
        return;
    }
    player.outputChatBox(`¡Te has teletransportado!`);
    player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z)); // making a new vector and sending the player to that position
});

mp.events.addCommand('me', (player, fullText) => { // Creating /me command, a fundamental in roleplays. 
    if (fullText == undefined) { // if no text, help. 
        player.outputChatBox('/me [message]'); 
        return;
    }

    mp.players.broadcastInRange(player.position, 20, `!{#C6A6E0} ${player.name} ${fullText}`); 
// broadcastInRange in a 20 meters radius. 
});

mp.events.addCommand('ame', (player, fullText) => { // /ame is fundamental in roleplay games, to describe conditions  
    if (fullText == undefined) {
        player.outputChatBox('/ame [message]'); 
        return;
    }

    mp.players.broadcastInRange(player.position, 20, `!{#C6A6E0} ${fullText} (( ${player.name} )) `); 
});

mp.events.addCommand('spawncar', (player, fullText, vehicleType) => { // Admin command to spawn cars. 
    if (vehicleType == undefined) {
        player.outputChatBox('/spawncar [vehicle_type]'); // Help text. 
        return;
    }

    var currentVehicle = player.getVariable('PersonalVehicle');

    if (currentVehicle != null) { // If vehicle exists, then destroy it. 
        currentVehicle.destroy();
    }
    var spawnedVehicle = mp.vehicles.new(mp.joaat(vehicleType), player.position, {color: [[255, 0, 0], [255, 0, 0]]});
    player.setVariable('PersonalVehicle', spawnedVehicle); 
});

mp.events.addCommand('dc', (player) => {
    mp.events.call('kickThePlayer', player);
});

mp.events.addCommand('kickname', (player, fullText, username, reason) => {
    if (username == undefined || reason == undefined) {
        player.outputChatBox('/kickname [username] [reason]');
        return;
    }

    var realReason = fullText.replace(username, '');
    Utility.FindByName(username).then(
        (result) => {
            console.log(`Kicked ${result.name} for reason: ${realReason}`);
            player.outputChatBox(`Kicked ${result.name} for reason: ${realReason}`);
            result.kick(realReason);
        },
        (error) => {
            player.outputChatBox(error);
        }
    );
});

mp.events.addCommand('kickid', (player, fullText, id, reason) => {
    if (id == undefined || reason == undefined) {
        player.outputChatBox('/kickid [id] [reason]');
        return;
    }

    var realReason = fullText.replace(id, '');

    Utility.FindByID(parseInt(id)).then(
        (result) => {
            console.log(`Kicked ${result.name} for reason: ${realReason}`);
            player.outputChatBox(`Kicked ${result.name} for reason: ${realReason}`);
            result.kick(realReason);
        },
        (error) => {
            player.outputChatBox(error);
        }
    );
});