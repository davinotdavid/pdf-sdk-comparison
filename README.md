# PDF SDKs Comparison

This repository aims to provide a minimal setup needed for rendering PDFs with multiple SDKs so that one can compare which one suits best.

## Getting Started

Running it locally:

```bash
$ git clone git@github.com:davinotdavid/pdf-sdk-comparison.git

$ cd pdf-sdk-comparison

$ npm install

$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Each of the following routes represents a different SDK vendor:

`/apryse` for [Apryse](https://apryse.com/products/webviewer)

`/pspdkfit` for [PSPDFKit](https://pspdfkit.com/)

`/cloudpdf` for [CloudPDF](https://cloudpdf.io/)

## Special notes

### Apryse (former PDFTron)

- Using the client side only implementation (the one in this repo) [starting with version 10, there is not support for IE11 or older](https://docs.apryse.com/documentation/web/faq/webviewer-with-ie11/). They do provide a [legacy UI version](https://docs.apryse.com/documentation/web/faq/webviewer-with-ie9/) in case there's a need to support IE9+.
- There is a [WebViewer Server](https://docs.apryse.com/documentation/web/faq/wvs/what-is-wvs/#should-i-use-webviewer-server-with-the-webviewer-client) component that can be optionally added for optimal performance (and potentially obfuscate the actual PDF file). This has not been tested / verified by me yet so can't say how easy of a solution it would be.
- The PDF file itself can be easily seen in the Network tab and somewhat easily seen in the Elements tab (it shows up in the `iframe` as a encoded URL param).
- It is easy to add watermarks through the [`setWatermark` API](https://docs.apryse.com/documentation/web/guides/watermarks/) and they persist when downloading the file. If the button is enabled, it is also possible for the user to add a custom watermark through the UI before printing (the UI is provided).

### PSPDFKit

- Very similar in functionality with PDFTron.
- Using the client side only implementation (the one in this repo) the PDF file itself can be easily seen in the Network tab.
- There is an optional [PSPDFKit Server](https://pspdfkit.com/guides/web/pspdfkit-server/get-started/) counterpart that helps with performance for large documents amongst [other features](https://pspdfkit.com/guides/web/pspdfkit-server/overview/) and helps with obfuscating the actual PDF file through document streaming.
- Regarding watermarks, even though it is possible to draw using a Canvas2D through the `renderPageCallback` function, it does not provide a dedicated API for it. Also, even though it render the watermark correctly while printing [it doesn't actually add it to the PDF file itself while saving the file](https://pspdfkit.com/guides/web/features/watermarks/).

### CloudPDF

- A [cheap-ish](https://cloudpdf.io/pricing) hosted solution that provides some of the capabilities of the previous SDKs' Server solutions.
- By default, since the actual PDFs files are stored in their own servers, it refers to the file through an ID and it communicates with the server to actually render it so there is no mention of the file in the Network tab nor the Elements tab.
- Their dashboard provides a few toggle switches in terms of file visibility and user permissions. One of these toggles (set per file) allows/forbids its download.
- Does not provide watermark functionality.
