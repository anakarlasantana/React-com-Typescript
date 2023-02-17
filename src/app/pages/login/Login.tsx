import { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClick = () => {
        console.log('email:', email)

    }


    return (
        <div>
            <form action="submit">
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                </label>

                <button type="button" onClick={handleClick}>Entrar</button>
            </form>
        </div>
    );
}