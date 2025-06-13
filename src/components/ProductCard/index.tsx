import React from 'react';
import styles from  './index.module.css';

type Currency = 'RUB' | 'USD' | 'EUR';

interface ProductCardProps {
    title: string;
    origin: string;
    price: number;
    currency: Currency;
    imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
                                                            title,
                                                            origin,
                                                            price,
                                                            currency,
                                                            imageUrl,
                                                        }) => {
    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    }).format(price / 100);

    return (
        <div className={styles.product_card}>
            <img src={imageUrl} alt={title} className={styles.product_image} />
            <div className={styles.product_info}>
                <h2 className={styles.product_title}>{title}</h2>
                <p className={styles.product_origin}>Made in {origin}</p>
                <p className={styles.product_price}>{formattedPrice}</p>
            </div>
        </div>
    );
};
