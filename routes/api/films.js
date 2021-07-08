const router = require('express').Router()

const { Film } = require('../../db')


router.get('/', async (req, res) => { // Trae todas las películas
    //console.log(req.usuarioId)
    const films = await Film.findAll()
    res.json(films)
})

router.post('/', async (req, res) => { // Crea una nueva película
    const film = await Film.create(req.body)
    res.json(film)
})

router.put('/:filmId', async (req, res) => { // Actualiza de una película
    await Film.update(req.body, {
        where: { id: req.params.filmId }
    })
    res.json({ success: 'Se ha modificado!' })
})

router.delete('/:filmId', async (req, res) => { // Borra una película
    await Film.destroy({
        where: { id: req.params.filmId }
    })
    res.json({ success: 'Se ha borrado la película!' })
})

module.exports = router