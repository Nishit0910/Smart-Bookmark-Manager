import GoogleSignInButton from '@/components/GoogleSignInButton'

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg2.avif')" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 space-y-8 text-center">

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Smart Bookmarks Manager
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            One place for all your bookmarks
          </p>
        </div>

        {/* Continue Text (without line) */}
        <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
          Continue with
        </p>

        {/* Button */}
        <GoogleSignInButton className="w-full py-3 text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 rounded-xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" />

        {/* Footer */}
        <p className="text-xs text-gray-500 dark:text-gray-500">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>

      </div>
    </div>
  )
}