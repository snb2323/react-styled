import styled from "styled-components";

export const Wbtn = styled.button`
background-color: black;
color: white;
border: 1px solid #fff;
border-radius: 30px;
width:100px;
line-height: 2rem;
text-align: center;
display: "inline-block";
`
export const Bbtn = styled.button`
background-color: white;
color: black;
border: 1px solid #000;
border-radius: 30px;
width:100px;
line-height: 2rem;
text-align: center;
display: "inline-block";
`
export const Wildbanner = styled.div`
background-color: tomato;
color: white;
text-align: center;
padding: 200px 0;
`;
export const Parentwbtn = styled(Wbtn)`
    border:10px solid green;
`
export const BgBanner = (props) => {
    return (
        <div className={props.className} style={{ backgroundColor: props.bgcolor }}>
            {props.children}
        </div>
    )
};





