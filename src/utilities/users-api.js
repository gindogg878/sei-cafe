import sendRequest from "./send-request";
// // users-api.js

// // This is the base path of the Express route we'll define
// const BASE_URL = "/api/users";
// //this evaluates to ====> localhost:3001/api/users

// export async function signUp(userData) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc.
//   const res = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData),
//     //axios does this under the hood(stringify)
//   });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error("Invalid Sign Up");
//   }
// }

const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
