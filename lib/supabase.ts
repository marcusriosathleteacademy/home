import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ApplicationInsert = {
  parent_name: string;
  student_name: string;
  email: string;
  phone: string;
  sport: string;
  grade: string;
  reclassed: "yes" | "no";
  message: string;
};
