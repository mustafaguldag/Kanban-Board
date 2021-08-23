import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyATAwDhPfjycjHkpdoWlQ-Nd1-AyJWTrU8",
//     authDomain: "board-project-cemu-final.firebaseapp.com",
//     projectId: "board-project-cemu-final",
//     storageBucket: "board-project-cemu-final.appspot.com",
//     messagingSenderId: "830656743503",
//     appId: "1:830656743503:web:9faa455d97dd194e73c23a"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBBfRpNGZBGbHy1YATA0gD8ff0e0i18rNM",
    authDomain: "board-project-cemu.firebaseapp.com",
    projectId: "board-project-cemu",
    storageBucket: "board-project-cemu.appspot.com",
    messagingSenderId: "330380544830",
    appId: "1:330380544830:web:efb499b8cfc834600efa6f"
};

// var admin = require("firebase-admin");

// var serviceAccount = require("../src/board-project-cemu-final-firebase-adminsdk-xkvz3-b390cf23ad.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// {
//     "type": "service_account",
//     "project_id": "board-project-cemu-final",
//     "private_key_id": "b390cf23adb89c834209338854b4e6ad0ad47412",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDWuQ6TMAUbIgtW\nuy17Fqisu0ilnxnAq55cK7qLSNTsatKfduTkQOuY9r996y2HUzlPSu+l6bNrys73\nCTnHjezoWXewTEC5sFAZd+k5Jm7iaWcxzvjmNnNMJiGy40yi4HUwBDkyEwGfyBF1\n4/gHMBPHF14PaHeWGZY1cXzDdhPibBhYHpocP46sW+7WnyaoufpH6Y67UyHdJnqQ\nEw2SZu+H+x2CGQ+B0La1Aeq+CzccGvAK9v47Tupa6DCIrOFtvY/SXT5oI9l174Jl\nBM0QCKq8BEfLeu4Mlhi914ZHcgHhFD41eVca5BwxmWfVFgbZbLbBQq8+OUUq8wC4\nNg/sNmVpAgMBAAECggEADjjMHRYbZHhtCVXU9Zfi3Kv77BJdZYxIbSDtVl/g0Hbj\n0/GPSAn/wM4pEUlEJvgtbdHQDSxtOJjCfAzFobDGDf6tBYWLbPEfYQx261TfF8p0\n7hDgHflhyhuldECHWStmP6Or+SPWofNhqq4Khclaqf9jeMBJ2WyA7THC2nxl5UN2\nC3WFJ8qvKKQkmVYFg9JBZ4KLokTs400uMttqcgJvqi6nacFTXFjd6JYQoXHCEXVe\njk6uUBAQzrRgEQy9U5kCjD5swPHsi3Ur3McxvL+jq14zMENm0GG7GaRxX3F1LB8U\nce/njOzMgp0R4hcRlrIKzmCzzSxPx17KIiF07q48oQKBgQDqtRpX8WMAA5H3PleE\nnxgG2Eo89Uv+BFpt9Tx8Lrz6etZM0sHYd5Q9oMdrgNpf5D4uAQbz95eSuddMVHGF\ncgP8qOD2PyTaGh9iW6yokPsMPORz8kUvOGtllajOqSLvPG/eYwRZ92ZR8V2hlQDt\nIi4EHjHU3ikjgPO909eSEYt3GQKBgQDqM9QNuCmoEtMfr1yfWUdKoZAvAN4gsWlt\nOFOnJB/PegYvr5PGyKQ545bxn1VYmUeTzlQV9PX/SC2ror/iuTlw4c1BjDo5h9r1\nNUr15NaZcF+P/6+7kYGs/JjBU6AzxKp5cjeQ6bu3+TjAiPM5E1A+OR1vD6C6jG5u\nSdE1/6K60QKBgAf9aEssHXmnpXVsOuB55gB9pnFSzGZ2UXnCym9Ty/0e52KwHgc3\ncuVyLre7KDPxeihoworVl+RXzTt8+GxZiEc2nInldmSyVPUtN8B5RwKQpBpKWg6U\ndht8L8XxPg402X4RktlZMbOCavSQNPrdmgFr4bhkY7QgtKt2pbUEQeIpAoGAG/7a\nCFHNWPP3HMB/l+S6KuepLpUx+EJ80bt79GzTCKATgTvBtG9jgi/8aSGcuByKe9ac\nIovHpB5ipzOrMFTn0uCLApzakOn2eH1IWqBiLrFKGxJ7VTaNg7omIGX4rneB0Uaf\n8cie0d0OtaUpPddbLjTxmccKdYI36SMVyRinwSECgYA5jQxRQmMsHx/SZ3CcIN+D\ncCCOxmQmg4urA3PUEs5LDuHV5bSLAcU8d87zkkbhGhjg38moDsrujAdS37a3n26k\nWDR/N5QFLAiO5hOGP453uIZdy8XISpaGboRsRB/6PzPozcSFvtOjK3ZtQfuBe6PP\nAvFTc5YVtCFbAXOqfuywHg==\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-xkvz3@board-project-cemu-final.iam.gserviceaccount.com",
//     "client_id": "101471302367453627841",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xkvz3%40board-project-cemu-final.iam.gserviceaccount.com"
//   }
  



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
