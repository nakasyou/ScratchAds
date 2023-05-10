/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "jsx";
export default async function(data,req){
  const width = req.query("w") ? req.query("w") : 480
  //const width=50
  const jsx = <html>
    <head>
      <meta charset="utf-8" />
      <title>{data.title} - Ads by Scratch Ads</title>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Roboto:wght@300&display=swap');
          * {
            color: #000;
            font-family: 'Roboto', 'Noto Sans JP', sans-serif;
          }
          body{
            padding: 0px;
            margin: 0px;
            line-height: 1.1;
          }
          #image{
            width: ${width}px;
            height: ${width/480*360}px;
          }
          #seq{
            width: ${width}px;
            font-size: ${req.query("s")? req.query("s")+"px" : "1em"};
          }
          #title{
            font-size: ${req.query("s")? req.query("s")*1.5+"px" : "1em"};
            padding-right: 3px;
          }
          .back{
            background-color: #fff;
          }
        `}
      </style>
    </head>
    <body style="font-family: sans-serif">
      <a href={"/transfer/"+data.id} style="text-decoration: none;" target="_top">
        <div><img src={data.image} width={width} height={width/4*3} id="image" /></div>
        <div id="seq" style="position:absolute;top:0;left:0;overflow-wrap:break-word;overflow:hidden;" width={width}>
          <span id="title" class="back">{data.title}</span>
          <span style="" class="back">
            <span style="">By</span>
            <a href={"https://scratch.mit.edu/users/"+data.username} target="_top" class="back">@{data.username}</a>
          </span>
        </div>
      </a>
    </body>
  </html>
  const html = await renderToString(jsx)
  return "<!doctype HTML> " + html
}
