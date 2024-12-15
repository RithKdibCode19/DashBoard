

const Map = () => {
    const fruite=['Banana','Apple','Orange','Lemon','Grape'];

  return (
    <>
        <ul>
            {
                fruite.map(item => {
                    return(
                        <li key={item}>
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default Map