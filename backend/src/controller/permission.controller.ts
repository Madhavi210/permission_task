
import { Request, Response } from 'express';
import {createPermission} from '../service/permission.service';

export async function addPermission(req: Request, res: Response): Promise<void> {
    try {
        // Assuming permission data is passed in the request body
        const newPermission = await createPermission(req.body);
        res.status(201).json(newPermission);
    } catch (error) {
        console.error('Error creating permission:', error);
        res.status(500).json({ error: 'Failed to create permission' });
    }
}
