export const set = (key: string, value: string) => {
  localStorage[key] = value;
  if (key === "token") {
    const date = new Date();
    localStorage[`${key}-expire`] = new Date(date.getTime() + 86400);
  }

  return localStorage[key];
};

export const get = (key: string) => {
  const value = localStorage[key];
  return value;
};

export const checkExpire = (key: string) => {
  const sessExpire = get(`${key}-expire`);
  const sess = get(key);
  if (!sessExpire || !sess) return true;
  return new Date() > new Date(sessExpire);
};

export const clear = (key: string) => {
  return localStorage.clear();
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("token-expire");
};
