import type { Procedure } from "../models/Procedure";

export const procedures: Procedure[] = [
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