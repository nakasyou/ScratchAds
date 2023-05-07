import { Hono } from "hono"
import { serve } from "std-serve"
import ads from "./ads/index.ts"

const app = new Hono()

app.get('/ad-480x360',ads)
serve(app.fetch)