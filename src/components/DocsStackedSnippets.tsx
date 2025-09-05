import CodeSnippet, {type CodeSnippetProps} from "./utilities/CodeSnippet";

type Props = {
    snippets: CodeSnippetProps[],
}

const DocsStackedSection: React.FC<Props> = ({ snippets }) => {
    return (
        <div className="space-y-3">
            {snippets.map((snippet, index) => (
                <CodeSnippet 
                    key={index}
                    code={snippet.code} 
                    lang={snippet.lang}
                    highlightedLines={snippet.highlightedLines}
                />
            ))}
        </div>
    )
};

export default DocsStackedSection;