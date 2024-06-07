import client from "../database";
import { Helper } from "../util/helper";

type ReturnTokens = {
    access_token: string;
    refresh_token: string;
};



class AuthService {
    private helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    public async login(email: string, password: string): Promise<ReturnTokens>{
        const hashPassword = this.helper.hashPassword(password);

        
    }



}