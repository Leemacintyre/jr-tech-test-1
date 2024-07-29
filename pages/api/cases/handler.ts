import { OpenAPIHono } from "@hono/zod-openapi";
import {
  getCaseById,
  getCases
} from "@/pages/api/cases/routes";
import { cases } from "@/pages/api/cases/data";

const caseApp = new OpenAPIHono();

caseApp.openapi(getCases, (c) => {
  try {
    return c.json(cases, 200);
  } catch (error) {
    return c.json({
      status: 500,
      message: "Internal server error",
    }, 500);
  }
});

caseApp.openapi(getCaseById, async (c) => {
  try {
    const { id } = c.req.valid('param');

    const singleCase = cases.find((p) => p.id === id);

    if (!singleCase) {
      return c.json(
        {
          status: 404,
          message: "Resource not found",
        },
        404
      );
    }

    return c.json(singleCase, 200);

  } catch (error) {
    return c.json({
      status: 500,
      message: "Internal server error",
    }, 500);
  }
});


export default caseApp;