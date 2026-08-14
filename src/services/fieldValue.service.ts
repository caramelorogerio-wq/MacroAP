import type { FieldValue } from "../models/FieldValue";

const STORAGE_KEY = "macroap_field_values";

export class FieldValueService {
  static getAll(): FieldValue[] {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored) as FieldValue[];
    } catch {
      return [];
    }
  }

  static getByExaminationId(
    examinationId: string
  ): FieldValue[] {
    return this.getAll().filter(
      (fieldValue) =>
        fieldValue.examinationId === examinationId
    );
  }

  static getByFieldId(
    examinationId: string,
    fieldId: string
  ): FieldValue | undefined {
    return this.getAll().find(
      (fieldValue) =>
        fieldValue.examinationId === examinationId &&
        fieldValue.fieldId === fieldId
    );
  }

  static create(fieldValue: FieldValue): FieldValue {
    const values = this.getAll();

    values.push(fieldValue);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(values)
    );

    return fieldValue;
  }

  static update(fieldValue: FieldValue): FieldValue {
    const values = this.getAll();

    const index = values.findIndex(
      (item) => item.id === fieldValue.id
    );

    if (index === -1) {
      return this.create(fieldValue);
    }

    values[index] = fieldValue;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(values)
    );

    return fieldValue;
  }

  static save(
    examinationId: string,
    fieldId: string,
    value: string | number | boolean | null,
    unit?: string
  ): FieldValue {
    const existing = this.getByFieldId(
      examinationId,
      fieldId
    );

    if (existing) {
      return this.update({
        ...existing,
        value,
        unit,
      });
    }

    return this.create({
      id: crypto.randomUUID(),
      examinationId,
      fieldId,
      value,
      unit,
    });
  }

  static delete(id: string): void {
    const values = this.getAll().filter(
      (fieldValue) => fieldValue.id !== id
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(values)
    );
  }
}