import { Container } from "inversify";
import { TYPES } from "./types/types";
import { Dough } from "./interface/IDough";
import { Salt } from "./interface/ISalt";
import { Flour } from "./interface/IFlour";
import { Water } from "./interface/IWater";
import { Yeast } from "./interface/IYeast";
import { Milk } from "./interface/IMilk";
import { DoughEntity } from "./entities/dough.entity";
import { YeastEntity } from "./entities/yeast.entity";
import { FlourEntity } from "./entities/flour.entity";
import { SaltEntity } from "./entities/salt.entity";
import { WaterEntity } from "./entities/water.entity";
import { MilkEntity } from "./entities/milk.entity";

const nanContainer = new Container();

nanContainer.bind<Dough>(TYPES.Dough).to(DoughEntity);
nanContainer.bind<Flour>(TYPES.Flour).to(FlourEntity);
nanContainer.bind<Salt>(TYPES.Salt).to(SaltEntity);
nanContainer.bind<Water>(TYPES.Water).to(WaterEntity);
nanContainer.bind<Yeast>(TYPES.Yeast).to(YeastEntity);
nanContainer.bind<Milk>(TYPES.Milk).to(MilkEntity);

export { nanContainer };
