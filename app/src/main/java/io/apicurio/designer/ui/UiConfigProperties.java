/*
 * Copyright 2023 Red Hat Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.apicurio.designer.ui;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.slf4j.Logger;

import io.apicurio.designer.common.config.DesignerProperties;

/**
 * Holds/accesses all configuration settings for the UI.
 * @author eric.wittmann@gmail.com
 */
@ApplicationScoped
public class UiConfigProperties {

    @Inject
    Logger log;

    @Inject
    @ConfigProperty(name = "designer.ui.config.uiContextPath", defaultValue = "/ui/")
    //@Info(category = "ui", description = "UI context path", availableSince = "2.1.0.Final")
    String uiContextPath;

    @Inject
    @ConfigProperty(name = "designer.ui.config.apiUrl", defaultValue = "_")
    //@Info(category = "ui", description = "UI APIs URL", availableSince = "1.3.0.Final")
    String apiUrl;

    @Inject
    @ConfigProperty(name = "quarkus.oidc.tenant-enabled", defaultValue = "false")
    //@Info(category = "ui", description = "UI OIDC tenant enabled", availableSince = "2.0.0.Final")
    boolean tenantEnabled;

    @Inject
    @ConfigProperty(name = "designer.ui.config.auth.type", defaultValue = "none")
    //@Info(category = "ui", description = "UI auth type", availableSince = "2.2.6.Final")
    String uiAuthType;

    @Inject
    @ConfigProperty(name = "designer.ui.config.auth.oidc.url", defaultValue = "none")
    //@Info(category = "ui", description = "UI auth OIDC URL", availableSince = "2.2.6.Final")
    String oidcUrl;

    @Inject
    @ConfigProperty(name = "designer.ui.config.auth.oidc.client-id", defaultValue = "none")
    //@Info(category = "ui", description = "UI auth OIDC client ID", availableSince = "2.2.6.Final")
    String oidcClientId;

    @Inject
    @ConfigProperty(name = "designer.ui.config.auth.oidc.redirect-url", defaultValue = "none")
    //@Info(category = "ui", description = "UI auth OIDC redirect URL", availableSince = "2.2.6.Final")
    String oidcRedirectUri;

    private final Map<String, Object> keycloakConfig;

    /**
     * Constructor.
     * @param kcProperties
     */
    public UiConfigProperties(@DesignerProperties(value = {"designer.ui.config.auth.keycloak"}) Properties kcProperties) {
        this.keycloakConfig = new HashMap<>();
        kcProperties.stringPropertyNames().forEach(key -> keycloakConfig.put(key, kcProperties.get(key)));
    }

    @PostConstruct
    void onConstruct() {
        log.debug("============> kcProperties  " + keycloakConfig);
        log.debug("============> tenantEnabled  " + tenantEnabled);
        log.debug("============> uiContextPath  " + uiContextPath);
        log.debug("============> apiUrl  " + apiUrl);
    }

    public Map<String, Object> getKeycloakProperties() {
        return keycloakConfig;
    }

    public String getUiContextPath() {
        return uiContextPath;
    }

    public String getApiUrl() {
        return apiUrl;
    }

    public boolean isAuthenticationEnabled() {
        return tenantEnabled;
    }

    public String getUiAuthType() {
        return uiAuthType;
    }

    public String getOidcUrl() {
        return oidcUrl;
    }

    public String getOidcClientId() {
        return oidcClientId;
    }

    public String getOidcRedirectUrl() {
        return oidcRedirectUri;
    }
}
