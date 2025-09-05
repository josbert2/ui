import Button from '@tailus-ui/Button';
import Popover from '@tailus-ui/Popover';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Text, Title } from '@tailus-ui/typography';

export const TablePopover = ({ title, description }) => {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button.Root variant="ghost" intent="gray" size="xs" aria-label="Type">
                    <Button.Icon type="only" size="xs">
                        <InfoCircledIcon />
                    </Button.Icon>
                </Button.Root>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content fancy side="top" data-shade="800" className="z-50 max-w-sm">
                    <Title as="h3" weight="medium" size="base">{`Enum: ${title}`}</Title>
                    <Text className="mb-0 mt-3">{description}</Text>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};
