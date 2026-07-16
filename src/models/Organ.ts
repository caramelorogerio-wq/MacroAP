/**
 * ============================================================
 * MacroAP
 * Organ (Órgão)
 * ============================================================
 *
 * Representa um órgão pertencente a um
 * sistema anatómico.
 *
 * Exemplos:
 * - Estômago
 * - Cólon
 * - Fígado
 * - Pulmão
 */

export interface Organ {

  /** Identificador único */
  id: string;

  /** Sistema anatómico */
  anatomicalSystemId: string;

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem */
  order: number;

  /** Ativo */
  active: boolean;
}