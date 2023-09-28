
import { SearchIcon } from "@/Asserts/search-icon";
import { InputHTMLAttributes } from "react";
import {styled } from "styled-components";

export const PrimaryInput = styled.input`
    width: 352px;
    padding: 10px, 16px, 10px, 16px;
    border-radius: 8px;

    background-color: var(--bg-secundry);

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`
const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLElement>{}

export function PrimaryInputSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput{...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}