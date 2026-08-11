/**
 * ============================================================
 * MacroAP
 * Field Option (Opção de Campo)
 * ============================================================
 *
 * Representa uma opção disponível num campo do tipo
 * select ou multiselect.
 */

export interface FieldOption {
  /** Identificador único */
  id: string;

  /** Campo ao qual pertence */
  fieldId: string;

  /** Texto apresentado ao utilizador */
  label: string;

  /** Valor armazenado */
  value: string;

  /** Ordem de apresentação */
  order: number;

  /** Opção ativa */
  active: boolean;
}