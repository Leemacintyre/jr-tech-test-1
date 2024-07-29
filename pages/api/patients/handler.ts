import { OpenAPIHono } from "@hono/zod-openapi";
import {
  getPatientById,
  getPatients
} from "@/pages/api/patients/routes";
import { patients } from "@/pages/api/patients/data";

const patientApp = new OpenAPIHono();

patientApp.openapi(getPatients, (c) => {
  try {
    return c.json(patients, 200);
  } catch (error) {
    return c.json({
      status: 500,
      message: "Internal server error",
    }, 500);
  }
});

patientApp.openapi(getPatientById, async (c) => {
  try {
    const { id } = c.req.valid('param');

    const patient = patients.find((p) => p.id === id);

    if (!patient) {
      return c.json(
        {
          status: 404,
          message: "Resource not found",
        },
        404
      );
    }

    return c.json(patient, 200);

  } catch (error) {
    return c.json({
      status: 500,
      message: "Internal server error",
    }, 500);
  }
});


export default patientApp;