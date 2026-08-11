import type { Field } from "../models/Field";

export const fields: Field[] = [
  // ============================================================
  // DADOS CLÍNICOS
  // ============================================================

  {
    id: "clinical-indication",
    sectionId: "clinical-data",
    name: "Indicação clínica",
    description: "Indicação clínica para a realização do procedimento.",
    type: "textarea",
    required: true,
    order: 1,
    active: true,
  },
  {
    id: "anatomical-location",
    sectionId: "clinical-data",
    name: "Localização anatómica",
    description: "Localização anatómica da lesão.",
    type: "text",
    required: true,
    order: 2,
    active: true,
  },
  {
    id: "clinical-diagnosis",
    sectionId: "clinical-data",
    name: "Diagnóstico clínico",
    description: "Diagnóstico clínico ou hipótese diagnóstica.",
    type: "text",
    required: false,
    order: 3,
    active: true,
  },

  // ============================================================
  // MATERIAL RECEBIDO
  // ============================================================

  {
    id: "material-type",
    sectionId: "received-material",
    name: "Tipo de material",
    description: "Tipo de material recebido para exame.",
    type: "select",
    required: true,
    order: 1,
    active: true,
  },
  {
    id: "received-condition",
    sectionId: "received-material",
    name: "Estado de receção",
    description: "Estado da peça no momento da receção.",
    type: "select",
    required: true,
    order: 2,
    active: true,
  },
  {
    id: "orientation-provided",
    sectionId: "received-material",
    name: "Orientação fornecida",
    description: "Indica se a peça foi recebida com orientação.",
    type: "boolean",
    required: true,
    order: 3,
    active: true,
  },

  // ============================================================
  // ORIENTAÇÃO
  // ============================================================

  {
    id: "orientation-method",
    sectionId: "orientation",
    name: "Método de orientação",
    description: "Método utilizado para orientação da peça.",
    type: "text",
    required: false,
    order: 1,
    active: true,
  },
  {
    id: "orientation-description",
    sectionId: "orientation",
    name: "Orientação descrita",
    description: "Descrição da orientação anatómica da peça.",
    type: "textarea",
    required: false,
    order: 2,
    active: true,
  },

  // ============================================================
  // EXAME MACROSCÓPICO
  // ============================================================

  {
    id: "specimen-length",
    sectionId: "gross-examination",
    name: "Comprimento",
    description: "Maior dimensão da peça.",
    type: "measurement",
    unit: "cm",
    required: true,
    order: 1,
    active: true,
  },
  {
    id: "specimen-width",
    sectionId: "gross-examination",
    name: "Largura",
    description: "Largura máxima da peça.",
    type: "measurement",
    unit: "cm",
    required: true,
    order: 2,
    active: true,
  },
  {
    id: "specimen-thickness",
    sectionId: "gross-examination",
    name: "Espessura",
    description: "Espessura máxima da peça.",
    type: "measurement",
    unit: "cm",
    required: true,
    order: 3,
    active: true,
  },
  {
    id: "specimen-weight",
    sectionId: "gross-examination",
    name: "Peso",
    description: "Peso da peça.",
    type: "decimal",
    unit: "g",
    required: false,
    order: 4,
    active: true,
  },
  {
    id: "specimen-description",
    sectionId: "gross-examination",
    name: "Descrição da peça",
    description: "Descrição macroscópica geral da peça.",
    type: "textarea",
    required: true,
    order: 5,
    active: true,
  },

  // ============================================================
  // LESÃO
  // ============================================================

  {
    id: "lesion-present",
    sectionId: "lesion",
    name: "Lesão identificada",
    description: "Indica se é identificada uma lesão macroscopicamente.",
    type: "boolean",
    required: true,
    order: 1,
    active: true,
  },
  {
    id: "lesion-type",
    sectionId: "lesion",
    name: "Tipo de lesão",
    description: "Caracterização macroscópica da lesão.",
    type: "select",
    required: false,
    order: 2,
    active: true,
  },
  {
    id: "lesion-length",
    sectionId: "lesion",
    name: "Comprimento da lesão",
    description: "Maior dimensão da lesão.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 3,
    active: true,
  },
  {
    id: "lesion-width",
    sectionId: "lesion",
    name: "Largura da lesão",
    description: "Largura máxima da lesão.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 4,
    active: true,
  },
  {
    id: "lesion-thickness",
    sectionId: "lesion",
    name: "Espessura da lesão",
    description: "Espessura máxima da lesão.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 5,
    active: true,
  },
  {
    id: "lesion-description",
    sectionId: "lesion",
    name: "Descrição da lesão",
    description: "Descrição macroscópica detalhada da lesão.",
    type: "textarea",
    required: false,
    order: 6,
    active: true,
  },

  // ============================================================
  // MARGENS
  // ============================================================

  {
    id: "margins-identified",
    sectionId: "margins",
    name: "Margens identificadas",
    description: "Indica se as margens relevantes foram identificadas.",
    type: "boolean",
    required: true,
    order: 1,
    active: true,
  },
  {
    id: "nearest-margin-distance",
    sectionId: "margins",
    name: "Distância à margem mais próxima",
    description: "Distância macroscópica à margem mais próxima.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 2,
    active: true,
  },
  {
    id: "nearest-margin",
    sectionId: "margins",
    name: "Margem mais próxima",
    description: "Identificação da margem mais próxima da lesão.",
    type: "select",
    required: false,
    order: 3,
    active: true,
  },
  {
    id: "margin-observations",
    sectionId: "margins",
    name: "Observações das margens",
    description: "Observações adicionais relativas às margens.",
    type: "textarea",
    required: false,
    order: 4,
    active: true,
  },

  // ============================================================
  // AMOSTRAGEM
  // ============================================================

  {
    id: "sampling-block-count",
    sectionId: "sampling",
    name: "Número de fragmentos/blocos",
    description: "Número total de fragmentos ou blocos de inclusão.",
    type: "number",
    required: true,
    order: 1,
    active: true,
  },
  {
    id: "sampling-description",
    sectionId: "sampling",
    name: "Identificação da amostragem",
    description: "Descrição e identificação das colheitas efetuadas.",
    type: "textarea",
    required: true,
    order: 2,
    active: true,
  },

  // ============================================================
  // FOTOGRAFIAS
  // ============================================================

  {
    id: "specimen-photo",
    sectionId: "photographs",
    name: "Fotografia da peça",
    description: "Registo fotográfico da peça recebida.",
    type: "photo",
    required: false,
    order: 1,
    active: true,
  },
  {
    id: "lesion-photo",
    sectionId: "photographs",
    name: "Fotografia da lesão",
    description: "Registo fotográfico da lesão.",
    type: "photo",
    required: false,
    order: 2,
    active: true,
  },

  // ============================================================
  // OBSERVAÇÕES
  // ============================================================

  {
    id: "additional-observations",
    sectionId: "observations",
    name: "Observações adicionais",
    description: "Informação adicional relevante para o exame.",
    type: "textarea",
    required: false,
    order: 1,
    active: true,
  },
];