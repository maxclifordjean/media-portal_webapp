import { CognitoJwtVerifier } from "aws-jwt-verify";

export const tokenVerify = async (userPoolId, token, clientId) => {
    // Verifier that expects valid access tokens
    const verifier = CognitoJwtVerifier.create({
        userPoolId: userPoolId,
        tokenUse: null,
        clientId: clientId,
    });

    try {
        const payload = await verifier.verify(
            token // the JWT as string
        );

        return payload;
    } catch {
        return;
    }
}