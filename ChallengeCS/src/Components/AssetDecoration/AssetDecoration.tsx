import "./AssetDecoration.css";

const AssetDecoration = () => {
  return (
    <div className='assetsDContainer'>
      <img
        style={{ position: "absolute", left: "100%" }}
        src='./src/assets/step1/Ellipse_2_1_.png'
        alt=''
      />
      <img
        style={{ position: "absolute", left: "14%", bottom: "100%" }}
        src='./src/assets/step1/Ellipse_3_4_.png'
        alt=''
      />
      <img
        style={{ position: "absolute", left: "1%", bottom: "400px" }}
        src='./src/assets/step1/Group.png'
        alt=''
      />
      <img
        style={{ position: "absolute", left: "90%", bottom: "320px" }}
        src='./src/assets/step2/Vector.png'
        alt=''
      />
      <img
        style={{ position: "absolute", left: "40%", bottom: "10px" }}
        src='./src/assets/step1/Path_28_1_.png'
        alt=''
      />
    </div>
  );
};
export default AssetDecoration;
