import { BUY_CAKE } from "./cakeTypes";

export const buycake = (number) => {
    
    return {
        type : BUY_CAKE,
        payload : number
    }
}