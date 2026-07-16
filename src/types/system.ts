/**
 * ============================================================
 * MacroAP
 * Sistema Anatómico
 * ============================================================
 */

export interface System {

  /** Identificador único */
  id: string;

  /** Nome do sistema */
  name: string;

  /** Descrição */
  description: string;

  /** Ícone (Lucide React) */
  icon: string;

  /** Ordem de apresentação */
  order: number;

  /** Ativo */
  active: boolean;
}