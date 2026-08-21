import type { Section } from "../models/Section";

export const sections: Section[] = [
  // ============================================================
  // EXCISÃO DE LESÃO CUTÂNEA
  // ============================================================

  {
    id: "clinical-data",
    protocolId: "skin-lesion-excision-protocol",
    name: "Dados clínicos",
    description:
      "Informação clínica relevante para o exame da peça.",
    order: 1,
    repeatable: false,
    active: true,
  },

  {
    id: "received-material",
    protocolId: "skin-lesion-excision-protocol",
    name: "Material recebido",
    description:
      "Caracterização do material recebido.",
    order: 2,
    repeatable: false,
    active: true,
  },

  {
    id: "orientation",
    protocolId: "skin-lesion-excision-protocol",
    name: "Orientação",
    description:
      "Orientação anatómica e identificação da peça.",
    order: 3,
    repeatable: false,
    active: true,
  },

  {
    id: "gross-examination",
    protocolId: "skin-lesion-excision-protocol",
    name: "Exame macroscópico",
    description:
      "Descrição macroscópica e dimensões da peça.",
    order: 4,
    repeatable: false,
    active: true,
  },

  {
    id: "lesion",
    protocolId: "skin-lesion-excision-protocol",
    name: "Lesão",
    description:
      "Caracterização macroscópica da lesão.",
    order: 5,
    repeatable: false,
    active: true,
  },

  {
    id: "margins",
    protocolId: "skin-lesion-excision-protocol",
    name: "Margens",
    description:
      "Avaliação macroscópica das margens.",
    order: 6,
    repeatable: false,
    active: true,
  },

  {
    id: "sampling",
    protocolId: "skin-lesion-excision-protocol",
    name: "Amostragem",
    description:
      "Registo da amostragem efetuada.",
    order: 7,
    repeatable: true,
    active: true,
  },

  {
    id: "photographs",
    protocolId: "skin-lesion-excision-protocol",
    name: "Fotografias",
    description:
      "Registo fotográfico da peça e da lesão.",
    order: 8,
    repeatable: true,
    active: true,
  },

  {
    id: "observations",
    protocolId: "skin-lesion-excision-protocol",
    name: "Observações",
    description:
      "Informação adicional relevante.",
    order: 9,
    repeatable: false,
    active: true,
  },

  // ============================================================
  // ESOFAGECTOMIA
  // ============================================================

  {
    id: "esophagus-identification",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Identificação da peça",
    description:
      "Identificação e informação clínica relevante da peça de esofagectomia.",
    order: 1,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-procedure",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Tipo de procedimento",
    description:
      "Informação relativa ao procedimento cirúrgico realizado.",
    order: 2,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-orientation",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Orientação e identificação anatómica",
    description:
      "Orientação anatómica e identificação das extremidades da peça.",
    order: 3,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-dimensions",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Dimensões da peça",
    description:
      "Dimensões e peso da peça de esofagectomia.",
    order: 4,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-mucosa",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Descrição da mucosa",
    description:
      "Descrição macroscópica da mucosa esofágica.",
    order: 5,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-lesion",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Lesão",
    description:
      "Caracterização macroscópica da lesão identificada.",
    order: 6,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-wall",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Parede esofágica",
    description:
      "Descrição macroscópica da parede esofágica.",
    order: 7,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-margins",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Margens cirúrgicas",
    description:
      "Avaliação macroscópica das margens cirúrgicas.",
    order: 8,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-adjacent-structures",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Estruturas adjacentes",
    description:
      "Descrição das estruturas anatómicas adjacentes presentes na peça.",
    order: 9,
    repeatable: false,
    active: true,
  },

  {
    id: "esophagus-lymph-nodes",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Gânglios linfáticos",
    description:
      "Registo dos gânglios linfáticos identificados macroscopicamente.",
    order: 10,
    repeatable: true,
    active: true,
  },

  {
    id: "esophagus-sampling",
    protocolId: "esophagus-esophagectomy-protocol",
    name: "Amostragem",
    description:
      "Registo da amostragem efetuada e identificação numérica dos fragmentos.",
    order: 11,
    repeatable: true,
    active: true,
  },
];