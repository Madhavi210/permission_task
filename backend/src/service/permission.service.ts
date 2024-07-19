import Permission, { IPermission } from '../model/permission.model';

export async function createPermission(permissionData: IPermission): Promise<IPermission> {
        const permission = await Permission.create(permissionData);
        return permission;

}
