import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tggrjijttxppowzoziet.supabase.co';

const supabaseKey = import.meta.env.VITE_APY_KEY; 


// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);
