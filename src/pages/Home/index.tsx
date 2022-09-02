import { exampleList } from "../../libs/static";
import ExampleItem from "../../component/ExampleItem"
import { Container } from "react-bootstrap";

const Index = ()=>{

    return <Container fluid className="pt-3">
        <div className="d-flex flex-wrap ">
        {
            exampleList.map((item:any, index:number)=>{
                return <ExampleItem key={index} item={item} />
            })
        }
        </div>
    </Container>
}
export default Index;