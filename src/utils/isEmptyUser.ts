import { User } from "../types";

const sortKeys = (obj: unknown): unknown => {
  if (Array.isArray(obj)) return obj.map(sortKeys);
  if (obj && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        (acc as any)[key] = sortKeys((obj as any)[key]);
        return acc;
      }, {} as any);
  }
  return obj;
};

export const isUserEmpty = (user: User, emptyUser: User): boolean => {
  return JSON.stringify(sortKeys(user)) === JSON.stringify(sortKeys(emptyUser));
};
