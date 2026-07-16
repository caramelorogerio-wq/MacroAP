/**
 * ============================================================
 * MacroAP
 * Protocol (Protocolo)
 * ============================================================
 *
 * Representa um protocolo macroscópico.
 *
 * Um protocolo é constituído por um conjunto ordenado
 * de blocos reutilizáveis.
 */

export interface Protocol {

  /** Identificador */
  id: string;

  /** Procedimento */
  procedureId: string;

  /** Código interno */
  code: string;

  /** Nome */
  name: string;

  /** Descrição */
  description?: string;

  /** Número da versão */
  version: string;

  /** Estado */
  status:
    | "Draft"
    | "Review"
    | "Published"
    | "Archived";

  /** Autor */
  author: string;

  /** Data de criação */
  createdAt: Date;

  /** Última atualização */
  updatedAt: Date;

  /** Data de publicação */
  publishedAt?: Date;

  /** Ativo */
  active: boolean;
}