import express from 'express';
import {beginningPage,usPage,contactPage,travelsPage,testimonialsPage,detailTravelPage} from '../controlers/pagesControlers.js'
import {saveTestimonials} from '../controlers/testimonialsControler.js'
const router = express.Router()


//req -> lo que envimos, res -> lo que express nos responde
router.get('/', beginningPage)


router.get('/nosotros',usPage)

router.get('/contacto',contactPage)

router.get('/viajes',travelsPage)
router.get('/viajes/:slug',detailTravelPage)

router.get('/testimoniales',testimonialsPage)
router.post('/testimoniales',saveTestimonials)

export default router;