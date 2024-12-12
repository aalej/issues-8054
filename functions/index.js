import { onRequest } from "firebase-functions/v2/https";
// import { register } from 'tsx/esm/api'
// register()
export const { fn } = await import('./exports.js');

export const helloWorld = onRequest((request, response) => {
    fn()
    response.send("Hello from Firebase!");
});