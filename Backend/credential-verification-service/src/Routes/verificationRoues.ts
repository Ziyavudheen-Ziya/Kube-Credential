import express from "express";

const verificationRoute = express()

import { loginVerification } from '../Controller/userVerification'


verificationRoute.post('/login',loginVerification)

export default verificationRoute