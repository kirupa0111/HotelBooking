import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="siImg"
      ></img>
      <div className="siDesc">
        <h1 className="siTitle">The Golden Grotto</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxtOp">Free Airport Taxi</span>
        <span className="siSubTitle">
          Studio Appartmant with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bathroom . 21m 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubTitle">
          You can cacell later, so lock in this great price today
        </span>
      </div>

      <span className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <spn className="siPrice">$123</spn>
          <spn className="siTaxOp">Include taxes and fees</spn>
          <button className="siCheckButton">See Availability</button>
        </div>
      </span>
    </div>
  );
};

export default SearchItem;
