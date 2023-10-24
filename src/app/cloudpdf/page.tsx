"use client";

import { useEffect, useRef } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";
import Link from "next/link";
import "./styles.css";

export default function CloudPDFPage() {
  const viewer = useRef(null);

  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "7cb4bcfa-ab63-4733-974a-3dd9fe1fbe90",
        darkMode: true,
      },
      viewer.current!
    ).then((instance) => {});
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

        <h1 className="text-xl font-bold">CloudPDF Notes</h1>
        <ul className="list-disc ml-4 mb-4">
          <li>
            Watermarks are not supported out-of-box but there might be
            workarounds with manually creating an overlay with a canvas element.
          </li>
          <li>
            Document protection is on by default since they offer a hosted a
            solution for storing and serving the pdf files. <br />
            There&apos;s even a dashboard to control if individual PDFs can be
            downloaded or not / toggle visibility.
          </li>
          <li>
            <a
              className="underline"
              href="https://cloudpdf.io/pricing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className="viewer" ref={viewer}></div>;
    </>
  );
}
