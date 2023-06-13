import { io, Socket } from 'socket.io-client';
import { BASE_URL } from '../common/constant/api';

class SocketIO {
  public static value: Socket | null;

  public static connection(): void {
    this.value?.connect();
  }

  public static createChannel(nickName: string): void {
    this.value = io(BASE_URL, {
      query: { nickName },
    });
  }
}

export default SocketIO;
