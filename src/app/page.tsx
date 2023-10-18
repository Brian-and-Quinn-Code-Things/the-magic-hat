"use client";

import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

export default function Home() {
  const { userId, isLoaded } = useAuth();

  return (
    <>
      <nav className="flex flex-row pt-4 px-8">
        <div className="flex-1"></div>
        <div>
          {!userId && (
            <SignInButton>
              <button className="py-2 px-4 bg-slate-300 text-slate-800 rounded-full">
                Login
              </button>
            </SignInButton>
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="mr-5 ml-auto"></div>
      </nav>
      <main className="flex min-h-full flex-col items-center justify-between p-24">
        <h1>Hello sir</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=quinnhipp1%40gmail.com&ctz=America%2FNew_York"
          width="800"
          height="600"
        ></iframe>
      </main>
    </>
  );
}
