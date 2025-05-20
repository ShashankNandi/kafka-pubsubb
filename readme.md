spin zookeeper instance 
docker run --name zookeeper -p 2181:2181 zookeeper


spin the kafka instance
docker run --name kafka -p 9092:9092                                                             
-e KAFKA_ZOOKEEPER_CONNECT=host.docker.internal:2181   
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092     
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka

configure the kafka foor parttions
node topic.js

send a message 
node producer.js "message"

receive a message- > dont end thhe process keep it running in seprate terminal
node consumer.js

