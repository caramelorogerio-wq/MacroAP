/**
 * ============================================================
 * MacroAP
 * Area (Área)
 * ============================================================
 *
 * Representa uma área de conhecimento pertencente
 * a uma especialidade.
 *
 * Exemplos:
 * - Macroscopia
 * - Microscopia
 * - Citologia
 * - Patologia Molecular
 */

export interface Area {

  /** Identificador único */
  id: string;

  /** Especialidade a que pertence */
  specialtyId: string;

  /** Nome da área */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem de apresentação */
  order: number;

  /** Ativa */
  active: boolean;
}