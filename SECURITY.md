# Security and privacy notes

This static demo has no server-side processing and is not a secure legal document intake system.

- Do not put secrets, API keys, personal case files or client information in this repository.
- Keep the contact destination limited to official office channels.
- Do not collect sensitive case details through the demo form.
- If a backend or document-upload feature is added, require HTTPS, server-side validation, rate limiting, access control, CSRF protection where applicable, secure storage, audit procedures and a documented retention/deletion policy.
- Review Cloudflare Pages response headers after every production deployment. The `_headers` file is a configuration source, not proof that the live service is correctly configured.
- Report security issues privately to the site owner; do not publish client information or exploit details.
