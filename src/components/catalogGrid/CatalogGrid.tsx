import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from "./CatalogGrid.module.css"
import catalogImages from "../../assets/catalogGrid/catalogImages.ts";
import {Link} from "react-router-dom";

interface CatalogGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    middle?: true;
}

const CatalogGrid: FC<CatalogGridProps> = (props) => {
    return (
        <section
            className={`${styles.catalogGrid} ${props.className}`}
            style={props.middle ? { marginLeft: 'auto', marginRight: 'auto' } : {}}
        >

            <h2 className={styles.catalogTitle}
                style={props.middle ? {marginLeft: 'auto', marginRight: 'auto'} : {display: "none"}}
            >
                Каталог товарів
            </h2>

            <div className={styles.catalogContainer}>
                {catalogImages.map((tile, index) =>
                    <Link key={tile.img} to={tile.url} className={`${styles['catalogItem' + index]} ${styles.catalogItem}`}>
                        <img
                            alt={tile.title}
                            src={tile.img}
                            className={styles.catalogImg}
                        />
                        <h3 className={styles.catalogItemText}>{tile.title}</h3>
                    </Link>
                )}
            </div>

        </section>
    );
};

export default CatalogGrid;