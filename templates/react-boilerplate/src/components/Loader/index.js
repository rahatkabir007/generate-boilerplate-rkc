import "./index.css";

function Loader() {
  return (
    <div className='loader_container'>
      <div className='lds_loader'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
