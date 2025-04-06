import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "My App",
  description: "PWA対応のClerkアプリ",
  manifest: "/manifest.json",
  themeColor: "#317EFB",
  icons: {
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="ja">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
