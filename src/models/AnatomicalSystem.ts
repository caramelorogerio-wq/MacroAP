/**
 * ============================================================
 * MacroAP
 * Anatomical System (Sistema Anatómico)
 * ============================================================
 *
 * Representa um sistema anatómico pertencente
 * a uma determinada área.
 *
 * Exemplos:
 * - Sistema Digestivo
 * - Sistema Respiratório
 * - Sistema Urinário
 * - Sistema Endócrino
 */

export interface AnatomicalSystem {

  /** Identificador único */
  id: string;

  /** Área a que pertence */
  areaId: string;

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Ordem */
  order: number;

  /** Ativo */
  active: boolean;
}