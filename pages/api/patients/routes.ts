import { createRoute } from "@hono/zod-openapi";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  ParamsSchema,
  PatientSchema,
  PatientsSchema
} from "@/pages/api/patients/schema";


export const getPatients = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: PatientsSchema,
        },
      },
      description: 'Retrieve the list of patients',
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

export const getPatientById = createRoute({
  method: 'get',
  path: '/{id}',
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: PatientSchema,
        },
      },
      description: 'Retrieve the patient details',
    },
    404: {
      content: {
        'application/json': {
          schema: NotFoundSchema,
        },
      },
      description: 'Patient not found',
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