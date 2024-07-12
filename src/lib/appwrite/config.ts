import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: '6634b7b30036cf95f93b',
  url: 'https://cloud.appwrite.io/v1',
  databaseId:'6634d2480000e6adca2a',
  storageId:'6634d15a0026cf8fa586',
  userCollectionId:'6634d2f000274e1a4a14',
  postCollectionId:'6634d2ac003bc352b3e0',
  savesCollectionId:'6634d30c0002a990be44'
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
