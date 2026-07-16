/**
 * ============================================================
 * MacroAP
 * Tipo de Peça (Specimen)
 * ============================================================
 */

export interface Specimen {

  /** Identificador único */
  id: string;

  /** Órgão a que pertence */
  organId: string;

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Código interno (opcional) */
  code?: string;

  /** Ordem de apresentação */
  order: number;

  /** Ativo */
  active: boolean;
}