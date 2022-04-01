//const outfit = require('../Home')
const OutfitDetail = (props) => {
  console.log(props)
  return (
    <>
      <div>
        <div className="measurements"></div>
        <img src='{props.img}' alt='outfit detail'></img>
      </div>
    </>
  );
};

export default OutfitDetail;
