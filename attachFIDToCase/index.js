const MongoClient = require('../api/dbConnect');
const { config } = require('../config');
const { ObjectId } = require('mongodb')


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const mongoClient = await MongoClient;
    const db = await mongoClient.db(config.MONGO_DB);
    const collection = db.collection('caseHeader');

    const FIDinfo = req.body.FIDInfo;
    

    const FIDInformation = await collection.updateOne({ id: req.body.caseId }, { $set: { "FIDInfo": FIDinfo } });

    const responseMessage = FIDInformation;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
