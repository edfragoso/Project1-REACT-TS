import BoxLogin from "components/BoxLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

const Login = () => {
  const [errorMesssage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(RoutePath.HOME);
  };

  return (
    <S.Login>
      <S.LoginContent>
        <BoxLogin
         onSubmitData={handleSubmit}
         errorMessage={errorMesssage} />
      </S.LoginContent>
    </S.Login>
  );
};

export default Login;
