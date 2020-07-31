function consultaBit(inicial, final) {
  const consultaBitix = async () => {
    const resBitix = await fetch(
      `https://btxapi.herokuapp.com/bitix/periodoBitix?inicial=${inicial}&final=${final}`
    );

    const jsonBitix = await resBitix.json();
    return jsonBitix;
  };
  consultaBitix();
}
export { consultaBit };
