import { createClient } from "@supabase/supabase-js";

// Add clerk to Window to avoid type errors
declare global {
  interface Window {
    Clerk: any;
  }
}

function createClerkSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_ANON_KEY!
    // {
    //   global: {
    //     // Get the Supabase token with a custom fetch method
    //     fetch: async (url, options = {}) => {
    //       const clerkToken = await window.Clerk.session?.getToken({
    //         template: "supabase",
    //       });

    //       // Construct fetch headers
    //       const headers = new Headers(options?.headers);
    //       headers.set("Authorization", `Bearer ${clerkToken}`);

    //       // Now call the default fetch
    //       const response = await fetch(url, {
    //         ...options,
    //         headers,
    //       });

    //       // Return the response object directly
    //       return response;
    //     },
    //   },
    // }
  );
}
function createAuthenticClerkSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_ANON_KEY!,
    {
      global: {
        // Get the Supabase token with a custom fetch method
        fetch: async (url, options = {}) => {
          const clerkToken = await window.Clerk.session?.getToken({
            template: "supabase",
          });

          // Construct fetch headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          // Now call the default fetch
          const response = await fetch(url, {
            ...options,
            headers,
          });

          // Return the response object directly
          return response;
        },
      },
    }
  );
}

export const client = createClerkSupabaseClient();
export const authClient = createAuthenticClerkSupabaseClient();

export const getUserData = async (userId: string | undefined) => {
    const { data, error } = await client
      .from("users")
      .select()
      .eq("user_id", userId);
  
    if (!error) {
      return data;
    } else {
      return error;
    }
  };