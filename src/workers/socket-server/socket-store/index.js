class SocketStore {
  constructor() {
    this.socketdictonary = new Map();
    this.socketIdDictonary = new Map();
  }
  setSocket(userId, socket) {
    this.socketdictonary.set(userId, socket);
    this.socketIdDictonary.set(socket.id, userId);
  }
  getSocket(userId) {
    return this.socketdictonary.get(userId);
  }
  removeSocket(socketId) {
    const userId = this.socketIdDictonary.get(socketId);
    this.socketdictonary.delete(userId);
    this.socketIdDictonary.delete(socketId);
  }
}

module.exports = new SocketStore();
