



Set up postgresSQL locally

```
CREATE DATABASE taskdb;

\c taskdb

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL
);
```