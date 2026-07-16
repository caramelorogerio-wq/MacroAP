/**
 * ============================================================
 * MacroAP
 * Field Value (Valor do Campo)
 * ============================================================
 *
 * Representa o valor introduzido pelo utilizador
 * para um determinado campo durante um exame.
 */

export interface FieldValue {

  /** Identificador único */
  id: string;

  /** Exame */
  examinationId: string;

  /** Campo */
  fieldId: string;

  /** Valor */
  value: string | number | boolean | null;

  /** Unidade (opcional) */
  unit?: string;

  /** Observações */
  notes?: string;
}