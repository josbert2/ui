import Button from '@tailus-ui/Button';
import { type ButtonProps } from '@tailus/themer';
import { useState } from 'react';
import CustomCheckIcon from '../utilities/CheckIcon';
import { twMerge } from 'tailwind-merge';
import { Copy } from 'lucide-react';

interface CodeCopyButtonProps extends React.HTMLAttributes<HTMLModElement> {
    code: string;
    className?: string;
    size?: ButtonProps['size'];
}

export const useCopyToClipboard = (text: string) => {
    const [copied, setCopied] = useState(false);

    const copy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
};

const CodeCopyButton: React.FC<CodeCopyButtonProps> = ({ code, className, size = 'xs' }) => {
    const { copied, copy } = useCopyToClipboard(code);

    return (
        <Button.Root variant="ghost" intent="gray" aria-label="Copy code" size={size} className={twMerge(className)} onClick={copy}>
            <Button.Icon type="only" size="xs">
                {copied ? <CustomCheckIcon className="text-gray-950 dark:text-white" /> : <Copy />}
            </Button.Icon>
        </Button.Root>
    );
};

export const HomeCopyButton = ({ code }: { code: string }) => {
    const { copied, copy } = useCopyToClipboard(code);

    return (
        <Button.Root className="gap-3 bg-gray-50 px-3 font-medium" variant="outlined" intent="gray" size="sm" onClick={copy}>
            <Button.Label>
                <code>npm i @tailus/themer</code>
            </Button.Label>
            <Button.Icon type="trailing" onClick={copy} size="xs">
                {copied ? <CustomCheckIcon className="text-gray-950 dark:text-white" /> : <Copy />}
            </Button.Icon>
        </Button.Root>
    );
};

export default CodeCopyButton;
