import { featureLists, goodLists } from "../constants";

const Art = () => {
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2>The ART</h2>
        <div className="content">
          <ul className="list-col space-y-4">
            {goodLists.map((feature, index) => (
              <li key={`art_good_${index}`} className="flex items-center gap-2">
                <img src="/images/check.png" alt="tick in a circle" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="bartender at a bar pouring a mojito from a cocktail shaker"
              className="size-full object-cover"
            />
          </div>
          <ul className="list-col space-y-4">
            {featureLists.map((feature, index) => (
              <li
                key={`art_feature_${index}`}
                className="flex items-center justify-start gap-2"
              >
                <img src="/images/check.png" alt="tick in a circle" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2>Sip-Worthy Perfection</h2>
          <div>
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
