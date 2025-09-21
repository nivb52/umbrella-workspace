import { serve } from '@hono/node-server';
import { Hono } from 'hono';

//@ts-expect-error
import { greet } from '@my-org/shared-greet';

const app = new Hono();

app.get('/', (c) => {
  return c.text(greet('Project B:  API'));
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
