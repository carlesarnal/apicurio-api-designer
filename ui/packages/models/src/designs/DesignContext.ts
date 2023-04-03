export type DesignContextType = "create" | "file" | "url" | "registry";

export interface DesignContextFile {
    fileName: string;
}

export interface DesignContextUrl {
    url: string;
}

export interface DesignContextRhosr {
    instanceId: string;
    groupId: string;
    artifactId: string;
    version: string;
}


export interface DesignContext {

    type: DesignContextType;
    file?: DesignContextFile;
    url?: DesignContextUrl;
    registry?: DesignContextRhosr;

}
