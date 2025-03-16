'use client';

import { CognitoUser } from "amazon-cognito-identity-js";
import { CognitoAccessToken } from "amazon-cognito-identity-js";
import userPool from "./userPool";
import * as TokenAccess from "./tokenAccess";

export const signout = async () => {
    try {
        const token = await TokenAccess.get();
        if (token) {
            const accessToken = new CognitoAccessToken({
                AccessToken: token.value
            });

            const user = new CognitoUser({
                Username: accessToken.payload.email,
                Pool: userPool.userPool,
            });

            //invalid cognito
            await user.globalSignOut();

            //remove local stored token
            await TokenAccess.del();
        }
        return true;
    } catch (e) {
        console.error('signout:error', e);
        return;
    }
}