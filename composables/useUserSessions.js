import { ID } from "appwrite";
import { ref } from "vue";
import { account } from "../appwrite";

const current = ref(null); // Reference to current user object

export const useUserSession = () => {
    const register = async (email, password) => {
        await account.create(ID.unique(), email.value, password.value, firstname.value, lastname.value, address.value, city.value, dateofbirth.value, state.value, postalcode.value, ssn.value); // Register new user in Appwrite
        // await login(email, password); // Login registered user
    };

    const login = async (email, password) => {
        const authUser = await account.createEmailPasswordSession(email, password); // Open user session in Appwrite
        current.value = authUser; // Pass user data to current ref
        navigateTo("/");
    };

    const logout = async () => {
        await account.deleteSession("current"); // Delete Appwrite user session
        current.value = null; // Clear current ref
        navigateTo("/");
    };

    // Check if already logged in to initialize the store.
    account.getSession('current').then((user) => {
        current.value = user;
    });

    return {
        current,
        login,
        logout,
        register,
    };
};

