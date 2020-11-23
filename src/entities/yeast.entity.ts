import { injectable, inject } from "inversify";
import { Water } from "../interface/IWater";
import { TYPES } from "../types/types";
import { Yeast } from "../interface/IYeast";

@injectable()
export class YeastEntity implements Yeast {

    public water: Water;

    public constructor(
        @inject(TYPES.Water) water: Water,
    ) {
        console.log('Yeast class intialised');
        this.water = water;
    }

    public getWater(): Water {
        return this.water;
    }
}