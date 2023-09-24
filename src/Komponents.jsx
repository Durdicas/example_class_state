const Komponents = ({uvecaj}) => {
    return (
      <>
          <button onClick={uvecaj}>Uvecaj za 1 iz komponente</button>
          <input type="text" onChange={(event) => {console.log(event.target.value)}}/>
      </>
    )
  }
  
  export default Komponents