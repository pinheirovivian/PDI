import { Container } from "./style";
import {Link} from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";

import Aos from 'aos'
import 'aos/dist/aos.css'

export function Login(){

    const [email, setEmail] =  useState<string>()
    const [password, setPassword] = useState<string>()

    const {login}:any = useContext(CartContext)

    useEffect(()=>{
        Aos.init({duration:1700})
    }, [])

    function handleLogin(){
        if(!email && !password){
            alert("Campos não preenchidos.")
            return
        }else if(!login && password){
            alert("Digite sua matrícula.")
            return
        }else if(login && !password){
            alert("Digite a senha.")
            return
        }

        login(email, password)

    }

    return(
        <Container>
            <div data-aos='fade-down' className="cart-login">                
                <h1>Bem vindo(a)!</h1>
                <div className="input-group">
                    <input 
                        id="email" 
                        type="text" 
                        required className="input"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    <label  htmlFor="email" className="input-label">Matrícula</label>
                </div>
                <div className="input-group">
                    <input 
                        id="email" 
                        type="password" 
                        required className="input" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    <label  htmlFor="email" className="input-label">Senha</label>
                </div>
                <Link to={`/Register`} className="link">Acesso equipe pedagógica?</Link>
                <button onClick={handleLogin}>Entrar</button>
            </div>
        </Container>
    )
}