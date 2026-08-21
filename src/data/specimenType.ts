import type { SpecimenType } from "../models/SpecimenType";

export const specimenTypes: SpecimenType[] = [
  // ============================================================
  // SISTEMA DIGESTIVO
  // ============================================================

  // ------------------------------------------------------------
  // Esófago
  // ------------------------------------------------------------

  {
    id: "esophagus-esophagectomy",
    organId: "esophagus",
    name: "Peça de esofagectomia",
    description:
      "Peça cirúrgica de esofagectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-segmental-resection",
    organId: "esophagus",
    name: "Peça de ressecção segmentar do esófago",
    description:
      "Peça de ressecção segmentar do esófago para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // Estômago
  // ------------------------------------------------------------

  {
    id: "stomach-total-gastrectomy",
    organId: "stomach",
    name: "Peça de gastrectomia total",
    description:
      "Peça cirúrgica de gastrectomia total para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "stomach-subtotal-gastrectomy",
    organId: "stomach",
    name: "Peça de gastrectomia subtotal",
    description:
      "Peça cirúrgica de gastrectomia subtotal para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "stomach-segmental-resection",
    organId: "stomach",
    name: "Peça de ressecção gástrica segmentar",
    description:
      "Peça de ressecção gástrica segmentar para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // Duodeno
  // ------------------------------------------------------------

  {
    id: "duodenum-resection",
    organId: "duodenum",
    name: "Peça de ressecção duodenal",
    description:
      "Peça de ressecção do duodeno para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Jejuno
  // ------------------------------------------------------------

  {
    id: "jejunum-segmental-resection",
    organId: "jejunum",
    name: "Peça de ressecção segmentar do jejuno",
    description:
      "Peça de ressecção segmentar do jejuno para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Íleon
  // ------------------------------------------------------------

  {
    id: "ileum-segmental-resection",
    organId: "ileum",
    name: "Peça de ressecção segmentar do íleon",
    description:
      "Peça de ressecção segmentar do íleon para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "ileum-ileocecal-resection",
    organId: "ileum",
    name: "Peça de ressecção ileocecal",
    description:
      "Peça de ressecção ileocecal para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // Cólon
  // ------------------------------------------------------------

  {
    id: "colon-right-colectomy",
    organId: "colon",
    name: "Peça de colectomia direita",
    description:
      "Peça cirúrgica de colectomia direita para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "colon-left-colectomy",
    organId: "colon",
    name: "Peça de colectomia esquerda",
    description:
      "Peça cirúrgica de colectomia esquerda para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "colon-segmental-resection",
    organId: "colon",
    name: "Peça de colectomia segmentar",
    description:
      "Peça de colectomia segmentar para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  {
    id: "colon-total-colectomy",
    organId: "colon",
    name: "Peça de colectomia total",
    description:
      "Peça cirúrgica de colectomia total para avaliação anatomopatológica.",
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // Sigmoide
  // ------------------------------------------------------------

  {
    id: "sigmoid-sigmoidectomy",
    organId: "sigmoid",
    name: "Peça de sigmoidectomia",
    description:
      "Peça cirúrgica de sigmoidectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "sigmoid-segmental-resection",
    organId: "sigmoid",
    name: "Peça de ressecção segmentar do sigmoide",
    description:
      "Peça de ressecção segmentar do sigmoide para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // Recto
  // ------------------------------------------------------------

  {
    id: "rectum-anterior-resection",
    organId: "rectum",
    name: "Peça de ressecção anterior do recto",
    description:
      "Peça cirúrgica de ressecção anterior do recto para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "rectum-abdominoperineal-resection",
    organId: "rectum",
    name: "Peça de amputação abdominoperineal",
    description:
      "Peça cirúrgica de amputação abdominoperineal para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "rectum-transanal-resection",
    organId: "rectum",
    name: "Peça de ressecção transanal",
    description:
      "Peça de ressecção transanal do recto para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // Apêndice íleo-cecal
  // ------------------------------------------------------------

  {
    id: "appendix-appendectomy",
    organId: "appendix",
    name: "Peça de apendicectomia",
    description:
      "Peça cirúrgica de apendicectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Fígado
  // ------------------------------------------------------------

  {
    id: "liver-hepatectomy",
    organId: "liver",
    name: "Peça de hepatectomia",
    description:
      "Peça cirúrgica de hepatectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "liver-segmental-resection",
    organId: "liver",
    name: "Peça de ressecção hepática segmentar",
    description:
      "Peça de ressecção hepática segmentar para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "liver-wedge-resection",
    organId: "liver",
    name: "Peça de ressecção hepática em cunha",
    description:
      "Peça de ressecção hepática em cunha para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // Vesícula biliar
  // ------------------------------------------------------------

  {
    id: "gallbladder-cholecystectomy",
    organId: "gallbladder",
    name: "Peça de colecistectomia",
    description:
      "Peça cirúrgica de colecistectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Pâncreas
  // ------------------------------------------------------------

  {
    id: "pancreas-distal-pancreatectomy",
    organId: "pancreas",
    name: "Peça de pancreatectomia distal",
    description:
      "Peça cirúrgica de pancreatectomia distal para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "pancreas-pancreaticoduodenectomy",
    organId: "pancreas",
    name: "Peça de duodenopancreatectomia cefálica",
    description:
      "Peça cirúrgica de duodenopancreatectomia cefálica para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "pancreas-total-pancreatectomy",
    organId: "pancreas",
    name: "Peça de pancreatectomia total",
    description:
      "Peça cirúrgica de pancreatectomia total para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  {
    id: "pancreas-segmental-resection",
    organId: "pancreas",
    name: "Peça de ressecção pancreática segmentar",
    description:
      "Peça de ressecção pancreática segmentar para avaliação anatomopatológica.",
    order: 4,
    active: true,
  },

  // ============================================================
  // DERMATOLOGIA
  // ============================================================

  {
    id: "skin-excision",
    organId: "skin",
    name: "Excisão de lesão cutânea",
    description:
      "Excisão cirúrgica de uma lesão da pele para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },
];