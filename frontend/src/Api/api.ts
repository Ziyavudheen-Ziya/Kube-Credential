
export const REACTAPPISSUANCEAPI = import.meta.env.VITE_REACT_APP_ISSUANCE_API || "http://127.0.0.1:30001";
export const REACTAPPVERIFICATIONAPI = import.meta.env.VITE_REACT_APP_VERIFICATION_API || "http://127.0.0.1:30002";


export const signupIssueCredentials = `${REACTAPPISSUANCEAPI}/auth/signup`;
export const loginVerification = `${REACTAPPISSUANCEAPI}/auth/signup`;
