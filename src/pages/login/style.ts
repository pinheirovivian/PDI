import styled from "styled-components";
import img from '../../image/aba.webp'

export const Container = styled.div`

    display:flex ;
    align-items: center ;
    height:100vh ;
    padding: 150px ;
    background-image:url(${img}) ;
    background-position: center center;
    background-repeat:no-repeat ;
    background-size:100% 100% ;

    div.cart-login{
        display: flex ;
        flex-direction:column ;
        align-items:center ;     
        margin: -10px ;
        position: absolute ;
        padding: 60px 50px ;
        width:20rem ;
        border-radius:10px ;
        background-color:#ffffff;
        
        .input-group{
            position:relative ;
        }
        .input{
            outline:2px solid var(--border-color) ;
            padding:15px ;
            border-radius:5px ;
            border:none ;
            background-color:transparent ;
            margin-bottom:20px ;
            color:#000000 ;
            width:max-content ;
            width:18rem ;
        }
        .input-label{
            position:absolute ;
            top:0 ;
            left:0 ;
            transform:translate(10px, 10px) ;
            transition:transform .25s ;
            color:#800000 ;
            font-size:16px ;
            
        }
        .input:focus + .input-label,
        .input:valid + .input-label{
            transform: 
            translate(10px, -14px) scale(.8);
            color:#FFF ;
            font-size:20px ;
            padding-inline: 8px;
            background-color:var(--border-color) ;
            
        }
        .input:is(:focus, :valid){
            outline-color:var(--border-color);
        }

        .link{
            color:red ;
            font-size:14px ;
            margin-bottom: 20px ;
        }
        .h1-user{
            margin:0 ;
        }

        button{
            padding:8px 15px;
            background-color:var(--button-color) ;
            border:none ;
            border-radius:5px ;
            color:#FFF ;
            cursor: pointer;
            :hover{
                opacity:0.9 ;
            }
        }

        h1{
            -webkit-text-stroke: 1px ;
            color:#800000 ;
            margin-bottom:30px ;
        }
    }
    

`