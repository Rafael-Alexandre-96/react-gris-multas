export const changeActiveEntity = async (changeActiveFun, entity) => {
  let result = await changeActiveFun(entity.id);
  return(result.data);
};

export const createEntity = async (createFun, entity) => {
  try {
    let result = await createFun({...entity});
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

export const updateEntity = async (updateFun, entity) => {
  try {
    let result = await updateFun(entity.id, {...entity});
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

export const findBy = async (findFun) => {
  try {
    let result = await findFun;
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async(deleteFun, entity) => {
  try {
    let result = await deleteFun(entity.id);
    return result.data;
  } catch (error) {
    throw error;
  }
};