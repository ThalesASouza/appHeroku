function comparador(dadosSab,dadosBitix) {
  
    let encontrados = [];
    let naoEncontrados = [];
  
    const jsonPre = () => {
         
          dadosSab.map(propP =>{
            const compararB = dadosBitix.find(propB => propP.PROPOSTA === propB.oper_protocolo);
           
            if(compararB===undefined){
              const {PROPOSTA,SEQUENCIA,EQUIPE,DATA_INSERCAO,VIGENCIA,BOLETO,DEPENDENCIA,BENEFICIARIO,STATUS} = propP;
              const array = {
                SEQUENCIA,
                PROPOSTA,
                BENEFICIARIO,
                DEPENDENCIA,
                STATUS,
                EQUIPE,
                DATA_INSERCAO,
                VIGENCIA,
                BOLETO
              };
  
              naoEncontrados.push(array);
              return ' ';
            }
  
            const {PROPOSTA,SEQUENCIA,EQUIPE,DATA_INSERCAO,VIGENCIA,BOLETO,DEPENDENCIA,BENEFICIARIO,STATUS} = propP;
            const STATUS_BITIX = Object.values(compararB);
            const array = {
              id: STATUS_BITIX[0],
              SEQUENCIA,
              PROPOSTA,
              BENEFICIARIO,
              DEPENDENCIA,
              STATUS_SABIUS: STATUS.substr(0,10),
              STATUS_BITIX:STATUS_BITIX[3].toUpperCase(),
              EQUIPE,
              DATA_INSERCAO: `${DATA_INSERCAO.substr(-16, 2)}/${DATA_INSERCAO.substr(-19, 2)}/${DATA_INSERCAO.substr(-24, 4)}`,
              VIGENCIA: `${VIGENCIA.substr(-16, 2)}/${VIGENCIA.substr(-19, 2)}/${VIGENCIA.substr(-24, 4)}`,
              BOLETO
            };
  
            encontrados.push(array);
            return ' ';
  
          })
        
    }
      
    
    jsonPre();
    return encontrados;
  }

  export {comparador}