import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || '27017';
    const databse = process.env.DB_DATABASE || 'test';
    const url = `mongodb://${host}:${port}/${databse}`;

    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connect();
  }

  async isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.client.db().collection('users').countDocuments();
  }

  async nbFiles() {
    return this.client.db().collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
