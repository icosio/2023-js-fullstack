import  {terminaCon, completaAlInicio, iniciaCon, incluye,templateString} from '../string'
//import {terminaCon} from '../string'
const cupcakeipsum = "Sweet roll macaroon chocolate chupa chups topping gummi bears cake apple pie. Carrot cake apple pie candy sugar plum cake marshmallow cake dessert. Candy dessert apple pie icing donut. Apple pie brownie topping liquorice lemon drops danish dessert."

const personas = [
    {
        nombre: "Ethien",
        apellido: "Salinas",
        rol: "admin"
    },
    {
        nombre: "Sharon",
        apellido: "Ramirez",
        rol: "estudiante"
    },
    {
        nombre: "Patty",
        apellido: "Ocampo",
        rol: "estudiante"
    },
]

const numeroDeTdc = '1234567890001234'

test('prueba simple de iniciaCon', () => {
    expect(iniciaCon(cupcakeipsum,'roll')).toBeFalsy()
    expect(iniciaCon(cupcakeipsum,'sweet')).toBeFalsy()
    expect(iniciaCon(cupcakeipsum,'Sweet')).toBeTruthy()
    //toBe(true)
})

test('prueba simple de TEerminaCon', () => {
    expect(terminaCon(cupcakeipsum,'roll')).toBeFalsy()
    expect(terminaCon(cupcakeipsum,'sweet')).toBeFalsy()
    expect(terminaCon(cupcakeipsum,'dessert.')).toBeTruthy()
    //toBe(true)
})

test('prueba simple de Incluye (includes )', () => {
    expect(incluye(cupcakeipsum,'ROLL')).toBeFalsy()
    expect(incluye(cupcakeipsum,'sweEt')).toBeFalsy()
    expect(incluye(cupcakeipsum,'dessert.')).toBeTruthy()
    //toBe(true)
})



test('prueba de template string', () => {
    expect(templateString(personas[0])).toBe("Bienvenido Ethien Salinas, entraste como admin")
    expect(templateString(personas[1])).toBe("Bienvenido Sharon Ramirez, entraste como estudiante")
    expect(templateString(personas[2])).toBe("Bienvenido Patty Ocampo, entraste como estudiante")
})

//test('pruega de compleaAlInicio', () => {
//    expect(completaAlInicio(numeroDeTdc.split(-4), numeroDeTdc.length,"*")).toBe("************1234")
//})