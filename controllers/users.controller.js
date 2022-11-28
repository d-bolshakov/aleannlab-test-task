const {QueryTypes} = require('sequelize')
const User = require('../models/user')
const db = require('../utils/database')

class UsersController {
    async getList (req, res) {
        try {
            const list = await User.findAll({order: [['rank', 'ASC']]})
            res.status(200).json(list)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Unknown error'})
        }
    }

    async changeUsername (req, res) {
        try {
            const id = req.params.id
            const username = req.body.username
            const user = await User.findOne({where: {id}})
            if (!user)
                res.status(400).json({message: "User with id " + id + " doesn't exist"})
            if(!usernameUnique(username)) 
                res.status(400).json({message: `User with username ${username} already exists`})
            user.username = username
            await user.save()
            res.status(200).json({message: "Username was changed successfully"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Unknown error'})
        }
    }

    async changeRank (req, res) {
        try {
            const id = req.params.id
            const rank = req.body.rank
            const user = await User.findOne({where: {id}})
            if (!user)
                res.status(400).json({message: "User with id " + id + " doesn't exist"})
            if (user.rank === rank)
                res.status(400).json({message: "User with id " + id + " already has a rank of " + rank})
            user.rank = rank
            await user.save()
            res.status(200).json({message: "Rank was changed successfully"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Unknown error'})
        }
    }

    async add (req, res) {
        try {
            const {username, rank} = req.body
            if(!(await UsersController.isUsernameUnique(username))) return res.status(400).json({message: `User with username ${username} already exists`})
            const user = User.create({username, rank})
            res.status(200).json({message: 'User was added sucessfully'})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Unknown error'})
        }
    }

    async delete (req, res) {
        try {
            const id = req.params.id
            const user = await User.findOne({where: {id}})
            if (!user)
                res.status(400).json({message: "User with id " + id + " doesn't exist"})
            await user.destroy()
            res.status(200).json({message: "User was deleted successfully"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Unknown error'})
        }
    }

    static async isUsernameUnique (username) {
        try {
            const candidate = await User.findOne({where: {username}})
            if (!candidate) return true
            return false
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new UsersController()