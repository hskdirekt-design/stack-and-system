# Phase 16 — Search Security

The directory now uses an explicit editorial-only search dataset. It contains:
company name, category, description, best-for, capabilities and profile URL.

It excludes commercial intelligence such as commission rates, affiliate status,
programme status, PartnerStack opportunity notes and private tracking links.

The search function searches only those editorial fields.

The company pages were also scrubbed for obvious standalone commercial metadata.

Note: a legitimate company whose name is itself a brand such as PartnerStack
is not automatically removed; the rule is about commercial intelligence, not
blocking legitimate company names.

Production deployment remains paused.
