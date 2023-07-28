require('dotenv').config();

module.exports = {
    mongodb: {
        url: process.env.MONGO_URL,

        databaseName: "content_management",

        options: {
            useNewUrlParser: true, // removes a deprecation warning when connecting
            useUnifiedTopology: true, // removes a deprecating warning when connecting
        }
    },

    migrationsDir: "migrations",

    changelogCollectionName: "changelog",

    migrationFileExtension: ".js",
};
