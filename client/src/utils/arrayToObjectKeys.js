const arrayToObjectKeys = (array, key) =>
  array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur[key]]: cur
    }),
    {}
  )

export default arrayToObjectKeys
