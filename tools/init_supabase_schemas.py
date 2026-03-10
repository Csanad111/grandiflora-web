import os
import sys
from dotenv import load_dotenv
from supabase import create_client, Client

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENV_PATH = os.path.join(BASE_DIR, '.env')
load_dotenv(dotenv_path=ENV_PATH)

def init_schemas():
    url = os.environ.get("VITE_SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") # Need service role for DDL / RPC execution

    if not url or not key:
        print("ERROR: Supabase URL or SERVICE_ROLE_KEY not found in .env")
        sys.exit(1)

    supabase: Client = create_client(url, key)
    
    # In Supabase, standard REST clients cannot run raw DDL (CREATE TABLE) directly.
    # Usually, developers use the Supabase SQL Editor or migrations to set up schema.
    # To follow the BLAST protocol via script, we would need to call an RPC function 
    # that executes SQL, OR inform the user that manual schema upload via dashboard is required.
    
    # For now, we print the required SQL so the AI or User can execute it.
    
    sql = """
    -- Table: projects
    CREATE TABLE IF NOT EXISTS public.projects (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        client_id UUID NOT NULL,
        address TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'scheduled',
        start_date TIMESTAMPTZ,
        estimated_completion_date TIMESTAMPTZ,
        progress_percentage INT DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT now()
    );

    -- Table: updates
    CREATE TABLE IF NOT EXISTS public.updates (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
        message TEXT NOT NULL,
        type TEXT NOT NULL,
        media_url TEXT,
        created_at TIMESTAMPTZ DEFAULT now()
    );

    -- Table: before_after_media
    CREATE TABLE IF NOT EXISTS public.before_after_media (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
        before_url TEXT,
        after_url TEXT,
        share_text TEXT,
        created_at TIMESTAMPTZ DEFAULT now()
    );

    -- Set Row Level Security (RLS) basics
    ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
    ALTER TABLE public.updates ENABLE ROW LEVEL SECURITY;
    ALTER TABLE public.before_after_media ENABLE ROW LEVEL SECURITY;
    """
    
    print("SCHEMA INITIALIZATION REQUIRED")
    print("Supabase Python Client cannot directly execute DDL without a pre-existing RPC function.")
    print("Please execute the following SQL in your Supabase Dashboard SQL Editor to establish Layer 3 tables:\n")
    print(sql)

if __name__ == "__main__":
    init_schemas()
