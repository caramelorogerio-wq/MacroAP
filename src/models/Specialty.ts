/**
 * ============================================================
 * MacroAP
 * Specialty (Especialidade)
 * ============================================================
 *
 * Representa a especialidade médica à qual pertence
 * um conjunto de áreas de conhecimento.
 *
 * Exemplos:
 * - Anatomia Patológica
 * - Citologia
 * - Patologia Molecular
 */

export interface Specialty {

  /** Identificador único */
  id: string;

  /** Nome da especialidade */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem de apresentação */
  order: number;

  /** Ativa */
  active: boolean;
}