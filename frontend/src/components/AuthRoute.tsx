import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

interface Props {
  children: ReactNode;
}
const AuthRoute = ({ children }: Props) => {
  const token = useAppSelector((store) => store.user.token);
  return token ? <>{children}</> : <Navigate to={"/login"} />;
};

export default AuthRoute;
