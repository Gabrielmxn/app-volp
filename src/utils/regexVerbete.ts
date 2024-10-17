export function regexVerbete(description: string){
  const regex =  /\w+\.*(\..*)/
  const verbete = description.replace(regex, '')

  if(!verbete){
    const verbeteDescriptionRegex = description.replace(/\w+\.*(.)/, '').trim()
    const [auxVerbetes, tw] = description.split(verbeteDescriptionRegex)
    return auxVerbetes
  }
  
 return verbete
}