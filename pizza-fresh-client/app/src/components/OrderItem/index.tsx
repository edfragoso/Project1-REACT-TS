import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { ProductResponse } from "types/Product";
import * as S from "./style";

type DivType = ButtonHTMLAttributes<HTMLDivElement>;

export type OrderItemProps = {
  product: ProductResponse;
  quantity: number;
  observation?: string;
  onRemoveItem?: () => void;
} & DivType;

// Props que são funções, devolvem do filho parao pai
// Props que não são funções devolvem do pai parao filho
const OrderItem = ({
  product,
  quantity,
  observation = "",
  onRemoveItem,
  ...props
}: OrderItemProps) => {
  const [quantityState, setQuantityState] = useState(quantity);
  const [observationState, setObservationState] = useState(observation);

  const handleObservation = (data: string) => {
    setObservationState(data);
  };

  const handleQuantity = (data: number) => {
    setQuantityState(data);
  };

  useEffect(() => {
    handleObservation(observation);
  }, [observation]);


  useEffect(() => {
    handleQuantity(quantity);
  }, [quantity]);

  return (
    <S.OrderItem {...props} role="listitem">
      <S.OrderItemLeft>
        <S.OrderItemLeftTop>
          <S.OrderItemProduct>
            <S.OrderItemProductImage
              src={product.image}
              alt={`Pizza de ${product.name}`}
            />
            <S.OrderItemProductDetails>
              <S.OrderItemProductDetailsName>
                {product.name}
              </S.OrderItemProductDetailsName>
              <S.OrderItemProductDetailsPrice>
                R$ {product.price}
              </S.OrderItemProductDetailsPrice>
            </S.OrderItemProductDetails>
          </S.OrderItemProduct>
          <S.OrderItemQuantity
            type="number"
            value={quantityState}
            onChange={({ target }) => setQuantityState(Number(target.value))}
          />
        </S.OrderItemLeftTop>
        <S.OrderItemLeftObservation
          type="text"
          placeholder="Observações do Pedido"
          value={observationState}
          onChange={({ target }) => setObservationState(target.value)}
        />
      </S.OrderItemLeft>
      <S.OrderItemRight>
        <S.OrderItemRightTotalPrice>
          R$ {Number(product.price * quantityState).toFixed(2)}
        </S.OrderItemRightTotalPrice>
        <S.OrderItemRightTrash onClick={onRemoveItem}>
          <Trash />
        </S.OrderItemRightTrash>
      </S.OrderItemRight>
    </S.OrderItem>
  );
};

export default OrderItem;
