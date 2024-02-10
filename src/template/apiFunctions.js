export const changeActiveEntity = async (changeActiveFun, entity, setEntity) => {
  let result = await changeActiveFun(entity.id);
  setEntity(result.data);
  return(result.data);
};

export const createEntity = async (createFun, entity, setEntity) => {
  try {
    let result = await createFun({...entity});
    setEntity(result.data);
    return(result.data);
  } catch (error) {
    var message = [];
    message.push(error.response.data.message);
    error.response.data.fieldErros?.forEach((fieldError) => 
      message.push(`\n ${fieldError.field}: ${fieldError.errorMsg}`)
    );
    throw new Error(message);
  }
};

export const updateEntity = async (updateFun, entity, setEntity) => {
  try {
    let result = await updateFun(entity.id, {...entity});
    setEntity(result.data);
    return(result.data);
  } catch (error) {
    var message = [];
    message.push(error.response.data.message);
    error.response.data.fieldErros?.forEach((fieldError) => 
      message.push(`\n ${fieldError.field}: ${fieldError.errorMsg}`)
    );
    throw new Error(message);
  }
};

export const findByFiltro = async (findFun, setEntities) => {
  try {
    let result = await findFun;
    setEntities(result.data);
    return result.data;
  } catch (error) {
    throw error;
  }
};