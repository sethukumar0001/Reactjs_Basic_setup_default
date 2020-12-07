import { api } from "../env";

import {
  post,
  get,
  patch,
  Delete,
  postFileUpload,
} from "../_helpers/http-handler";


export const login = (payload) => post(`${api.adminUrl}auth/email/login`, payload);

