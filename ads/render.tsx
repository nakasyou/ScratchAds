/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "jsx";
export default function(data){
  const jsx = <html>
    <head>
      <meta charset="utf-8" />
    </head>
    <body>
      <p>Test</p>
    </body>
  </html>
  const html = renderToString(jsx)
  return "<!doctype HTML> " + html
}