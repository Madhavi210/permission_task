import express from 'express';
import CategoryController from '../controller/category.controller';
import Authentication from '../middleware/authentication';
import { RoleBaseAccessMiddleware } from '../middleware/roleBasedPermission';
import Role from '../model/role.model';
import { userRole } from '../enum/userRole';

export default class CategoryRouter {
  private router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    // POST /api/categories - Create a new category
    this.router.post('/' , 
      Authentication.authUser, 
      RoleBaseAccessMiddleware('Category', 'write'), 
      CategoryController.createCategory);

    // GET /api/categories/:id - Get category by ID
    this.router.get('/:id', 
      Authentication.authUser, 
      RoleBaseAccessMiddleware('Category', 'read'),
      CategoryController.getCategoryById);

    // DELETE /api/categories/:id - Delete category by ID
    this.router.delete('/:id',
       Authentication.authUser, 
       RoleBaseAccessMiddleware('Category', 'write'), 
       CategoryController.deleteCategory);

    // PUT /api/categories/:id - Update category by ID
    this.router.put('/:id', 
      Authentication.authUser, 
      RoleBaseAccessMiddleware('Category', 'write'),
      CategoryController.updateCategory);

    // GET /api/categories - Get all categories
    this.router.get('/', 
      Authentication.authUser, 
      RoleBaseAccessMiddleware('Category', 'read'),
      CategoryController.getAllCategories);
  }

  public getRouter() {
    return this.router;
  }
}