import Header from "@/components/Navs/Header";
import "./globals.css";
import ThemeProvider from "@/components/DarkThemeComs/ThemeProvider";
import Footer from "@/components/Footer/Footer";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

type RootLayoutPropsType = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body className="bg-[url('/backgroundImages/desktop-background-v2.png')] bg-cover bg-fixed bg-top bg-no-repeat">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          {/* nav */}
          <Header />

          {/* main */}
          <main className="my-16">{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
