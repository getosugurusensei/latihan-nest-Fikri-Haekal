import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  private chats: Chat[] = [];
  private idCounter = 1;

  create(createChatDto: CreateChatDto) {
    const newChat: Chat = {
      id: this.idCounter++,
      message: createChatDto.message,
      sender: createChatDto.sender,
      timestamp: new Date(),
    };
    this.chats.push(newChat);
    return newChat;
  }

  findAll() {
    return this.chats;
  }

  findOne(id: number) {
    return this.chats.find(chat => chat.id === id);
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    const chat = this.findOne(id);
    if (chat) {
      chat.message = updateChatDto.message;
      chat.sender = updateChatDto.sender;
      chat.timestamp = new Date();
    }
    return chat;
  }

  remove(id: number) {
    const index = this.chats.findIndex(chat => chat.id === id);
    if (index !== -1) {
      this.chats.splice(index, 1);
      return { message: 'Chat removed successfully' };
    }
    return { message: 'Chat not found' };
  }
}
