import type { Organ } from "../models/Organ";

export const organs: Organ[] = [
  {
    id: "colon",
    anatomicalSystemId: "digestive",
    name: "Cólon",
    description: "Intestino grosso",
    order: 1,
    active: true,
  },
  {
    id: "appendix",
    anatomicalSystemId: "digestive",
    name: "Apêndice",
    description: "Apêndice vermiforme",
    order: 2,
    active: true,
  },
  {
    id: "stomach",
    anatomicalSystemId: "digestive",
    name: "Estômago",
    description: "Estômago",
    order: 3,
    active: true,
  },
  {
    id: "lung",
    anatomicalSystemId: "respiratory",
    name: "Pulmão",
    description: "Pulmão",
    order: 1,
    active: true,
  },
  {
    id: "breast",
    anatomicalSystemId: "breast",
    name: "Mama",
    description: "Glândula mamária",
    order: 1,
    active: true,
  },
];