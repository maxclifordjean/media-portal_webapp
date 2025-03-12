import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-west-3_r7GDXwAal",
    ClientId: "1ucm851j5ngibvfggi5cqc0fhs",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userPool: new CognitoUserPool(poolData),
    poolData,
} 
