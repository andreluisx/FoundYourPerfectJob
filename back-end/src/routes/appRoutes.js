import express from 'express'
import { allPosts, Post, addNewPost } from '../controllers/appController.js'

const routes = (app) => {
    app.use(express.json())
    app.get('/results', allPosts)
    app.get('/results/:id', Post)
    app.post('/results', addNewPost)
}

export default routes