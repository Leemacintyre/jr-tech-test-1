import { handle } from 'hono/vercel';
import type { PageConfig } from 'next';

import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono } from '@hono/zod-openapi';
import caseApp from "@/pages/api/cases/handler";
import { cors } from 'hono/cors';


export const config: PageConfig = {
  runtime: 'edge',
};


const app = new OpenAPIHono().basePath('/api');

// Apply CORS to all routes
app.use('/*', cors({
  origin: '*',  // Allow all origins
  allowMethods: ['GET', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],  // Specify allowed headers
  exposeHeaders: ['Content-Length'],  // Specify headers that should be exposed to the browser
}));


app.route("cases", caseApp);

// The OpenAPI documentation will be available at /doc
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
});

app.get('/ui', swaggerUI({ url: '/api/doc' }));


app.get('/hello', (c) => {
  return c.json({
    message: 'Hello World',
  });
});

export default handle(app);
