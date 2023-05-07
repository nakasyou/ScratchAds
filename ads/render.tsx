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
      <a href={"https://scratch.mit.edu/projects/"+data.id}>
        <div><img src={data.image}/></div>
        <div style="display: flex; flex-wrap: wrap;">
          <div style="font-size: 1.4em">{data.title}</div>
          <div style="">
            <span>By</span>
            <a href={"https://scratch.mit.edu/users/"+data.username}>@{data.username}</a>
          </div>
        </div>
      </a>
    </body>
  </html>
  const html = await renderToString(jsx)
  return "<!doctype HTML> " + html
}