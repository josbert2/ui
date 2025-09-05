import React, { Suspense } from 'react';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';

import ReactDOMServer from 'react-dom/server';


interface ComponentPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * El contenido que se va a renderizar dentro de la "vista previa" (preview).
   */
  children: ReactNode;
  /**
   * Clases extra para el wrapper principal.
   */
  className?: string;
  /**
   * Código en texto que quieras mostrar dentro del tab "Code".
   */
  code?: string;
  /**
   * Lenguaje a usar para el resaltado de sintaxis.
   */
  language?: string;
  /**
   * Determina si se oculta la pestaña de "Code".
   */
  hideCode?: boolean;
  /**
   * (Opcional) Un componente React que quieras renderizar en el tab de vista previa,
   * en lugar de usar "children" directamente.
   */
  component?: ReactNode;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  children,
  className,
  code,
  language = 'tsx',
  hideCode = false,
  component,
  ...props
}) => {
  
    const markup = ReactDOMServer.renderToStaticMarkup(children);
    console.log(markup)


  return (
    <div
      className={twMerge(
        'group relative my-4 flex flex-col space-y-2 rounded-[20px] bg-[#F7F7F7]',
        className
      )}
      {...props}
    >
   
        <div className="mb-2 flex items-center justify-between">
          {/* Aquí se podría poner el nombre del archivo, o un título */}
          <span className="font-mono text-sm text-gray-600">
            Componente.tsx
          </span>
         
        </div>

        {/* ---------------- PREVIEW ---------------- */}
     
          <div
            className={twMerge(
              'flex min-h-[200px] w-full justify-center rounded-md border p-4',
              // Ajusta estos estilos a tu gusto
              'dark:bg-gray-925'
            )}
          >
            <Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                  Cargando...
                </div>
              }
            >
              {component ? component : children}
            </Suspense>
          </div>
     
        {!hideCode && (
        
            <div className="w-full rounded-md border p-2">
              
                <SyntaxHighlighter
                  language={language}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    background: '#1E1E1E',
                  }}
                >
                  {markup}
                </SyntaxHighlighter>
              
            </div>
          
        )}
     
    </div>
  );
};

export default ComponentPreview;
