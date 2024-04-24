import Role from "../../db/models/roles";
import User from "../../db/models/user"

export const getUserRepository = async () => {
    try {
        const getUser = await User.findAll(
            {
                order: [
                    ['id', 'ASC']
                ],
         }
        );
        console.log("ini get user", getUser);
        
        return getUser;
    } catch (error) {
        
        throw error
    }
} 