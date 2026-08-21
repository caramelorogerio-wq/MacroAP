import { protocols } from "../data/protocol";
import type { Protocol } from "../models/Protocol";

export class ProtocolService {
  static getAll(): Protocol[] {
    return protocols;
  }

  static getActive(): Protocol[] {
    return protocols.filter(
      (protocol) => protocol.active
    );
  }

  static getById(
    id: string
  ): Protocol | undefined {
    return protocols.find(
      (protocol) => protocol.id === id
    );
  }

  static getByProcedure(
    procedureId: string
  ): Protocol[] {
    return protocols
      .filter(
        (protocol) =>
          protocol.procedureId === procedureId &&
          protocol.active
      )
      .sort(
        (a, b) =>
          a.name.localeCompare(b.name)
      );
  }

  static getActiveByProcedure(
    procedureId: string
  ): Protocol | undefined {
    return protocols.find(
      (protocol) =>
        protocol.procedureId === procedureId &&
        protocol.active
    );
  }
}