import React, { FunctionComponent } from "react";
import { ServiceConfig, ServiceConfigContext } from "@services/ServiceConfigContext.tsx";
import { EditorConfig, EditorConfigContext } from "@editors/EditorConfigContext.ts";

export type PageConfig = {
    serviceConfig: ServiceConfig;
    editorConfig: EditorConfig;
};

const defaultPageConfig: PageConfig = {
    editorConfig: {
        asyncApiEditorUrl: "",
        openApiEditorUrl: ""
    },
    serviceConfig: {
        designs: {
            type: "",
            api: ""
        },
        auth: {
            getToken: () => {
                return undefined;
            },
            getUsername: () => {
                return undefined;
            },
            logout: () => {
                return undefined;
            }
        },
        navigation: {
            basename: ""
        }
    }
};

export const PageConfigContext: React.Context<PageConfig> = React.createContext(defaultPageConfig);

/**
 * Properties
 */
export type PageContextProviderProps = {
    value: PageConfig;
    children?: React.ReactNode;
};

/**
 * A custom context provider for the page context.
 * @param value
 * @param children
 * @constructor
 */
export const PageContextProvider: FunctionComponent<PageContextProviderProps> = ({ value, children }: PageContextProviderProps) => {

    return (
        <PageConfigContext.Provider value={value}>
            <ServiceConfigContext.Provider value={value.serviceConfig}>
                <EditorConfigContext.Provider value={value.editorConfig}>
                    <React.Fragment children={children} />
                </EditorConfigContext.Provider>
            </ServiceConfigContext.Provider>
        </PageConfigContext.Provider>
    );
};
