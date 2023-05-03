const router = require('express').Router()


//New
router.get('/new', (req, res) => {
    res.render('places/new')
})


// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Hearthstone',
        city: 'Las Vegas',
        state: 'Nevada',
        cuisines: 'American',
        pic: '/images/Hearthstone-pic.jpg'
    }, {
        name: 'North Italia',
        city: 'Las Vegas',
        state: 'Nevada',
        cuisines: 'Italian',
        pic: '/images/norf-pic.jpg'

    }]
    res.render('places/index', { places })
});

module.exports = router