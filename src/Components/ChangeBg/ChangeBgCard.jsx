const ChangeBgCard = () => {

  let colorValue;

  return (
    <div className="container">
        <div className="card" style={{padding: '150px', backgroundColor: colorValue, borderRadius: '15px' }}>
            <div className="card-body">
                <p className="card-text text-center">{colorValue? colorValue : 'Empty Value'}</p>
            </div>
        </div>
    </div>
  )
}

export default ChangeBgCard;