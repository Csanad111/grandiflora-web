import os
import sys
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables from the .env file
load_dotenv(dotenv_path='../.env')

def verify_supabase_connection():
    url = os.environ.get("VITE_SUPABASE_URL")
    key = os.environ.get("VITE_SUPABASE_ANON_KEY")

    if not url or not key:
        print("ERROR: Supabase URL or Key not found in .env")
        sys.exit(1)

    print(f"Testing connection to: {url}")
    
    try:
        # Initialize the client
        supabase: Client = create_client(url, key)
        
        # Test 1: Try to ping the REST endpoint or get table info (assuming a 'projects' table will exist)
        # We will just do a basic select from a non-existent/existent table to test auth and connectivity
        # If the table doesn't exist, we'll get a specific PGRST error, which confirms the handshake worked.
        try:
            response = supabase.table('projects').select('*').limit(1).execute()
            print("SUCCESS: Connection established and authenticated.")
            print("Data returned:", response.data)
        except Exception as e:
            # If the error is about the table not existing, the handshake STILL worked.
            error_str = str(e)
            if 'relation "public.projects" does not exist' in error_str.lower() or 'PGRST' in error_str:
                 print("SUCCESS: Handshake complete. (Auth valid, table 'projects' not yet created or empty).")
            else:
                 print(f"FAILED: Handshake failed with error: {error_str}")
                 sys.exit(1)
                 
    except Exception as e:
        print(f"CRITICAL HTTP ERROR: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    verify_supabase_connection()
