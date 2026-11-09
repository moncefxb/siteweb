-- Additive migration. Does not modify the existing orders table.
CREATE TABLE IF NOT EXISTS contact_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL CHECK (length(full_name) BETWEEN 2 AND 80),
  phone TEXT NOT NULL CHECK (length(phone) BETWEEN 8 AND 24),
  subject TEXT NOT NULL CHECK (subject IN ('civil','commercial','property','family','dispute','other')),
  message TEXT CHECK (message IS NULL OR length(message) <= 500),
  consent_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','closed','spam')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at
  ON contact_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_requests_status
  ON contact_requests(status);

CREATE TABLE IF NOT EXISTS contact_request_limits (
  ip_hash TEXT PRIMARY KEY,
  window_start INTEGER NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 0
) WITHOUT ROWID;
