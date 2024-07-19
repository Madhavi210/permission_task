import express from 'express';
import ProductController from '../controller/product.controller';
import Authentication from '../middleware/authentication';
import { RoleBaseAccessMiddleware } from '../middleware/roleBasedPermission';
import { userRole } from '../enum/userRole';

export default class ProductRouter {
  private router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    // POST /api/products - Create a new product
    this.router.post('/', 
      Authentication.authUser ,
      RoleBaseAccessMiddleware('Category', 'write') , 
      ProductController.createProduct);

    // GET /api/products/:id - Get product by ID
    this.router.get('/:id' ,
      Authentication.authUser, 
      RoleBaseAccessMiddleware('Category', 'read') ,
      ProductController.getProductById);

    // DELETE /api/products/:id - Delete product by ID
    this.router.delete('/:id', 
      Authentication.authUser , 
      RoleBaseAccessMiddleware('Category', 'write') , 
      ProductController.deleteProduct);

    // PUT /api/products/:id - Update product by ID
    this.router.put('/:id', 
      Authentication.authUser, 
      RoleBaseAccessMiddleware('Category', 'write'), 
      ProductController.updateProduct);

    // GET /api/products - Get all products
    this.router.get('/', 
      Authentication.authUser, 
      RoleBaseAccessMiddleware('Category', 'read') ,
      ProductController.getAllProducts);

    this.router.get('/categorized', 
      ProductController.categorizedProducts);

  }

  public getRouter() {
    return this.router;
  }
}



