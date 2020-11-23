import { injectable, inject } from "inversify";
import { Flour } from "../interface/IFlour";
import { TYPES } from "../types/types";
import { Water } from "../interface/IWater";

@injectable()
export class FlourEntity implements Flour {

    public water: Water;

    public constructor(
        @inject(TYPES.Water) water: Water,
    ) {
        console.log('Flour class initiated');
        this.water = water;
    }

    public getWater(): Water {
        return this.water;
    }
}
