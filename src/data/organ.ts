import type { Organ } from "../models/Organ";

export const organs: Organ[] = [
  // ============================================================
  // SISTEMA DIGESTIVO
  // ============================================================

  {
    id: "esophagus",
    anatomicalSystemId: "digestive",
    name: "Esófago",
    description: "Esófago",
    order: 1,
    active: true,
  },

  {
    id: "stomach",
    anatomicalSystemId: "digestive",
    name: "Estômago",
    description: "Estômago",
    order: 2,
    active: true,
  },

  {
    id: "duodenum",
    anatomicalSystemId: "digestive",
    name: "Duodeno",
    description: "Duodeno",
    order: 3,
    active: true,
  },

  {
    id: "jejunum",
    anatomicalSystemId: "digestive",
    name: "Jejuno",
    description: "Jejuno",
    order: 4,
    active: true,
  },

  {
    id: "ileum",
    anatomicalSystemId: "digestive",
    name: "Íleon",
    description: "Íleon",
    order: 5,
    active: true,
  },

  {
    id: "colon",
    anatomicalSystemId: "digestive",
    name: "Cólon",
    description: "Intestino grosso",
    order: 6,
    active: true,
  },

  {
    id: "sigmoid",
    anatomicalSystemId: "digestive",
    name: "Sigmoide",
    description: "Cólon sigmoide",
    order: 7,
    active: true,
  },

  {
    id: "rectum",
    anatomicalSystemId: "digestive",
    name: "Recto",
    description: "Recto",
    order: 8,
    active: true,
  },

  {
    id: "appendix",
    anatomicalSystemId: "digestive",
    name: "Apêndice íleo-cecal",
    description: "Apêndice íleo-cecal",
    order: 9,
    active: true,
  },

  {
    id: "liver",
    anatomicalSystemId: "digestive",
    name: "Fígado",
    description: "Fígado",
    order: 10,
    active: true,
  },

  {
    id: "gallbladder",
    anatomicalSystemId: "digestive",
    name: "Vesícula biliar",
    description: "Vesícula biliar",
    order: 11,
    active: true,
  },

  {
    id: "pancreas",
    anatomicalSystemId: "digestive",
    relatedSystemIds: ["endocrine"],
    name: "Pâncreas",
    description: "Pâncreas",
    order: 12,
    active: true,
  },

  // ============================================================
  // SISTEMA RESPIRATÓRIO
  // ============================================================

  {
    id: "nose",
    anatomicalSystemId: "respiratory",
    name: "Nariz",
    description: "Nariz",
    order: 1,
    active: true,
  },

  {
    id: "larynx",
    anatomicalSystemId: "respiratory",
    relatedSystemIds: ["head-neck"],
    name: "Laringe",
    description: "Laringe",
    order: 2,
    active: true,
  },

  {
    id: "trachea",
    anatomicalSystemId: "respiratory",
    name: "Traqueia",
    description: "Traqueia",
    order: 3,
    active: true,
  },

  {
    id: "lung",
    anatomicalSystemId: "respiratory",
    name: "Pulmão",
    description: "Pulmão",
    order: 4,
    active: true,
  },

  {
    id: "pleura",
    anatomicalSystemId: "respiratory",
    name: "Pleura",
    description: "Pleura",
    order: 5,
    active: true,
  },

  // ============================================================
  // SISTEMA GINECOLÓGICO
  // ============================================================

  {
    id: "vulva",
    anatomicalSystemId: "gynecologic",
    name: "Vulva",
    description: "Vulva",
    order: 1,
    active: true,
  },

  {
    id: "vagina",
    anatomicalSystemId: "gynecologic",
    name: "Vagina",
    description: "Vagina",
    order: 2,
    active: true,
  },

  {
    id: "cervix",
    anatomicalSystemId: "gynecologic",
    name: "Colo do útero",
    description: "Colo do útero",
    order: 3,
    active: true,
  },

  {
    id: "uterus",
    anatomicalSystemId: "gynecologic",
    name: "Corpo do útero",
    description: "Corpo do útero",
    order: 4,
    active: true,
  },

  {
    id: "fallopian-tube",
    anatomicalSystemId: "gynecologic",
    name: "Trompa uterina",
    description: "Trompa uterina",
    order: 5,
    active: true,
  },

  {
    id: "ovary",
    anatomicalSystemId: "gynecologic",
    name: "Ovário",
    description: "Ovário",
    order: 6,
    active: true,
  },

  // ============================================================
  // SISTEMA UROLÓGICO
  // ============================================================

  {
    id: "kidney",
    anatomicalSystemId: "urologic",
    name: "Rim",
    description: "Rim",
    order: 1,
    active: true,
  },

  {
    id: "adrenal-gland",
    anatomicalSystemId: "urologic",
    relatedSystemIds: ["endocrine"],
    name: "Glândula supra-renal",
    description: "Glândula supra-renal",
    order: 2,
    active: true,
  },

  {
    id: "renal-pelvis",
    anatomicalSystemId: "urologic",
    name: "Pelve renal",
    description: "Pelve renal",
    order: 3,
    active: true,
  },

  {
    id: "ureter",
    anatomicalSystemId: "urologic",
    name: "Ureter",
    description: "Ureter",
    order: 4,
    active: true,
  },

  {
    id: "bladder",
    anatomicalSystemId: "urologic",
    name: "Bexiga",
    description: "Bexiga urinária",
    order: 5,
    active: true,
  },

  {
    id: "urethra",
    anatomicalSystemId: "urologic",
    name: "Uretra",
    description: "Uretra",
    order: 6,
    active: true,
  },

  {
    id: "prostate",
    anatomicalSystemId: "urologic",
    name: "Próstata",
    description: "Próstata",
    order: 7,
    active: true,
  },

  // ============================================================
  // MAMA
  // ============================================================

  {
    id: "breast",
    anatomicalSystemId: "breast",
    name: "Mama",
    description: "Glândula mamária",
    order: 1,
    active: true,
  },

  // ============================================================
  // CABEÇA E PESCOÇO
  // ============================================================

  {
    id: "oral-cavity",
    anatomicalSystemId: "head-neck",
    name: "Cavidade oral",
    description: "Cavidade oral",
    order: 1,
    active: true,
  },

  {
    id: "tongue",
    anatomicalSystemId: "head-neck",
    name: "Língua",
    description: "Língua",
    order: 2,
    active: true,
  },

  {
    id: "salivary-glands",
    anatomicalSystemId: "head-neck",
    name: "Glândulas salivares",
    description: "Glândulas salivares",
    order: 3,
    active: true,
  },

  {
    id: "pharynx",
    anatomicalSystemId: "head-neck",
    name: "Faringe",
    description: "Faringe",
    order: 4,
    active: true,
  },

  {
    id: "thyroid",
    anatomicalSystemId: "head-neck",
    relatedSystemIds: ["endocrine"],
    name: "Tiroide",
    description: "Glândula tiroide",
    order: 5,
    active: true,
  },

  {
    id: "parathyroid-glands",
    anatomicalSystemId: "head-neck",
    relatedSystemIds: ["endocrine"],
    name: "Glândulas paratiroideias",
    description: "Glândulas paratiroideias",
    order: 6,
    active: true,
  },

  // ============================================================
  // SISTEMA ENDÓCRINO
  // ============================================================

  {
    id: "pituitary",
    anatomicalSystemId: "endocrine",
    name: "Hipófise",
    description: "Hipófise",
    order: 1,
    active: true,
  },

  // ============================================================
  // DERMATOLOGIA
  // ============================================================

  {
    id: "skin",
    anatomicalSystemId: "dermatology",
    name: "Pele",
    description: "Pele e anexos cutâneos",
    order: 1,
    active: true,
  },

  {
    id: "nail",
    anatomicalSystemId: "dermatology",
    name: "Unha",
    description: "Unha",
    order: 2,
    active: true,
  },
];