import { injectable, inject } from "inversify";
import { Water } from "../interface/IWater";
import { TYPES } from "../types/types";
import { Salt } from "../interface/ISalt";

@injectable()

export class WaterEntity implements Water{
    public salt: Salt;

    public constructor(
        @inject(TYPES.Salt) salt:Salt,        
    ){
        console.log('Water class initiated');
        this.salt = salt;
    }
    public getSalt(): Salt {
        return this.salt;
    }
}