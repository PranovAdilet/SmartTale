import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   projectId: "smarttale-eb313",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async (): Promise<string | null> => {
   let currentToken: string | null = null;
   try {
      currentToken = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" });
      if (currentToken) {
         console.log("current token for client: ", currentToken);
      } else {
         console.log("No registration token available. Request permission to generate one.");
      }
   } catch (err) {
      console.log("An error occurred while retrieving token. ", err);
   }
   return currentToken;
};

export const onMessageListener = (): Promise<unknown> =>
   new Promise((resolve) => {
      onMessage(messaging, (payload) => {
         resolve(payload);
      });
   });
