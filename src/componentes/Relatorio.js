import React, { useState, useEffect } from "react";
import {
  getPrimeiroDia,
  getUltimoDia,
  getFormatData,
} from "../helpers/dateTimeHelpers.js";
import { comparador } from "../helpers/cruzadorDeDados.js";
import Table from "./Table.js";
import Inputs from "./Inputs.js"
import Button from "./Button.js"
import css from "./relatorio.module.css";
/*import json2xls from "json2xls";
import writefileP from 'write-file-p';
import fs from 'fs';*/


export default function Relatorio() {
  const [periodoInicial, setPeriodoInicial] = useState(getPrimeiroDia());
  const [periodoFinal, setPeriodoFinal] = useState(getUltimoDia());
  const [propostasSabius, setPropostasSabius] = useState([]);
  const [propostasBitix, setPropostasBitix] = useState([]);
  const [currentPropostas, setCurrentPropostas] = useState([]);
  const [quantidade, setQuantidade] = useState(10);
  const [butaoPassar, setButaoPassar] = useState(css.disable);
  const [butaoVoltar, setButaoVoltar] = useState(css.disable);
  const [filtroPropostas, setFiltroPropostas] = useState([]);

  const textVoltar = "<";
  const textPassar = ">";
  const inicial = getFormatData(periodoInicial);
  const final = getFormatData(periodoFinal);

  

  useEffect(() => {
    const consultaSabius = async () => {
      const resSab = await fetch(
        `https://sabapi.herokuapp.com/sabius/periodoSab?inicial=${inicial}&final=${final}`
      );

      const jsonSab = await resSab.json();
      setPropostasSabius(jsonSab);
    };

    const consultaBitix = async () => {
      const resBitix = await fetch(
        `https://btxapi.herokuapp.com/bitix/periodoBitix?inicial=${inicial}&final=${final}`
      );

      const jsonBitix = await resBitix.json();
      setPropostasBitix(jsonBitix);
      setQuantidade(10);
      setButaoVoltar(css.disable);
    };
    consultaSabius();
    consultaBitix();
  }, [inicial, final]);

  useEffect(() => {
    const cruzador = async () => {
      const dadosCruzados = await comparador(propostasSabius, propostasBitix);
      setCurrentPropostas(dadosCruzados);
      setFiltroPropostas(Object.assign([], dadosCruzados));
      if(dadosCruzados.length<=10){
        setButaoPassar(css.disable);
        setButaoVoltar(css.disable);
      }else{
        setButaoPassar(css.enable);
      }
     
    };
    cruzador();
    
  }, [propostasSabius, propostasBitix]);


  

  const handleData = (newData) => {
    const verificador = getFormatData(newData);
    verificador===final || verificador>final?alert("Periodo invalido"):setPeriodoInicial(newData);
  };

  const handleDataFinal = (newData) => {
    const verificador = getFormatData(newData);
    verificador===inicial || verificador<inicial?alert("Periodo invalido"):setPeriodoFinal(newData);
  };

  const passar = () => {
    let valor = quantidade + 10;
    setQuantidade(valor);
    setButaoVoltar(css.enable);
    if (valor > filtroPropostas.length || valor === filtroPropostas.length) {
      setButaoPassar(css.disable);
    }
  };

  const voltar = () => {
    let valor = quantidade - 10;
    if (valor >= 10) {
      setQuantidade(valor);
      setButaoPassar(css.enable);
      setButaoVoltar(css.enable);
    }
    if (valor === 10) {
      setButaoVoltar(css.disable);
    }
  };

  const filtered = (dado) => {
   
    const usersFilter = currentPropostas.filter((user) => {
      return user.STATUS_BITIX.includes(dado.toUpperCase());
    });
    setFiltroPropostas(usersFilter);
    if(usersFilter.length<=10){
      setButaoPassar(css.disable);
      setButaoVoltar(css.disable);
    }else{
      setButaoPassar(css.enable);
    }
  };

 /* const teste = () =>{
    let xls = json2xls(filtroPropostas);
    fs.writeFileSync("../data/CRUZAMENTO_DE_DADOS_BITIX_E_SAB.xlsx", xls, 'binary')
    })
  }*/
  return (
    <div>
      <Inputs type="date" value={periodoInicial} onChange={handleData} />
      <Inputs type="date" value={periodoFinal} onChange={handleDataFinal} />
      <Inputs type="text" onChange={filtered} />
      <Button onClick={voltar} classN={butaoVoltar} value={textVoltar}/>
      <Button onClick={passar} classN={butaoPassar} value={textPassar}/>
      <Table propostas={filtroPropostas} valor={quantidade} />
      <a
        href="../data/CRUZAMENTO_DE_DADOS_BITIX_E_SAB.xlsx"
        download="CRUZAMENTO_DE_DADOS_BITIX_E_SAB.xlsx"
      >
        <Button  value="DOWNLOAD" classN={css.enable}/>
      </a>
    </div>
  );
}
