
import React, {useEffect} from 'react';

function PageHeader({title}) {

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <header>
                <div className="header-inset">
                    <h1 className="main-title"> {title}</h1>
                </div>
            </header>
        </>
    )
}

export default PageHeader;
