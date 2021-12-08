
import styled from "styled-components";

const PaymentForm = styled.div`
    width: 300px;
`;

const Header = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

const CardLable = styled.p`
    font-size: 10px;
    font-weight: 500;
    margin-top: 30px;
`;

const Input = styled.input`
    border: none;
    border-bottom: 2px solid rgb(249,158,171);
    width: 100%;
    padding-left: 35px;
    font-size: 18px;
    font-weight: 400;
    color: rgb(144,144,144);
`;

const InputBox=styled.div`
   width: 300px;
   display: flex;
   position: relative;
`;

const CardDetail=styled.div`
    width: 80px;
    display: flex;
    position: relative;  
`;

const Amount=styled(Header)`
    color: rgb(247,99,121);
    font-size: 25px;
`; 

const Button=styled.button`
    background: rgb(246,66,91);
    border: none;
    font-size: 20px;
    color: rgb(250,193,200);
    border-radius: 10px;
    padding: 10px 80px;
`;
export default function Form() {

    return (
        <PaymentForm>
            <Header>Payment details</Header>
            <CardLable>CARDHOLDER NAME</CardLable>
            <InputBox>
                <i class="icon far fa-user"></i>
                <Input defaultValue="Satya Prakash" />
            </InputBox>
            <CardLable>CARD NUMBER</CardLable>
            <InputBox>
                <i class="icon far fa-credit-card"></i>
                <Input defaultValue="4256 7890 5678 4532" />
            </InputBox>

            <div style={{ display: "flex", gap: "2rem"}}>
                <div style={{textAlign: "center"}}>
                    <CardLable>EXPIRY MONTH</CardLable>
                    <CardDetail>
                        <i class="icon far fa-calendar-alt"></i>
                        <Input defaultValue="09" />
                    </CardDetail>
                </div>
                <div style={{textAlign: "center"}}>
                    <CardLable>EXPIRY YEAR</CardLable>
                    <CardDetail>
                        <i class="icon far fa-calendar-alt"></i>
                        <Input defaultValue="2020" />
                    </CardDetail>
                </div>
                <div style={{textAlign: "center"}}>
                    <CardLable>CVC</CardLable>
                    <CardDetail>
                        <i class="icon fas fa-unlock-alt"></i>
                        <Input defaultValue="145" />
                    </CardDetail>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center",gap: "1rem",justifyContent: "center"}}>
                <Header>Payment details:</Header>
                <Amount>₹ 12 3000</Amount>
            </div>
            <div  style={{display: "flex", alignItems: "center",justifyContent: "center"}}>
               <Button>PAY</Button>
            </div>
        </PaymentForm>
    );
}