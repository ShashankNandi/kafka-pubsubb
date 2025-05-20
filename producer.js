const { Kafka } = require("kafkajs")
const msg = process.argv[2]


send();

async function send() {

    try {
        const kafka = new Kafka({
            clientId: "myAPP",
            brokers: ["localhost:9092"]
        })

        const producer = kafka.producer()
        console.log("connecting...");
        await producer.connect();
        console.log("connected!");


        // A-M -> 0, N-Z -> 1
        const partitionVal = msg[0] <= "N" ? 0 : 1
        const res = await producer.send({
            topic: "users",
            messages: [
                {
                    value: msg,
                    partition: partitionVal
                }
            ]
        })

        console.log(`sending message ${JSON.stringify(res)}`);
        await producer.disconnect()


    } catch (e) {
        console.log(`Something bad happended ${ex}`)

    }

    finally {
        process.exit()
    }





}

