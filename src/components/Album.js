
const Album = ({ current, colordata, colorsperpage }) => {
    const arr = colordata.slice(current * colorsperpage, (current + 1) * colorsperpage)
    const data = arr.map((person) => {
        //console.log(person)
        return (
            
            <div key={person.id} >
                <div className="m-3 border border-primary rounded">
                    <img src={person.url} height={150} width={150}>
                    </img>
                    <div className=" d-inline-block text-primary ml-4 ">{person.title}</div>
                </div>


            </div>
        )
    })
    return (
        <div>
            {data}
        </div>
    );
}

export default Album;