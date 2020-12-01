import Link from "next/link";

export default function FirstPost() {
    return (
        <div className="container">
            <>
                <h1 className="title">
                    First Page from <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <h2>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </h2>
            </>
            <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
       
        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>

            <style jsx global>{`
          html,
          body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
          }
        
        * {
            box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
