import axios from "axios";

import {  REACTAPPISSUANCEAPI,REACTAPPVERIFICATIONAPI } from "../Api/api";

export const apiClient = axios.create({
   baseURL: REACTAPPISSUANCEAPI,
  headers: { "Content-Type": "application/json" },

});

export const apiClientVerification = axios.create({
 baseURL: REACTAPPVERIFICATIONAPI,
  headers: { "Content-Type": "application/json" },
});
