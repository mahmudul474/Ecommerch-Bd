import { authkey } from "@/constancs/storage.key";
import { decodedToken } from "@/utils/jwts";

import { getFormlocalStorage, setTolocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setTolocalStorage(authkey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFormlocalStorage(authkey);
  if (authToken) {
    const decodedata = decodedToken(authToken);
    return decodedata;
  } else {
    return "";
  }
};

export const isloggedin = () => {
  const authToken = getFormlocalStorage(authkey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
