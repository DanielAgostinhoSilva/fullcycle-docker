const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");

    const sql = `
        create table if not exists people (
          id bigint not null auto_increment,
          name varchar(255) not null,
          
          primary key (id)
        ) engine=InnoDB default charset=utf8;
    `;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

app.get('/', (req, res) => {
    saveRandomPeople()
        .then(person => {
            findAllPeople()
                .then(people => {
                    res.send(getHome(people))
                })
        })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

function saveRandomPeople() {
    const peopleName = `Fulano ${Math.floor(Math.random() * 100)}`;

    return new Promise(((resolve, reject) => {
        connection.query(`INSERT INTO people(name) values('${peopleName}')`, (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log('Pessoa criada!')
            resolve(results);
        });
    }));
}

function findAllPeople() {
    return new Promise(((resolve, reject) => {
        connection.query('SELECT * FROM people', (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(results);
        });
    }));
}

function getHome(people) {
    let html = '<h1>Full Cycle Rocks!</h1>'

    people.forEach(person => {
        console.log(person)
        html += `<p>${person.name}</p>`;
    })

    return html;
}