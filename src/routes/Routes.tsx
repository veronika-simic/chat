import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Register from "../pages/Register/Register";
const Routes = () => {
  const { userName, id } = useContext(UserContext);
  if(userName) {
    return 'User logged in'
  }
  return <Register />;
};

export default Routes;
