import { useNavigate, useParams } from "react-router-dom";

import { OrganService } from "../services/organ.service";
import { specimenTypes } from "../data/specimenType";
import { procedures } from "../data/procedure";
import { ProtocolService } from "../services/protocol.service";

export default function SpecimenPage() {
  const navigate = useNavigate();
  const { organId } = useParams();

  const organ = OrganService.getById(
    organId ?? ""
  );

  const organSpecimenTypes = specimenTypes
    .filter(
      (specimenType) =>
        specimenType.organId === organId &&
        specimenType.active
    )
    .sort(
      (a, b) => a.order - b.order
    );

  return (
    <div className="dashboard">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Voltar
      </button>

      <h1>Tipos de Peça</h1>

      <h2>{organ?.name}</h2>

      <div className="cards">
        {organSpecimenTypes.length === 0 ? (
          <p>
            Não existem tipos de peça
            disponíveis para este órgão.
          </p>
        ) : (
          organSpecimenTypes.map(
            (specimenType) => {
              const specimenProcedures =
                procedures
                  .filter(
                    (procedure) =>
                      procedure.specimenTypeId ===
                        specimenType.id &&
                      procedure.active
                  )
                  .sort(
                    (a, b) =>
                      a.order - b.order
                  );

              return (
                <div
                  key={specimenType.id}
                  className="card"
                >
                  <h3>
                    {specimenType.name}
                  </h3>

                  {specimenType.description && (
                    <p>
                      {specimenType.description}
                    </p>
                  )}

                  {specimenProcedures.length > 0 && (
                    <div>
                      <strong>
                        Procedimentos
                      </strong>

                      {specimenProcedures.map(
                        (procedure) => {
                          const protocol =
                            ProtocolService.getActiveByProcedure(
                              procedure.id
                            );

                          return (
                            <div
                              key={procedure.id}
                              className="procedure-link"
                              onClick={() => {
                                if (protocol) {
                                  navigate(
                                    `/protocols/${protocol.id}`
                                  );
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(event) => {
                                if (
                                  event.key === "Enter" ||
                                  event.key === " "
                                ) {
                                  if (protocol) {
                                    navigate(
                                      `/protocols/${protocol.id}`
                                    );
                                  }
                                }
                              }}
                            >
                              <p>
                                {procedure.name}
                              </p>
                            </div>
                          );
                        }
                      )}
                    </div>
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