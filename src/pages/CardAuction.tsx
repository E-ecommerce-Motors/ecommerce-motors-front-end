import { ProductCardAuction } from "../shared/components/productCardAuction";

interface User {
  name: string;
  saler: boolean;
}

export const CardAuction = () => {
  const heading: string = "Product title stays here - max 1 linesssss";
  const km: number = 2;
  const year: number = 2019;
  const price: number = 22345.56;
  const user: User = { name: "Antonio", saler: true };
  const text: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetti industry.Lorem...aaaaaaa";
  return (
    <div>
      <ProductCardAuction
        heading={heading}
        km={km}
        year={year}
        price={price}
        name={user.name}
        text={text}
        saler={user.saler}
      />
    </div>
  );
};
