/**
 * ============================================================
 * MacroAP
 * Specimen Type (Tipo de Peça)
 * ============================================================
 *
 * Representa o tipo de peça pertencente
 * a um determinado órgão.
 *
 * Exemplos:
 * - Biópsia
 * - Gastrectomia
 * - Colectomia
 * - Mastectomia
 */

export interface SpecimenType {

  /** Identificador único */
  id: string;

  /** Órgão */
  organId: string;

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem */
  order: number;

  /** Ativo */
  active: boolean;
}