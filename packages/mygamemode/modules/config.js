const Store = require('data-store');
const store = new Store({ path: 'config.json'});

// Singleton.
class Configuration {
    constructor() { }

    static GetInstance() {
        if (this.instance == null) {
            var data = store.get('config');
            if (data == undefined) {
                console.log('==> Setup new configuration file.');
                this.instance = new Configuration();
                this.instance.SetupDefaults(this.instance);
            } else {
                console.log('==> Found existing configuration.');
                this.instance = Object.assign(new Configuration(), JSON.parse(data));
                this.instance.LoadConfiguration();
            }
        }
        return this.instance;
    }

    SetupDefaults(instance) {
        instance.Spawn = { x: 22.18, y: 23.70, z: 70 };
        instance.WelcomeMessage = "Welcome to the server.";
        instance.StartTime = {h: 20, m: 0, s: 0 };
        this.SaveConfiguration();
    }

    SaveConfiguration() {
        store.set('config', JSON.stringify(this));
        this.LoadConfiguration();
    }

    LoadConfiguration() {
        mp.world.time.set(this.StartTime.h, this.StartTime.m, this.StartTime.s);
        console.log('==> Loaded configuration properly.')
    }
}

module.exports = {
    Configuration: Configuration
}

Configuration.GetInstance();