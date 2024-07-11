import { MicroserviceOptions, Transport} from "@nestjs/microservices";
import * as dotenv from "dotenv";

dotenv.config();

export const BROKER_CONFIG: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
        urls: [process.env.BROKER_URL],
        queue: 'main_queue',
        queueOptions: {
            durable: false
        },
    },
}