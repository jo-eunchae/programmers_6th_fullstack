import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

function Home(){
    return (
        <>
            <Title size="large">title</Title>
            <Button size="large" scheme="primary">button</Button>
            <InputText placeholder="여기에 입력하세요" />
            <div>home</div>
        </>
    );
}

export default Home;