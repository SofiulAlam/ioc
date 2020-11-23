import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Dough } from "./interface/IDough";
import { TYPES } from "./types/types";

@injectable()
export class Nanbread{

    public dough;

    public constructor(@inject(TYPES.Dough) dough : Dough){

        console.log('Nanbread class intilised');
        this.dough = dough;

    }
}