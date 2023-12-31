import { object, string } from "zod";

type LoginData = {
    email_username: string,
    password: string
}
const LoginSchema = object({
    email_username: string().email().min(6).max(255),
    password: string().min(6).max(255),
});
export const safeParseFunctionLogin = function (loginData: LoginData){
    const result = LoginSchema.safeParse(loginData);
    if(!result.success){
        const {password, email_username} = result.error.format();
        return {password, email_username};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionLogin;