const express = require('express')
const morgan = require('morgan')
const app = express()

morgan.token('content', function (req, res) {
    if(req.method == 'POST')
    {
        return JSON.stringify(req.body)
    }
    else
    {
        return ""
    }
 })

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms  conent- :content'))

const ids = new Set([1, 2, 3, 4])

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
}) 
  
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const time = new Date()
    response.send(`<p>Phonebook has info for ${persons.length} people </br> ${time}<p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id) 
    const person = persons.find(person => person.id === id)
    if (person){
        response.json(person)
    } else {
        response.status(404).end()
    }    
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const generateId = () => {
    let id = Math.round( Math.random() * 1000000 )
    while (ids.has(id))
    {
        id = Math.round( Math.random() * 1000000 )
    }
    ids.add(id)
    return id
}

const checkDuplicate = (name) => {
    if(persons.find(person => person.name.trim().toLowerCase() === name.trim().toLowerCase()))
    {
        return true
    }
    return false
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name){
        return response.status(400).json({
            error: "missing name"
        })
    } else if(!body.number) {
        return response.status(400).json({
            error: "missing number"
        })
    } else if (checkDuplicate(body.name)){
        return response.status(400).json({
            error: "Duplicate name"
        })
    }

    const person = {
        id : generateId(),
        name : body.name, 
        number : body.number
    }

    persons = persons.concat(person) 

    response.json(person)
})

const PORT = 3001
app.listen(PORT , ()=>{
    console.log('Server Running on port: ', PORT);
})