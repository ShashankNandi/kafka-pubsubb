const { Kafka } = require("kafkajs")

receive()

async function receive() {


    try {
        const kafka = new Kafka({
            clientId: "myAPP",
            brokers: ["localhost:9092"]

        })

        const consumer = kafka.consumer({
            groupId: "test"
        })

        console.log("connecting... ");

        await consumer.connect();
        console.log("connected!");

        await consumer.subscribe({
            topic: "users",
            fromBeginning: true
        })

        await consumer.run({
            eachMessage: async result => {
                console.log(`RVD msg ${result.message.value} on partition ${result.partition}  `);

            }
        })


    } catch (error) {
        console.log(`error in kafka ${error}`);

    }
}