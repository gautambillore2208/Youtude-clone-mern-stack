const Comments = require('../Modales/comments');
// const comment = require('../Modales/comments');




exports.addComment = async(req,res)=>{
    try{
       let {video,message} = req.body;
       const comment = new Comments({user:req.user._id,video,message});
       await comment.save()
       res.status(200).json({
        message:"success",
        comment
       })
        

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


exports.getCommentByVideoId = async(req,res)=>{
    try{
         let {videoId} = req.params;
         const comment = await Comments.find({video:videoId}).populate('user','channelName profilePic userName createdAt about');
         res.status(200).json({
            message:"success",
            comment
           })


    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}