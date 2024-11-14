export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Free VPN</h1>
        <h2>Musk VPN, Free VPN for Android, Faster and Secured</h2>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.muskvpn.com/"
          >
            Free VPN for Android
          </a>
          <br/>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://play.google.com/store/apps/details?id=com.muskvpn.muskvpn"
          >
            Download Free VPN for Android
          </a>
          <br/>
          <img width={500} src="Free-VPN-Adroid.jpg" />
          <br/>

          <a href="https://www.muskvpn.com">&copy; muskvpn.com</a>
        </div>
      </main>
      
    </div>
  );
}
