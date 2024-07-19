
import { Request, Response, NextFunction } from 'express';
import Module from '../model/module.model';
import Permission from '../model/permission.model';
import { Types } from 'mongoose';

declare module 'express' {
    interface Request {
        email?: string;
        userId?: string;
        roleId?: string;
        permissionRoles?: Types.ObjectId[];
    }
}

export const RoleBaseAccessMiddleware = ( module: string, name: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const foundModule = await Module.findOne({ name: module });
            if (!foundModule) {
                return res.status(404).json({ message: 'Module not found' });
            }

            const moduleId = foundModule._id;

            let permission;
            switch (name) {
                case 'write':
                    permission = await Permission.findOne({ roleId: { $in: req.permissionRoles }, moduleId, write: true });
                    break;
                default:
                    permission = await Permission.findOne({ roleId: { $in: req.permissionRoles }, moduleId, read: true });
            }

            if (!permission) {
                return res.status(403).json({ error: 'Permission for your role is not defined!' });
            }

            next();
        } catch (error: any) {
            console.error('Role base permission Middleware Error:', error);
            res.status(403).json({ message: 'Permission check failed' });
        }
    };
};
