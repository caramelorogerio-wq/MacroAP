/**
 * ============================================================
 * MacroAP
 * Plataforma Inteligente de Apoio à Macroscopia
 * ============================================================
 * Entidade principal: Protocol
 */

export type ProtocolStatus =
  | "draft"
  | "review"
  | "published"
  | "archived";

export interface Protocol {

  /** Identificador único */
  id: string;

  /** Código interno */
  code: string;

  /** URL amigável */
  slug: string;

  /** Título */
  title: string;

  /** Versão */
  version: string;

  /** Estado */
  status: ProtocolStatus;

  /** Sistema anatómico */
  systemId: string;

  /** Órgão */
  organId: string;

  /** Tipo de peça */
  specimenId: string;

  /** Objetivo */
  objective: string;

  /** Descrição */
  description: string;

  /** Observações */
  observations: string;

  /** Autor */
  authorId: string;

  /** Data de criação */
  createdAt: string;

  /** Última atualização */
  updatedAt: string;
}