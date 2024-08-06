
import Role, { IRole } from '../model/role.model';
import Permission from '../model/permission.model';
import Module, { IModule } from '../model/module.model';


export async function createRole(roleData: IRole): Promise<IRole> {
        const role = await Role.create(roleData);
        return role;
}

export async function createModule(moduleData: Partial<IModule>): Promise<IModule> {
        const newModule = await Module.create(moduleData);
        return newModule;

}
