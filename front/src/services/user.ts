import { IUser } from "../types/user"

// Return: HTTP Response Status Code 
export function fetchSignUp(data: IUser) {
    return fetch("/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      }
        //).then((response) => response.json()
    );
}

// Return: HTTP Response Body Json
export function fetchAllUser() {
    return fetch("/users").then((response) => response.json());
}