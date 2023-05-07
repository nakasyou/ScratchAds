import { Hono } from "hono"
import { serve } from "std-serve"
import ads from "./ads/add.ts"

const app = new Hono()

app.get('/',ads)
serve(app.fetch)