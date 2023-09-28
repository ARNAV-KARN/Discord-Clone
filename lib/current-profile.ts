import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const currentProfile = async () => {
    const { userId } = auth()

    if (!userId) {
        return null
    } 

    console.log("hello from current profile");
    

    const profile = await db.profile.findUnique({
        where: {
            userId,
        }
    })
    console.log(profile);
    

    return profile;
}