/**
 * ============================================================
 * MacroAP
 * Section (Secção)
 * ============================================================
 *
 * Representa uma secção de um protocolo.
 *
 * Exemplos:
 * - Dados Clínicos
 * - Material Recebido
 * - Tumor
 * - Margens
 * - Linfonodos
 * - Fotografias
 */

export interface Section {

  /** Identificador único */
  id: string;

  /** Protocolo */
  protocolId: string;

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem de apresentação */
  order: number;

  /** Pode ser repetida */
  repeatable: boolean;

  /** Ativa */
  active: boolean;
}