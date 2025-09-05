import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const TabsComponent: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="max-w-md w-full">
            <div data-tabgroup="tls-1" className="space-y-3 w-full" data-rounded="full">
                {/* Tabs */}
                <div
                    role="tablist"
                    aria-labelledby="tablist-1"
                    data-tabs="default"
                    className="flex group gap-1 relative border-b pb-1"
                >
                    <div
                        data-tabs-indicator
                        aria-hidden="true"
                        className="absolute top-auto -bottom-px h-0.5 bg-primary-600 duration-300 transition-[left,width]"
                        style={{
                            left: `${tabs.findIndex((t) => t.id === activeTab) * 25}%`,
                            width: "25%",
                        }}
                    ></div>

                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            id={`tab-${tab.id}`}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`tabpanel-${tab.id}`}
                            onClick={() => setActiveTab(tab.id)}
                            className={twMerge(
                                "btn sz-sm px-4 py-2 text-sm font-medium transition-all border-b-2 border-transparent",
                                activeTab === tab.id ? "!text-title border-primary-600" : "hover:border-blue-500"
                            )}
                        >
                            <span className="focus">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        id={`tabpanel-${tab.id}`}
                        role="tabpanel"
                        tabIndex={0}
                        aria-labelledby={`tab-${tab.id}`}
                        className={activeTab === tab.id ? "block" : "hidden"}
                    >
                        <p className="text-caption">{tab.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabsComponent;
