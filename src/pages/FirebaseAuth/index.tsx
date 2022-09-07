import { AuthProvider } from "../../provider/AuthProvider";
import AfterLogin from "./AfterLogin";

const Index = () => {
  return (
    <AuthProvider>
      <AfterLogin />
    </AuthProvider>
  );
};
export default Index;
