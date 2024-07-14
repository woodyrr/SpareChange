// appwriteService.js
import { Client, Users } from "node-appwrite";

const url: string = import.meta.env.VITE_APPWRITE_ENDPOINT;
const project: string = import.meta.env.VITE_APPWRITE_PROJECT;

const client: Client = new Client();

client.setEndpoint(url).setProject(project);

// export const account: Account = new Account(client);
export const users: Users = new Users(client);

