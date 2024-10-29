/**
 * file responsible for controlling(configuring) the behavior of* auth.js(nextAuth) library.
 */

import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [],
})