import logo from 'assets/imgs/logo.png'
import  ButtonLarge  from 'components/ButtonLarge';
import { HTMLAttributes, useState } from 'react';
import * as S from "./style";

type BoxLoginType = HTMLAttributes<HTMLDivElement>

export type BoxLoginProps ={
    onSubmitData: (data: {nickname: string, password: string}) => void
    errorMessage: string
}& BoxLoginType;

const BoxLogin = ({onSubmitData, errorMessage}: BoxLoginProps) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassoword] = useState('');
    const handleSubmit = (): void => {
        const data = {nickname, password};
        onSubmitData(data);
    }

    
 return (
    <S.BoxLogin>
        <S.BoxLoginLogo>
            <S.BoxLoginLogoText>
                <span>pizza</span>
                <span>fresh</span>
            </S.BoxLoginLogoText>
            <S.BoxLoginLogoImage src={logo} alt='Logo' />
        </S.BoxLoginLogo>
        <S.BoxLoginForm>
            <input
             type="text"
             placeholder='E-mail'
             value={nickname}
             onChange={({target}) => setNickname(target.value)}
             />
            <input
             type="password"
             placeholder='Senha'
             value={password}
             onChange={({target}) => setPassoword(target.value)}
             />
            <ButtonLarge
             value="Entrar"
             type="button"
             onClick={handleSubmit}    
            />
        </S.BoxLoginForm>
        {Boolean(errorMessage.length)&& <S.BoxLoginError>{errorMessage}</S.BoxLoginError>}
    </S.BoxLogin>
 );   
}

export default BoxLogin;