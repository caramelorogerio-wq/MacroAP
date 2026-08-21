/**
 * ============================================================
 * MacroAP
 * Examination (Exame)
 * ============================================================
 *
 * Representa um exame/caso concreto em que um protocolo
 * macroscópico é aplicado.
 *
 * O Examination não define o protocolo.
 * Representa a utilização de uma determinada versão
 * de um protocolo num caso concreto.
 */

export interface Examination {
  /** Identificador único */
  id: string;

  /** Protocolo utilizado */
  protocolId: string;

  /** Órgão */
  organId: string;

  /** Tipo de peça */
  specimenTypeId: string;

  /** Procedimento */
  procedureId: string;

  /** Respostas aos campos do protocolo */
  answers: Record<string, unknown>;

  /** Data de criação do exame */
  createdAt: Date;

  /** Última atualização */
  updatedAt: Date;

  /** Estado do exame */
  status:
    | "Draft"
    | "InProgress"
    | "Completed"
    | "Archived";
}