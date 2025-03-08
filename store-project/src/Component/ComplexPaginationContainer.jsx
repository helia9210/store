import {useLoaderData, useLocation, useNavigate} from "react-router-dom";

const ComplexPaginationContainer = () => {

    const {meta} = useLoaderData();
    const {pageCount, page} = meta.pagination


    const {search, pathname} = useLocation();
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    const addPageButton = ({pageNumber, activeClass}) => {
        return <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`btn btn-xs border-none rounded-none  sm:btn-md ${
                      activeClass ? 'bg-base-300 border-base-300' : ''}`}
            >
                {pageNumber}
            </button>
    }

    const renderPageButtons = () => {
        const pageButtons = [];

        /* first button */
        pageButtons.push(addPageButton({pageNumber:1, activeClass: page === 1}))
        /* last button */
        pageButtons.push(addPageButton({pageNumber: pageCount, activeClass: page === pageCount}))
        return pageButtons
    }

    if (pageCount < 2) {
        return null;
    }

    return (
        <div className='mt-16 flex justify-end'>
            <div className='join'>
                <button className='btn join-item btn-xs sm:btn-md '
                        onClick={() => {
                            let prevPage = page - 1;
                            if (prevPage < 1) prevPage = pageCount;
                            handlePageChange(prevPage);
                        }}>
                    Prev
                </button>
                {renderPageButtons()}
                <button className='btn join-item btn-xs sm:btn-md'
                        onClick={() => {
                            let nextPage = page + 1;
                            if (nextPage > pageCount) nextPage = 1;
                            handlePageChange(nextPage)
                        }}>
                    Next
                </button>
            </div>

        </div>

    )
}

export default ComplexPaginationContainer