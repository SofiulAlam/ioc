import { Flour } from "./IFlour";
import { Yeast } from "./IYeast";

export interface Dough {
    getFlour(): Flour;
    getYeast(): Yeast;
}