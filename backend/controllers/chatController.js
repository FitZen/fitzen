import ChatModel from "../models/chatModel.js";

const createChat = async (req, res) => {
    console.log(req.body.senderId)
    const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const userChats = async (req, res) => {

    try {
        // console.log("original",req.params.userId);
        // const id ="RT0001"
        // console.log("id",id);
        const id = req.params.userId;
        // const stringWithQuotes = '"RT0001"';
        const stringWithoutQuotes = id.slice(1, -1);

        // const id = req.params.userId;
        // const id ="RT0001"
        // const chat = await ChatModel.find({members: { $in: [id] }});
        const chat = await ChatModel.find({members: { $in: [stringWithoutQuotes] }});
        // const chat = await ChatModel.find({members: { $in: [id] }});
        // console.log(chat);
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }

};

const findChat = async (req, res) => {
    try {
        const chat = await ChatModel.findOne({
        members: { $all: [req.params.firstId, req.params.secondId] },
    });
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
};

export { createChat, userChats, findChat };