const fs = require('fs');
const cheerio = require('cheerio');

/**
 * Limpia un snippet HTML:
 * - Elimina atributos Alpine
 * - Convierte class => className
 * - Evita que Cheerio meta <html><head><body>
 */
function cleanHtml(htmlSnippet) {
  const $x = cheerio.load(htmlSnippet, { decodeEntities: false });

  // Quitar Alpine
  $x('*')
    .removeAttr(':dir')
    .removeAttr('x-ref')
    .removeAttr('x-show')
    .removeAttr('x-data')
    .removeAttr('x-bind:class');
  // Descomenta si no deseas ni dir="ltr"
  // $x('*').removeAttr('dir');

  // class => className
  $x('*').each((_, el) => {
    if (el.attribs && el.attribs.class) {
      el.attribs.className = el.attribs.class;
      delete el.attribs.class;
    }
  });

  // Evitar <html><head><body> extra
  const bodyContent = $x('body').length
    ? $x('body').html()
    : $x.root().html();

  return bodyContent || '';
}

// 1) Lee tu archivo HTML
const html = fs.readFileSync('test.html', 'utf8');

// 2) Carga en Cheerio
const $ = cheerio.load(html);

// 3) Estructura base del MDX
let mdxOutput = `import PreviewBlock from '@/components/PreviewBlock';\n\n`;

/**
 * PARTE 1:
 * Por cada <section x-data>, extraemos heading + p + snippet #html-code
 */
$('section[x-data]').each((_, section) => {
  const $section = $(section);

  // (A) Heading anterior (en un div.flex.items-center) y su nivel
  const $headingContainer = $section.prevAll('.flex.items-center').first();
  const $heading = $headingContainer.find('h2[id], h3[id]').first();

  let headingText = '';
  let mdHeadingLevel = '##'; // fallback "##" si es <h2>, "###" si <h3>
  if ($heading.length) {
    headingText = $heading.text().trim();
    const tagName = $heading.prop('tagName').toLowerCase();
    mdHeadingLevel = tagName === 'h2' ? '##' : (tagName === 'h3' ? '###' : '#');
  }

  // (B) El <p> justo arriba del section
  const $p = $section.prev('p');
  const paragraphText = $p.length ? $p.text().trim() : '';

  // (C) Snippet en #html-code code.language-html
  const codeBlock = $section.find('#html-code code.language-html').first();
  if (!codeBlock.length) {
    // No hay snippet => saltamos
    return;
  }

  let snippet = codeBlock.text().trim();
  snippet = cleanHtml(snippet); // Limpieza final

  // (D) Generamos el bloque MDX
  mdxOutput += `
${mdHeadingLevel} ${headingText}

${paragraphText}

<PreviewBlock
  codeBlocks={[
    {
      code: \`${snippet}\`,
      lang: "html"
    }
  ]}
>
${snippet}
</PreviewBlock>


`;
});

/**
 * PARTE 2:
 * Para TODOS los <details> del HTML, añadimos la sección:
 * 
 * ### Open/closed state
 *
 * Conditional application of styles based ...
 * Los elementos html que esten asi {<details>} para todos
 *
 * <PreviewBlock ...> con el snippet del <details> (limpio).
 */
const detailsList = $('details');
detailsList.each((i, detailsEl) => {
  // Extraemos el <details> tal cual
  let detailsSnippet = $.html(detailsEl);
  detailsSnippet = cleanHtml(detailsSnippet);

  mdxOutput += `
### Open/closed state

Conditional application of styles based on the open state of either a <details> or <dialog> element.

Los elementos html que esten asi {<details>} para todos

<PreviewBlock
  codeBlocks={[
    {
      code: \`${detailsSnippet}\`,
      lang: "html"
    }
  ]}
>
${detailsSnippet}
</PreviewBlock>

`;
});

// 4) Guardamos
fs.writeFileSync('output.mdx', mdxOutput.trim(), 'utf8');
console.log('¡Listo! Revisa "output.mdx".');
