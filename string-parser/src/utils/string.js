const parseStringIntoSnakeCase = (string) => {
  return string
    .split(' ')
    .map((token) => token.toLowerCase())
    .join('_')
}

export { parseStringIntoSnakeCase }
