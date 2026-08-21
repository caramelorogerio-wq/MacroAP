import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { ExaminationService } from "../services/examination.service";
import { protocols } from "../data/protocol";
import { procedures } from "../data/procedure";
import { specimenTypes } from "../data/specimenType";
import { organs } from "../data/organ";
import { sections } from "../data/section";
import { fields } from "../data/field";
import { fieldOptions } from "../data/fieldOption";

import "../styles/examination.css";

export default function ExaminationPage() {
  const navigate = useNavigate();

  const { examinationId } =
    useParams<{
      examinationId: string;
    }>();

  const examination =
    examinationId
      ? ExaminationService.getById(
          examinationId
        )
      : undefined;

  const [answers, setAnswers] =
    useState<
      Record<string, unknown>
    >(
      examination?.answers ?? {}
    );

  useEffect(() => {
    if (examination) {
      setAnswers(
        examination.answers ?? {}
      );
    }
  }, [examination?.id]);

  if (!examination) {
    return (
      <main className="examination-page">
        <section className="examination-empty">
          <span className="examination-eyebrow">
            MACROAP
          </span>

          <h1>
            Exame não encontrado
          </h1>

          <p>
            O exame solicitado não
            existe ou já foi removido.
          </p>

          <button
            type="button"
            className="examination-back-button"
            onClick={() =>
              navigate("/examinations")
            }
          >
            Voltar aos exames
          </button>
        </section>
      </main>
    );
  }

  const protocol = protocols.find(
    (item) =>
      item.id ===
      examination.protocolId
  );

  const procedure = procedures.find(
    (item) =>
      item.id ===
      examination.procedureId
  );

  const specimenType =
    specimenTypes.find(
      (item) =>
        item.id ===
        examination.specimenTypeId
    );

  const organ = organs.find(
    (item) =>
      item.id ===
      examination.organId
  );

  const protocolSections =
    sections
      .filter(
        (section) =>
          section.protocolId ===
            examination.protocolId &&
          section.active
      )
      .sort(
        (a, b) =>
          a.order - b.order
      );

  const isReadOnly =
    examination.status ===
      "Completed" ||
    examination.status ===
      "Archived";

  const getAnswer = (
    fieldId: string
  ): unknown => {
    return answers[fieldId];
  };

  const saveAnswer = (
    fieldId: string,
    value: unknown
  ) => {
    setAnswers((current) => ({
      ...current,
      [fieldId]: value,
    }));

    ExaminationService.setAnswer(
      examination.id,
      fieldId,
      value
    );
  };

  const formatDate = (
    date: Date
  ) => {
    return new Intl.DateTimeFormat(
      "pt-PT",
      {
        dateStyle: "short",
        timeStyle: "short",
      }
    ).format(date);
  };

  const getStatusLabel = () => {
    switch (
      examination.status
    ) {
      case "Draft":
        return "Draft";

      case "InProgress":
        return "Em curso";

      case "Completed":
        return "Concluído";

      case "Archived":
        return "Arquivado";

      default:
        return examination.status;
    }
  };

  const handleStart = () => {
    ExaminationService.start(
      examination.id
    );

    window.location.reload();
  };

  const handleComplete = () => {
    ExaminationService.complete(
      examination.id
    );

    window.location.reload();
  };

  const handleBackToExaminations =
    () => {
      navigate("/examinations");
    };

  return (
    <main className="examination-page">
      {/* =====================================================
          CABEÇALHO
          ===================================================== */}

      <section className="examination-header">
        <div>
          <span className="examination-eyebrow">
            MACROAP
          </span>

          <span className="examination-type">
            Exame macroscópico
          </span>

          <h1>
            {protocol?.name ??
              "Exame sem protocolo"}
          </h1>

          <p>
            Ficha do exame e informação
            do protocolo utilizado.
          </p>
        </div>

        <div
          className={`examination-status examination-status-${examination.status.toLowerCase()}`}
        >
          {getStatusLabel()}
        </div>
      </section>

      {/* =====================================================
          AÇÕES
          ===================================================== */}

      <section className="examination-actions-panel">
        {examination.status ===
          "Draft" && (
          <button
            type="button"
            className="examination-primary-button"
            onClick={handleStart}
          >
            Iniciar exame
          </button>
        )}

        {examination.status ===
          "InProgress" && (
          <button
            type="button"
            className="examination-primary-button"
            onClick={handleComplete}
          >
            Concluir exame
          </button>
        )}

        <button
          type="button"
          className="examination-secondary-button"
          onClick={
            handleBackToExaminations
          }
        >
          Voltar aos exames
        </button>
      </section>

      {/* =====================================================
          DADOS DO EXAME
          ===================================================== */}

      <section className="examination-section">
        <div className="examination-section-header">
          <span className="examination-section-label">
            INFORMAÇÃO
          </span>

          <h2>
            Dados do exame
          </h2>
        </div>

        <div className="examination-details">
          <div className="examination-detail">
            <span>
              Protocolo
            </span>

            <strong>
              {protocol?.name ??
                "Protocolo desconhecido"}
            </strong>
          </div>

          <div className="examination-detail">
            <span>
              Órgão
            </span>

            <strong>
              {organ?.name ??
                "Órgão desconhecido"}
            </strong>
          </div>

          <div className="examination-detail">
            <span>
              Tipo de peça
            </span>

            <strong>
              {specimenType?.name ??
                "Tipo de peça desconhecido"}
            </strong>
          </div>

          <div className="examination-detail">
            <span>
              Procedimento
            </span>

            <strong>
              {procedure?.name ??
                "Procedimento desconhecido"}
            </strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROTOCOLO
          ===================================================== */}

      <section className="examination-section">
        <div className="examination-section-header">
          <span className="examination-section-label">
            PROTOCOLO
          </span>

          <h2>
            {protocol?.name ??
              "Protocolo"}
          </h2>
        </div>

        <div>
          {protocolSections.length ===
          0 ? (
            <p>
              Não existem secções
              disponíveis para este
              protocolo.
            </p>
          ) : (
            protocolSections.map(
              (section) => {
                const sectionFields =
                  fields
                    .filter(
                      (field) =>
                        field.sectionId ===
                          section.id &&
                        field.active
                    )
                    .sort(
                      (a, b) =>
                        a.order -
                        b.order
                    );

                return (
                  <div
                    key={section.id}
                    className="examination-section"
                  >
                    <div className="examination-section-header">
                      <span className="examination-section-label">
                        SECÇÃO{" "}
                        {section.order}
                      </span>

                      <h2>
                        {section.name}
                      </h2>

                      {section.description && (
                        <p>
                          {
                            section.description
                          }
                        </p>
                      )}
                    </div>

                    <div className="examination-details">
                      {sectionFields.length ===
                      0 ? (
                        <p>
                          Não existem
                          campos disponíveis
                          nesta secção.
                        </p>
                      ) : (
                        sectionFields.map(
                          (field) => {
                            const options =
                              fieldOptions
                                .filter(
                                  (option) =>
                                    option.fieldId ===
                                      field.id &&
                                    option.active
                                )
                                .sort(
                                  (a, b) =>
                                    a.order -
                                    b.order
                                );

                            const answer =
                              getAnswer(
                                field.id
                              );

                            return (
                              <div
                                key={
                                  field.id
                                }
                                className="examination-detail"
                              >
                                <span>
                                  {
                                    field.name
                                  }

                                  {field.required &&
                                    " *"}
                                </span>

                                {field.description && (
                                  <small>
                                    {
                                      field.description
                                    }
                                  </small>
                                )}

                                {/* TEXT */}

                                {field.type ===
                                  "text" && (
                                  <input
                                    type="text"
                                    value={
                                      typeof answer ===
                                      "string"
                                        ? answer
                                        : ""
                                    }
                                    disabled={
                                      isReadOnly
                                    }
                                    onChange={(
                                      event
                                    ) =>
                                      saveAnswer(
                                        field.id,
                                        event
                                          .target
                                          .value
                                      )
                                    }
                                  />
                                )}

                                {/* TEXTAREA */}

                                {field.type ===
                                  "textarea" && (
                                  <textarea
                                    rows={4}
                                    value={
                                      typeof answer ===
                                      "string"
                                        ? answer
                                        : ""
                                    }
                                    disabled={
                                      isReadOnly
                                    }
                                    onChange={(
                                      event
                                    ) =>
                                      saveAnswer(
                                        field.id,
                                        event
                                          .target
                                          .value
                                      )
                                    }
                                  />
                                )}

                                {/* NUMBER */}

                                {field.type ===
                                  "number" && (
                                  <input
                                    type="number"
                                    value={
                                      typeof answer ===
                                        "number" ||
                                      typeof answer ===
                                        "string"
                                        ? answer
                                        : ""
                                    }
                                    disabled={
                                      isReadOnly
                                    }
                                    onChange={(
                                      event
                                    ) => {
                                      const value =
                                        event
                                          .target
                                          .value;

                                      saveAnswer(
                                        field.id,
                                        value ===
                                          ""
                                          ? ""
                                          : Number(
                                              value
                                            )
                                      );
                                    }}
                                  />
                                )}

                                {/* DECIMAL */}

                                {field.type ===
                                  "decimal" && (
                                  <input
                                    type="number"
                                    step="0.01"
                                    value={
                                      typeof answer ===
                                        "number" ||
                                      typeof answer ===
                                        "string"
                                        ? answer
                                        : ""
                                    }
                                    disabled={
                                      isReadOnly
                                    }
                                    onChange={(
                                      event
                                    ) => {
                                      const value =
                                        event
                                          .target
                                          .value;

                                      saveAnswer(
                                        field.id,
                                        value ===
                                          ""
                                          ? ""
                                          : Number(
                                              value
                                            )
                                      );
                                    }}
                                  />
                                )}

                                {/* MEASUREMENT */}

                                {field.type ===
                                  "measurement" && (
                                  <div>
                                    <input
                                      type="number"
                                      step="0.01"
                                      value={
                                        typeof answer ===
                                          "number" ||
                                        typeof answer ===
                                          "string"
                                          ? answer
                                          : ""
                                      }
                                      disabled={
                                        isReadOnly
                                      }
                                      onChange={(
                                        event
                                      ) => {
                                        const value =
                                          event
                                            .target
                                            .value;

                                        saveAnswer(
                                          field.id,
                                          value ===
                                            ""
                                            ? ""
                                            : Number(
                                                value
                                              )
                                        );
                                      }}
                                    />

                                    {field.unit && (
                                      <span>
                                        {" "}
                                        {
                                          field.unit
                                        }
                                      </span>
                                    )}
                                  </div>
                                )}

                                {/* DATE */}

                                {field.type ===
                                  "date" && (
                                  <input
                                    type="date"
                                    value={
                                      typeof answer ===
                                      "string"
                                        ? answer
                                        : ""
                                    }
                                    disabled={
                                      isReadOnly
                                    }
                                    onChange={(
                                      event
                                    ) =>
                                      saveAnswer(
                                        field.id,
                                        event
                                          .target
                                          .value
                                      )
                                    }
                                  />
                                )}

                                {/* BOOLEAN */}

                                {field.type ===
                                  "boolean" && (
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={
                                        answer ===
                                        true
                                      }
                                      disabled={
                                        isReadOnly
                                      }
                                      onChange={(
                                        event
                                      ) =>
                                        saveAnswer(
                                          field.id,
                                          event
                                            .target
                                            .checked
                                        )
                                      }
                                    />

                                    {" "}
                                    Sim / Não
                                  </label>
                                )}

                                {/* SELECT */}

                                {field.type ===
                                  "select" && (
                                  <select
                                    value={
                                      typeof answer ===
                                      "string"
                                        ? answer
                                        : ""
                                    }
                                    disabled={
                                      isReadOnly
                                    }
                                    onChange={(
                                      event
                                    ) =>
                                      saveAnswer(
                                        field.id,
                                        event
                                          .target
                                          .value
                                      )
                                    }
                                  >
                                    <option value="">
                                      Selecionar...
                                    </option>

                                    {options.map(
                                      (
                                        option
                                      ) => (
                                        <option
                                          key={
                                            option.id
                                          }
                                          value={
                                            option.value
                                          }
                                        >
                                          {
                                            option.label
                                          }
                                        </option>
                                      )
                                    )}
                                  </select>
                                )}

                                {/* MULTISELECT */}

                                {field.type ===
                                  "multiselect" && (
                                  <div>
                                    {options.map(
                                      (
                                        option
                                      ) => {
                                        const current =
                                          Array.isArray(
                                            answer
                                          )
                                            ? answer
                                            : [];

                                        return (
                                          <label
                                            key={
                                              option.id
                                            }
                                            style={{
                                              display:
                                                "block",
                                            }}
                                          >
                                            <input
                                              type="checkbox"
                                              checked={current.includes(
                                                option.value
                                              )}
                                              disabled={
                                                isReadOnly
                                              }
                                              onChange={(
                                                event
                                              ) => {
                                                const next =
                                                  event
                                                    .target
                                                    .checked
                                                    ? [
                                                        ...current,
                                                        option.value,
                                                      ]
                                                    : current.filter(
                                                        (
                                                          value
                                                        ) =>
                                                          value !==
                                                          option.value
                                                      );

                                                saveAnswer(
                                                  field.id,
                                                  next
                                                );
                                              }}
                                            />

                                            {" "}
                                            {
                                              option.label
                                            }
                                          </label>
                                        );
                                      }
                                    )}
                                  </div>
                                )}

                                {/* PHOTO */}

                                {field.type ===
                                  "photo" && (
                                  <input
                                    type="file"
                                    accept="image/*"
                                    disabled={
                                      isReadOnly
                                    }
                                    onChange={(
                                      event
                                    ) => {
                                      const file =
                                        event
                                          .target
                                          .files?.[0];

                                      if (
                                        !file
                                      ) {
                                        return;
                                      }

                                      saveAnswer(
                                        field.id,
                                        {
                                          name: file.name,
                                          type: file.type,
                                        }
                                      );
                                    }}
                                  />
                                )}

                                {/* TABLE */}

                                {field.type ===
                                  "table" && (
                                  <p>
                                    Tabela a
                                    implementar.
                                  </p>
                                )}
                              </div>
                            );
                          }
                        )
                      )}
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>
      </section>

      {/* =====================================================
          HISTÓRICO
          ===================================================== */}

      <section className="examination-section">
        <div className="examination-section-header">
          <span className="examination-section-label">
            HISTÓRICO
          </span>

          <h2>
            Datas
          </h2>
        </div>

        <div className="examination-details">
          <div className="examination-detail">
            <span>
              Criado em
            </span>

            <strong>
              {formatDate(
                examination.createdAt
              )}
            </strong>
          </div>

          <div className="examination-detail">
            <span>
              Atualizado em
            </span>

            <strong>
              {formatDate(
                examination.updatedAt
              )}
            </strong>
          </div>
        </div>
      </section>
    </main>
  );
}