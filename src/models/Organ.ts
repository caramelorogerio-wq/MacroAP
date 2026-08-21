/**
 * ============================================================
 * MacroAP
 * Organ (Órgão)
 * ============================================================
 *
 * Representa um órgão pertencente a um
 * sistema anatómico principal.
 *
 * Um órgão pode estar relacionado com outros
 * sistemas anatómicos sem ser duplicado
 * no catálogo.
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

  /** Sistema anatómico principal */
  anatomicalSystemId: string;

  /** Sistemas anatómicos relacionados */
  relatedSystemIds?: string[];

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem */
  order: number;

  /** Ativo */
  active: boolean;
}