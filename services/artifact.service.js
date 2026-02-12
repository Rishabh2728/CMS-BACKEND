import Artifact from "../models/artifact.js";

export const createArtifactService = async ({
    title,
    content,
    userId
}) => {
    if(!title || content){
        throw new Error("Title and content are required");
    }

    const artifact = await Artifact.create({
        title,
        content,
        author: userId
    });
    return artifact;


    let mediaUrl = null
    if(filePath){
        const uploadResult = await cloudinary.uploader.upload(
            filePath,
            {
                folder: "cms-artifacts"
            }
        );

        mediaUrl = uploadResult.secure_url;

        // FileSystem.un
    }
}   
