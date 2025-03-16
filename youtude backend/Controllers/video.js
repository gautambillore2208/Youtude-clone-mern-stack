// const video = require('../Modales/video');
const video = require('../Modales/video');


exports.uploadVideo = async (req,res)=>{
    try {
      const {title,description,videoLink,videoType,thumbnail}  = req.body;
  
      const videoUpload =  new video({user:req.user._id,title,description, videoLink,videoType,thumbnail});
      await videoUpload.save()
      res.status(201).json({sucess:"true",videoUpload})
      
        
        
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}




exports.getAllVideo = async(req,res)=>{
    try{
        const videos = await video.find().populate('user','channelName profilePic userName createdAt');
      
        res.status(201).json({ sucess: "true", "videos": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
};




exports.getVideoById = async (req,res)=>{
    try{
        let {id} = req.params;
        const videos = await video.findById(id).populate('user','channelName profilePic userName createdAt');
          
         console.log(id);
        res.status(201).json({ sucess: "true", "video": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
};




exports.getAllVideoByUserID = async(req,res)=>{
    try{
        let {userId} = req.params;
        const videos = await video.find({user:userId})
        .populate('user','channelName profilePic userName createdAt about');
        res.status(201).json({ sucess: "true", "video": videos });

    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


