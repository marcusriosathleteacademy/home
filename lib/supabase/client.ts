import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for Client Components — runs in the browser.
 *
 * This app has no auth, so the auth/session machinery (GoTrueClient) is
 * explicitly disabled — leaving it on caused it to read/write a session
 * cookie and manage refresh timers for a session that never exists,
 * which was intermittently interfering with plain data requests.
 */
export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
