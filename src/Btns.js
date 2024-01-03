import styled from 'styled-components';
import { Wbtn, Bbtn, BgBanner, Wildbanner, Parentwbtn } from './styled/Commonui';

const Outcom = styled(BgBanner)`
    background-color: red;
    color:white;
    font-size: 50px;
`
const Outcom2 = styled(BgBanner)`
    background-color: yellow;
    color:white;
    font-size: 50px;
`
const Btns = () => {
    const bodybg = {
        backgroundColor: "black",
        padding: "5rem",
        textAlign: "center"
    }
    return (

        <div style={bodybg}>
            <BgBanner bgcolor="gray">
                <h2>큰글씨</h2>
                <p>작은글씨</p>
            </BgBanner>
            <Outcom2>ㅇㄴㅁㅇㄴㅁㅇ
                <Outcom>ㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇ</Outcom>
                <Outcom>ㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇ</Outcom>
                <Outcom>ㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇ</Outcom>

            </Outcom2>
            <Outcom>ㅇㅁㄴㅇㄴㅁㅇㄴㅁㅇ</Outcom>

            <Wildbanner>스타일컴포넌트그대로</Wildbanner>
            <Parentwbtn>흠</Parentwbtn>
            <Wbtn>블랙</Wbtn>
            <Bbtn>화이트</Bbtn>

        </div>

    )
}

export default Btns