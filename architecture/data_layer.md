# SOP: Data Architecture

## Goals
Establish the standard for how the React frontend interacts with the backend database (Firebase/Supabase).

## Inputs
- JSON payloads matching the schema defined in `gemini.md`.

## Logic
1. **Fetching Projects**: 
   - Fetch the active `Project` object based on the authenticated `clientId`.
   - Deny access if `clientId` does not match the authenticated user.
2. **Uploading Media**:
   - All images must be compressed before upload (max 2MB).
   - Store images in the generic `storage.provider.com` abstraction layer until a specific provider is chosen.

## Edge Cases
- **Missing Data**: If a project has no `updates`, return an empty array `[]`, never `null`.
- **Large Images**: Client-side validation must reject images > 10MB before attempting compression.
