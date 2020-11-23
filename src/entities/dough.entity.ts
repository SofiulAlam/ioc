import { injectable, inject } from "inversify";
import { Dough } from "../interface/IDough";
import { TYPES } from "../types/types";
import { Flour } from "../interface/IFlour";
import { Yeast } from "../interface/IYeast";
import { Milk } from "../interface/IMilk";

@injectable()
export class DoughEntity implements Dough {

    public flour: Flour;
    public yeast: Yeast;
    public milk: Milk;

    public constructor(
        @inject(TYPES.Flour) flour: Flour,
        @inject(TYPES.Yeast) yeast: Yeast,
        @inject(TYPES.Milk) milk: Milk,
    ) {
        console.log('Dough class initiated');
        this.flour = flour;
        this.yeast = yeast;
        this.milk = milk;
    }

    public getFlour(): Flour {
        return this.flour;
    }
    public getYeast(): Yeast {
        return this.yeast;
    }
    public getMilk(): Milk {
        return this.milk;
    }
}