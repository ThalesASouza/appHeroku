function consultaSab(inicial, final) {
  const consultaSabius = async () => {
    const resSab = await fetch(
      `https://sabapi.herokuapp.com/sabius/periodoSab?inicial=${inicial}&final=${final}`
    );

    const jsonSab = await resSab.json();
    return jsonSab;
  };
  consultaSabius();
}
export {consultaSab}