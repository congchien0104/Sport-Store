import { IBook } from "../bussiness/book";
import { CART_KEY, getLocalStorage, ICartProduct, setLocalStorage } from "./localStorage";
import { notifySuccess } from "./notify";

export const handleAddToCart = (book: IBook, quantity: number = 1) => {
    const product: ICartProduct = {
        bookId: book.id,
        quantity,
        image: book.image_URLs[0] || "",
        name: book.name,
        price: book.price.price || 0,
    };

    let listCart: any = getLocalStorage(CART_KEY);
    listCart = JSON.parse(listCart) as ICartProduct;
    notifySuccess(`Added ${book.name} to cart`);

    if (listCart && listCart.length > 0) {
        const validProduct = (listCart as ICartProduct[]).findIndex(
            (product) => product.bookId === book.id
        );
        if (validProduct === -1) {
            listCart.push(product);
            setLocalStorage(CART_KEY, listCart);
            return;
        }
        const newCart = (listCart as ICartProduct[]).map((product) => {
            if (product.bookId === book.id) {
                product.quantity += quantity;
            }
            return product;
        });
        setLocalStorage(CART_KEY, newCart);
        return;
    }

    setLocalStorage(CART_KEY, [product]);
};
