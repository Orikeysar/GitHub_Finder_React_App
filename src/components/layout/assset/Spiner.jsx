import spinerGif from "../assset/spinerGif.gif";

function Spiner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinerGif}
        alt="Loding"
        className="mx-auto text-center"
        width={180}
      />
    </div>
  );
}

export default Spiner;
