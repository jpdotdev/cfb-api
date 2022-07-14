const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())

const schools = {
  'pittsburgh': {
    'headCoach': 'Pat Narduzzi',
    'mascot': 'Roc The Panther',
    'previousRecord': '11-3'
  },
  'miami': {
    'headCoach': 'Mario Cristobal',
    'mascot': 'Sebastian the Ibis',
    'previousRecord': '7-5'
  },
  'virginia tech': {
    'headCoach': 'Brent Pry',
    'mascot': 'HokieBird',
    'previousRecord': '6-7'
  },
  'virginia': {
    'headCoach': 'Tony Elliot',
    'mascot': 'Cavalier',
    'previousRecord': '6-6'
  },
  'north carolina': {
    'headCoach': 'Mack Brown',
    'mascot': 'Rameses',
    'previousRecord': '6-7'
  },
  'georgia tech': {
    'headCoach': 'Geoff Collins',
    'mascot': 'Buzz',
    'previousRecord': '3-9'
  },
  'duke': {
    'headCoach': 'Mike Elko',
    'mascot': 'Blue Devil',
    'previousRecord': '3-9'
  },
  'unknown': {
    'headCoach': 'unknown',
    'mascot': 'unknown',
    'previousRecord': 'unknown'
  },
}

app.get('/', (request,response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:school', (request,response) => {
  const schoolName = request.params.school.toLowerCase()
  if (schools[schoolName]) {
    response.json(schools[schoolName])
  } else {
    response.json(schools['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is currently running on ${PORT}`)
})
