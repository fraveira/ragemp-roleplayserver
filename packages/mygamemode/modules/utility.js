async function FindByName(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = mp.players.toArray().findIndex(player => player.name.toLowerCase().includes(username));
        
            if (result <= -1)
            return reject('User was not found.');

            return resolve(mp.players.at(result));
        }, 1);
    });
}

async function FindByID(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = mp.players.at(id);

            if (result == undefined || result == null)
                return reject('User was not found.');

            return resolve(result);
        }, 1);
    });
}

module.exports = {
    FindByID: FindByID,
    FindByName: FindByName
}