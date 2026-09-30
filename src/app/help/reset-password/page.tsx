import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Reset Your Password | Axis Meter Help",
  description:
    "Forgot your Axis Meter password? Watch the short video or follow the steps to reset it using the verification code sent to your email.",
  path: "/help/reset-password",
});

const steps = [
  {
    title: "Enter your account email",
    description: "Open the sign-in page, enter the email address you use for your Axis Meter account, and select Continue.",
  },
  {
    title: "Select Forgot password?",
    description: "On the password screen, select Forgot password?, then select Reset your password to receive an email code.",
  },
  {
    title: "Check your email and enter the code",
    description: "Find the six-digit code in your inbox and enter it on the sign-in page. Check your junk or spam folder if the email has not arrived.",
  },
  {
    title: "Choose your new password",
    description: "Enter a strong new password, then enter it again in Confirm password. Follow the password requirements shown on the screen.",
  },
  {
    title: "Select Reset Password",
    description: "Keep Sign out of all other devices selected if you want to end your other sessions. Select Reset Password to save your new password and sign in.",
  },
];

export default function ResetPasswordHelpPage() {
  return (
    <>
      <section className="bg-navy py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/residents" className="text-sm text-accent hover:underline">
            ← Resident help
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-white sm:text-5xl">
            Reset your password
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
            Get back into your Axis Meter account with a code sent to your email.
            Watch the short walkthrough or follow the steps below.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-14" aria-labelledby="video-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="video-heading" className="text-xl font-semibold text-gray-900">Watch the walkthrough</h2>
            <p id="video-description" className="text-sm text-gray-600">55 seconds · On-screen instructions · No audio</p>
          </div>
          <video
            controls
            playsInline
            preload="none"
            poster="/videos/reset-password-poster.jpg"
            width={1920}
            height={1080}
            aria-label="How to reset your Axis Meter password"
            aria-describedby="video-description"
            className="aspect-video w-full rounded-xl bg-navy shadow-sm"
          >
            <source src="/videos/reset-password-1080p.mp4" type="video/mp4" />
            <track kind="captions" src="/videos/reset-password.en.vtt" srcLang="en" label="English instructions" />
            Your browser does not support video playback. Follow the written steps below.
          </video>
          <a href="/videos/reset-password-1080p.mp4" download className="mt-4 inline-block text-sm font-medium text-gray-700 underline hover:text-gray-900">
            Download the video (5.6 MB)
          </a>
        </div>
      </section>

      <section className="bg-gray-50 pb-16 sm:pb-24" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="steps-heading" className="text-2xl font-bold text-gray-900">Follow these steps</h2>
          <a
            href="https://myaccount.axismeter.com/auth_clerk/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-navy transition-colors hover:bg-accent-dark"
          >
            Open the sign-in page ↗
          </a>
          <p className="mt-2 text-sm text-gray-600">Opens in a new tab so you can keep this guide beside you.</p>
          <ol className="mt-10 space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-semibold text-white">{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900">Still having trouble?</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              If your code has expired, select Resend and use the newest code. If you no longer have access to your account email, contact our support team.
            </p>
            <p className="mt-4 text-gray-700">
              <a href="mailto:info@axismeter.com" className="underline">info@axismeter.com</a>
              {" · "}
              <a href="tel:+12267025500" className="whitespace-nowrap underline">226-702-5500</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
