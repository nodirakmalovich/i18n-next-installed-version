import LeftSide from "@/components/leftSide/leftSide";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex ">
        <div className="!w-[190px]">
          <LeftSide />
        </div>
       <div className="w-[calc(100%-190px)]"> {children}</div>
      </body>
    </html>
  );
}
