import { MessageType } from "../src/Message";

interface Message {
    type: MessageType;
    data: any[];
}

type DeflatedMessage = [MessageType, ...any];

export type { Message, DeflatedMessage };