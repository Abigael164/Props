import Mypropchild from './Mypropchild.jsx'

const Myprop = (props) => {
return(
    <div>
        <Mypropchild name = "BMW" brand="benz" year={2025} isNew={true}/>
        <Mypropchild name = "Audi" brand="benz" year={2024} isNew={false}/>
        <Mypropchild />



    </div>
)
};
export default Myprop;