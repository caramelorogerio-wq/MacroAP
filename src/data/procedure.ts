import type { Procedure } from "../models/Procedure";

export const procedures: Procedure[] = [
  // ============================================================
  // SISTEMA DIGESTIVO
  // ============================================================

  // ------------------------------------------------------------
  // Esófago
  // ------------------------------------------------------------

  {
    id: "esophagus-esophagectomy",
    specimenTypeId: "esophagus-esophagectomy",
    name: "Esofagectomia",
    description:
      "Procedimento de esofagectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "esophagus-segmental-resection",
    specimenTypeId: "esophagus-segmental-resection",
    name: "Ressecção segmentar do esófago",
    description:
      "Procedimento de ressecção segmentar do esófago para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Estômago
  // ------------------------------------------------------------

  {
    id: "stomach-total-gastrectomy",
    specimenTypeId: "stomach-total-gastrectomy",
    name: "Gastrectomia total",
    description:
      "Procedimento de gastrectomia total para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "stomach-subtotal-gastrectomy",
    specimenTypeId: "stomach-subtotal-gastrectomy",
    name: "Gastrectomia subtotal",
    description:
      "Procedimento de gastrectomia subtotal para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "stomach-segmental-resection",
    specimenTypeId: "stomach-segmental-resection",
    name: "Ressecção gástrica segmentar",
    description:
      "Procedimento de ressecção gástrica segmentar para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // Duodeno
  // ------------------------------------------------------------

  {
    id: "duodenum-resection",
    specimenTypeId: "duodenum-resection",
    name: "Ressecção duodenal",
    description:
      "Procedimento de ressecção duodenal para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Jejuno
  // ------------------------------------------------------------

  {
    id: "jejunum-segmental-resection",
    specimenTypeId: "jejunum-segmental-resection",
    name: "Ressecção segmentar do jejuno",
    description:
      "Procedimento de ressecção segmentar do jejuno para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Íleon
  // ------------------------------------------------------------

  {
    id: "ileum-segmental-resection",
    specimenTypeId: "ileum-segmental-resection",
    name: "Ressecção segmentar do íleon",
    description:
      "Procedimento de ressecção segmentar do íleon para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "ileum-ileocecal-resection",
    specimenTypeId: "ileum-ileocecal-resection",
    name: "Ressecção ileocecal",
    description:
      "Procedimento de ressecção ileocecal para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // Cólon
  // ------------------------------------------------------------

  {
    id: "colon-right-colectomy",
    specimenTypeId: "colon-right-colectomy",
    name: "Colectomia direita",
    description:
      "Procedimento de colectomia direita para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "colon-left-colectomy",
    specimenTypeId: "colon-left-colectomy",
    name: "Colectomia esquerda",
    description:
      "Procedimento de colectomia esquerda para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "colon-segmental-resection",
    specimenTypeId: "colon-segmental-resection",
    name: "Colectomia segmentar",
    description:
      "Procedimento de colectomia segmentar para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  {
    id: "colon-total-colectomy",
    specimenTypeId: "colon-total-colectomy",
    name: "Colectomia total",
    description:
      "Procedimento de colectomia total para avaliação anatomopatológica.",
    order: 4,
    active: true,
  },

  // ------------------------------------------------------------
  // Sigmoide
  // ------------------------------------------------------------

  {
    id: "sigmoid-sigmoidectomy",
    specimenTypeId: "sigmoid-sigmoidectomy",
    name: "Sigmoidectomia",
    description:
      "Procedimento de sigmoidectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "sigmoid-segmental-resection",
    specimenTypeId: "sigmoid-segmental-resection",
    name: "Ressecção segmentar do sigmoide",
    description:
      "Procedimento de ressecção segmentar do sigmoide para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  // ------------------------------------------------------------
  // Recto
  // ------------------------------------------------------------

  {
    id: "rectum-anterior-resection",
    specimenTypeId: "rectum-anterior-resection",
    name: "Ressecção anterior do recto",
    description:
      "Procedimento de ressecção anterior do recto para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "rectum-abdominoperineal-resection",
    specimenTypeId: "rectum-abdominoperineal-resection",
    name: "Amputação abdominoperineal",
    description:
      "Procedimento de amputação abdominoperineal para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "rectum-transanal-resection",
    specimenTypeId: "rectum-transanal-resection",
    name: "Ressecção transanal",
    description:
      "Procedimento de ressecção transanal do recto para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // Apêndice íleo-cecal
  // ------------------------------------------------------------

  {
    id: "appendix-appendectomy",
    specimenTypeId: "appendix-appendectomy",
    name: "Apendicectomia",
    description:
      "Procedimento de apendicectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Fígado
  // ------------------------------------------------------------

  {
    id: "liver-hepatectomy",
    specimenTypeId: "liver-hepatectomy",
    name: "Hepatectomia",
    description:
      "Procedimento de hepatectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "liver-segmental-resection",
    specimenTypeId: "liver-segmental-resection",
    name: "Ressecção hepática segmentar",
    description:
      "Procedimento de ressecção hepática segmentar para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "liver-wedge-resection",
    specimenTypeId: "liver-wedge-resection",
    name: "Ressecção hepática em cunha",
    description:
      "Procedimento de ressecção hepática em cunha para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  // ------------------------------------------------------------
  // Vesícula biliar
  // ------------------------------------------------------------

  {
    id: "gallbladder-cholecystectomy",
    specimenTypeId: "gallbladder-cholecystectomy",
    name: "Colecistectomia",
    description:
      "Procedimento de colecistectomia para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  // ------------------------------------------------------------
  // Pâncreas
  // ------------------------------------------------------------

  {
    id: "pancreas-distal-pancreatectomy",
    specimenTypeId: "pancreas-distal-pancreatectomy",
    name: "Pancreatectomia distal",
    description:
      "Procedimento de pancreatectomia distal para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },

  {
    id: "pancreas-pancreaticoduodenectomy",
    specimenTypeId: "pancreas-pancreaticoduodenectomy",
    name: "Duodenopancreatectomia cefálica",
    description:
      "Procedimento de duodenopancreatectomia cefálica para avaliação anatomopatológica.",
    order: 2,
    active: true,
  },

  {
    id: "pancreas-total-pancreatectomy",
    specimenTypeId: "pancreas-total-pancreatectomy",
    name: "Pancreatectomia total",
    description:
      "Procedimento de pancreatectomia total para avaliação anatomopatológica.",
    order: 3,
    active: true,
  },

  {
    id: "pancreas-segmental-resection",
    specimenTypeId: "pancreas-segmental-resection",
    name: "Ressecção pancreática segmentar",
    description:
      "Procedimento de ressecção pancreática segmentar para avaliação anatomopatológica.",
    order: 4,
    active: true,
  },

  // ============================================================
  // DERMATOLOGIA
  // ============================================================

  {
    id: "skin-lesion-excision",
    specimenTypeId: "skin-excision",
    name: "Excisão de lesão cutânea",
    description:
      "Procedimento de excisão de uma lesão cutânea para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },
];