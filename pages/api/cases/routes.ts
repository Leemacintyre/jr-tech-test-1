import { createRoute } from "@hono/zod-openapi";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  ParamsSchema,
  CaseSchema,
  CasesSchema
} from "@/pages/api/cases/schema";


export const getCases = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: CasesSchema,
        },
      },
      description: 'Retrieve the list of cases',
    },
    500: {
      content: {
        'application/json': {
          schema: InternalServerErrorSchema,
        },
      },
      description: 'Internal server error',

    }
  },
});

export const getCaseById = createRoute({
  method: 'get',
  path: '/{id}',
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: CaseSchema,
        },
      },
      description: 'Retrieve the case details',
    },
    404: {
      content: {
        'application/json': {
          schema: NotFoundSchema,
        },
      },
      description: 'Case not found',
    },
    500: {
      content: {
        'application/json': {
          schema: InternalServerErrorSchema,
        },
      },
      description: 'Internal server error',
    }
  },
});