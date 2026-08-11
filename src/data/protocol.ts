import type { Protocol } from "../models/Protocol";

export const protocols: Protocol[] = [
  {
    id: "skin-lesion-excision-protocol",
    procedureId: "skin-lesion-excision",
    code: "DERM-SKIN-EXC-001",
    name: "Excisão de Lesão Cutânea",
    description:
      "Protocolo macroscópico para exame de peças de excisão de lesões cutâneas.",
    version: "1.0",
    status: "Draft",
    author: "MacroAP",
    createdAt: new Date("2026-08-11"),
    updatedAt: new Date("2026-08-11"),
    active: true,
  },
];