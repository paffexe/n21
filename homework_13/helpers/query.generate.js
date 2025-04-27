const queryGenerate = (data) =>{
    let keys = Object.keys(data);
    return keys.join("=?,") + "=?"
}


module.exports = {
    queryGenerate
}