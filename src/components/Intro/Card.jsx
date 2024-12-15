
const Card = () => {
    const Language = [
        {
            id:1001,
            title:'HTML',
            image:'images/html.png',
            desc:'For Structure in Web Page'
        },
        {
            id:1002,
            title:'CSS',
            image:'images/css.png',
            desc:'For Design in Web Page'
        },
        {
            id:1003,
            title:'JavaScript',
            image:'images/java-script.png',
            desc:'For Interative in Web Page'
        },
        {
            id:1004,
            title:'ReatJS',
            image:'images/react.png',
            desc:'For Dynamic in Web Page'
        },
        {
            id:1001,
            title:'HTML',
            image:'images/html.png',
            desc:'For Structure in Web Page'
        },
        {
            id:1002,
            title:'CSS',
            image:'images/css.png',
            desc:'For Design in Web Page'
        },
        {
            id:1003,
            title:'JavaScript',
            image:'images/java-script.png',
            desc:'For Interative in Web Page'
        },
        {
            id:1004,
            title:'ReatJS',
            image:'images/react.png',
            desc:'For Dynamic in Web Page'
        },
    ];
  return (
    <>
        <center>
            <h1>List Item With Map</h1>
            <div className="container-box">
            {
            Language.map(i=>{
                return(
                    <div className="card-box" key={i}>
                        <p>ID : {i.id}</p>
                        <img className="image" src={i.image}/>
                        <p>{i.title}</p>
                        <p>{i.desc}</p>
                    </div>
                )
            })}
        </div>
        </center>
    </>
  )
}

export default Card