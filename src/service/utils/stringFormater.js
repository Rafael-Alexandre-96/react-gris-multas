export const formatData = (mongoDateTime) => {
    let year = mongoDateTime?.substring(0, 4);
    let month = mongoDateTime?.substring(5, 7);
    let day = mongoDateTime?.substring(8, 10);
    let hs = mongoDateTime?.substring(11, 16);
    return `${day}/${month}/${year} ${hs}`
};

export const limitString = (string, letters = 1) => {
    return string?.substring(0, letters);
}