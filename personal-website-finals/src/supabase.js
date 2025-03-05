import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gmmyfzkzkmpycepqntzf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbXlmemt6a21weWNlcHFudHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNDk4NjcsImV4cCI6MjA1NjcyNTg2N30.zXAe2hwwDvo4Eteg8DZy3oREhqc0SoIJrhW7uKUeX1w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
