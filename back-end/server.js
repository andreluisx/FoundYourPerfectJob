import express from 'express'
import routes from './src/routes/appRoutes.js'
import cors from 'cors';

const app = express()

app.use(express.static('uploads'))

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

try {
    routes(app)
} catch (error) {
    console.error('Erro ao carregar rotas:', error)
}
  
app.listen(8000, ()=>{
    console.log('server escutando...')
})