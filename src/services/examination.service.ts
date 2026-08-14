import type { Examination } from "../models/Examination";

const STORAGE_KEY = "macroap_examinations";

export class ExaminationService {
  static getAll(): Examination[] {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    try {
      const examinations = JSON.parse(stored) as Examination[];

      return examinations.map((examination) => ({
        ...examination,
        createdAt: new Date(examination.createdAt),
        updatedAt: new Date(examination.updatedAt),
      }));
    } catch {
      return [];
    }
  }

  static getById(id: string): Examination | undefined {
    return this.getAll().find(
      (examination) => examination.id === id
    );
  }

  static create(examination: Examination): Examination {
    const examinations = this.getAll();

    examinations.push(examination);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(examinations)
    );

    return examination;
  }

  static update(examination: Examination): Examination {
    const examinations = this.getAll();

    const index = examinations.findIndex(
      (item) => item.id === examination.id
    );

    if (index === -1) {
      return this.create(examination);
    }

    examinations[index] = {
      ...examination,
      updatedAt: new Date(),
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(examinations)
    );

    return examinations[index];
  }

  static delete(id: string): void {
    const examinations = this.getAll().filter(
      (examination) => examination.id !== id
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(examinations)
    );
  }
}