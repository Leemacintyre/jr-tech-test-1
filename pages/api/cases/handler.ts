import { OpenAPIHono } from "@hono/zod-openapi";
import {
  getCaseById,
  getCases
} from "@/pages/api/cases/routes";
import { cases } from "@/pages/api/cases/data";
import { cors } from 'hono/cors';


const caseApp = new OpenAPIHono();

caseApp.use('/*', cors({
  origin: '*',
  allowMethods: ['GET', 'OPTIONS'],
}));

caseApp.openapi(getCases, async (c) => {
  try {
    const { page = "1", limit = "10" } = c.req.valid('query');

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = pageNumber * limitNumber;

    const paginatedCases = cases.slice(startIndex, endIndex);

    const totalCases = cases.length;

    const response = {
      totalCases,
      totalPages: Math.ceil(totalCases / limitNumber),
      currentPage: pageNumber,
      limit: limitNumber,
      data: paginatedCases,
    };

    return c.json(response, 200);

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

    return c.json({ data: singleCase }, 200);

  } catch (error) {
    return c.json({
      status: 500,
      message: "Internal server error",
    }, 500);
  }
});


export default caseApp;