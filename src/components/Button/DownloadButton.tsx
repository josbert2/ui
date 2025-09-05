import DropdownMenu from '@tailus-ui/Dropdown';
import Button from '@tailus-ui/Button';
import { DownloadIcon, ArchiveIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export const DownloadButton = ({ downloadLink, githubLink, size = 'md' }: { downloadLink: string; githubLink: string; size?: 'sm' | 'md' | 'lg' }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button.Root variant="solid" intent="neutral" size={size}>
                    <Button.Icon type="leading">
                        <DownloadIcon className="!size-4" />
                    </Button.Icon>
                    <Button.Label>Download</Button.Label>
                </Button.Root>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content data-shade="800" variant="solid" intent="primary" mixed sideOffset={5}>
                    <DropdownMenu.Item asChild>
                        <a href={downloadLink} download={downloadLink}>
                            <DropdownMenu.Icon>
                                <ArchiveIcon />
                            </DropdownMenu.Icon>
                            Download Zip
                        </a>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                        <a href={githubLink}>
                            <DropdownMenu.Icon>
                                <GitHubLogoIcon />
                            </DropdownMenu.Icon>
                            Fork on GitHub
                        </a>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
