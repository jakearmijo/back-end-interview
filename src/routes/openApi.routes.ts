import { Router, type Request, type Response } from "express";
import { generateOpenAPIDocument } from "../openapi/documentGenerator";
import swaggerUi from 'swagger-ui-express';

export const openAPIRouter: Router = Router();
const openAPIDocument = generateOpenAPIDocument();

openAPIRouter.get("/swagger.json", (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(openAPIDocument);
});

openAPIRouter.use("/", swaggerUi.serve, swaggerUi.setup(openAPIDocument));

export default openAPIRouter; 
