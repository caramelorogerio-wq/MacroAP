import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { protocols } from "../data/protocol";
import { procedures } from "../data/procedure";
import { specimenTypes } from "../data/specimenType";
import { organs } from "../data/organ";
import { sections } from "../data/section";
import { fields } from "../data/field";
import { fieldOptions } from "../data/fieldOption";

import type { Examination } from "../models/Examination";
import type { FieldValue } from "../models/FieldValue";

import { ExaminationService } from "../services/examination.service";
import { FieldValueService } from "../services/fieldValue.service";

import "../styles/protocol.css";

export default function ProtocolPage() {
  const { protocolId } = useParams<{ protocolId: string }>();
  const navigate = useNavigate();

  const protocol = protocols.find((item) => item.id === protocolId);

  const procedure = protocol
    ? procedures.find((item) => item.id === protocol.procedureId)
    : undefined;

  const specimenType = procedure
    ? specimenTypes.find(
        (item) => item.id === procedure.specimenTypeId
      )
    : undefined;

  const organ = specimenType
    ? organs.find((item) => item.id === specimenType.organId)
    : undefined;

  const [examination] = useState<Examination | null>(() => {
    if (!protocol || !procedure || !specimenType || !organ) {
      return null;
    }

    const existingExamination = ExaminationService
      .getAll()
      .find(
        (item) =>
          item.protocolId === protocol.id &&
          item.status !== "Archived"
      );

    if (existingExamination) {
      return existingExamination;
    }

    const now = new Date();

    const newExamination: Examination = {
      id: crypto.randomUUID(),
      protocolId: protocol.id,
      organId: organ.id,
      specimenTypeId: specimenType.id,
      procedureId: procedure.id,
      createdAt: now,
      updatedAt: now,
      status: "Draft",
    };

    return ExaminationService.create(newExamination);
  });

  const [fieldValues, setFieldValues] = useState<FieldValue[]>(() => {
    if (!examination) {
      return [];
    }

    return FieldValueService.getByExaminationId(
      examination.id
    );
  });

  if (!protocol || !procedure || !specimenType || !organ || !examination) {
    return (
      <main className="protocol-page">
        <button
          type="button"
          className="protocol-back"
          onClick={() => navigate(-1)}
        >
          ← Voltar
        </button>

        <section className="protocol-header">
          <h1>Protocolo não encontrado</h1>

          <p className="protocol-description">
            Não foi possível encontrar todos os dados necessários
            para iniciar este exame.
          </p>
        </section>
      </main>
    );
  }

  const updateFieldValue = (
    fieldId: string,
    value: string | number | boolean | null
  ) => {
    const savedValue = FieldValueService.save(
      examination.id,
      fieldId,
      value
    );

    setFieldValues((currentValues) => {
      const existingValue = currentValues.find(
        (item) => item.id === savedValue.id
      );

      if (existingValue) {
        return currentValues.map((item) =>
          item.id === savedValue.id
            ? savedValue
            : item
        );
      }

      return [...currentValues, savedValue];
    });

    ExaminationService.update({
      ...examination,
      updatedAt: new Date(),
    });
  };

  const getFieldValue = (fieldId: string) => {
    return fieldValues.find(
      (item) =>
        item.examinationId === examination.id &&
        item.fieldId === fieldId
    )?.value;
  };

  const protocolSections = sections
    .filter(
      (section) =>
        section.protocolId === protocol.id && section.active
    )
    .sort((a, b) => a.order - b.order);

  return (
    <main className="protocol-page">
      <button
        type="button"
        className="protocol-back"
        onClick={() => navigate(-1)}
      >
        ← Voltar
      </button>

      <section className="protocol-header">
        <span className="protocol-eyebrow">
          Protocolo MacroAP
        </span>

        <h1>{protocol.name}</h1>

        <p className="protocol-description">
          {protocol.description}
        </p>

        <div className="protocol-meta">
          <span className="protocol-meta-item">
            <strong>Código:</strong> {protocol.code}
          </span>

          <span className="protocol-meta-item">
            <strong>Versão:</strong> {protocol.version}
          </span>

          <span className="protocol-meta-item">
            <strong>Estado:</strong> {protocol.status}
          </span>

          <span className="protocol-meta-item">
            <strong>Exame:</strong> {examination.status}
          </span>
        </div>
      </section>

      <section className="protocol-sections">
        {protocolSections.map((section) => {
          const sectionFields = fields
            .filter(
              (field) =>
                field.sectionId === section.id && field.active
            )
            .sort((a, b) => a.order - b.order);

          return (
            <article
              className="protocol-section"
              key={section.id}
            >
              <div className="protocol-section-header">
                <span className="protocol-section-number">
                  {String(section.order).padStart(2, "0")}
                </span>

                <div>
                  <h2>{section.name}</h2>

                  {section.description && (
                    <p>{section.description}</p>
                  )}
                </div>
              </div>

              {sectionFields.length > 0 && (
                <div className="protocol-fields">
                  {sectionFields.map((field) => {
                    const options = fieldOptions
                      .filter(
                        (option) =>
                          option.fieldId === field.id &&
                          option.active
                      )
                      .sort((a, b) => a.order - b.order);

                    const currentValue = getFieldValue(field.id);

                    return (
                      <div
                        className="protocol-field"
                        key={field.id}
                      >
                        <label htmlFor={field.id}>
                          {field.name}

                          {field.required && (
                            <span className="required-mark">
                              {" "}
                              *
                            </span>
                          )}
                        </label>

                        {field.description && (
                          <span className="field-description">
                            {field.description}
                          </span>
                        )}

                        {field.type === "text" && (
                          <input
                            id={field.id}
                            type="text"
                            value={
                              typeof currentValue === "string"
                                ? currentValue
                                : ""
                            }
                            onChange={(event) =>
                              updateFieldValue(
                                field.id,
                                event.target.value
                              )
                            }
                            placeholder="Introduzir informação..."
                          />
                        )}

                        {field.type === "textarea" && (
                          <textarea
                            id={field.id}
                            rows={4}
                            value={
                              typeof currentValue === "string"
                                ? currentValue
                                : ""
                            }
                            onChange={(event) =>
                              updateFieldValue(
                                field.id,
                                event.target.value
                              )
                            }
                            placeholder="Introduzir informação..."
                          />
                        )}

                        {field.type === "number" && (
                          <input
                            id={field.id}
                            type="number"
                            value={
                              typeof currentValue === "number"
                                ? currentValue
                                : ""
                            }
                            onChange={(event) =>
                              updateFieldValue(
                                field.id,
                                event.target.value === ""
                                  ? null
                                  : Number(event.target.value)
                              )
                            }
                            placeholder="Introduzir valor..."
                          />
                        )}

                        {field.type === "decimal" && (
                          <input
                            id={field.id}
                            type="number"
                            step="0.01"
                            value={
                              typeof currentValue === "number"
                                ? currentValue
                                : ""
                            }
                            onChange={(event) =>
                              updateFieldValue(
                                field.id,
                                event.target.value === ""
                                  ? null
                                  : Number(event.target.value)
                              )
                            }
                            placeholder="Introduzir valor..."
                          />
                        )}

                        {field.type === "date" && (
                          <input
                            id={field.id}
                            type="date"
                            value={
                              typeof currentValue === "string"
                                ? currentValue
                                : ""
                            }
                            onChange={(event) =>
                              updateFieldValue(
                                field.id,
                                event.target.value
                              )
                            }
                          />
                        )}

                        {field.type === "boolean" && (
                          <label className="boolean-field">
                            <input
                              id={field.id}
                              type="checkbox"
                              checked={currentValue === true}
                              onChange={(event) =>
                                updateFieldValue(
                                  field.id,
                                  event.target.checked
                                )
                              }
                            />
                            <span>Sim / Não</span>
                          </label>
                        )}

                        {field.type === "select" && (
                          <select
                            id={field.id}
                            value={
                              typeof currentValue === "string"
                                ? currentValue
                                : ""
                            }
                            onChange={(event) =>
                              updateFieldValue(
                                field.id,
                                event.target.value
                              )
                            }
                          >
                            <option value="" disabled>
                              Selecionar...
                            </option>

                            {options.map((option) => (
                              <option
                                key={option.id}
                                value={option.value}
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}

                        {field.type === "multiselect" && (
                          <select
                            id={field.id}
                            multiple
                            value={
                              typeof currentValue === "string" &&
                              currentValue.length > 0
                                ? currentValue.split(",")
                                : []
                            }
                            onChange={(event) => {
                              const values = Array.from(
                                event.target.selectedOptions,
                                (option) => option.value
                              );

                              updateFieldValue(
                                field.id,
                                values.join(",")
                              );
                            }}
                          >
                            {options.map((option) => (
                              <option
                                key={option.id}
                                value={option.value}
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}

                        {field.type === "measurement" && (
                          <div className="measurement-field">
                            <input
                              id={field.id}
                              type="number"
                              step="0.01"
                              value={
                                typeof currentValue === "number"
                                  ? currentValue
                                  : ""
                              }
                              onChange={(event) =>
                                updateFieldValue(
                                  field.id,
                                  event.target.value === ""
                                    ? null
                                    : Number(event.target.value)
                                )
                              }
                              placeholder="Valor..."
                            />

                            {field.unit && (
                              <span className="field-unit">
                                {field.unit}
                              </span>
                            )}
                          </div>
                        )}

                        {field.type === "table" && (
                          <div className="field-placeholder">
                            Tabela — implementação futura
                          </div>
                        )}

                        {field.type === "photo" && (
                          <div className="field-placeholder">
                            Campo de fotografia — implementação futura
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}