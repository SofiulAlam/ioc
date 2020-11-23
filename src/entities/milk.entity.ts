import { injectable } from "inversify";
import { Milk } from "../interface/IMilk";

@injectable()
export class MilkEntity implements Milk{
    public constructor(){
        console.log('Milk class intialised');
    }
    public get(): string {
        return 'Please add Milk!';
    }
}