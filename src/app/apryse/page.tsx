"use client";

import WebViewer from "@pdftron/webviewer";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AprysePage() {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/webviewer/lib",
          // disabledElements: [
          //   "toolsHeader",
          //   "ribbons",
          //   "selectToolButton",
          //   "leftPanelButton",
          //   "toggleNotesButton",
          //   "menuButton",
          // ],
          licenseKey:
            "demo:1698085444277:7cf589f90300000000a11358d0d62e3c6db1fa9c7473a30d073684c22f",
          initialDoc:
            "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
        },
        viewer.current!
      ).then((instance) => {
        const { documentViewer } = instance.Core;

        documentViewer.setWatermark({
          // Draw diagonal watermark in middle of the document
          diagonal: {
            fontSize: 25, // or even smaller size
            fontFamily: "sans-serif",
            color: "red",
            opacity: 50, // from 0 to 100
            text: "Watermark",
          },
        });
      });
    });
  }, []);

  return (
    <>
      <div>
        <Link
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
        >
          <svg
            className="w-3.5 h-3.5 mr-2 rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          Back
        </Link>

        <h1 className="text-xl font-bold">Apryse (PDFTron) Notes</h1>
        <ul className="list-disc ml-4 mb-4">
          <li>
            Watermarks are added via the setWatermark method of DocumentViewer.
            The downloaded PDF file has the watermark built-in.
          </li>
          <li>
            Document security using the client-side only is not ideal as the PDF
            file can be somewhat easily accessed through the network tab or
            parsing the encoded URL in the iframe.
          </li>
          <li>
            Browser support for older browsers (IE 9) requires the WebViewer
            Server. It also speeds up the rendering for IE 10 specifically.
          </li>
          <li>
            <a
              className="underline"
              href="https://docs.apryse.com/documentation/web/guides/watermarks/#draw-watermark-text-in-custom-positions"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation link (Watermark)
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://docs.apryse.com/documentation/web/guides/hiding-elements/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation link (Toolbar customization)
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://docs.apryse.com/documentation/web/guides/wv-server-deployment/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation link (WebViewer Server)
            </a>
          </li>
        </ul>
      </div>

      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </>
  );
}
