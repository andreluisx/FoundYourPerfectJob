import { getAllJobs, getJob, createJob } from "../models/appModels.js"
import fs from 'fs'
import geminiJobRecomendation from "../services/geminiService.js"

export async function allPosts (req, res) {
    const posts = await getAllJobs()
    res.status(200).json(posts)
}
export async function addNewPost(req, res) {
    try {
       
        if (!req.body.text) {
            return res.status(400).json({ "Erro": "Texto não fornecido" });
        }

        const newPost = await geminiJobRecomendation(req.body.text);

        const postCriado = await createJob(newPost);

        res.status(201).json(postCriado);
    } catch(e) {
        console.error("Erro no addNewPost:", e.message);
        res.status(500).json({ "Erro": "Erro interno no servidor" });
    }
}
export async function Post(req, res) {
    try {
        const { id } = req.params
        const post = await getJob(id)
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }
        
        res.status(200).json(post)
        
    } catch (error) {
        res.status(400).json({ message: 'Invalid post ID', error: error.message })
    }
}

