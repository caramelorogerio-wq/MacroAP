/**
 * ============================================================
 * MacroAP
 * Bloco de Protocolo
 * ============================================================
 */

export type BlockType =
  | "text"
  | "checklist"
  | "table"
  | "image"
  | "gallery"
  | "reference"
  | "fields"
  | "note"
  | "warning";

export interface Block {

  /** Identificador único */
  id: string;

  /** Protocolo a que pertence */
  protocolId: string;

  /** Tipo de bloco */
  type: BlockType;

  /** Título */
  title: string;

  /** Conteúdo */
  content: string;

  /** Ordem de apresentação */
  order: number;

  /** Obrigatório */
  required: boolean;
}