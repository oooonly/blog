import fs from 'node:fs'

export default path => {
  const prefix = path.substr(path.lastIndexOf('src') + 3)
  const records = fs.readdirSync(path).map(pkg => {
    return pkg
  })
  const routes = records.map(record => {
    const text = record.substring(0, record.lastIndexOf('.'))

    return {
      text,
      link: `${prefix}/${text}`
    }
  })
  return routes
}
