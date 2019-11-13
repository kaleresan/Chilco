export function flat(objectOrArray, prefix = '', formatter = k => k) {
  const nestedFormatter = k => '.' + k;
  const nestElement = (prev, value, key) =>
    value && typeof value === 'object'
      ? {
          ...prev,
          ...flat(value, `${prefix}${formatter(key)}`, nestedFormatter)
        }
      : { ...prev, ...{ [`${prefix}${formatter(key)}`]: value } };

  return Array.isArray(objectOrArray)
    ? objectOrArray.reduce(nestElement, {})
    : Object.keys(objectOrArray).reduce(
        (prev, element) => nestElement(prev, objectOrArray[element], element),
        {}
      );
}
