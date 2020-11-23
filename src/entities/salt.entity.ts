import { injectable } from "inversify";
import { Salt } from "../interface/ISalt";

@injectable()
export class SaltEntity implements Salt{
    public constructor(){
        console.log('Salt class intialised');
    }

    public get(): string {
        return 'Please add a Salt!';
    }
}

