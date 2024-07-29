import { z } from "@hono/zod-openapi";

export const ParamsSchema = z.object({
  id: z
    .string()
    .min(1)
    .openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      example: '1',
    }),
});

export const PatientSchema = z
  .object({
    id: z.string().openapi({
      example: '1',
    }),
    creation_date: z.string().openapi({
      example: '07/03/2022 12:06',
    }),
    case_key: z.string().openapi({
      example: 'VETCT-1',
    }),
    patient: z.string().openapi({
      example: 'Michele Roberts',
    }),
    status: z.string().openapi({
      example: 'Reported',
    }),
    specialty: z.string().openapi({
      example: 'MRI',
    }),
    owner: z.string().openapi({
      example: 'Roy Brown',
    }),
    reporting_specialist: z.string().openapi({
      example: 'Clark Kent',
    }),
    species: z.string().openapi({
      example: 'Canine,German Shepherd Dog',
    }),
    body_areas: z.string().openapi({
      example: 'Head,Thorax',
    }),
    turnaround: z.string().openapi({
      example: 'Standard',
    }),
    reported_date: z.string().openapi({
      example: '08/03/2022 12:06',
    }),
    image_url: z.string().openapi({
      example: 'https://images.dog.ceo/breeds/dachshund/foxhound-53951_640.jpg',
    }),
  })
  .openapi('Patient');


export const PatientsSchema = z.array(PatientSchema).openapi('Patients');


export const NotFoundSchema = z.object({
  message: z.string().openapi({
    example: "Resource not found",
  }),
}).openapi({
  title: 'NotFound',
  description: 'Response schema for resource not found errors',
});

export const InternalServerErrorSchema = z.object({
  message: z.string().openapi({
    example: "Internal server error",
  }),
}).openapi({
  title: 'InternalServerError',
  description: 'Response schema for internal server errors',
});