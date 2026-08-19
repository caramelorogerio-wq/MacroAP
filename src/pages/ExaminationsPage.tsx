import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ExaminationService } from "../services/examination.service";
import { protocols } from "../data/protocol";
import { procedures } from "../data/procedure";
import { specimenTypes } from "../data/specimenType";
import { organs } from "../data/organ";

import "../styles/examinations.css";

type ExaminationFilter =
  | "All"
  | "Draft"
  | "InProgress"
  | "Completed"
  | "Archived";

export default function ExaminationsPage() {
  const navigate = useNavigate();

  const [filter, setFilter] =
    useState<ExaminationFilter>("All");

  const [refreshKey, setRefreshKey] =
    useState(0);

  const examinations = useMemo(
    () => ExaminationService.getAll(),
    [refreshKey]
  );

  const getProtocolName = (
    protocolId: string
  ) => {
    return (
      protocols.find(
        (protocol) =>
          protocol.id === protocolId
      )?.name ??
      "Protocolo desconhecido"
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(
      "pt-PT",
      {
        dateStyle: "short",
        timeStyle: "short",
      }
    ).format(date);
  };

  const createExamination = (
    protocolId: string
  ) => {
    const protocol = protocols.find(
      (item) =>
        item.id === protocolId
    );

    if (!protocol) {
      return;
    }

    const procedure = procedures.find(
      (item) =>
        item.id ===
        protocol.procedureId
    );

    if (!procedure) {
      return;
    }

    const specimenType =
      specimenTypes.find(
        (item) =>
          item.id ===
          procedure.specimenTypeId
      );

    if (!specimenType) {
      return;
    }

    const organ = organs.find(
      (item) =>
        item.id ===
        specimenType.organId
    );

    if (!organ) {
      return;
    }

    const examination =
      ExaminationService.createForProtocol(
        protocol.id,
        organ.id,
        specimenType.id,
        procedure.id
      );

    navigate(
      `/examinations/${examination.id}`
    );
  };

  const openExamination = (
    id: string
  ) => {
    navigate(
      `/examinations/${id}`
    );
  };

  const handleArchive = (
    id: string
  ) => {
    const examination =
      ExaminationService.getById(id);

    if (!examination) {
      return;
    }

    if (
      examination.status !==
      "Completed"
    ) {
      return;
    }

    const confirmed =
      window.confirm(
        "Tem a certeza de que pretende arquivar este exame?"
      );

    if (!confirmed) {
      return;
    }

    ExaminationService.archive(id);

    setRefreshKey(
      (current) => current + 1
    );
  };

  const handleDelete = (
    id: string
  ) => {
    const examination =
      ExaminationService.getById(id);

    if (!examination) {
      return;
    }

    if (
      examination.status !==
      "Draft"
    ) {
      return;
    }

    const confirmed =
      window.confirm(
        "Tem a certeza de que pretende eliminar este exame? Esta ação não pode ser anulada."
      );

    if (!confirmed) {
      return;
    }

    ExaminationService.delete(id);

    setRefreshKey(
      (current) => current + 1
    );
  };

  const availableProtocols =
    protocols.filter(
      (protocol) =>
        protocol.status === "Draft"
    );

  const filteredExaminations =
    useMemo(() => {
      if (filter === "All") {
        return examinations;
      }

      return examinations.filter(
        (examination) =>
          examination.status ===
          filter
      );
    }, [examinations, filter]);

  const counts = {
    All: examinations.length,

    Draft: examinations.filter(
      (examination) =>
        examination.status === "Draft"
    ).length,

    InProgress:
      examinations.filter(
        (examination) =>
          examination.status ===
          "InProgress"
      ).length,

    Completed:
      examinations.filter(
        (examination) =>
          examination.status ===
          "Completed"
      ).length,

    Archived:
      examinations.filter(
        (examination) =>
          examination.status ===
          "Archived"
      ).length,
  };

  const filters: {
    value: ExaminationFilter;
    label: string;
  }[] = [
    {
      value: "All",
      label: "Todos",
    },
    {
      value: "Draft",
      label: "Draft",
    },
    {
      value: "InProgress",
      label: "Em curso",
    },
    {
      value: "Completed",
      label: "Concluídos",
    },
    {
      value: "Archived",
      label: "Arquivados",
    },
  ];

  return (
    <main className="examinations-page">
      <section className="examinations-header">
        <span className="examinations-eyebrow">
          MACROAP
        </span>

        <h1>Exames</h1>

        <p>
          Lista de exames macroscópicos
          criados a partir dos protocolos
          disponíveis.
        </p>
      </section>

      <section className="examinations-new">
        <h2>Novo exame</h2>

        <p>
          Selecione um protocolo para
          iniciar um novo exame.
        </p>

        {availableProtocols.length ===
        0 ? (
          <p>
            Não existem protocolos
            disponíveis para iniciar um
            exame.
          </p>
        ) : (
          <div className="examinations-new-options">
            {availableProtocols.map(
              (protocol) => (
                <button
                  key={protocol.id}
                  type="button"
                  className="examination-new-button"
                  onClick={() =>
                    createExamination(
                      protocol.id
                    )
                  }
                >
                  Novo exame —{" "}
                  {protocol.name}
                </button>
              )
            )}
          </div>
        )}
      </section>

      <section className="examinations-filters">
        <div className="examinations-filter-list">
          {filters.map(
            (item) => (
              <button
                key={item.value}
                type="button"
                className={`examinations-filter ${
                  filter ===
                  item.value
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setFilter(
                    item.value
                  )
                }
              >
                <span>
                  {item.label}
                </span>

                <span className="examinations-filter-count">
                  {
                    counts[
                      item.value
                    ]
                  }
                </span>
              </button>
            )
          )}
        </div>
      </section>

      {filteredExaminations.length ===
      0 ? (
        <section className="examinations-empty">
          <h2>
            {filter === "All"
              ? "Nenhum exame"
              : "Nenhum exame neste estado"}
          </h2>

          <p>
            {filter === "All"
              ? "Ainda não existem exames registados."
              : "Não existem exames correspondentes ao filtro selecionado."}
          </p>
        </section>
      ) : (
        <section className="examinations-list">
          {filteredExaminations.map(
            (examination) => (
              <article
                key={examination.id}
                className="examination-card"
                onClick={() =>
                  openExamination(
                    examination.id
                  )
                }
                role="button"
                tabIndex={0}
                onKeyDown={(
                  event
                ) => {
                  if (
                    event.key ===
                      "Enter" ||
                    event.key ===
                      " "
                  ) {
                    openExamination(
                      examination.id
                    );
                  }
                }}
              >
                <div className="examination-card-main">
                  <span className="examination-label">
                    Exame
                  </span>

                  <h2>
                    {getProtocolName(
                      examination.protocolId
                    )}
                  </h2>

                  <span className="examination-date">
                    Criado em{" "}
                    {formatDate(
                      examination.createdAt
                    )}
                  </span>
                </div>

                <div className="examination-card-side">
                  <div
                    className={`examination-status examination-status-${examination.status.toLowerCase()}`}
                  >
                    {examination.status}
                  </div>

                  <div
                    className="examination-actions"
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                  >
                    {examination.status ===
                      "Draft" && (
                      <>
                        <button
                          type="button"
                          className="examination-action examination-action-primary"
                          onClick={() =>
                            openExamination(
                              examination.id
                            )
                          }
                        >
                          Continuar
                        </button>

                        <button
                          type="button"
                          className="examination-action examination-action-danger"
                          onClick={() =>
                            handleDelete(
                              examination.id
                            )
                          }
                        >
                          Eliminar
                        </button>
                      </>
                    )}

                    {examination.status ===
                      "InProgress" && (
                      <button
                        type="button"
                        className="examination-action examination-action-primary"
                        onClick={() =>
                          openExamination(
                            examination.id
                          )
                        }
                      >
                        Continuar
                      </button>
                    )}

                    {examination.status ===
                      "Completed" && (
                      <>
                        <button
                          type="button"
                          className="examination-action"
                          onClick={() =>
                            openExamination(
                              examination.id
                            )
                          }
                        >
                          Consultar
                        </button>

                        <button
                          type="button"
                          className="examination-action"
                          onClick={() =>
                            handleArchive(
                              examination.id
                            )
                          }
                        >
                          Arquivar
                        </button>
                      </>
                    )}

                    {examination.status ===
                      "Archived" && (
                      <button
                        type="button"
                        className="examination-action"
                        onClick={() =>
                          openExamination(
                            examination.id
                          )
                        }
                      >
                        Consultar
                      </button>
                    )}
                  </div>
                </div>
              </article>
            )
          )}
        </section>
      )}
    </main>
  );
}