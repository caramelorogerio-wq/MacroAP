/**
 * ============================================================
 * MacroAP
 * Campo Estruturado
 * ============================================================
 */

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "decimal"
  | "date"
  | "boolean"
  | "select"
  | "multiselect";

export interface Field {

  /** Identificador único */
  id: string;

  /** Bloco a que pertence */
  blockId: string;

  /** Nome interno */
  name: string;

  /** Etiqueta apresentada ao utilizador */
  label: string;

  /** Tipo de campo */
  type: FieldType;

  /** Obrigatório */
  required: boolean;

  /** Valor por defeito */
  defaultValue?: string;

  /** Unidade (cm, mm, g, etc.) */
  unit?: string;

  /** Ordem de apresentação */
  order: number;
}