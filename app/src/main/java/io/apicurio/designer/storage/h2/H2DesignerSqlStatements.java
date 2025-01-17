/*
 * Copyright 2020 Red Hat
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

package io.apicurio.designer.storage.h2;

import io.apicurio.common.apps.storage.sql.jdbi.query.Update;
import io.apicurio.common.apps.storage.sql.jdbi.query.UpdateImpl;
import io.apicurio.designer.spi.storage.DesignerSqlStatements;
import io.apicurio.designer.storage.common.AbstractDesignerSqlStatements;
import io.quarkus.arc.DefaultBean;

import java.sql.SQLException;
import jakarta.enterprise.context.ApplicationScoped;

/**
 * @author eric.wittmann@gmail.com
 * @author Jakub Senko <em>m@jsenko.net</em>
 */
@ApplicationScoped
@DefaultBean
public class H2DesignerSqlStatements extends AbstractDesignerSqlStatements implements DesignerSqlStatements {

    @Override
    public String dbType() {
        return "h2";
    }

    @Override
    public boolean isPrimaryKeyViolation(SQLException ex) {
        return ex.getMessage() != null && ex.getMessage().contains("primary key violation");
    }

    @Override
    public boolean isForeignKeyViolation(SQLException ex) {
        return ex.getMessage() != null && ex.getMessage().contains("Referential integrity constraint violation");
    }

    @Override
    public Update setStorageProperty(String key, String value) {
        var q = new UpdateImpl("""
                MERGE INTO apicurio (prop_key, prop_value) KEY(prop_key) VALUES (?, ?)\
                """);
        return q.bind(0, key)
                .bind(1, value);
    }

    @Override
    public String getNextSequenceValue() {
        // H2 does not support atomic increment
        throw new UnsupportedOperationException();
    }

    @Override
    public String getSequenceValue() {
        return """
                SELECT s.seq_value FROM sequences s \
                WHERE s.seq_key = ?\
                """;
    }

    @Override
    public String casSequenceValue() {
        return """
                UPDATE sequences s \
                SET seq_value = ? \
                WHERE s.seq_key = ? AND s.seq_value = ?\
                """;
    }

    @Override
    public String insertSequenceValue() {
        return """
                INSERT INTO sequences (seq_key, seq_value) \
                VALUES (?, ?)\
                """;
    }
}
