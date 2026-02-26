import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from './auth/actions'
import ClientBookmarkList from '@/components/BookmarkList'
import AddBookmarkForm from '@/components/AddBookmarkForm'
import { ThemeToggle } from '@/components/ThemeToggle'

export default async function Dashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const { data: bookmarks } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: true })

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg3.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Header (Background Removed) */}
          <header className="flex items-center justify-between">

            <div>
              <h1 className="text-2xl font-bold text-white">
                My Bookmarks
              </h1>
              <p className="text-sm text-gray-300">
                {user.email}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* <ThemeToggle /> */}
              <form action={signOut}>
                <button className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-200">
                  Sign Out
                </button>
              </form>
            </div>

          </header>

          {/* Main Content */}
          <main className="space-y-8">

            {/* Add Bookmark Card */}
            <div className="p-6 bg-white/85 dark:bg-gray-900/75 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-gray-700 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]">
              <AddBookmarkForm />
            </div>

            {/* Collection Card */}
            <div className="p-3 space-y-5 bg-white/85 dark:bg-gray-900/75 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-gray-700 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                Your Collection
              </h2>

              <ClientBookmarkList
                initialBookmarks={bookmarks || []}
                userId={user.id}
              />
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}