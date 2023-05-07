import { Hono } from "hono"
import { serve } from "std-serve"
import ads from "./ads/index.ts"

const app = new Hono()

app.get('/',ads)
serve(app.fetch)