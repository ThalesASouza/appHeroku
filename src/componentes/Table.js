import React from "react";
import LineTable from "./LineTable";
import css from "./table.module.css";

export default function Table({ propostas, valor }) {
  let i = valor - 10;
  let newPro = [];
  if (propostas.length !== 0) {
    for (; i < valor; i++) {
      if (propostas[i] === undefined) {
        break;
      }
      newPro.push(propostas[i]);
    }
  }
  return (
    <div>
      <table>
        <thead>
          <tr className={css.flexRow}>
            <th className={css.colunaSequencia}>SEQUENCIA</th>
            <th className={css.colunaPadrao}>PROPOSTA</th>
            <th className={css.colunaNome}>BENEFICIARIO</th>
            <th className={css.colunaPadrao}>INSERCAO</th>
            <th className={css.colunaPadrao}>VIGENCIA</th>
            <th className={css.colunaPadrao}>BITIX</th>
            <th className={css.colunaPadrao}>SABIUS</th>
          </tr>
        </thead>
        <tbody>
          {newPro.map((proposta, index) => {
            return (
              <LineTable key={proposta.SEQUENCIA * index} proposta={proposta} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
