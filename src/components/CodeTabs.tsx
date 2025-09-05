import * as Tabs from "@radix-ui/react-tabs";
import CodeSnippet from "./utilities/CodeSnippet"; // Asegúrate de que este archivo está en la ruta correcta
import { twMerge } from "tailwind-merge";

export interface CodeTabsProps {
    preview: React.ReactNode;
    codeTailwind: string;
    codeCSS?: string;
    prefixTw?: string;
}

const CodeTabs: React.FC<CodeTabsProps> = ({ preview, codeTailwind, codeCSS, prefixTw }) => {
    return (
        <Tabs.Root defaultValue="account">
            <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>

            <div>
                <Tabs.Content value="account">
                    Make changes to your account
                </Tabs.Content>

                <Tabs.Content value="documents">
                   Access and update your documents
                </Tabs.Content>

                <Tabs.Content value="settings">
                    Edit your profile or update contact information
                </Tabs.Content>
            </div>
        </Tabs.Root>
    );
};

export default CodeTabs;
