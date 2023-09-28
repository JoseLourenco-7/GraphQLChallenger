"use client"

import {styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInput, PrimaryInputSearchIcon } from "./primary-input";


const saira_Stencil =  Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'] })

interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`
const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;

`

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <Logo className={saira_Stencil.className}>Caputteno</Logo>
            <div>
                <PrimaryInputSearchIcon placeholder="Procurando por algo especifico?"/>
            </div>
        </TagHeader>
    )
}