const router = require('express').Router()
const { Todo } = require('../db').models;


router.get('/', (req, res, next) => {
  Todo.findAll()
    .then(todos => res.send(todos))
    .catch(next)
})

router.get('/:todoId', (req, res, next) => {
  Todo.findByPk(req.params.todoId)
    .then(todo => res.send(todo))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Todo.create(req.body)
    .then(todo => res.send(todo))
    .catch(next)
})

router.put('/:todoId', (req, res, next) => {
  Todo.findByPk(req.params.todoId)
    .then(todo => todo.update(req.body))
    .then(todo => res.json(todo))
    .catch(next)
})

router.delete('/:todoId', (req, res, next) => {
  Todo.destroy({
    where: { id: req.params.todoId }
  })
    .then(() => res.status(204).end())
    .catch(next)
})


module.exports = router;