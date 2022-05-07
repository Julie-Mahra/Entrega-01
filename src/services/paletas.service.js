const Paletas = require('../models/paletas');


const findAllPaletasService = async () => {
  const allPaletas = await Paleta.find();
  return allPaletas;
};

const findByIdPaletaService = async (id) => {
  const onePaleta = await Paletas.findById(id);
  return onePaleta;
};

const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paleta.create(newPaleta)
  return createdPaleta;
};

const updatePaletaService = async (idParam, paletaEdited) => {
  const updatedPaleta = await Paleta.findByIdAndUpdate(idParam, paletaEdited);
  return updatedPaleta;
};

const deletePaletaService = async (idParam) => {
  return await Paleta.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
