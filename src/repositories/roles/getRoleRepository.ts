import Role from "../../db/models/roles";

export const getRolesRepository = async () => {
    try {
        const getRoles = await Role.findAll({
          
            order: [
                   ['id', 'DESC']
            ]
            
           
        });
        return getRoles;
    } catch (error) {
        throw error;
    }
}