import express from 'express';
import React from 'react'
import { renderToString } from 'react-dom/server';

const app = express();

app.get('*',(req,res) => {
    const App = renderToString(
        <h1>Hello from serverside!</h1>
    )
    
    res.send(`
        <html>
            <body>
                <div id="root">
                    ${App}
                </div>
            </body>
        </html>
    `)

})

app.listen(8080, () => console.log("Hello from console of server"));


