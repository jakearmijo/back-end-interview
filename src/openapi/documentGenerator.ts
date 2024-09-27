import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";
import { commodityRegistry } from "../routes/commodity.routes";
import { commodityTypeRegistry } from "../routes/commodityType.routes";
import { attributeRegistry } from "../routes/attribute.routes";
import { unitsRegistry } from "../routes/units.routes";
import { yearRegistry } from "../routes/year.routes";
import { yearTypeRegistry } from "../routes/yearType.routes";

export function generateOpenAPIDocument() {
  const registry = new OpenAPIRegistry([
    commodityRegistry,
    commodityTypeRegistry,
    attributeRegistry,
    unitsRegistry,
    yearRegistry,
    yearTypeRegistry
  ]);
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Nutrien AG Solutions Back-end Developer Interview",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  });
}
