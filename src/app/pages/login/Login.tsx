import {  useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => { 
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    /*useEffect(()=> {
        if (window.confirm('Você é homem?')) {
            console.log('Homem')
        } else {
            console.log('Mulher')
        }
    }, [email, senha]);*/

    const emailLength = useMemo(()=> {
        return email.length*1000;
    }, [email.length]);

    const handleClick = useCallback(() => {
        console.log(email)
        console.log(senha);
        
    }, [email, senha])


    return (
        <div>
            <form action="submit">
                <p>Quantidade de caracteres no email: {emailLength}</p>
                <InputLogin label="Email" value={email} onChange={newValue => setEmail(newValue)} onPressEnter={() => inputPasswordRef.current?.focus()} />
                <InputLogin label="Senha" value={senha} type="password" onChange={newValue => setSenha(newValue)}/>
                
                <button type="button" onClick={handleClick}>Entrar</button>
            </form>
        </div>
    );
}