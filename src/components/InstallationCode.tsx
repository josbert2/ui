import Tabs from '@tailus-ui/Tabs'
import csscode from '@lib/csscode'
import lightcsscode from '@lib/lightcsscode'
import darkcsscode from '@lib/darkcsscode'
import CodeSnippet from '@components/utilities/CodeSnippet'

export const InstallationCode = () => {
    return (
        <Tabs.Root className="space-y-4" defaultValue="all">
            <Tabs.List data-rounded="xlarge" className="w-fit" variant="plain" triggerVariant="softToSolid" intent="neutral" size="md">
                <Tabs.Trigger value="all" className="rounded-[--btn-radius]">
                    All
                </Tabs.Trigger>
                <Tabs.Trigger value="light" className="rounded-[--btn-radius]">
                    Light
                </Tabs.Trigger>
                <Tabs.Trigger value="dark" className="rounded-[--btn-radius]">
                    Dark
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="text-[--caption-text-color]">
                <CodeSnippet code={csscode} lang="css" />
            </Tabs.Content>
            <Tabs.Content value="light" className="text-[--caption-text-color]">
                <CodeSnippet code={lightcsscode} lang="css" />
            </Tabs.Content>
            <Tabs.Content value="dark" className="text-[--caption-text-color]">
                <CodeSnippet code={darkcsscode} lang="css" />
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default InstallationCode
