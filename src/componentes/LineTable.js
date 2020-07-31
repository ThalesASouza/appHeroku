import React from "react";
import css from "./lineTable.module.css";

export default function LineTable({ proposta }) {
  return (
   
        <tr className={css.flexRow}>
          <td className={css.colunaSequencia}>{proposta.SEQUENCIA}</td>
          <td className={css.colunaPadrao}>{proposta.PROPOSTA}</td>
          <td className={css.colunaNome}>{proposta.BENEFICIARIO}</td>
          <td className={css.colunaPadrao}>{proposta.DATA_INSERCAO}</td>
          <td className={css.colunaPadrao}>{proposta.VIGENCIA}</td>
          <td className={css.colunaPadrao}>{proposta.STATUS_BITIX}</td>
          <td className={css.colunaPadrao}>{proposta.STATUS_SABIUS}</td>
        </tr>
     
  );
}
