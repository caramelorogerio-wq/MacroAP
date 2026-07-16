/**
 * ============================================================
 * MacroAP
 * Órgão
 * ============================================================
 */

export interface Organ {

  /** Identificador único */
  id: string;

  /** Sistema anatómico a que pertence */
  systemId: string;

  /** Nome do órgão */
  name: string;

  /** Nome científico (opcional) */
  scientificName?: string;

  /** Descrição */
  description?: string;

  /** Ordem de apresentação */
  order: number;

  /** Ativo */
  active: boolean;
}