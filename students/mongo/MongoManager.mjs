import mongoose from 'mongoose';


class MongoManager {

    #config;

    constructor(config) {
        this.#config = config;
    }
    getMongoUrl() {
        return this.#config.MONGODB_URI;
    }
    connect() {
        return mongoose.connect(this.getMongoUrl(),
        {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

export default MongoManager;