import GoogleSignInButton from '@/components/GoogleSignInButton'

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/grass.jpg')" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-10 space-y-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">

        {/* Title */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Smart Bookmarks Manager
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            One place for all your bookmarks
          </p>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-gray-900 px-3 text-gray-500 dark:text-gray-400">
              Continue with
            </span>
          </div>
        </div>

        {/* Button */}
        <GoogleSignInButton className="w-full py-3 text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 rounded-xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" />

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-500">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>

      </div>
    </div>
  )
}