import auth from "@react-native-firebase/auth";

const firebaseAuth = auth();

export const currentUser = () => firebaseAuth.currentUser