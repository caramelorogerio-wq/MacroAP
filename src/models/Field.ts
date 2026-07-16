/**
 * ============================================================
 * MacroAP
 * Field (Campo)
 * ============================================================
 *
 * Representa um campo pertencente
 * a uma secção de um protocolo.
 */

export interface Field {

  /** Identificador único */
  id: string;

  /** Secção */
  sectionId: string;

  /** Nome do campo */
  name: string;

  /** Descrição */
  description?: string;

  /** Tipo de campo */
  type:
    | "text"
    | "textarea"
    | "number"
    | "decimal"
    | "date"
    | "boolean"
    | "select"
    | "multiselect"
    | "measurement"
    | "table"
    | "photo";

  /** Unidade (mm, cm, g, etc.) */
  unit?: string;

  /** Campo obrigatório */
  required: boolean;

  /** Ordem de apresentação */
  order: number;

  /** Ativo */
  active: boolean;
}