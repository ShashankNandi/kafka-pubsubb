// const kafka = require("kafkajs").kafka
const { Kafka } = require("kafkajs")


run();

async function run() {

    try {
        const kafka = new Kafka({
            "clientId": "myAPP",
            "brokers": ["localhost:9092"]
        })
        // we need the admin interface to create topics
        const admin = kafka.admin()
        console.log("connecting ......... ")
        await admin.connect()
        console.log("connected successfully! ")


        //A-M , N-Z
        await admin.createTopics({
            topics: [{
                "topic": "users",
                "numPartitions": 2
            }]
        })

        await admin.disconnect()

    } catch (ex) {
        console.log(`Something bad happended ${ex}`)
    }
    finally {
        process.exit()
    }
}