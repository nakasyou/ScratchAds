/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "jsx";
export default async function(data){
  const jsx = <html>
    <head>
      <meta charset="utf-8" />
      <title>{data.title} - Ads by Scratch Ads</title>
    </head>
    <body>
      <div style="display: flex; flex-wrap: wrap;">
        <a href={"https://scratch.mit.edu/projects/"+data.id}>
          <div><img src={data.image}/></div>
          <div>{data.title}</div>
        </a>
      </div>
    </body>
  </html>
  const html = await renderToString(jsx)
  return "<!doctype HTML> " + html
}