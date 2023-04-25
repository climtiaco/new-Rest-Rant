const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Hearthstone',
        city: 'Las Vegas',
        state: 'Nevada',
        cuisines: 'American',
        pic: 'https://www.redrockresort.com/wp-content/uploads/2020/04/RR-Hearthstone-01-scaled.jpg'
    }, {
        name: 'North Italia',
        city: 'Las Vegas',
        state: 'Nevada',
        cuisines: 'Italian',
        pic: 'https://cdn.vox-cdn.com/thumbor/dox3bJKz25UiYgHuDexAdZPD-Wo=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/57976773/North_Italia___Dining_Room_4.0.jpg'

    }]
    res.render('places/index', { places })
});

module.exports = router