import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConversationController } from "./conversation.controller";
import { ConversationService } from "./conersation.service";
import { ConversationSchema } from "./conversation.schema";

@Module({
    imports: [
        MongooseModule.forRoot(process.env.DATABASE_URL, {dbName: 'conversations'}),
        MongooseModule.forFeature([{name: 'Conversation', schema: ConversationSchema}])
    ],
    controllers: [ConversationController],
    providers: [ConversationService]
})
export class ConversationModule {}