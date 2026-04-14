
import React, {useEffect} from 'react';

function PageHeader({title}) {

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <header>
                    <h1 className="main-title"> {title}</h1>
            </header>
        </>
    )
}

export default PageHeader;
