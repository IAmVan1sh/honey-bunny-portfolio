import {FC} from "react";
import styles from "./BreadCrumbs.module.css"
import global from "../../styles/global.module.css"
import {NavLink, useLocation} from "react-router-dom";
import BCItems from "./BreadCrumbsLinks.ts";

const BreadCrumbs: FC = () => {
    const location = useLocation()
    const locationChunks = location.pathname.split("/")
    console.log(BCItems)
    console.log(locationChunks)

    return (
        <div className={global.container}>
            <div className={styles.breadCrumbs}>
                {locationChunks.map((l: string) =>
                    <>
                        <NavLink
                            to={BCItems[l].url}
                            className={styles.bcLinks}
                        >
                            {BCItems[l].label}
                        </NavLink>
                        <span className={styles.bcSpaces}> / </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default BreadCrumbs;