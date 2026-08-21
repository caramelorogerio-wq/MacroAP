import type { FieldOption } from "../models/FieldOption";

export const fieldOptions: FieldOption[] = [
  // ============================================================
  // EXCISÃO DE LESÃO CUTÂNEA
  // ============================================================

  // ------------------------------------------------------------
  // TIPO DE MATERIAL
  // ------------------------------------------------------------

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

  // ------------------------------------------------------------
  // ESTADO DE RECEÇÃO
  // ------------------------------------------------------------

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

  // ------------------------------------------------------------
  // TIPO DE LESÃO
  // ------------------------------------------------------------

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

  // ------------------------------------------------------------
  // MARGEM MAIS PRÓXIMA
  // ------------------------------------------------------------

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

  // ============================================================
  // ESOFAGECTOMIA
  // ============================================================

  // ------------------------------------------------------------
  // 05 — DESCRIÇÃO DA MUCOSA
  // ASPECTO GERAL
  // ------------------------------------------------------------

  {
    id: "esophagus-mucosa-normal",
    fieldId: "esophagus-mucosa-general-appearance",
    label: "Sem alterações macroscópicas relevantes",
    value: "normal",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-mucosa-congested",
    fieldId: "esophagus-mucosa-general-appearance",
    label: "Congestionada",
    value: "congested",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-mucosa-eroded",
    fieldId: "esophagus-mucosa-general-appearance",
    label: "Erodida",
    value: "eroded",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-mucosa-ulcerated",
    fieldId: "esophagus-mucosa-general-appearance",
    label: "Ulcerada",
    value: "ulcerated",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-mucosa-nodular",
    fieldId: "esophagus-mucosa-general-appearance",
    label: "Nodular",
    value: "nodular",
    order: 5,
    active: true,
  },

  {
    id: "esophagus-mucosa-irregular",
    fieldId: "esophagus-mucosa-general-appearance",
    label: "Irregular",
    value: "irregular",
    order: 6,
    active: true,
  },

  {
    id: "esophagus-mucosa-other",
    fieldId: "esophagus-mucosa-general-appearance",
    label: "Outra",
    value: "other",
    order: 7,
    active: true,
  },

  // ------------------------------------------------------------
  // INTEGRIDADE DA MUCOSA
  // ------------------------------------------------------------

  {
    id: "esophagus-mucosa-intact",
    fieldId: "esophagus-mucosa-integrity",
    label: "Íntegra",
    value: "intact",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-mucosa-partially-compromised",
    fieldId: "esophagus-mucosa-integrity",
    label: "Parcialmente comprometida",
    value: "partially-compromised",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-mucosa-diffusely-compromised",
    fieldId: "esophagus-mucosa-integrity",
    label: "Difusamente comprometida",
    value: "diffusely-compromised",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // 06 — LESÃO
  // LOCALIZAÇÃO
  // ------------------------------------------------------------

  {
    id: "esophagus-lesion-upper-third",
    fieldId: "esophagus-lesion-location",
    label: "Terço superior",
    value: "upper-third",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lesion-middle-third",
    fieldId: "esophagus-lesion-location",
    label: "Terço médio",
    value: "middle-third",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lesion-lower-third",
    fieldId: "esophagus-lesion-location",
    label: "Terço inferior",
    value: "lower-third",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lesion-gastroesophageal-junction",
    fieldId: "esophagus-lesion-location",
    label: "Junção esofagogástrica",
    value: "gastroesophageal-junction",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-lesion-location-other",
    fieldId: "esophagus-lesion-location",
    label: "Outra localização",
    value: "other",
    order: 5,
    active: true,
  },

  // ------------------------------------------------------------
  // ASPECTO MACROSCÓPICO DA LESÃO
  // ------------------------------------------------------------

  {
    id: "esophagus-lesion-ulcerated",
    fieldId: "esophagus-lesion-appearance",
    label: "Ulcerada",
    value: "ulcerated",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lesion-vegetative",
    fieldId: "esophagus-lesion-appearance",
    label: "Vegetante",
    value: "vegetative",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lesion-infiltrative",
    fieldId: "esophagus-lesion-appearance",
    label: "Infiltrativa",
    value: "infiltrative",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lesion-nodular",
    fieldId: "esophagus-lesion-appearance",
    label: "Nodular",
    value: "nodular",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-lesion-polypoid",
    fieldId: "esophagus-lesion-appearance",
    label: "Polipoide",
    value: "polypoid",
    order: 5,
    active: true,
  },

  {
    id: "esophagus-lesion-stenosing",
    fieldId: "esophagus-lesion-appearance",
    label: "Estenosante",
    value: "stenosing",
    order: 6,
    active: true,
  },

  {
    id: "esophagus-lesion-mixed",
    fieldId: "esophagus-lesion-appearance",
    label: "Mista",
    value: "mixed",
    order: 7,
    active: true,
  },

  {
    id: "esophagus-lesion-appearance-other",
    fieldId: "esophagus-lesion-appearance",
    label: "Outra",
    value: "other",
    order: 8,
    active: true,
  },

  // ------------------------------------------------------------
  // SUPERFÍCIE DA LESÃO
  // ------------------------------------------------------------

  {
    id: "esophagus-lesion-surface-smooth",
    fieldId: "esophagus-lesion-surface",
    label: "Lisa",
    value: "smooth",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lesion-surface-irregular",
    fieldId: "esophagus-lesion-surface",
    label: "Irregular",
    value: "irregular",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lesion-surface-eroded",
    fieldId: "esophagus-lesion-surface",
    label: "Erodida",
    value: "eroded",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lesion-surface-ulcerated",
    fieldId: "esophagus-lesion-surface",
    label: "Ulcerada",
    value: "ulcerated",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-lesion-surface-nodular",
    fieldId: "esophagus-lesion-surface",
    label: "Nodular",
    value: "nodular",
    order: 5,
    active: true,
  },

  {
    id: "esophagus-lesion-surface-other",
    fieldId: "esophagus-lesion-surface",
    label: "Outra",
    value: "other",
    order: 6,
    active: true,
  },

  // ------------------------------------------------------------
  // PROFUNDIDADE MACROSCÓPICA APARENTE
  // ------------------------------------------------------------

  {
    id: "esophagus-lesion-depth-superficial",
    fieldId: "esophagus-lesion-depth",
    label: "Superficial",
    value: "superficial",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lesion-depth-wall",
    fieldId: "esophagus-lesion-depth",
    label: "Envolve a parede",
    value: "wall",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lesion-depth-beyond-wall",
    fieldId: "esophagus-lesion-depth",
    label: "Extensão para além da parede aparente",
    value: "beyond-wall",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lesion-depth-not-assessable",
    fieldId: "esophagus-lesion-depth",
    label: "Não avaliável",
    value: "not-assessable",
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // RELAÇÃO COM A PAREDE
  // ------------------------------------------------------------

  {
    id: "esophagus-lesion-wall-no-evident-relation",
    fieldId: "esophagus-lesion-wall-relation",
    label: "Sem relação evidente",
    value: "no-evident-relation",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lesion-wall-adjacency",
    fieldId: "esophagus-lesion-wall-relation",
    label: "Adjacência",
    value: "adjacency",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lesion-wall-adhesion",
    fieldId: "esophagus-lesion-wall-relation",
    label: "Aderência",
    value: "adhesion",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lesion-wall-suspected-involvement",
    fieldId: "esophagus-lesion-wall-relation",
    label: "Envolvimento macroscópico suspeito",
    value: "suspected-involvement",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-lesion-wall-not-assessable",
    fieldId: "esophagus-lesion-wall-relation",
    label: "Não avaliável",
    value: "not-assessable",
    order: 5,
    active: true,
  },

  // ------------------------------------------------------------
  // 07 — PAREDE ESOFÁGICA
  // ASPECTO EXTERNO
  // ------------------------------------------------------------

  {
    id: "esophagus-wall-external-normal",
    fieldId: "esophagus-wall-external-appearance",
    label: "Sem alterações macroscópicas relevantes",
    value: "normal",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-wall-external-regular",
    fieldId: "esophagus-wall-external-appearance",
    label: "Regular",
    value: "regular",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-wall-external-irregular",
    fieldId: "esophagus-wall-external-appearance",
    label: "Irregular",
    value: "irregular",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-wall-external-nodular",
    fieldId: "esophagus-wall-external-appearance",
    label: "Nodular",
    value: "nodular",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-wall-external-indurated",
    fieldId: "esophagus-wall-external-appearance",
    label: "Endurecida",
    value: "indurated",
    order: 5,
    active: true,
  },

  {
    id: "esophagus-wall-external-thickened",
    fieldId: "esophagus-wall-external-appearance",
    label: "Espessada",
    value: "thickened",
    order: 6,
    active: true,
  },

  {
    id: "esophagus-wall-external-other",
    fieldId: "esophagus-wall-external-appearance",
    label: "Outra",
    value: "other",
    order: 7,
    active: true,
  },

  // ------------------------------------------------------------
  // INTEGRIDADE DA PAREDE
  // ------------------------------------------------------------

  {
    id: "esophagus-wall-intact",
    fieldId: "esophagus-wall-integrity",
    label: "Íntegra",
    value: "intact",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-wall-focally-compromised",
    fieldId: "esophagus-wall-integrity",
    label: "Focalmente comprometida",
    value: "focally-compromised",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-wall-diffusely-compromised",
    fieldId: "esophagus-wall-integrity",
    label: "Difusamente comprometida",
    value: "diffusely-compromised",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-wall-not-assessable",
    fieldId: "esophagus-wall-integrity",
    label: "Não avaliável",
    value: "not-assessable",
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // EXTENSÃO PARA TECIDOS ADJACENTES
  // ------------------------------------------------------------

  {
    id: "esophagus-wall-no-adjacent-extension",
    fieldId: "esophagus-wall-adjacent-extension",
    label: "Sem extensão macroscópica identificada",
    value: "none",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-wall-adjacent-extension-suspected",
    fieldId: "esophagus-wall-adjacent-extension",
    label: "Extensão macroscópica suspeita",
    value: "suspected",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-wall-adjacent-extension-not-assessable",
    fieldId: "esophagus-wall-adjacent-extension",
    label: "Não avaliável",
    value: "not-assessable",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // 08 — MARGENS
  // ------------------------------------------------------------

  {
    id: "esophagus-margin-identified",
    fieldId: "esophagus-proximal-margin",
    label: "Identificada",
    value: "identified",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-margin-not-identified",
    fieldId: "esophagus-proximal-margin",
    label: "Não identificada",
    value: "not-identified",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-margin-not-applicable-proximal",
    fieldId: "esophagus-proximal-margin",
    label: "Não aplicável",
    value: "not-applicable",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-margin-distal-identified",
    fieldId: "esophagus-distal-margin",
    label: "Identificada",
    value: "identified",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-margin-distal-not-identified",
    fieldId: "esophagus-distal-margin",
    label: "Não identificada",
    value: "not-identified",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-margin-distal-not-applicable",
    fieldId: "esophagus-distal-margin",
    label: "Não aplicável",
    value: "not-applicable",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-margin-radial-identified",
    fieldId: "esophagus-radial-margin",
    label: "Identificada",
    value: "identified",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-margin-radial-not-identified",
    fieldId: "esophagus-radial-margin",
    label: "Não identificada",
    value: "not-identified",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-margin-radial-not-applicable",
    fieldId: "esophagus-radial-margin",
    label: "Não aplicável",
    value: "not-applicable",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // 09 — ESTRUTURAS ADJACENTES
  // ------------------------------------------------------------

  {
    id: "esophagus-adjacent-fat",
    fieldId: "esophagus-adjacent-structures",
    label: "Tecido adiposo peri-esofágico",
    value: "periesophageal-fat",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-adjacent-mediastinal",
    fieldId: "esophagus-adjacent-structures",
    label: "Estruturas mediastínicas",
    value: "mediastinal-structures",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-adjacent-gastric",
    fieldId: "esophagus-adjacent-structures",
    label: "Estruturas gástricas associadas",
    value: "gastric-associated-structures",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-adjacent-other",
    fieldId: "esophagus-adjacent-structures",
    label: "Outras estruturas",
    value: "other",
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // RELAÇÃO COM A LESÃO
  // ------------------------------------------------------------

  {
    id: "esophagus-adjacent-no-relation",
    fieldId: "esophagus-adjacent-lesion-relation",
    label: "Sem relação evidente",
    value: "no-evident-relation",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-adjacent-adjacency",
    fieldId: "esophagus-adjacent-lesion-relation",
    label: "Adjacência",
    value: "adjacency",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-adjacent-adhesion",
    fieldId: "esophagus-adjacent-lesion-relation",
    label: "Aderência",
    value: "adhesion",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-adjacent-suspected-involvement",
    fieldId: "esophagus-adjacent-lesion-relation",
    label: "Envolvimento macroscópico suspeito",
    value: "suspected-involvement",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-adjacent-not-assessable",
    fieldId: "esophagus-adjacent-lesion-relation",
    label: "Não avaliável",
    value: "not-assessable",
    order: 5,
    active: true,
  },

  // ------------------------------------------------------------
  // 10 — GÂNGLIOS LINFÁTICOS
  // ------------------------------------------------------------

  {
    id: "esophagus-lymph-node-normal",
    fieldId: "esophagus-lymph-node-appearance",
    label: "Sem alterações macroscópicas relevantes",
    value: "normal",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lymph-node-enlarged",
    fieldId: "esophagus-lymph-node-appearance",
    label: "Aumentado",
    value: "enlarged",
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lymph-node-indurated",
    fieldId: "esophagus-lymph-node-appearance",
    label: "Endurecido",
    value: "indurated",
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lymph-node-necrotic",
    fieldId: "esophagus-lymph-node-appearance",
    label: "Necrosado",
    value: "necrotic",
    order: 4,
    active: true,
  },

  {
    id: "esophagus-lymph-node-conglomerate",
    fieldId: "esophagus-lymph-node-appearance",
    label: "Conglomerado",
    value: "conglomerate",
    order: 5,
    active: true,
  },

  {
    id: "esophagus-lymph-node-other",
    fieldId: "esophagus-lymph-node-appearance",
    label: "Outro",
    value: "other",
    order: 6,
    active: true,
  },
];