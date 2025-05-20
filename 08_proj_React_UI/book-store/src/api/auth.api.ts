import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userDate: SignupProps) => {
    const response = await httpClient.post("/users/join", userDate);
    return response.data;
};