import type { Field } from "../models/Field";

export const fields: Field[] = [
  // ============================================================
  // EXCISÃO DE LESÃO CUTÂNEA
  // ============================================================

  // ------------------------------------------------------------
  // DADOS CLÍNICOS
  // ------------------------------------------------------------

  {
    id: "clinical-indication",
    sectionId: "clinical-data",
    name: "Indicação clínica",
    description:
      "Indicação clínica para a realização do procedimento.",
    type: "textarea",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "anatomical-location",
    sectionId: "clinical-data",
    name: "Localização anatómica",
    description:
      "Localização anatómica da lesão.",
    type: "text",
    required: true,
    order: 2,
    active: true,
  },

  {
    id: "clinical-diagnosis",
    sectionId: "clinical-data",
    name: "Diagnóstico clínico",
    description:
      "Diagnóstico clínico ou hipótese diagnóstica.",
    type: "text",
    required: false,
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // MATERIAL RECEBIDO
  // ------------------------------------------------------------

  {
    id: "material-type",
    sectionId: "received-material",
    name: "Tipo de material",
    description:
      "Tipo de material recebido para exame.",
    type: "select",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "received-condition",
    sectionId: "received-material",
    name: "Estado de receção",
    description:
      "Estado da peça no momento da receção.",
    type: "select",
    required: true,
    order: 2,
    active: true,
  },

  {
    id: "orientation-provided",
    sectionId: "received-material",
    name: "Orientação fornecida",
    description:
      "Indica se a peça foi recebida com orientação.",
    type: "boolean",
    required: true,
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // ORIENTAÇÃO
  // ------------------------------------------------------------

  {
    id: "orientation-method",
    sectionId: "orientation",
    name: "Método de orientação",
    description:
      "Método utilizado para orientação da peça.",
    type: "text",
    required: false,
    order: 1,
    active: true,
  },

  {
    id: "orientation-description",
    sectionId: "orientation",
    name: "Orientação descrita",
    description:
      "Descrição da orientação anatómica da peça.",
    type: "textarea",
    required: false,
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // EXAME MACROSCÓPICO
  // ------------------------------------------------------------

  {
    id: "specimen-length",
    sectionId: "gross-examination",
    name: "Comprimento",
    description:
      "Maior dimensão da peça.",
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
    description:
      "Largura máxima da peça.",
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
    description:
      "Espessura máxima da peça.",
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
    description:
      "Peso da peça.",
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
    description:
      "Descrição macroscópica geral da peça.",
    type: "textarea",
    required: true,
    order: 5,
    active: true,
  },

  // ------------------------------------------------------------
  // LESÃO
  // ------------------------------------------------------------

  {
    id: "lesion-present",
    sectionId: "lesion",
    name: "Lesão identificada",
    description:
      "Indica se é identificada uma lesão macroscopicamente.",
    type: "boolean",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "lesion-type",
    sectionId: "lesion",
    name: "Tipo de lesão",
    description:
      "Caracterização macroscópica da lesão.",
    type: "select",
    required: false,
    order: 2,
    active: true,
  },

  {
    id: "lesion-length",
    sectionId: "lesion",
    name: "Comprimento da lesão",
    description:
      "Maior dimensão da lesão.",
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
    description:
      "Largura máxima da lesão.",
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
    description:
      "Espessura máxima da lesão.",
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
    description:
      "Descrição macroscópica detalhada da lesão.",
    type: "textarea",
    required: false,
    order: 6,
    active: true,
  },

  // ------------------------------------------------------------
  // MARGENS
  // ------------------------------------------------------------

  {
    id: "margins-identified",
    sectionId: "margins",
    name: "Margens identificadas",
    description:
      "Indica se as margens relevantes foram identificadas.",
    type: "boolean",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "nearest-margin-distance",
    sectionId: "margins",
    name: "Distância à margem mais próxima",
    description:
      "Distância macroscópica à margem mais próxima.",
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
    description:
      "Identificação da margem mais próxima da lesão.",
    type: "select",
    required: false,
    order: 3,
    active: true,
  },

  {
    id: "margin-observations",
    sectionId: "margins",
    name: "Observações das margens",
    description:
      "Observações adicionais relativas às margens.",
    type: "textarea",
    required: false,
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // AMOSTRAGEM
  // ------------------------------------------------------------

  {
    id: "sampling-block-count",
    sectionId: "sampling",
    name: "Número de fragmentos/blocos",
    description:
      "Número total de fragmentos ou blocos de inclusão.",
    type: "number",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "sampling-description",
    sectionId: "sampling",
    name: "Identificação da amostragem",
    description:
      "Descrição e identificação das colheitas efetuadas.",
    type: "textarea",
    required: true,
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // FOTOGRAFIAS
  // ------------------------------------------------------------

  {
    id: "specimen-photo",
    sectionId: "photographs",
    name: "Fotografia da peça",
    description:
      "Registo fotográfico da peça recebida.",
    type: "photo",
    required: false,
    order: 1,
    active: true,
  },

  {
    id: "lesion-photo",
    sectionId: "photographs",
    name: "Fotografia da lesão",
    description:
      "Registo fotográfico da lesão.",
    type: "photo",
    required: false,
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // OBSERVAÇÕES
  // ------------------------------------------------------------

  {
    id: "additional-observations",
    sectionId: "observations",
    name: "Observações adicionais",
    description:
      "Informação adicional relevante para o exame.",
    type: "textarea",
    required: false,
    order: 1,
    active: true,
  },

  // ============================================================
  // ESOFAGECTOMIA
  // ============================================================

  // ------------------------------------------------------------
  // 01 — IDENTIFICAÇÃO DA PEÇA
  // ------------------------------------------------------------

  {
    id: "esophagus-clinical-information",
    sectionId: "esophagus-identification",
    name: "Informação clínica relevante",
    description:
      "Informação clínica relevante para o exame da peça.",
    type: "textarea",
    required: false,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-specimen-identification",
    sectionId: "esophagus-identification",
    name: "Identificação da peça",
    description:
      "Identificação da peça conforme a requisição e a informação clínica.",
    type: "text",
    required: true,
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // 02 — TIPO DE PROCEDIMENTO
  // ------------------------------------------------------------

  {
    id: "esophagus-procedure-description",
    sectionId: "esophagus-procedure",
    name: "Descrição do procedimento",
    description:
      "Informação adicional relativa ao procedimento cirúrgico.",
    type: "text",
    required: false,
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // 03 — ORIENTAÇÃO E IDENTIFICAÇÃO ANATÓMICA
  // ------------------------------------------------------------

  {
    id: "esophagus-proximal-end",
    sectionId: "esophagus-orientation",
    name: "Extremidade proximal",
    description:
      "Identificação da extremidade proximal da peça.",
    type: "text",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-distal-end",
    sectionId: "esophagus-orientation",
    name: "Extremidade distal",
    description:
      "Identificação da extremidade distal da peça.",
    type: "text",
    required: true,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-orientation-description",
    sectionId: "esophagus-orientation",
    name: "Orientação fornecida pelo cirurgião",
    description:
      "Descrição da orientação anatómica fornecida.",
    type: "textarea",
    required: false,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-associated-structures",
    sectionId: "esophagus-orientation",
    name: "Estruturas anatómicas associadas",
    description:
      "Descrição das estruturas anatómicas associadas à peça.",
    type: "textarea",
    required: false,
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // 04 — DIMENSÕES DA PEÇA
  // ------------------------------------------------------------

  {
    id: "esophagus-length",
    sectionId: "esophagus-dimensions",
    name: "Comprimento total",
    description:
      "Comprimento total da peça de esofagectomia.",
    type: "measurement",
    unit: "cm",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-maximum-diameter",
    sectionId: "esophagus-dimensions",
    name: "Diâmetro máximo",
    description:
      "Diâmetro máximo da peça.",
    type: "measurement",
    unit: "cm",
    required: true,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-wall-maximum-thickness",
    sectionId: "esophagus-dimensions",
    name: "Espessura máxima da parede",
    description:
      "Espessura máxima da parede esofágica.",
    type: "measurement",
    unit: "mm",
    required: true,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-weight",
    sectionId: "esophagus-dimensions",
    name: "Peso",
    description:
      "Peso da peça.",
    type: "decimal",
    unit: "g",
    required: false,
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // 05 — DESCRIÇÃO DA MUCOSA
  // ------------------------------------------------------------

  {
    id: "esophagus-mucosa-general-appearance",
    sectionId: "esophagus-mucosa",
    name: "Aspecto geral da mucosa",
    description:
      "Aspecto macroscópico geral da mucosa esofágica.",
    type: "select",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-mucosa-integrity",
    sectionId: "esophagus-mucosa",
    name: "Integridade da mucosa",
    description:
      "Avaliação macroscópica da integridade da mucosa.",
    type: "select",
    required: true,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-mucosa-focal-alterations",
    sectionId: "esophagus-mucosa",
    name: "Alterações focais da mucosa",
    description:
      "Indica a presença de alterações focais da mucosa.",
    type: "boolean",
    required: false,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-mucosa-alteration-location",
    sectionId: "esophagus-mucosa",
    name: "Localização das alterações",
    description:
      "Localização das alterações focais observadas na mucosa.",
    type: "text",
    required: false,
    order: 4,
    active: true,
  },

  {
    id: "esophagus-mucosa-description",
    sectionId: "esophagus-mucosa",
    name: "Descrição das alterações da mucosa",
    description:
      "Descrição macroscópica das alterações observadas na mucosa.",
    type: "textarea",
    required: false,
    order: 5,
    active: true,
  },

  // ------------------------------------------------------------
  // 06 — LESÃO
  // ------------------------------------------------------------

  {
    id: "esophagus-lesion-present",
    sectionId: "esophagus-lesion",
    name: "Lesão macroscópica identificável",
    description:
      "Indica se existe uma lesão macroscopicamente identificável.",
    type: "boolean",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lesion-location",
    sectionId: "esophagus-lesion",
    name: "Localização da lesão",
    description:
      "Localização anatómica da lesão.",
    type: "select",
    required: false,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lesion-distance-proximal",
    sectionId: "esophagus-lesion",
    name: "Distância à extremidade proximal",
    description:
      "Distância entre a lesão e a extremidade proximal da peça.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lesion-distance-distal",
    sectionId: "esophagus-lesion",
    name: "Distância à extremidade distal",
    description:
      "Distância entre a lesão e a extremidade distal da peça.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 4,
    active: true,
  },

  {
    id: "esophagus-lesion-length",
    sectionId: "esophagus-lesion",
    name: "Extensão longitudinal",
    description:
      "Maior dimensão longitudinal da lesão.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 5,
    active: true,
  },

  {
    id: "esophagus-lesion-width",
    sectionId: "esophagus-lesion",
    name: "Extensão transversal",
    description:
      "Maior dimensão transversal da lesão.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 6,
    active: true,
  },

  {
    id: "esophagus-lesion-thickness",
    sectionId: "esophagus-lesion",
    name: "Espessura máxima",
    description:
      "Espessura máxima da lesão.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 7,
    active: true,
  },

  {
    id: "esophagus-lesion-appearance",
    sectionId: "esophagus-lesion",
    name: "Aspecto macroscópico",
    description:
      "Aspecto macroscópico predominante da lesão.",
    type: "select",
    required: false,
    order: 8,
    active: true,
  },

  {
    id: "esophagus-lesion-surface",
    sectionId: "esophagus-lesion",
    name: "Superfície",
    description:
      "Aspecto da superfície da lesão.",
    type: "select",
    required: false,
    order: 9,
    active: true,
  },

  {
    id: "esophagus-lesion-depth",
    sectionId: "esophagus-lesion",
    name: "Profundidade macroscópica aparente",
    description:
      "Avaliação macroscópica da extensão da lesão na parede.",
    type: "select",
    required: false,
    order: 10,
    active: true,
  },

  {
    id: "esophagus-lesion-wall-relation",
    sectionId: "esophagus-lesion",
    name: "Relação com a parede",
    description:
      "Relação macroscópica da lesão com a parede esofágica.",
    type: "select",
    required: false,
    order: 11,
    active: true,
  },

  {
    id: "esophagus-lesion-description",
    sectionId: "esophagus-lesion",
    name: "Descrição macroscópica da lesão",
    description:
      "Descrição macroscópica detalhada da lesão.",
    type: "textarea",
    required: false,
    order: 12,
    active: true,
  },

  // ------------------------------------------------------------
  // 07 — PAREDE ESOFÁGICA
  // ------------------------------------------------------------

  {
    id: "esophagus-wall-maximum-thickness-detail",
    sectionId: "esophagus-wall",
    name: "Espessura máxima da parede",
    description:
      "Espessura máxima da parede esofágica.",
    type: "measurement",
    unit: "mm",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-wall-external-appearance",
    sectionId: "esophagus-wall",
    name: "Aspecto externo da parede",
    description:
      "Aspecto macroscópico da superfície externa da parede.",
    type: "select",
    required: true,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-wall-integrity",
    sectionId: "esophagus-wall",
    name: "Integridade da parede",
    description:
      "Avaliação macroscópica da integridade da parede.",
    type: "select",
    required: true,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-wall-focal-alterations",
    sectionId: "esophagus-wall",
    name: "Alterações focais da parede",
    description:
      "Indica a presença de alterações focais da parede.",
    type: "boolean",
    required: false,
    order: 4,
    active: true,
  },

  {
    id: "esophagus-wall-alteration-location",
    sectionId: "esophagus-wall",
    name: "Localização das alterações",
    description:
      "Localização das alterações focais da parede.",
    type: "text",
    required: false,
    order: 5,
    active: true,
  },

  {
    id: "esophagus-wall-alteration-description",
    sectionId: "esophagus-wall",
    name: "Descrição das alterações",
    description:
      "Descrição macroscópica das alterações da parede.",
    type: "textarea",
    required: false,
    order: 6,
    active: true,
  },

  {
    id: "esophagus-wall-lesion-thickness",
    sectionId: "esophagus-wall",
    name: "Espessura máxima da parede na área da lesão",
    description:
      "Espessura máxima da parede na área correspondente à lesão.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 7,
    active: true,
  },

  {
    id: "esophagus-wall-lesion-external-surface",
    sectionId: "esophagus-wall",
    name: "Aspecto da superfície externa na área da lesão",
    description:
      "Descrição da superfície externa da parede na área da lesão.",
    type: "textarea",
    required: false,
    order: 8,
    active: true,
  },

  {
    id: "esophagus-wall-adjacent-extension",
    sectionId: "esophagus-wall",
    name: "Extensão macroscópica para os tecidos adjacentes",
    description:
      "Avaliação macroscópica de eventual extensão para os tecidos adjacentes.",
    type: "select",
    required: false,
    order: 9,
    active: true,
  },

  // ------------------------------------------------------------
  // 08 — MARGENS CIRÚRGICAS
  // ------------------------------------------------------------

  {
    id: "esophagus-proximal-margin",
    sectionId: "esophagus-margins",
    name: "Margem proximal",
    description:
      "Identificação da margem proximal.",
    type: "select",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-distal-margin",
    sectionId: "esophagus-margins",
    name: "Margem distal",
    description:
      "Identificação da margem distal.",
    type: "select",
    required: true,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-radial-margin",
    sectionId: "esophagus-margins",
    name: "Margem radial/circunferencial",
    description:
      "Identificação da margem radial ou circunferencial, quando aplicável.",
    type: "select",
    required: false,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-proximal-margin-distance",
    sectionId: "esophagus-margins",
    name: "Distância da lesão à margem proximal",
    description:
      "Distância entre a lesão e a margem proximal.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 4,
    active: true,
  },

  {
    id: "esophagus-distal-margin-distance",
    sectionId: "esophagus-margins",
    name: "Distância da lesão à margem distal",
    description:
      "Distância entre a lesão e a margem distal.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 5,
    active: true,
  },

  {
    id: "esophagus-radial-margin-distance",
    sectionId: "esophagus-margins",
    name: "Distância da lesão à margem radial/circunferencial",
    description:
      "Distância entre a lesão e a margem radial ou circunferencial.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 6,
    active: true,
  },

  {
    id: "esophagus-margin-appearance",
    sectionId: "esophagus-margins",
    name: "Aspecto macroscópico das margens",
    description:
      "Descrição do aspecto macroscópico das margens.",
    type: "textarea",
    required: false,
    order: 7,
    active: true,
  },

  {
    id: "esophagus-margin-description",
    sectionId: "esophagus-margins",
    name: "Descrição macroscópica das margens",
    description:
      "Descrição adicional das margens cirúrgicas.",
    type: "textarea",
    required: false,
    order: 8,
    active: true,
  },

  // ------------------------------------------------------------
  // 09 — ESTRUTURAS ADJACENTES
  // ------------------------------------------------------------

  {
    id: "esophagus-adjacent-structures-present",
    sectionId: "esophagus-adjacent-structures",
    name: "Estruturas adjacentes presentes",
    description:
      "Indica se existem estruturas anatómicas adjacentes identificáveis.",
    type: "boolean",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-adjacent-structures",
    sectionId: "esophagus-adjacent-structures",
    name: "Estruturas identificadas",
    description:
      "Estruturas anatómicas adjacentes identificadas na peça.",
    type: "multiselect",
    required: false,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-adjacent-dimensions",
    sectionId: "esophagus-adjacent-structures",
    name: "Dimensões das estruturas",
    description:
      "Dimensões das estruturas adjacentes identificadas.",
    type: "textarea",
    required: false,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-adjacent-lesion-relation",
    sectionId: "esophagus-adjacent-structures",
    name: "Relação macroscópica com a lesão",
    description:
      "Relação macroscópica entre as estruturas adjacentes e a lesão.",
    type: "select",
    required: false,
    order: 4,
    active: true,
  },

  {
    id: "esophagus-adjacent-description",
    sectionId: "esophagus-adjacent-structures",
    name: "Descrição macroscópica das estruturas adjacentes",
    description:
      "Descrição detalhada das estruturas anatómicas adjacentes.",
    type: "textarea",
    required: false,
    order: 5,
    active: true,
  },

  // ------------------------------------------------------------
  // 10 — GÂNGLIOS LINFÁTICOS
  // ------------------------------------------------------------

  {
    id: "esophagus-lymph-nodes-present",
    sectionId: "esophagus-lymph-nodes",
    name: "Gânglios linfáticos identificados",
    description:
      "Indica se foram identificados gânglios linfáticos macroscopicamente.",
    type: "boolean",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-lymph-node-count",
    sectionId: "esophagus-lymph-nodes",
    name: "Número total de gânglios identificados",
    description:
      "Número total de gânglios linfáticos identificados.",
    type: "number",
    required: false,
    order: 2,
    active: true,
  },

  {
    id: "esophagus-lymph-node-location",
    sectionId: "esophagus-lymph-nodes",
    name: "Localização dos gânglios",
    description:
      "Localização anatómica dos gânglios linfáticos identificados.",
    type: "textarea",
    required: false,
    order: 3,
    active: true,
  },

  {
    id: "esophagus-lymph-node-maximum-size",
    sectionId: "esophagus-lymph-nodes",
    name: "Dimensão máxima",
    description:
      "Maior dimensão do maior gânglio identificado.",
    type: "measurement",
    unit: "mm",
    required: false,
    order: 4,
    active: true,
  },

  {
    id: "esophagus-lymph-node-appearance",
    sectionId: "esophagus-lymph-nodes",
    name: "Aspecto macroscópico",
    description:
      "Aspecto macroscópico dos gânglios identificados.",
    type: "select",
    required: false,
    order: 5,
    active: true,
  },

  {
    id: "esophagus-suspicious-lymph-nodes",
    sectionId: "esophagus-lymph-nodes",
    name: "Gânglios com alterações macroscópicas suspeitas",
    description:
      "Indica a presença de gânglios com alterações macroscópicas suspeitas.",
    type: "boolean",
    required: false,
    order: 6,
    active: true,
  },

  {
    id: "esophagus-suspicious-lymph-node-description",
    sectionId: "esophagus-lymph-nodes",
    name: "Descrição dos gânglios suspeitos",
    description:
      "Descrição macroscópica dos gânglios com alterações suspeitas.",
    type: "textarea",
    required: false,
    order: 7,
    active: true,
  },

  {
    id: "esophagus-lymph-node-description",
    sectionId: "esophagus-lymph-nodes",
    name: "Descrição macroscópica dos gânglios linfáticos",
    description:
      "Descrição adicional dos gânglios linfáticos identificados.",
    type: "textarea",
    required: false,
    order: 8,
    active: true,
  },

  // ------------------------------------------------------------
  // 11 — AMOSTRAGEM
  // ------------------------------------------------------------

  {
    id: "esophagus-sampling-fragment-count",
    sectionId: "esophagus-sampling",
    name: "Número de fragmentos",
    description:
      "Número total de fragmentos colhidos.",
    type: "number",
    required: true,
    order: 1,
    active: true,
  },

  {
    id: "esophagus-sampling-description",
    sectionId: "esophagus-sampling",
    name: "Identificação da amostragem",
    description:
      "Registo da amostragem efetuada, utilizando numeração sequencial: 1, 2, 3, 4...",
    type: "textarea",
    required: true,
    order: 2,
    active: true,
  },
];