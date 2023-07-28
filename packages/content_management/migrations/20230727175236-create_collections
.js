module.exports = {
    async up(db, client) {
        await db.createCollection('comment');


        await db.createCollection("directmessage");

        await db.createCollection("hashtag");

        await db.createCollection("notification");


        await db.createCollection("post");
        await db.createCollection("post_hashtag");
    },

    async down(db, client) {
        await db["comment"].drop();

        await db["directmessage"].drop();

        await db["hashtag"].drop();

        await db["notification"].drop();

        await db["post"].drop();
        await db["post_hashtag"].drop();
    }
};
