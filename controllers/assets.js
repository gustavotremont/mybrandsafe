const { Assets, Users } = require('../models')

const createAssets= async (req, res) => {
    const { domains, emails, images } = req.body
    const { userUUID } = req.params
    try {
        const user = await Users.findOne({ where: { uuid: userUUID } })
        const assets = await Assets.create({ domains, emails, images, userId: user.id })
        return res.status(200).json({ status: 'success', assets })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    } 
}

const getAssetsByUser = async (req, res) => {
    const { userUUID } = req.params
    try {
        const assets = await Assets.findOne({
            where: { '$user.uuid$': userUUID },
            attributes: { exclude: ['createdAt', 'updatedAt', 'id', 'userId'] },
            include: { 
                association: 'user',
                attributes: ['uuid']
            }
         })
        return res.status(200).json({ status: 'success', assets })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}

const updateAssets= async (req, res) => {
    const { domains, emails, images } = req.body
    const { userUUID } = req.params
    try {
        const assets = await Assets.findOne({
            where: { '$user.uuid$': userUUID },
            attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] },
            include: { 
                association: 'user',
                attributes: ['uuid']
            }
        })

        assets.domains = domains
        assets.emails = emails
        assets.images = images

        await assets.save()
        return res.status(200).json({ status: 'success', assets })
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err }) 
    }
}

const assets = {
    createAssets,
    getAssetsByUser,
    updateAssets,
}

module.exports = assets