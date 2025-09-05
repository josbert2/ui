import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-shell-session';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import '@styles/code-line-highlight.css';
import '@styles/code-theme.css';
import { useEffect } from 'react';

export default function HightLight({ code, lang, className, highlightedLines, highlightStart, asUIBlock }) {
    useEffect(() => {
        Prism.highlightAll();
    }, [code, lang]);
    return (
        <div className="highlight">
            <pre data-line={highlightedLines} data-start={highlightStart} className={`h-max w-full p-4 text-sm`}>
                <code className={`language-${lang} font-mono text-sm`}>{code}</code>
            </pre>
        </div>
    );
}