# Password reset help

The public, sign-in-free guide is `/help/reset-password`. Residents and FAQ
pages link to it; support can share `https://www.axismeter.com/help/reset-password`
in a message to customers who cannot sign in.

The 55-second, 1920×1080 recording is served as a static asset at
`/videos/reset-password-1080p.mp4` by the website deployment. It uses a demo
account, hides the verification code, and keeps passwords masked. There is no
audio. On-screen instructions, an optional English WebVTT track, and written
steps cover the complete flow. Only the finished MP4, poster, and captions are
in this repository; credentials and raw recordings stay outside it.

The native video player supports inline mobile playback, seeking, and full
screen. `preload="none"` avoids downloading the video until requested; the
poster supplies an initial preview. The page links to the real account
sign-in screen in a new tab. Clerk continues to own verification and password
changes; this website never collects credentials or reset codes.

When the sign-in UI changes, record the actual flow again and update the video,
poster, caption timings, and written steps together. Check desktop and mobile
playback, video delivery with byte ranges, and the public guide without a login.
