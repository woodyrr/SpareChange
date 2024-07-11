import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668f6185003261051d07');

export const account = new Account(client);
export { ID } from 'appwrite';
