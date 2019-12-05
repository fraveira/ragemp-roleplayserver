const config = require('./config');

mp.events.add('playerChat', (player, text) => {
    if (text == undefined) {
        return; 
    }

    mp.players.broadcastInRange(player.position, 25, `${player.name}: ${text}`);
});

mp.events.add('playerJoin', (player) => {
    player.outputChatBox(config.Configuration.GetInstance().WelcomeMessage);
    var spi = config.Configuration.GetInstance().Spawn;
    player.spawn(new mp.Vector3(spi.x, spi.y, spi.z));
    player.model = mp.joaat('mp_m_freemode_01');
});

mp.events.add('playerQuit', (player, exitType, reason) => {
    var currentVehicle = player.getVariable('PersonalVehicle');

    if (currentVehicle == null) return;

    currentVehicle.destroy();
});

mp.events.add('kickThePlayer', (player) => {
    console.log(`Kicked: ${player.name}`);
    player.kick();
});

function GenerateColShapes() {
    var specialColShape = mp.colshapes.newSphere(22.18, 23.70, 70, 3);
    specialColShape.setVariable('SkinChanger', 'mp_f_boatstaff_01');
    var specialColShapeText = mp.labels.new('SkinChanger #1', new mp.Vector3(22.18, 23.70, 70), { drawDistance: 10 });
    var specialColShapeMarker = mp.markers.new(1, new mp.Vector3(22.18, 23.70, 70), 3, { color: [255, 255, 255, 100], visible: true });

    var specialColShape2 = mp.colshapes.newSphere(27.40, -5.70, 69.5, 3);
    specialColShape2.setVariable('SkinChanger', 'g_m_y_azteca_01');
    var specialColShapeText2 = mp.labels.new('SkinChanger #1', new mp.Vector3(27.40, -5.70, 69.5), { drawDistance: 10 });
    var specialColShapeMarker2 = mp.markers.new(1, new mp.Vector3(27.40, -5.70, 69.5), 3, { color: [255, 255, 255, 100], visible: true });
}

GenerateColShapes();

mp.events.add('playerEnterColshape', (player, colshape) => {
    var skinData = colshape.getVariable('SkinChanger');
    if (skinData == null) return;

    player.outputChatBox('Tu ropa ha sido modificada.');
    player.model = mp.joaat(skinData);
});

mp.events.add('playerExitColShape', (player, colshape) => {
    var skinData = colshape.getVariable('SkinChanger');
    if (skinData == null) return;

    player.outputChatBox('Has salido de la collision shape');
});