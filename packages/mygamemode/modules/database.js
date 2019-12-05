const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var db = mongoose.connection;

class DatabaseHelper {
    constructor() {}

    static GetInstance() {
        if (this.Instance == null || this.Instance == undefined) {
            mongoose.connect('mongodb://127.0.0.1/ragemp', {useNewUrlParser: true});
            this.Instance = new DatabaseHelper();
        }
        return this.Instance;
    }
}

DatabaseHelper.GetInstance();