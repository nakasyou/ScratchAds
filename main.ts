import { Hono } from "hono"
import { Hono } from "hono/middleware"
import { serve } from "std-serve"
import ads from "./ads/index.ts"

const app = new Hono()

app.get('/ad/4-3',ads)
app.use('/*',serveStatic({ root: "./static" }))

serve(app.fetch)