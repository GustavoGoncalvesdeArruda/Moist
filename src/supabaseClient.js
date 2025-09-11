import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://seu-projeto.supabase.co'  // sua URL do Supabase
const supabaseAnonKey = 'sua-anon-key-publica'        // sua anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)