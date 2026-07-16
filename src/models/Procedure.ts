/**
 * ============================================================
 * MacroAP
 * Procedure (Procedimento)
 * ============================================================
 *
 * Representa um procedimento associado
 * a um determinado tipo de peça.
 *
 * Exemplos:
 * - Total
 * - Subtotal
 * - Direita
 * - Esquerda
 * - Segmentar
 */

export interface Procedure {

  /** Identificador único */
  id: string;

  /** Tipo de peça */
  specimenTypeId: string;

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem */
  order: number;

  /** Ativo */
  active: boolean;
}