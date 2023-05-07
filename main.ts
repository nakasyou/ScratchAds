import { Hono } from "hono"
import { serve } from "std-serve"

const app = new Hono()

serve(app.fetch)