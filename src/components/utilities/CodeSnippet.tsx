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
import { type FileType } from './File';
import CodeCopyButton from '../Button/CodeCopyButton';
import { twMerge } from 'tailwind-merge';
import ScrollArea from '@tailus-ui/ScrollArea';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@components/ui/tabs"  
import HightLight  from '../HightLight';


export interface CodeSnippetProps extends React.HTMLAttributes<HTMLModElement> {
    code: string;
    lang?: string;
    file?: FileType;
    filename?: string;
    highlightedLines?: string;
    highlightStart?: string;
    asUIBlock?: boolean;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, lang, className, highlightedLines, highlightStart, asUIBlock }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code, lang]);

    return (
        <>
            

            <Tabs  defaultValue="css"
                className='bg-[#efefef] rounded-md border'
            >
                <TabsList>
                    <TabsTrigger value="css">Code</TabsTrigger>
                </TabsList>

                <div className='p-3 rounded-md  '>
                   <div className="bg-[#28282D] rounded-md border *:inset-ring-white/5">
                          <TabsContent
                              value="css">
                              <HightLight code={code} lang={lang} className={className} highlightedLines={highlightedLines} highlightStart={highlightStart} asUIBlock={asUIBlock} />
                          </TabsContent>
                   </div>
                </div>
            </Tabs>
     
        </>
        
    );
};

export default CodeSnippet;
