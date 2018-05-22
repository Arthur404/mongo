import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../src/App.js';
import { StaticRouter, Route } from 'react-router-dom'
import ScrollToTop from '../../src/components/Global/ScrollToTop'
import Helmet from "react-helmet";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
    const context = {};
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const body = ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
              <ScrollToTop location={req.url}>
                  <App location={req.url} />
              </ScrollToTop>
          </StaticRouter>
        );

        const helmet = Helmet.renderStatic();

        const prepHTML = (data, { html, head, body }) => {
            data = data.replace('<html lang="en">', `<html ${html}`);
            data = data.replace('</head>', `${head}</head>`);
            data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
            return data;
        };

        const html = prepHTML(htmlData, {
            html: helmet.htmlAttributes.toString(),
            head:
            helmet.title.toString() +
            helmet.meta.toString() +
            helmet.link.toString() +
            helmet.script.toString(),
            body: body
        });

        if (context.url) {
            res.writeHead(301, {
              Location: context.url
            });
            return res.end()
        } else {
            return res.send(html);
          }
    });
}
