

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID



    // apiKey: 'AIzaSyCFPAtvOotiPyn28txsDw5y1EkGOp2QEIM',
    // authDomain: 'twitter-b90b7.firebaseapp.com',
    // projectId: 'twitter-b90b7',
    // storageBucket: 'twitter-b90b7.appspot.com',
    // messagingSenderId: "966381419885",
    // appId: '1:966381419885:web:671a4afca82cabe38dee64',
    // measurementId: 'G-2WQK9Q8TS4'

} as const;




type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}
