import styled from "styled-components";

const Card = styled.div`
    width: 300px;
    height: 220px;
    border-radius: 10px;
    background: rgb(246,66,91);
    line-height: 10px;
`;

const ChipCard = () => {
    return (
        <div style={{ marginLeft: 30 }}>
            <img width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4j4yR4LXJpMrT_BA-4PPikPoiiXJKoy1RA&usqp=CAU" alt="" />
        </div>
    )
}

const CardName = styled.h1`
    text-align: right;
    color: white;
    margin-right: 20px;
`;

const CardNumber = styled.p`
    margin-left: 30px;
    font-size: 22px;
    color: white;
    font-family: "digital";
`;

const CardDetail = styled.p`
    color: white;
    font-size: 8px;
`;

const CardHolder=styled.p`
    color: white;
    font-size: 15px;
`;
export default function CreditCard() {

    return (
        <Card>
            <CardName>VISA</CardName>
            <ChipCard></ChipCard>
            <CardNumber>4256 7890 5678 4532</CardNumber>
            <div style={{
                display: "flex",
                gap: "3rem",
                marginLeft: 30
            }}>
                <CardDetail>CARD HOLDER</CardDetail>
                <CardDetail>EXPIRES</CardDetail>
                <CardDetail>CVC</CardDetail>
            </div>
            <div style={{
                display: "flex",
                gap: "1.5rem",
                marginLeft: 30
            }}>
                <CardHolder>Satya Prakash</CardHolder>
                <CardHolder>09/20</CardHolder>
                <CardHolder>345</CardHolder>
            </div>
        </Card>
    )
}
