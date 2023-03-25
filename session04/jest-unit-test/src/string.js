export const iniciaCon = (str, strToFind) => str.startsWith(strToFind)
export const terminaCon = (str, strToFind) => str.endsWith(strToFind)
export const incluye = (str, strToFind) => str.includes(strToFind)
export const templateString = (persona) => `Bienvenido ${persona.nombre} ${persona.apellido}, entraste como ${persona.rol}`
//export const completaAlInicio = (str, targethLength, padString) => str.padStart(targethLength,padString)