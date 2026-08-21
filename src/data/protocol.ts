import type { Protocol } from "../models/Protocol";

export const protocols: Protocol[] = [
  // ============================================================
  // SISTEMA DIGESTIVO
  // ESÓFAGO
  // ============================================================

  {
    id: "esophagus-esophagectomy-protocol",
    procedureId: "esophagus-esophagectomy",
    code: "DIG-ESO-ESOP-001",
    name: "Esofagectomia",
    description:
      "Protocolo macroscópico para exame de peças de esofagectomia.",
    version: "1.0",
    status: "Draft",
    author: "MacroAP",
    createdAt: new Date("2026-08-20"),
    updatedAt: new Date("2026-08-20"),
    active: true,
  },

  // ============================================================
  // DERMATOLOGIA
  // ============================================================

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