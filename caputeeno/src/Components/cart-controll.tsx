import { CartIcon } from "@/Asserts/Cart-icon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {styled } from "styled-components";


const CartCount = styled.span`
    
`

export function CartControll(){
    const {value} = useLocalStorage('cart-item')
    return(
        <div>
            <CartIcon/>
            {value.lenght && <CartCount></CartCount>}
        </div>
    )
}