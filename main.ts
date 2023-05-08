import { Hono } from "hono"
import { serveStatic } from "hono/middleware"
import { serve } from "std-serve"
import ads from "./ads/index.ts"
import * as dejs from "dejs"

const app = new Hono()

app.get('/ad/4-3',ads)
app.use('/*', (c, next) => {
  let pathname = new URL(c.req.url).pathname
  if(pathname.at(-1) !== "/")
    pathname += "/"
  try{
    return dejs.renderFileToString("."+pathname)
  }catch try{
    return dejs.renderFileToString("."+pathname+"index.ejs")
  }catch{}
  next()
})
app.use('/*',serveStatic({ root: "./static" }))

serve(app.fetch)
