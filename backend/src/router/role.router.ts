
import express from 'express';
import { addRole } from '../controller/role.controllel';
import { addModule } from '../controller/role.controllel';
import { addPermission } from '../controller/permission.controller';

export default class RoleRouter {
  private router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {

    this.router.post('/roles' , addRole);
    this.router.post('/permissions' , addPermission);
    this.router.post('/modules', addModule );

  }

  public getRouter() {
    return this.router;
  }
}
