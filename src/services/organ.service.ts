import { organs } from "../data/organ";

import type { Organ } from "../models/Organ";

export class OrganService {
  static getAll(): Organ[] {
    return organs;
  }

  static getActive(): Organ[] {
    return organs.filter(
      (organ) => organ.active
    );
  }

  static getBySystem(
    systemId: string
  ): Organ[] {
    return organs
      .filter(
        (organ) =>
          organ.active &&
          (
            organ.anatomicalSystemId === systemId ||
            organ.relatedSystemIds?.includes(
              systemId
            )
          )
      )
      .sort(
        (a, b) => a.order - b.order
      );
  }

  static getById(
    id: string
  ): Organ | undefined {
    return organs.find(
      (organ) => organ.id === id
    );
  }
}