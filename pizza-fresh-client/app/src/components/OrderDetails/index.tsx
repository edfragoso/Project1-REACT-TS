import ButtonToggle from "components/ButtonToggle";
import * as S from "./style";
const OrderDetails = () =>{
    return(
        <S.OrderDetails>
            <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
            <S.OrderDetailsButtonGroup>
                <ButtonToggle active={true} value="Comer no local" />
                <ButtonToggle active={false} value="Para viagem"/>
                <ButtonToggle active={true} value="Delivery"/>
            </S.OrderDetailsButtonGroup>
            <S.OrderDetailsList>
                <p>Itens do Pedido</p>
            </S.OrderDetailsList>
        </S.OrderDetails>
    );
}

export default OrderDetails;