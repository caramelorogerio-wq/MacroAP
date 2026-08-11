import type { SpecimenType } from "../models/SpecimenType";

export const specimenTypes: SpecimenType[] = [
  {
    id: "skin-excision",
    organId: "skin",
    name: "Excisão de lesão cutânea",
    description: "Excisão cirúrgica de uma lesão da pele para avaliação anatomopatológica.",
    order: 1,
    active: true,
  },
];