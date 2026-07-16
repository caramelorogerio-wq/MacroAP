import { anatomicalSystems } from "../data/system";
import type { AnatomicalSystem } from "../models/AnatomicalSystem";

export class AnatomicalSystemService {

  static getAll(): AnatomicalSystem[] {
    return anatomicalSystems;
  }

  static getActive(): AnatomicalSystem[] {
    return anatomicalSystems.filter((system) => system.active);
  }

  static getById(id: string): AnatomicalSystem | undefined {
    return anatomicalSystems.find((system) => system.id === id);
  }
}