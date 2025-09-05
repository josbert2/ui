import React, { useState, useEffect } from "react";
import prettier from "prettier/standalone"; // Prettier para formatear el código
import parserHtml from "prettier/parser-html"; // Parser de HTML para Prettier
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const ComponentsPreviewCheck = ({ name }) => {
  const [htmlContent, setHtmlContent] = useState(null); // Contenido del archivo HTML
  const [formattedHTML, setFormattedHTML] = useState(null); // HTML formateado
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Construir la ruta del archivo HTML dinámicamente
  const filePath = `./${name}.html`;

  useEffect(() => {
    const fetchHtmlFile = async () => {
      try {
        setLoading(true);
        setError(null);

        // Leer el archivo HTML
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }

        const rawHTML = await response.text(); // Leer el contenido del archivo
        setHtmlContent(rawHTML);

        // Formatear el HTML con Prettier
        const formatted = prettier.format(rawHTML, {
          parser: "html",
          plugins: [parserHtml],
        });
        setFormattedHTML(formatted);
      } catch (error) {
        console.error("Error al cargar o formatear el archivo HTML:", error);
        setError(error.message);
        setHtmlContent(null);
        setFormattedHTML(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHtmlFile();
  }, [filePath]);

  return (
    <div className="preview-container">
      <div className="preview-section">
        <h2 className="preview-title">Preview</h2>
        {error ? (
          <p className="error-message">Error: {error}</p>
        ) : (
          <div
            className="component-wrapper"
            dangerouslySetInnerHTML={{ __html: htmlContent || "" }}
          />
        )}
      </div>

      <div className="code-section">
        <h2 className="code-title">Código</h2>
        {loading ? (
          <p>Cargando código...</p>
        ) : error ? (
          <p className="error-message">Error: {error}</p>
        ) : formattedHTML ? (
          <SyntaxHighlighter
            language="html"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: "4px",
              background: "#1e1e1e",
            }}
          >
            {formattedHTML}
          </SyntaxHighlighter>
        ) : (
          <p>No hay código para mostrar.</p>
        )}
      </div>

      <style jsx>{`
        .preview-container {
          border: 1px solid #2d2d2d;
          border-radius: 8px;
          overflow: hidden;
          margin: 1.5rem 0;
          background: #1e1e1e;
        }

        .preview-section,
        .code-section {
          padding: 1.5rem;
        }

        .preview-section {
          background: #ffffff;
          border-bottom: 1px solid #2d2d2d;
        }

        .preview-title,
        .code-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
        }

        .preview-title {
          color: #1e1e1e;
        }

        .code-title {
          color: #ffffff;
        }

        .component-wrapper {
          margin-top: 1rem;
        }

        .error-message {
          color: #ef4444;
          padding: 1rem;
          border: 1px solid #ef4444;
          border-radius: 4px;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default ComponentsPreviewCheck;
