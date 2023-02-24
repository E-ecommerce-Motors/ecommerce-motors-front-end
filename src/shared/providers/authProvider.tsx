import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

// interface ChildrenProp {
//   children: ReactNode;
// }

// interface ContextProps {
//   getAnnouncements: () => void;
//   announcements: any;
// }

// const AuthContext = createContext<ContextProps>({} as ContextProps);

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// const AuthProvider = ({ children }: ChildrenProp) => {
//   const [announcements, setAnnouncements] = useState<any>([]);

//   const getAnnouncements = async () => {
//     await api
//       .get("")
//       .then((response) => setAnnouncements(response))
//       .catch((response) => console.log(response));
//   };

//   return (
//     <AuthContext.Provider value={{ getAnnouncements, announcements }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthProvider, useAuth };
