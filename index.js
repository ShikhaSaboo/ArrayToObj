module.exports = (list, keyLabel, valueLabel ) => {
  const obj = {};
  list.forEach(i => {
    if(obj.hasOwnProperty(i[keyLabel])) {
      const previousData = Array.isArray(obj[i[keyLabel]]) ? obj[i[keyLabel]] : [obj[i[keyLabel]]];
      obj[i[keyLabel]] = [...previousData, i]
    }
    else obj[i[keyLabel]] = valueLabel ? i[valueLabel] : i
  });
  return obj
};
