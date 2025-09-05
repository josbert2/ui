import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// Componente que resalta uno o varios bloques de código
function CodeBlock({ code, lang }) {
  return (
    <SyntaxHighlighter language={lang} style={oneDark}>
      {code}
    </SyntaxHighlighter>
  );
}

// Componente principal que muestra el preview y el código
export default function CodeHightLight({ codeBlocks = [], children }) {
  return (
    <div style={{ margin: '2rem 0', border: '1px solid #ccc', borderRadius: 4 }}>
      {/* PREVIEW: La parte donde se renderiza el children (ej. <TableDefault />) */}
      <div style={{ padding: '1rem', backgroundColor: '#f9f9f9' }}>
        <h4>Vista previa:</h4>
        <div>{children}</div>
      </div>

      {/* CODE BLOCK(S): Donde mostramos el/los snippets de código */}
      <div style={{ padding: '1rem', backgroundColor: '#222' }}>
        <h4 style={{ color: '#fff' }}>Código:</h4>
        {codeBlocks.map((block, i) => (
          <CodeBlock key={i} code={block.code} lang={block.lang} />
        ))}
      </div>
    </div>
  );
}
