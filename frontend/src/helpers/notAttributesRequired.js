const notAttributesRequired = (attributes) => {
  const array = attributes.filter((attribute) => (
    attribute !== 'id' && attribute !== 'nome' && attribute !== 'tipoDeMaterialGenetico'
    && attribute !== 'texturaDoGrao' && attribute !== 'origem'
    && attribute !== 'transgenico' && attribute !== 'eventosTransgenicos'
    && attribute !== 'localNaCamaraFria' && attribute !== 'dataDeEntrada'
    && attribute !== 'dataDaUltimaColheita'));
  return array;
};

export default notAttributesRequired;
