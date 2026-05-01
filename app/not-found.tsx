import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-xl rounded border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 text-center shadow-sm">
        {/* Error Code */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600">
          ERROR 404
        </p>

        {/* Title */}
        <h1 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or return to a safe place.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Go to Homepage
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer Hint */}
        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} 3a Learning Solutions. All rights
          reserved.
        </p>
      </div>
    </section>
  );
}
