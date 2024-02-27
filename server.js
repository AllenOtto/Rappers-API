const express = require('express')
const app = express()
const cors = require('cors') 
const figlet = require('figlet')
const PORT = 8000

app.use(cors())

const rappers = {
    "kali": {
        'stageName': 'Kaligraph Jones',
        'age': 34,
        'birthName': 'Brian Omolo',
        'birthLocation': 'Kayole, Nairobi'
    },
    "octo": {
        'stageName': 'Octopizzo',
        'age': 38,
        'birthName': 'Ohanga',
        'birthLocation': 'Kibera'
    },
    "kaka": {
        'stageName': 'Rabbit/Kaka Sungura',
        'age': 38,
        'birthName': '',
        'birthLocation': 'Kisumu'
    },
    'nyash': {
        'stageName': 'Nyashinski',
        'age': 40,
        'birthName': 'Nyakundi',
        'birthLocation': 'South C'
    }
}

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

app.get('/api/:rapper', (req, res) => {
    const rapperName = req.params.rapper.toLowerCase()
    if(rappers[rapperName]) {
        res.json(rappers[rapperName] )
    } else {
        res.json('Rapper not in our Database');
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${8000}. 
    Betta go catch it!`)
});

