
import * as S from "./style";

interface ProductItemListProps {
    children: React.ReactNode;
}
const ProductItemList = ({children}: ProductItemListProps) => {
    return(
        <section>
            <S.ProductItemListHeader>
                <S.ProductItemListHeader>Escolha os sabores da Pizza</S.ProductItemListHeader>
                <S.ProductItemListHeaderSelect>
                    <option value="default">Selecione a mesa</option>
                    <option value="">Mesa</option>
                </S.ProductItemListHeaderSelect>
            </S.ProductItemListHeader>
            <S.ProductItemList>
               {children} 
            </S.ProductItemList>
        </section>
    );
}

export default ProductItemList;