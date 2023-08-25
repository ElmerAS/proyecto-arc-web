const resolve = (query) => {
  const req = 'https://my-json-server.typicode.com/ElmerAS/demo/phrases'
  if (query.hasOwnProperty('idp')) return `${req}?author=${query.idp}`
  throw new Error('No id provided in content source')
}

export default { resolve, params: {idp: "string"} }