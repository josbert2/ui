
import { useEffect, useState } from 'react';


export const RenderAndGetHTML =  ({ component }) => {

    const [rawString, setRawString] = useState('');
    const [codeHtml, setCodeHtml] = useState('');
    const [transformedCode, setTransformedCode] = useState('');


    useEffect(() => {
        const fetchCode = async () => {
          try {
            const res = await import(`../components/accordion/accordion.tsx?raw`);
            const code = res.default.trim();

            console.log(code)
            
          } catch (err) {
            console.error(err);
          }
        };
        fetchCode();
      }, []);

    return (
      <>
           <div  class="flex flex-wrap gap-3">
              <button class="btn btn-outline btn-primary">Primary</button>
              <button class="btn btn-outline btn-secondary">Secondary</button>
              <button class="btn btn-outline btn-accent">Accent</button>
              <button class="btn btn-outline btn-info">Info</button>
              <button class="btn btn-outline btn-success">Success</button>
              <button class="btn btn-outline btn-warning">Warning</button>
              <button class="btn btn-outline btn-error">Error</button>
              <button class="btn btn-outline btn-sito">Link</button>
          </div>
      </>
    )   
  }