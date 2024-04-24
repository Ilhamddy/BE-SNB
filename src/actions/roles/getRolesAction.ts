import { getRolesRepository } from "../../repositories/roles/getRoleRepository";

export const getRolesAction = async () => {
    try {
    const result = await getRolesRepository();
       return {
            status: 200,
            message: 'succes get Roles User',
            data: result,
       };
    } catch (error) {
        throw error
    }
    
}