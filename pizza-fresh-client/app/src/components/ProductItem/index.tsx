import * as S from "./style";

const ProductItem = () => {
    return(
        <S.ProductItem>
            <S.ProductItemImage src="" alt="" />
            <div>
                <S.ProductItemName>Nome do Produto</S.ProductItemName>
                <S.ProductItemPrice>R$ 0.00</S.ProductItemPrice>
                <S.ProductItemDescription>Descrição...</S.ProductItemDescription>
            </div>
        </S.ProductItem>
    );
}

export default ProductItem;