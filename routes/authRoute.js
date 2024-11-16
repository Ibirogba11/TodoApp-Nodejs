import express from "express"; 
const router = express.Router();
router.get('/register', (req, res) => {
    res.send('This is the register route')
})
router.get('/signup', (req, res) => {
    res.send('This is the register route')
})
router.get('/login', (req, res) => {
    res.send('This is the register route')
})
export default router 