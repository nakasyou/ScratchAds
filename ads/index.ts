import { Context } from "hono"
import { type ProjectData } from "./project.ts"
import render from "./render.tsx"
import project from "../project.json" assert { type: "json" };

const loadProjectByOffSet = async (offset: Number): ProjectData => {
  const res = await fetch(`https://trampoline.turbowarp.org/proxy/studios/33315608/projectstemporary/${offset}`)
  const json = await res.json()
  return json[0]
}
const getAd = async (): ProjectData => {
  return await loadProjectByOffSet(Math.floor(project.n * Math.random()))
}
export default async (c: Context) => {
  const ad = await getAd()
  return c.html(await render(ad,c.req))
}