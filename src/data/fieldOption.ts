import type { FieldOption } from "../models/FieldOption";

export const fieldOptions: FieldOption[] = [
  // ============================================================
  // TIPO DE MATERIAL
  // ============================================================

  {
    id: "material-excision",
    fieldId: "material-type",
    label: "Excisão",
    value: "excision",
    order: 1,
    active: true,
  },
  {
    id: "material-biopsy",
    fieldId: "material-type",
    label: "Biópsia",
    value: "biopsy",
    order: 2,
    active: true,
  },
  {
    id: "material-other",
    fieldId: "material-type",
    label: "Outro",
    value: "other",
    order: 3,
    active: true,
  },

  // ============================================================
  // ESTADO DE RECEÇÃO
  // ============================================================

  {
    id: "received-fresh",
    fieldId: "received-condition",
    label: "Fresco",
    value: "fresh",
    order: 1,
    active: true,
  },
  {
    id: "received-formalin",
    fieldId: "received-condition",
    label: "Em formalina",
    value: "formalin",
    order: 2,
    active: true,
  },
  {
    id: "received-other",
    fieldId: "received-condition",
    label: "Outro",
    value: "other",
    order: 3,
    active: true,
  },

  // ============================================================
  // TIPO DE LESÃO
  // ============================================================

  {
    id: "lesion-nodular",
    fieldId: "lesion-type",
    label: "Nodular",
    value: "nodular",
    order: 1,
    active: true,
  },
  {
    id: "lesion-polypoid",
    fieldId: "lesion-type",
    label: "Polipoide",
    value: "polypoid",
    order: 2,
    active: true,
  },
  {
    id: "lesion-ulcerated",
    fieldId: "lesion-type",
    label: "Ulcerada",
    value: "ulcerated",
    order: 3,
    active: true,
  },
  {
    id: "lesion-flat",
    fieldId: "lesion-type",
    label: "Plana",
    value: "flat",
    order: 4,
    active: true,
  },
  {
    id: "lesion-other",
    fieldId: "lesion-type",
    label: "Outra",
    value: "other",
    order: 5,
    active: true,
  },

  // ============================================================
  // MARGEM MAIS PRÓXIMA
  // ============================================================

  {
    id: "margin-superior",
    fieldId: "nearest-margin",
    label: "Superior",
    value: "superior",
    order: 1,
    active: true,
  },
  {
    id: "margin-inferior",
    fieldId: "nearest-margin",
    label: "Inferior",
    value: "inferior",
    order: 2,
    active: true,
  },
  {
    id: "margin-medial",
    fieldId: "nearest-margin",
    label: "Medial",
    value: "medial",
    order: 3,
    active: true,
  },
  {
    id: "margin-lateral",
    fieldId: "nearest-margin",
    label: "Lateral",
    value: "lateral",
    order: 4,
    active: true,
  },
];