// import { ID } from "appwrite";
// import { ref } from "vue";
// import { users} from "../appwriteUsers";

// const userIf = ref(null); // Reference to current user object

// export const userInfos = () => {
//     // const register = async (email, password, firstname, lastname, address, city, dateofbirth, state, postalcode, ssn) => {
//     //     await account.create(ID.unique(), email, password, firstname, lastname, address, city, dateofbirth, state, postalcode, ssn); // Register new user in Appwrite
//     //     await login(email, password); // Login registered user
//     //     // current.value = authUser;
//     // };

//     // const login = async (email, password) => {
//     //     const authUser = await account.createEmailPasswordSession(email, password); // Open user session in Appwrite
//     //     current.value = authUser; // Pass user data to current ref
//     //     navigateTo("/");
//     // };

//     // const logout = async () => {
//     //     await account.deleteSession("current"); // Delete Appwrite user session
//     //     current.value = null; // Clear current ref
//     //     navigateTo("/");
//     // };

//     // Check if already logged in to initialize the store.
//     // users.get('userID').then((user) => {
//     //     userIf.value = user;
        
//     // });

//     const using = async (email, password, firstname, lastname, address, city, dateofbirth, state, postalcode, ssn) => {
//         const authUser = await users.create(
//             ID.unique(), email, password, firstname, lastname, address, city, dateofbirth, state, postalcode, ssn// name (optional)
//         );
//         userIf.value = authUser;

//         console.log(userIf)
//     };

//     return {
//         using,
//         userIf
        
//     };
//get user const result = await users.get(
//     '<USER_ID>' // userId
// );
    

import { ID, Query } from "appwrite";
import { database } from "~/appwrite";
import { ref } from "vue";

const ideasDatabaseId = import.meta.env.VITE_DATABASE_ID;
const ideasCollectionId = import.meta.env.VITE_COLLECTION_ID;
const queryLimit = 10;

const current = ref(null); // Reference for the fetched data

export const useIdeas = () => {
    // Fetch the 10 most recent ideas from the database
    // Add the list to the current reference object
    const fetch = async () => {
        const response = await database.listDocuments(
            ideasDatabaseId,
            ideasCollectionId,
            [Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
        );
        current.value = response.documents;
    };

    // Add new idea to the database,
    // Change the value of the current object
    const add = async (idea) => {
        const response = await database.createDocument(
            ideasDatabaseId,
            ideasCollectionId,
            ID.unique(),
            idea
        );
        current.value = [response, ...current.value].slice(0, 10);
    };

    const remove = async (id) => {
        await database.deleteDocument(ideasDatabaseId, ideasCollectionId, id);
        await fetch(); // Refetch ideas to ensure we have 10 items
    };

    fetch();

    return {
        add,
        current,
        fetch,
        remove,
    };
};



    


    
};

// const users = new Users(client);

// export async function getUserInfo(userId) {
//   try {
//     const user = await users.get(userId);
//     return user;
//   } catch (error) {
//     console.error('Error fetching user information:', error);
//     return null;
//   }
// }