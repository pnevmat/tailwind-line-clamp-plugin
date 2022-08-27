import starWarsHeader from './images/star-wars-header-img.jpg';
import tvAndRemote from './images/tv-and-remote.jpg';
import blackWidow from './images/black-widow.jpg';
import dune from './images/dune.jpg';
import loki from './images/loki.jpg';
import mareOfEasttown from './images/mare-of-easttown.jpg';
import './App.css';

function App() {
  return (
    <div className="p-0 text-gray-900 bg-gray-50 dark:bg-gray-900">
      <main className="lg:relative lg:max-w-7xl lg:mx-auto">
        <div className="h-64 sm:h-72 md:h-96 lg:absolute lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="w-full h-full object-cover"
            src={starWarsHeader}
            alt="Star Wars"
          />
        </div>

        <div className="max-w-5xl px-4 pt-8 pb-20 text-center lg:w-1/2 lg:py-48 lg:text-left lg:max-w-lg">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl dark:text-gray-100">
            Watch your favorite
            <span className="block text-blue-700">movies and TV shows</span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl dark:text-gray-400">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>

          <div className="mt-10">
            <a href="#" className={btn}>
              Get Started!
            </a>
          </div>
        </div>
      </main>

      <ul className="mt-28 px-5 space-y-12 mx-auto sm:max-w-2xl md:mt-36 lg:mt-32 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
        <li className="px-3 py-5 rounded-md border bg-blue-50 lg:h-72">
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 lg:h-full">
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img
                className="object-cover object-bottom shadow-lg rounded-lg sm:object-center"
                src={blackWidow}
                alt="Black Widow"
              />
            </div>

            <div className="space-y-4 sm:col-span-2 sm:relative sm:h-full">
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3 className="dark:text-white">Black Widow</h3>
                <p className="text-blue-600">Movie</p>
              </div>

              <p className="text-base text-gray-500 line-clamp-5">
                Natasha Romanoff confronts the darker parts of her ledger when a
                dangerous conspiracy with ties to her past arises. Natasha
                Romanoff confronts the darker parts of her ledger when a
                dangerous conspiracy with ties to her past arises.
              </p>

              <button className={`${btn} px-3 py-1 sm:absolute sm:bottom-0`}>
                Watch
              </button>
            </div>
          </div>
        </li>

        <li className="px-3 py-5 rounded-md border bg-blue-50">
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 lg:h-full">
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img
                className="object-cover shadow-lg rounded-lg"
                src={dune}
                alt="Dune"
              />
            </div>

            <div className="space-y-4 sm:col-span-2 sm:relative sm:h-full">
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3 className="dark:text-white">Dune</h3>
                <p className="text-blue-600">Movie</p>
              </div>

              <p className="text-base text-gray-500 line-clamp-5">
                Feature adaptation of Frank Herbert's science fiction novel,
                about the son of a noble family entrusted with the protection of
                the most valuable asset and most vital element in the
                galaxy.Feature adaptation of Frank Herbert's science fiction
                novel, about the son of a noble family entrusted with the
                protection of the most valuable asset and most vital element in
                the galaxy.
              </p>

              <button className={`${btn} px-3 py-1 sm:absolute sm:bottom-0`}>
                Watch
              </button>
            </div>
          </div>
        </li>

        <li className="px-3 py-5 rounded-md border bg-blue-50 lg:h-72">
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 lg:h-full">
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img
                className="object-cover object-bottom shadow-lg rounded-lg sm:object-center"
                src={loki}
                alt="Loki"
              />
            </div>

            <div className="space-y-4 sm:col-span-2 sm:relative sm:h-full">
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3 className="dark:text-white">Loki</h3>
                <p className="text-blue-600">TV Show</p>
              </div>

              <p className="text-base text-gray-500 line-clamp-5">
                The mercurial villain Loki resumes his role as the God of
                Mischief in a new series that takes place after the events of
                “Avengers: Endgame.” The mercurial villain Loki resumes his role
                as the God of Mischief in a new series that takes place after
                the events of “Avengers: Endgame.”
              </p>

              <button className={`${btn} px-3 py-1 sm:absolute sm:bottom-0`}>
                Watch
              </button>
            </div>
          </div>
        </li>

        <li className="px-3 py-5 rounded-md border bg-blue-50 lg:h-72">
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 lg:h-full">
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img
                className="object-cover object-bottom shadow-lg rounded-lg sm:object-center"
                src={mareOfEasttown}
                alt="Mare of Easttown"
              />
            </div>

            <div className="space-y-4 sm:col-span-2 sm:relative sm:h-full">
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3 className="dark:text-white">Mare of Easttown</h3>
                <p className="text-blue-600">TV Show</p>
              </div>

              <p className="text-base text-gray-500 line-clamp-5">
                A detective in a small Pennsylvania town investigates a local
                murder while trying to keep her life from falling apart. A
                detective in a small Pennsylvania town investigates a local
                murder while trying to keep her life from falling apart.
              </p>

              <button className={`${btn} px-3 py-1 sm:absolute sm:bottom-0`}>
                Watch
              </button>
            </div>
          </div>
        </li>
      </ul>

      <div className="px-5 py-20 mx-auto prose prose-blue dark:prose-dark md:px-0 lg:prose-lg lg:mt-24 dark:prose-dark">
        <hr className="w-20 mx-auto" />

        <h2>What's this?</h2>
        <p className="lead">
          This is a streaming service that offers a wide variety of
          award-winning <em>TV shows</em>, <em>movies</em>, <em>anime</em>,
          <em>documentaries</em>, and more on thousands of internet-connected
          devices.
        </p>

        <p>
          You can watch as much as you want, whenever you want without a single
          commercial – all for one low monthly price. There's always something
          new to discover and new TV shows and movies are added every week!
        </p>

        <figure>
          <img src={tvAndRemote} alt="TV & Remote" />
          <figcaption>
            There are even remote controls that have a button for direct access
            to our app!
          </figcaption>
        </figure>

        <h2>Where can I watch?</h2>
        <p>
          Watch anywhere, anytime, on an unlimited number of devices. Sign in
          with your account to watch instantly on the web from your personal
          computer or on any internet-connected device that offers the app,
          including:
        </p>

        <ul>
          <li>Smart TVs</li>
          <li>Smartphones</li>
          <li>Tablets</li>
          <li>Streaming media players</li>
          <li>Game consoles</li>
        </ul>

        <h2>How much does it cost?</h2>
        <p>We offer two price tiers:</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>
                <strong>$ 5</strong>
              </td>
              <td>
                <strong>$ 10</strong>
              </td>
            </tr>
            <tr>
              <td>Simultaneous devices</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Video quality</td>
              <td>HD</td>
              <td>Ultra HD</td>
            </tr>
          </tbody>
        </table>

        <h2>How do I cancel?</h2>
        <p>
          We are flexible. There are no pesky contracts and no commitments. You
          can easily cancel your account online in two clicks. There are no
          cancellation fees – start or stop your account anytime.
        </p>

        <h2>I have some questions</h2>
        <p>
          Write to us at <a href="mailto:info@example.com">info@example.com</a>
          if you have any issues.
        </p>

        <h2>Sign Up</h2>
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-5">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            className={input}
            name="email"
            type="email"
            placeholder="Email"
          />

          <label htmlFor="password" className="sr-only">
            Phone
          </label>
          <input
            className={input}
            name="password"
            type="password"
            placeholder="Password"
          />

          <div>
            <button className={btn}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const btn =
  'bg-blue-700 px-5 py-2 rounded-lg shadow-lg font-semibold text-sm text-white inline-block w-full text-center hover:text-white hover:bg-blue-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-800 focus:ring-opacity-50 active:bg-blue-900 dark:focus:ring-blue-400 dark:ring-offset-gray-900 sm:w-auto md:px-5 md:py-2 md:text-lg lg:px-3 lg:py-1';

const input =
  'px-5 py-3 text-black border-gray-300 shadow-sm rounded-md sm:w-1/2 focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 focus:border-transparent dark:focus:ring-blue-400 dark:focus:ring-4 dark:focus:ring-opacity-50';

export default App;
