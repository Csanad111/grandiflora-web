# SOP: Layer 2 Navigation (Decision Routing)

## Goals
Define how data flows from user actions in the React frontend to the Database and back. This prevents business logic from scattering across UI components.

## Routing Logic

### 1. View Project Status Flow
- **Input**: User loads the dashboard. `clientId` is retrieved from auth context.
- **Route**: Frontend -> React Context -> Supabase `projects` and `updates` tables where `client_id` == `clientId`.
- **Output**: Render the Project visual status.

### 2. Add New Update Flow (Admin)
- **Input**: Admin submits a new image and message.
- **Route**: 
  1. Frontend -> Upload Image to Supabase Storage -> Get Public URL.
  2. Map URL to new JSON object.
  3. POST new update object to Supabase `updates` table.
- **Output**: Update UI optimistically, wait for DB confirmation.

## Architect Constraints
- React Components **must not** contain raw database queries. All queries must be abstracted into a `services/db.js` file (Layer 3 tool equivalent for the frontend).
