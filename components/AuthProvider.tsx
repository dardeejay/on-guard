import { createContext, useState } from "react";
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
interface UserData {}
interface IAuthContext {
  userData: UserData;
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setuserData] = useState<UserData>({});
  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
}
