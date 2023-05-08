import { Hono } from "hono"
import { serveStatic } from "hono/middleware"
import { serve } from "std-serve"
import ads from "./ads/index.ts"
import * as dejs from "dejs"

const app = new Hono()

const exists = async (filename: string): Promise<boolean> => {
  try {
    await Deno.stat(filename);
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw error;
    }
  }
}

app.get('/ad/4-3',ads)
app.use('/*', async (c, next) => {
  let pathname = new URL(c.req.url).pathname
  if(pathname.at(-1) !== "/")
    pathname += "/"
  let path = "./ejs"+pathname
  if(exists(path))
    return c.html(await dejs.renderFileToString(path))
  path = "./ejs"+pathname+"index.ejs"
  if(exists(path))
    return c.html(await dejs.renderFileToString(path))

  await next()
})
app.use('/*',serveStatic({ root: "./static" }))

serve(app.fetch)
