const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

// setImmediate
// setInterval

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) // 20 segundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // 0 - domingo, 1 - segunda, 2 - terça ... 6 - sábado
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando terafa 2!', new Date().getSeconds())
})
