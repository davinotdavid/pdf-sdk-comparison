"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function PSPDFKitPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit: any;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      await PSPDFKit.load({
        container,
        document:
          "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        renderPageCallback(ctx: any, pageIndex: any, pageSize: any) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(pageSize.width, pageSize.height);
          ctx.stroke();

          ctx.font = "30px Comic Sans MS";
          ctx.fillStyle = "red";
          ctx.textAlign = "center";
          ctx.fillText(
            `This is page ${pageIndex + 1}`,
            pageSize.width / 2,
            pageSize.height / 2
          );
        },
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
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

        <h1 className="text-xl font-bold">PSPDFKit Notes</h1>
        <ul className="list-disc ml-4 mb-4">
          <li>
            Watermarks are added via the Canvas API on renderPageCallback but
            they are <strong>NOT</strong> added to the PDF file.
          </li>
          <li>
            <a
              className="underline"
              href="https://pspdfkit.com/guides/web/features/watermarks/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation link (Watermark)
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://pspdfkit.com/guides/web/samples/customized-pdf-toolbar/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation link (Toolbar customization)
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://pspdfkit.com/guides/web/pspdfkit-server/get-started/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation link (PSPDFKit Server)
            </a>
          </li>
        </ul>
      </div>

      <div ref={containerRef} style={{ height: "100vh" }} />
    </>
  );
}
