// import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  // const { data, loading, error } = useFetch(
  //   "/hotels/countByCity?cities=berlin,madrid.london"
  // );
  console.log(data);
  return (
    <div className="featured">
      {/* {loading ? (
        "Loading please wait"
      ) : (
        <> */}
      <div className="featuredItem">
        <img
          src="https://plus.unsplash.com/premium_photo-1661962646245-5ec5dd3d0bcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          {/* <h2>{data[0]} properties</h2> */}
          <h2>hjkhcdjk</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          {/* <h2>{data[1]} properties</h2> */}
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          {/* <h2>{data[2]} properties</h2> */}
        </div>
      </div>
      {/* </>
      )} */}
    </div>
  );
};

export default Featured;
