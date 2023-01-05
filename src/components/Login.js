import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Contents>
            <Logo src="/images/cta-logo-one.svg"></Logo>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premier Acess to Raya and the Last Dragon with a Disney+ subscription, you need to already have a subscription to Disney+, which you can get directly from Disney for $8 per month or $80 per year.
            </Description>
            <Logo2 src="/images/cta-logo-two.png"></Logo2>

        </Contents>
    </Container> 
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.7;
        z-index: -1;

    }
`

const Contents = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    margin-top: 75px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Logo = styled.img`


`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold; 
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
        
    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    

`

const Logo2 = styled.img`
   width: 90%; 
`