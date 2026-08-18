import { useNavigate } from "react-router-dom";

import { ExaminationService } from "../services/examination.service";
import { protocols } from "../data/protocol";

import "../styles/examinations.css";

export default function ExaminationsPage() {
  const navigate = useNavigate();
  const examinations = ExaminationService.getAll();

  const getProtocolName = (protocolId: string) => {
    return (
      protocols.find((protocol) => protocol.id === protocolId)?.name ??
      "Protocolo desconhecido"
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-PT", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <main className="examinations-page">
      <section className="examinations-header">
        <span className="examinations-eyebrow">
          MACROAP
        </span>

        <h1>Exames</h1>

        <p>
          Lista de exames macroscópicos criados a partir dos
          protocolos disponíveis.
        </p>
      </section>

      {examinations.length === 0 ? (
        <section className="examinations-empty">
          <h2>Nenhum exame</h2>

          <p>
            Ainda não existem exames registados.
          </p>
        </section>
      ) : (
        <section className="examinations-list">
          {examinations.map((examination) => (
            <article
              key={examination.id}
              className="examination-card"
              onClick={() =>
                navigate(`/examinations/${examination.id}`)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  navigate(
                    `/examinations/${examination.id}`
                  );
                }
              }}
            >
              <div className="examination-card-main">
                <span className="examination-label">
                  Exame
                </span>

                <h2>
                  {getProtocolName(examination.protocolId)}
                </h2>

                <span className="examination-date">
                  Criado em{" "}
                  {formatDate(examination.createdAt)}
                </span>
              </div>

              <div
                className={`examination-status examination-status-${examination.status.toLowerCase()}`}
              >
                {examination.status}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}